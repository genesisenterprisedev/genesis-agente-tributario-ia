import { NextResponse } from 'next/server';

export async function GET() {
    const diagnostics = {
        timestamp: new Date().toISOString(),
        environment: {
            hasApiKey: !!process.env.NEXT_PUBLIC_OPENROUTER_API_KEY,
            apiKeyLength: process.env.NEXT_PUBLIC_OPENROUTER_API_KEY?.length || 0,
            apiUrl: process.env.NEXT_PUBLIC_OPENROUTER_API_URL || "https://openrouter.ai",
            defaultModel: process.env.NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL || "openai/gpt-4o-mini",
            documentModel: process.env.NEXT_PUBLIC_OPENROUTER_DOCUMENT_MODEL,
            codeModel: process.env.NEXT_PUBLIC_OPENROUTER_CODE_MODEL,
            suggestionModel: process.env.NEXT_PUBLIC_OPENROUTER_SUGGESTION_MODEL,
        },
        status: "OK"
    };

    // Test if we can reach OpenRouter
    try {
        const apiKey = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;
        if (!apiKey) {
            diagnostics.status = "ERROR: API Key not configured";
            return NextResponse.json(diagnostics, { status: 500 });
        }

        const OPENROUTER_API_BASE = process.env.NEXT_PUBLIC_OPENROUTER_API_URL || "https://openrouter.ai";
        const OPENROUTER_API_URL = `${OPENROUTER_API_BASE.replace(/\/$/, "")}/api/v1/chat/completions`;

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout for diagnostics

        const testResponse = await fetch(OPENROUTER_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
                "HTTP-Referer": "http://localhost:3000",
                "X-Title": "Genesis Agente Tributario - Diagnostics",
            },
            body: JSON.stringify({
                model: "openai/gpt-4o-mini",
                messages: [{ role: "user", content: "test" }],
                max_tokens: 5,
            }),
            signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (testResponse.ok) {
            diagnostics.status = "SUCCESS: OpenRouter API is reachable";
        } else {
            const errorText = await testResponse.text();
            diagnostics.status = `ERROR: OpenRouter returned ${testResponse.status} - ${errorText}`;
        }

    } catch (error: any) {
        if (error.name === 'AbortError') {
            diagnostics.status = "ERROR: Connection timeout";
        } else {
            diagnostics.status = `ERROR: ${error.message}`;
        }
    }

    return NextResponse.json(diagnostics);
}
