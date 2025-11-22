# API Routes Documentation

## Overview

The Genesis Agente Tributário IA uses **Supabase as the backend API layer** with Row Level Security (RLS) for multi-user data isolation. All API operations are handled through the Supabase client SDK rather than traditional Next.js API routes.

## Authentication API

### User Registration

**Endpoint**: Supabase Auth `signUp()`

```typescript
// Method: POST
// Path: /auth/v1/signup
// Authentication: None

const { data, error } = await supabase.auth.signUp({
  email: string,
  password: string,
  options: {
    data: {
      full_name: string,
      user_type:
        "Contador" |
        "Advogado" |
        "Empresário" |
        "Desenvolvedor" |
        "Estudante" |
        "Outro",
    },
  },
});
```

**Request Schema**:

```typescript
interface SignUpRequest {
  email: string;
  password: string;
  metadata: {
    full_name: string;
    user_type: string;
  };
}
```

**Response Schema**:

```typescript
interface SignUpResponse {
  data: {
    user: User | null;
    session: Session | null;
  };
  error: AuthError | null;
}
```

### User Login

**Endpoint**: Supabase Auth `signInWithPassword()`

```typescript
// Method: POST
// Path: /auth/v1/token?grant_type=password
// Authentication: None

const { error } = await supabase.auth.signInWithPassword({
  email: string,
  password: string,
});
```

**Request Schema**:

```typescript
interface LoginRequest {
  email: string;
  password: string;
}
```

### Password Reset

**Endpoint**: Supabase Auth `resetPasswordForEmail()`

```typescript
// Method: POST
// Path: /auth/v1/recover
// Authentication: None

const { error } = await supabase.auth.resetPasswordForEmail(
  email: string,
  {
    redirectTo?: string
  }
);
```

### User Logout

**Endpoint**: Supabase Auth `signOut()`

```typescript
// Method: POST
// Path: /auth/v1/logout
// Authentication: Required (Bearer token)

const { error } = await supabase.auth.signOut();
```

## Database API

### Documents API

#### Get All Documents

**Endpoint**: Supabase Database Query

```typescript
// Method: GET
// Path: /rest/v1/documents
// Authentication: Required (Bearer token)
// RLS Policy: Users can view their documents + public documents

const { data: documents, error } = await supabase.from("documents").select("*");
```

**Response Schema**:

```typescript
interface Document {
  id: string;
  name: string;
  content: string;
  is_deletable: boolean;
  user_id: string | null; // null for public documents
  created_at: string;
}
```

#### Create Document

**Endpoint**: Supabase Database Insert

```typescript
// Method: POST
// Path: /rest/v1/documents
// Authentication: Required (Bearer token)
// RLS Policy: Users can only create documents for themselves

const { data, error } = await supabase
  .from("documents")
  .insert({
    name: string,
    content: string,
    is_deletable: boolean,
    user_id: string, // Current user ID
  })
  .select()
  .single();
```

**Request Schema**:

```typescript
interface CreateDocumentRequest {
  name: string;
  content: string;
  is_deletable: boolean;
  user_id: string;
}
```

#### Delete Document

**Endpoint**: Supabase Database Delete

```typescript
// Method: DELETE
// Path: /rest/v1/documents?id=eq.{id}
// Authentication: Required (Bearer token)
// RLS Policy: Users can only delete their own deletable documents

const { error } = await supabase
  .from("documents")
  .delete()
  .match({ id: string });
```

#### Update Document Name

**Endpoint**: Supabase Database Update

```typescript
// Method: PATCH
// Path: /rest/v1/documents?id=eq.{id}
// Authentication: Required (Bearer token)
// RLS Policy: Users can only update their own documents

const { error } = await supabase
  .from("documents")
  .update({ name: string })
  .match({ id: string });
```

### Conversations API

#### Get All Conversations

**Endpoint**: Supabase Database Query

```typescript
// Method: GET
// Path: /rest/v1/conversations
// Authentication: Required (Bearer token)
// RLS Policy: Users can view their conversations + orphan conversations

const { data: conversations, error } = await supabase
  .from("conversations")
  .select("*");
```

