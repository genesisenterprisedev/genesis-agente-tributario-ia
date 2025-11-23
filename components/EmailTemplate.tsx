import * as React from 'react';
import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Text,
    Heading,
    Hr,
} from '@react-email/components';

interface EmailTemplateProps {
    conversationTitle: string;
    messages: Array<{
        sender: 'user' | 'bot';
        text: string;
        createdAt: number;
    }>;
    userName?: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
    conversationTitle,
    messages,
    userName,
}) => (
    <Html>
        <Head />
        <Body style={main}>
            <Container style={container}>
                <Heading style={h1}>Histórico da Conversa: {conversationTitle}</Heading>
                {userName && <Text style={userInfo}>Usuário: {userName}</Text>}

                <Hr style={hr} />

                <Section style={messagesSection}>
                    {messages.map((msg, index) => (
                        <Section key={index} style={msg.sender === 'bot' ? botMessage : userMessage}>
                            <Text style={senderLabel}>
                                {msg.sender === 'bot' ? '🤖 Assistente' : '👤 Você'}
                            </Text>
                            <Text style={messageText}>{msg.text}</Text>
                            <Text style={timestamp}>
                                {new Date(msg.createdAt).toLocaleString('pt-BR', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </Text>
                        </Section>
                    ))}
                </Section>

                <Hr style={hr} />

                <Text style={footer}>
                    Enviado via Genesis Agente Tributário IA
                </Text>
            </Container>
        </Body>
    </Html>
);

export default EmailTemplate;

// Styles
const main = {
    backgroundColor: '#f6f9fc',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 0 48px',
    marginBottom: '64px',
};

const h1 = {
    color: '#1a1a1a',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '40px 0',
    padding: '0 40px',
};

const userInfo = {
    color: '#666666',
    fontSize: '14px',
    margin: '0 0 20px',
    padding: '0 40px',
};

const hr = {
    borderColor: '#e6ebf1',
    margin: '20px 0',
};

const messagesSection = {
    padding: '0 40px',
};

const userMessage = {
    backgroundColor: '#eef2ff',
    borderLeft: '4px solid #4f46e5',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
};

const botMessage = {
    backgroundColor: '#f9f9f9',
    borderLeft: '4px solid #666666',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
};

const senderLabel = {
    color: '#1a1a1a',
    fontSize: '14px',
    fontWeight: 'bold',
    margin: '0 0 8px',
};

const messageText = {
    color: '#333333',
    fontSize: '14px',
    lineHeight: '1.6',
    margin: '0 0 8px',
    whiteSpace: 'pre-wrap' as const,
};

const timestamp = {
    color: '#888888',
    fontSize: '12px',
    margin: '0',
};

const footer = {
    color: '#aaaaaa',
    fontSize: '12px',
    textAlign: 'center' as const,
    marginTop: '32px',
    padding: '0 40px',
};
