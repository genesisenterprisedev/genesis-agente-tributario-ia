# Genesis Agente Tributário IA - Architecture Documentation

## Overview

**Genesis Agente Tributário IA** is a sophisticated Next.js 16 application that provides AI-powered tax consultation services through multiple specialized agents. The system combines modern web technologies with advanced AI capabilities to deliver intelligent tax assistance.

## Technology Stack

### Frontend

- **Next.js 16** with App Router architecture
- **React 19** with TypeScript for type safety
- **Tailwind CSS 4.1.0** for responsive styling
- **Zustand 5.0.8** for lightweight state management

### Backend & Database

- **Supabase** for PostgreSQL database with Row Level Security (RLS)
- Multi-user architecture with proper data isolation
- Real-time authentication and session management

### AI Integration

- **Google Gemini AI** (@google/genai 1.27.0)
- Multiple specialized AI agents with distinct capabilities
- Web search integration for up-to-date information

## System Architecture

### High-Level Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Supabase      │    │  Gemini AI      │
│   (Next.js)     │◄──►│   (Backend)     │◄──►│   (AI Service)  │
│                 │    │                 │    │                 │
│ - React 19      │    │ - PostgreSQL    │    │ - Multiple      │
│ - TypeScript    │    │ - Auth Service  │    │   Models        │
│ - Tailwind CSS  │    │ - RLS Security  │    │ - Web Search    │
│ - Zustand       │    │ - Real-time     │    │ - Embeddings    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Component Architecture

#### Core Application Flow

1. **Authentication Layer** - User login/signup with Supabase Auth
2. **Agent Selection** - Choose between Document, Code, or Suggestion agents
3. **Conversation Management** - Multi-agent chat with history
4. **Document Processing** - Upload and process tax documents
5. **AI Integration** - Generate responses using Gemini AI

#### State Management Architecture

- **Document Store**: File management, processing, and storage
- **Chat Store**: Conversation history, agent switching, authentication
- **Zustand Pattern**: Lightweight, performant state updates

## Database Schema

### Table Structure

#### user_profiles

```sql
CREATE TABLE user_profiles (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id),
  full_name TEXT,
  user_type TEXT, -- Contador, Advogado, Empresário, etc.
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### documents

```sql
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id), -- NULL for public docs
  name TEXT NOT NULL,
  content TEXT NOT NULL,
  is_deletable BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### conversations