**Response Schema**:

```typescript
interface Conversation {
  id: string;
  title: string;
  agent_type: "document" | "code" | "suggestion";
  user_id: string | null; // null for orphan conversations
  created_at: string;
  updated_at: string;
}
```

#### Create Conversation

**Endpoint**: Supabase Database Insert

```typescript
// Method: POST
// Path: /rest/v1/conversations
// Authentication: Required (Bearer token)
// RLS Policy: Users can only create conversations for themselves

const { error } = await supabase.from("conversations").insert({
  id: string,
  title: string,
  agent_type: "document" | "code" | "suggestion",
  user_id: string,
  created_at: string,
  updated_at: string,
});
```

**Request Schema**:

```typescript
interface CreateConversationRequest {
  id: string;
  title: string;
  agent_type: "document" | "code" | "suggestion";
  user_id: string;
  created_at: string;
  updated_at: string;
}
```

#### Delete Conversation

**Endpoint**: Supabase Database Delete

```typescript
// Method: DELETE
// Path: /rest/v1/conversations?id=eq.{id}
// Authentication: Required (Bearer token)
// RLS Policy: Users can delete their conversations + orphan conversations

const { error } = await supabase
  .from("conversations")
  .delete()
  .match({ id: string });
```

### Messages API

#### Get Messages by Conversation

**Endpoint**: Supabase Database Query

```typescript
// Method: GET
// Path: /rest/v1/messages?conversation_id=eq.{id}&order=created_at.asc
// Authentication: Required (Bearer token)
// RLS Policy: Users can view messages from their conversations

const { data: messages, error } = await supabase
  .from("messages")
  .select("*")
  .eq("conversation_id", conversationId)
  .order("created_at", { ascending: true });
```

**Response Schema**:

```typescript
interface Message {
  id: string;
  user_id: string;
  conversation_id: string;
  sender: "user" | "bot";
  text: string;
  sources: WebSource[] | null;
  feedback: "good" | "bad" | null;
  created_at: string;
}

interface WebSource {
  uri: string;
  title: string;
}
```

#### Create Message

**Endpoint**: Supabase Database Insert

```typescript
// Method: POST
// Path: /rest/v1/messages
// Authentication: Required (Bearer token)
// RLS Policy: Users can only create messages in their conversations

const { error } = await supabase
  .from('messages')
  .insert({
    id: string,
    user_id: string,
    conversation_id: string,
    sender: 'user' | 'bot',
    text: string,
    sources: WebSource[] | null,
    created_at: string
  });
```

**Request Schema**:

```typescript
interface CreateMessageRequest {
  id: string;
  user_id: string;
  conversation_id: string;
  sender: "user" | "bot";
  text: string;
  sources?: WebSource[];
  created_at: string;
}
```

#### Update Message Feedback

**Endpoint**: Supabase Database Update

```typescript
// Method: PATCH
// Path: /rest/v1/messages?id=eq.{id}
// Authentication: Required (Bearer token)
// RLS Policy: Users can update feedback on their messages

const { error } = await supabase
  .from("messages")
  .update({ feedback: "good" | "bad" | null })
  .match({ id: string });
```

### User Profiles API

#### Get User Profile

**Endpoint**: Supabase Database Query

```typescript
// Method: GET
// Path: /rest/v1/user_profiles?user_id=eq.{id}
// Authentication: Required (Bearer token)
// RLS Policy: Users can only view their own profile

const { data: profile, error } = await supabase
  .from("user_profiles")
  .select("user_id, full_name")
  .eq("user_id", userId)
  .single();
```

**Response Schema**:

```typescript
interface UserProfile {
  user_id: string;
  full_name: string;
  user_type?: string;
  updated_at: string;
}
```

#### Create User Profile

**Endpoint**: Supabase Database Insert

```typescript
// Method: POST
// Path: /rest/v1/user_profiles
// Authentication: Required (Bearer token)
// RLS Policy: Users can only create their own profile

const { error } = await supabase.from("user_profiles").insert({
  user_id: string,
  full_name: string,
  user_type: string,
});
```

