import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.NEXT_PUBLIC_RESEND_API_KEY
  ? new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt, model } = body;

    // Use server-side only environment variable (without NEXT_PUBLIC_ prefix)
    const apiKey =
      process.env.OPENROUTER_API_KEY ||
      process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;

    if (!apiKey) {
      console.error(
        "[API Route] OPENROUTER_API_KEY not configured in environment"
      );
      return NextResponse.json(
        { error: "API Key not configured" },
        { status: 500 }
      );
    }

    const OPENROUTER_API_BASE =
      process.env.NEXT_PUBLIC_OPENROUTER_API_URL || "https://openrouter.ai";
    const OPENROUTER_API_URL = `${OPENROUTER_API_BASE.replace(/\/$/, "")}/api/v1/chat/completions`;

    console.log(
      "[API Route] Making request to OpenRouter:",
      OPENROUTER_API_URL
    );
    console.log("[API Route] Using model:", model || "openai/gpt-4o-mini");

    // Add timeout to prevent hanging requests
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    try {
      const response = await fetch(OPENROUTER_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "HTTP-Referer":
            request.headers.get("origin") || "http://localhost:3000",
          "X-Title": "Genesis Agente Tributario",
        },
        body: JSON.stringify({
          model: model || "openai/gpt-4o-mini",
          messages: [{ role: "user", content: prompt }],
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const rawErrorText = await response.text();
        console.error(
          "[API Route] OpenRouter API Error:",
          response.status,
          rawErrorText
        );

        // Tenta extrair mensagem do provider
        let providerMessage = rawErrorText;
        try {
          const parsed = JSON.parse(rawErrorText);
          providerMessage =
            parsed?.error?.message || rawErrorText || "Unknown provider error";
        } catch {
          // mantém rawErrorText
        }

        // Envia alerta de infra para qualquer erro do provider em produção
        if (resend && process.env.NODE_ENV === "production") {
          try {
            await resend.emails.send({
              from: "Genesis AI Infra <onboarding@resend.dev>",
              to: ["infra.genesisplatform@gmail.com"],
              subject: `[Genesis IA] OpenRouter error em /api/chat - status ${response.status}`,
              text: [
                `Time: ${new Date().toISOString()}`,
                "Endpoint: /api/chat",
                `Status: ${response.status}`,
                `Model: ${model || "openai/gpt-4o-mini"}`,
                `Provider message: ${providerMessage}`,
              ].join("\n"),
            });
          } catch (emailError) {
            console.error(
              "[API Route] Failed to send LLM error alert email:",
              emailError
            );
          }
        }

        return NextResponse.json(
          {
            error: `OpenRouter error: ${response.status} - ${providerMessage}`,
          },
          { status: response.status }
        );
      }

      const data = await response.json();
      console.log("[API Route] Successfully received response from OpenRouter");
      return NextResponse.json(data);
    } catch (fetchError: any) {
      clearTimeout(timeoutId);

      if (fetchError.name === "AbortError") {
        console.error("[API Route] Request timeout after 30 seconds");
        return NextResponse.json(
          {
            error: "Request timeout - OpenRouter took too long to respond",
          },
          { status: 504 }
        );
      }

      console.error("[API] Fetch error calling OpenRouter:", fetchError);
      throw fetchError;
    }
  } catch (error: any) {
    console.error("[API] Route Error:", error);

    // Determina se é um erro de configuração ou de rede
    let errorMessage = error.message || "Internal Server Error";
    let statusCode = 500;

    if (errorMessage.includes("API Key not configured")) {
      statusCode = 401; // Unauthorized
    } else if (errorMessage.includes("fetch failed")) {
      errorMessage =
        "Falha na conexão com OpenRouter (DNS ou Rede). Verifique sua internet.";
      statusCode = 502; // Bad Gateway
    }

    return NextResponse.json(
      {
        error: errorMessage,
        details: error.cause ? String(error.cause) : undefined,
      },
      { status: statusCode }
    );
  }
}