```sql
CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  title TEXT NOT NULL,
  agent_type TEXT CHECK (agent_type IN ('document', 'code', 'suggestion')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### messages

```sql
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  conversation_id UUID REFERENCES conversations(id),
  sender TEXT CHECK (sender IN ('user', 'bot')),
  text TEXT NOT NULL,
  sources JSONB,
  feedback TEXT CHECK (feedback IN ('good', 'bad')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Security Architecture

#### Row Level Security (RLS)

- **User Isolation**: Each user sees only their own data
- **Public Documents**: Knowledge base accessible to all users
- **Conversation Privacy**: Messages isolated by user ownership
- **Cascade Operations**: Proper deletion handling

#### Authentication Flow

1. **User Registration**: Email signup with profile creation
2. **Email Verification**: Required for account activation
3. **Session Management**: Persistent sessions with refresh tokens
4. **Password Reset**: Secure email-based reset flow

## AI Agent System

### Agent Types

#### Document Agent (Consultor Fiscal)

- **Purpose**: Brazilian tax regulation specialist
- **Knowledge Base**: Document-based responses with web search
- **Use Case**: Primary agent for tax consultations
- **Prompt**: `"Você é o 'Gênesis', um assistente de IA especialista em tributação brasileira..."`

#### Code Agent (Gerador de Código)

- **Purpose**: Tax-focused code generation
- **Languages**: Python and Delphi specialist
- **Use Case**: Generating tax calculation functions
- **Prompt**: `"Você é um programador especialista sênior, fluente em Python e Delphi..."`

#### Suggestion Agent (Otimizador de Prompt)

- **Purpose**: Query optimization for better AI responses
- **Function**: Alternative question formulations
- **Use Case**: Improving search results and AI interactions
- **Prompt**: `"Você é um especialista em otimização de buscas e prompts..."`

### AI Integration Pattern

#### Model Selection

- **Gemini 2.5 Pro**: High-quality responses (token limit: 32,768)
- **Gemini 2.5 Flash**: Fast responses for simple tasks
- **Automatic Switching**: Based on token usage thresholds

#### Web Search Integration

- **Google Search**: Built-in web search capabilities
- **Source Citation**: Automatic web source attribution
- **Grounding**: Fact-checking with web results

## Performance Optimizations

### Frontend Optimizations

- **Lazy Loading**: AI service initialization on demand
- **Component Splitting**: Code splitting for better loading
- **State Optimization**: Efficient Zustand store updates
- **Responsive Design**: Mobile-first approach

### Backend Optimizations

- **Database Indexing**: Optimized queries for conversations and messages
- **Token Management**: Monitoring and automatic model switching
- **Caching Strategy**: Document processing and embedding caching
- **Connection Pooling**: Efficient database connections

### AI Optimizations

- **Token Thresholds**: 70% usage triggers model switching
- **Context Management**: Limited conversation history for efficiency
- **Batch Processing**: Multiple document processing
- **Error Handling**: Graceful degradation on AI failures

## Security Considerations

### Data Protection

- **Environment Variables**: Secure API key management
- **Input Validation**: Proper sanitization of user inputs
- **SQL Injection Prevention**: Parameterized queries via Supabase
- **XSS Prevention**: Proper React JSX handling

### Authentication Security

- **Session Management**: Secure token handling
- **Password Security**: Strong hashing via Supabase Auth
- **Email Verification**: Required for account activation
- **Rate Limiting**: Implicit via Supabase infrastructure

### Privacy Features

- **User Data Isolation**: Complete separation via RLS
- **Document Privacy**: User-only document access
- **Conversation Privacy**: Message isolation by user
- **Data Minimization**: Only necessary data collection

## Development Patterns

### Error Handling

- **Comprehensive Messages**: User-friendly error displays
- **Database Setup Detection**: Automatic error identification
- **Graceful Degradation**: Fallback behaviors on failures
- **Console Logging**: Detailed debugging information

### Code Organization

- **Component Modularity**: Reusable, focused components
- **Service Separation**: Clean service layer architecture
- **Type Safety**: Comprehensive TypeScript usage
- **State Patterns**: Consistent Zustand store patterns

### Testing Strategy

- **Component Testing**: React component testing
- **Integration Testing**: Service and database testing
- **E2E Testing**: Full user journey testing
- **Performance Testing**: Load and response time testing

## Deployment Architecture

### Environment Configuration

- **Development**: Local development with hot reload
- **Staging**: Pre-production testing environment
- **Production**: Optimized build with security headers

### Build Process

- **Next.js Build**: Optimized production bundle
- **Asset Optimization**: Image and resource optimization
- **Code Splitting**: Automatic bundle splitting
- **Environment Variables**: Secure configuration management

### Monitoring & Logging

- **Error Tracking**: Comprehensive error monitoring
- **Performance Metrics**: Response time and usage tracking
- **User Analytics**: Usage pattern analysis
- **System Health**: Database and AI service monitoring

## Future Architecture Considerations

### Scalability

- **Horizontal Scaling**: Multi-instance deployment
- **Database Scaling**: Read replicas and connection pooling
- **AI Service Scaling**: Multiple model endpoints
- **CDN Integration**: Global content delivery

### Feature Expansion

- **Multi-language Support**: Internationalization architecture
- **Advanced Analytics**: Enhanced reporting capabilities
- **Integration APIs**: Third-party service integrations
- **Mobile Applications**: React Native deployment

### Security Enhancements

- **Advanced Authentication**: 2FA and SSO integration
- **Audit Logging**: Comprehensive activity tracking
- **Data Encryption**: Enhanced encryption at rest
- **Compliance**: Regulatory compliance features