## External API Integration

### Google Gemini AI API

#### Generate Content

**Endpoint**: Google AI REST API

```typescript
// Method: POST
// Path: https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent
// Authentication: API Key (NEXT_PUBLIC_GEMINI_API_KEY)
// Rate Limits: Model-specific quotas

const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      tools: useWebSearch ? [{ googleSearch: {} }] : undefined,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 8192,
      },
    }),
  }
);
```

**Request Schema**:

```typescript
interface GenerateContentRequest {
  contents: Array<{
    parts: Array<{ text: string }>;
  }>;
  tools?: Array<{
    googleSearch: {};
  }>;
  generationConfig?: {
    temperature: number;
    maxOutputTokens: number;
  };
}
```

**Response Schema**:

```typescript
interface GenerateContentResponse {
  candidates: Array<{
    content: {
      parts: Array<{ text: string }>;
    };
    groundingMetadata?: {
      groundingChunks: Array<{
        web?: {
          uri: string;
          title: string;
        };
      }>;
    };
  }>;
}
```

## Error Handling

### Authentication Errors

```typescript
interface AuthError {
  name: string;
  message: string;
  status?: number;
}

// Common Auth Errors:
// - "User already registered"
// - "Invalid login credentials"
// - "Email not confirmed"
// - "Database error saving new user" (RLS setup issue)
```

### Database Errors

```typescript
interface DatabaseError {
  code: string;
  message: string;
  details?: string;
  hint?: string;
}

// Common Database Errors:
// - "PGRST116" (No rows returned)
// - "violates row-level security policy" (RLS issue)
// - "relation does not exist" (Table missing)
// - "column does not exist" (Schema issue)
```

### AI Service Errors

```typescript
interface AIServiceError {
  error: {
    code: number;
    message: string;
    status: string;
  };
}

// Common AI Errors:
// - "API_KEY_INVALID"
// - "QUOTA_EXCEEDED"
// - "MODEL_NOT_FOUND"
// - "CONTENT_FILTERED"
```

## Security Considerations

### Authentication Security

- **Bearer Tokens**: JWT tokens for API authentication
- **Session Management**: Automatic token refresh
- **Email Verification**: Required for account activation
- **Password Requirements**: Enforced by Supabase Auth

### Database Security

- **Row Level Security**: Multi-user data isolation
- **User Context**: `auth.uid()` in RLS policies
- **Public Data**: Properly marked with `user_id IS NULL`
- **Cascade Operations**: Safe deletion handling

### API Security

- **Environment Variables**: Secure API key storage
- **Input Validation**: Type checking and sanitization
- **Rate Limiting**: Implicit via Supabase infrastructure
- **HTTPS Only**: Enforced in production

## Performance Considerations

### Database Optimization

- **Indexes**: Optimized for common query patterns
- **Connection Pooling**: Managed by Supabase
- **Query Optimization**: Efficient RLS policies
- **Pagination**: Available for large datasets

### AI Service Optimization

- **Model Selection**: Pro vs Flash based on complexity
- **Token Management**: Monitoring and limits
- **Caching**: Response caching where appropriate
- **Fallback Handling**: Graceful degradation

### Frontend Optimization

- **State Management**: Efficient Zustand updates
- **Component Splitting**: Code splitting
- **Lazy Loading**: On-demand initialization
- **Error Boundaries**: Graceful error handling

## Monitoring & Debugging

### API Monitoring

- **Response Times**: Track API performance
- **Error Rates**: Monitor authentication and database errors
- **Usage Metrics**: Track AI service usage
- **User Activity**: Monitor application usage patterns

### Debugging Tools

- **Browser DevTools**: Network inspection
- **Supabase Dashboard**: Database and auth monitoring
- **Google AI Console**: AI service monitoring
- **Console Logging**: Detailed error information

### Logging Strategy

- **Error Logging**: Comprehensive error capture
- **Performance Logging**: Response time tracking
- **User Actions**: Important user interactions
- **System Events**: Authentication and database events
