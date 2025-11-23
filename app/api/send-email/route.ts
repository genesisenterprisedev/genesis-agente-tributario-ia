import { NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import * as React from "react";
import { EmailTemplate } from "../../../components/EmailTemplate";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, conversationTitle, messages, userName } = await req.json();

    // Validation
    if (!email || !messages) {
      return NextResponse.json(
        { error: { message: "Email e mensagens são obrigatórios" } },
        { status: 400 }
      );
    }

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        {
          error: { message: "A conversa deve conter pelo menos uma mensagem" },
        },
        { status: 400 }
      );
    }

    // Check Resend API key
    if (!process.env.NEXT_PUBLIC_RESEND_API_KEY) {
      console.error("NEXT_PUBLIC_RESEND_API_KEY not configured");
      return NextResponse.json(
        {
          error: {
            message:
              "Serviço de email não configurado. Configure NEXT_PUBLIC_RESEND_API_KEY no .env.local",
          },
        },
        { status: 500 }
      );
    }

    // Render email template to HTML usando React.createElement para
    // garantir um ReactElement síncrono compatível com @react-email/render.
    const emailElement = React.createElement(EmailTemplate, {
      conversationTitle: conversationTitle || "Conversa",
      messages,
      userName,
    });

    const emailHtml = await render(emailElement);

    const { data, error } = await resend.emails.send({
      from: "Genesis AI <onboarding@resend.dev>",
      to: [email],
      subject: `Histórico de Conversa: ${conversationTitle || "Sem título"}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        {
          error: {
            message: error.message || "Erro ao enviar email via Resend",
          },
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Server error in send-email:", error);
    return NextResponse.json(
      { error: { message: error.message || "Erro interno do servidor" } },
      { status: 500 }
    );
  }
}
