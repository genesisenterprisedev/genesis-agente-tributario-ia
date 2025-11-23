import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.NEXT_PUBLIC_RESEND_API_KEY
  ? new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)
  : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { text, texts } = body as { text?: string; texts?: string[] };

    let inputs: string[] = [];

    if (Array.isArray(texts) && texts.length > 0) {
      inputs = texts.filter(
        (t) => typeof t === "string" && t.trim().length > 0
      );
    } else if (typeof text === "string" && text.trim().length > 0) {
      inputs = [text];
    }

    if (inputs.length === 0) {
      return NextResponse.json(
        { error: "Text or texts are required" },
        { status: 400 }
      );
    }

    // Usar OpenRouter para gerar embeddings (mais consistente com a configuração atual)
    const openrouterKey = process.env.OPENROUTER_API_KEY;

    if (!openrouterKey) {
      return NextResponse.json(
        { error: "OpenRouter API key not configured" },
        { status: 500 }
      );
    }

    const response = await fetch("https://openrouter.ai/api/v1/embeddings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openrouterKey}`,
        "HTTP-Referer": "https://genesis-agente-tributario-ia.vercel.app",
        "X-Title": "Genesis Agente Tributário IA",
      },
      body: JSON.stringify({
        model: "text-embedding-ada-002",
        input: inputs,
      }),
    });

    if (!response.ok) {
      const error = (await response.json().catch(() => ({}))) as any;

      // Envia alerta de infra para qualquer erro do provider em produção
      if (resend && process.env.NODE_ENV === "production") {
        try {
          await resend.emails.send({
            from: "Genesis AI Infra <onboarding@resend.dev>",
            to: ["infra.genesisplatform@gmail.com"],
            subject: `[Genesis IA] OpenRouter error em /api/embed - status ${response.status}`,
            text: [
              `Time: ${new Date().toISOString()}`,
              "Endpoint: /api/embed",
              `Status: ${response.status}`,
              `Provider message: ${
                error?.error?.message || "Unknown provider error"
              }`,
            ].join("\n"),
          });
        } catch (emailError) {
          console.error("Failed to send LLM error alert email:", emailError);
        }
      }

      if (response.status !== 402) {
        // Para erros diferentes de 402, ainda logamos no console para debug
        console.error("OpenAI API error:", error);
      }

      return NextResponse.json(
        { error: "Failed to generate embedding" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const embeddings = Array.isArray(data?.data)
      ? data.data.map((item: any) => item.embedding)
      : [];

    if (!embeddings.length) {
      return NextResponse.json(
        { error: "No embeddings returned from provider" },
        { status: 500 }
      );
    }

    // Compat: se a chamada antiga enviar apenas { text }, ainda devolvemos `embedding`
    const result: any = { embeddings };
    if (!texts && inputs.length === 1 && embeddings[0]) {
      result.embedding = embeddings[0];
    }

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Embedding generation error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
