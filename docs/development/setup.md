# Development Setup Guide

## Overview

This guide covers setting up the Genesis Agente Tributário IA development environment, including all prerequisites, installation steps, and configuration requirements.

## Prerequisites

### Required Software

- **Node.js**: Version 18.x or higher (recommended 20.x)
- **npm**: Version 9.x or higher (comes with Node.js)
- **Git**: For version control
- **VS Code**: Recommended IDE with extensions

### VS Code Extensions (Recommended)

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next",
    "ms-vscode.vscode-json",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

### External Services Required

- **Supabase Project**: Database and authentication service
- **Google AI Studio**: Gemini API key generation
- **Git Repository**: For version control (GitHub, GitLab, etc.)

## Project Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd genesis-agente-tributario-ia
```

### 2. Install Dependencies

```bash
npm install
```

This installs:

- Next.js 16 with React 19
- TypeScript and type definitions
- Tailwind CSS 4.1.0
- Zustand for state management
- Google Gemini AI SDK
- Supabase client library

### 3. Environment Configuration

Create environment variables file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your configuration:

```env
# Google Gemini AI API Key

# Supabase Configuration (optional - defaults to project settings)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

#### Getting API Keys

**Google Gemini AI API Key**:

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated key
5. Add it to your `.env.local` file

**Supabase Configuration**:

1. Visit [Supabase Dashboard](https://supabase.com/dashboard)
2. Create a new project or select existing
3. Go to Settings > API
4. Copy the Project URL and Anon Key
5. Add them to your `.env.local` file

### 4. Database Setup

#### Automatic Setup (Recommended)

The application includes automatic database setup. When you first run the app, it will:

1. Check if required tables exist
2. Create missing tables with proper RLS policies
3. Seed initial knowledge base documents
4. Set up user profiles and authentication

#### Manual Setup (Advanced)

If you prefer manual setup, run the SQL script in `store.ts`:

1. Go to your Supabase project
2. Navigate to SQL Editor
3. Create a new query
4. Copy and paste the `SETUP_SQL_SCRIPT` from `store.ts`
5. Click "Run" to execute

### 5. Start Development Server

```bash
npm run dev
```

The application will start at `http://localhost:3000`

## Development Workflow

### Daily Development

```bash
# Start development server
npm run dev

# Run linting (in another terminal)
npm run lint

# Build for production (to test)
npm run build
```

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "feat: add your feature description"

# Push and create PR
git push origin feature/your-feature-name
```

### Testing

```bash
# Run type checking
npx tsc --noEmit

# Run linting
npm run lint

# Build test
npm run build
```

## Project Structure

### Understanding the File Structure

```
genesis-agente-tributario-ia/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page (renders App.tsx)
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── icons/             # Icon components
│   ├── AgentInfoModal.tsx # Agent information modal
│   ├── ChatInput.tsx      # Chat input interface
│   ├── ChatMessage.tsx    # Message display component
│   ├── CodeBlock.tsx      # Code syntax highlighting
│   ├── DocumentSidebar.tsx # Document management
│   ├── DocumentViewerModal.tsx # Document viewer
│   ├── HistorySidebar.tsx # Conversation history
│   ├── ThemeToggle.tsx    # Theme switcher
│   └── TokenUsageDisplay.tsx # Token usage indicator
├── services/              # External service integrations
│   ├── geminiService.ts   # Google Gemini AI integration
│   └── supabaseClient.ts  # Supabase client configuration
├── docs/                  # Documentation
│   ├── architecture.md    # System architecture
│   ├── api/              # API documentation
│   ├── components/       # Component documentation
│   ├── decisions/         # Architecture decisions
│   └── development/      # Development guides
├── .windsurf/            # IDE configuration
│   ├── rules/            # Development rules
│   └── workflows/        # Development workflows
├── .env.local.example    # Environment variables template
├── .gitignore           # Git ignore rules
├── App.tsx              # Main application component
├── api.ts               # API utilities (legacy)
├── initialKnowledge.ts  # Initial knowledge base
├── metadata.json        # Project metadata
├── next.config.mjs      # Next.js configuration
├── package.json        # Dependencies and scripts
├── store.ts            # Zustand state management
├── suggestions.ts      # Agent suggestion prompts
├── taxReformKnowledge.ts # Tax reform knowledge base
├── types.ts            # TypeScript type definitions
├── tsconfig.json       # TypeScript configuration
└── utils.ts            # Utility functions
```

### Key Files Explained

#### `App.tsx`

Main application component containing:

- Authentication flow (login, signup, forgot password)
- Chat application interface
- Agent switching logic
- Theme management

#### `store.ts`

Zustand state management containing:

- Document store (file management)
- Chat store (conversations, authentication)
- Database schema and setup scripts
- Error handling patterns

#### `services/geminiService.ts`

AI integration layer containing:

- Gemini API client initialization
- Agent prompt definitions
- Response generation functions
- Web search integration

#### `types.ts`

TypeScript definitions for:

- Agent types
- Message interfaces
- Document structures
- Conversation types

## Development Best Practices

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Follow recommended rules
- **Prettier**: Consistent formatting
- **Tailwind**: Utility-first CSS approach

### Component Patterns

```typescript
// Use functional components with hooks
const Component: React.FC<Props> = ({ prop1, prop2 }) => {
  const [state, setState] = useState(initialState);
  const { data } = useStore();

  return <div>{/* JSX */}</div>;
};

// Use proper TypeScript interfaces
interface Props {
  prop1: string;
  prop2: number;
  optionalProp?: boolean;
}
```

### State Management Patterns

```typescript
// Use Zustand stores for global state
const { data, setData } = useStore();

// Use local state for component-specific data
const [localState, setLocalState] = useState(initialValue);
```

### Error Handling Patterns

```typescript
try {
  await operation();
} catch (error) {
  const errorMessage = getErrorMessage(error);
  setError(errorMessage);
  console.error("Operation failed:", error);
}
```

### Environment Variables

```typescript
// Always use NEXT_PUBLIC_ prefix for client-side variables

// Validate environment variables
if (!apiKey) {
  throw new Error("Missing required environment variable");
}
```

## Common Development Tasks

### Adding a New Component

1. Create component file in `components/`
2. Export as default with proper typing
3. Add to story or documentation
4. Test with different screen sizes

### Adding a New Agent Type

1. Update `AgentType` in `types.ts`
2. Add agent prompt in `geminiService.ts`
3. Update agent switching logic in `App.tsx`
4. Add suggestions in `suggestions.ts`

### Database Schema Changes

1. Update SQL schema in `store.ts`
2. Update TypeScript interfaces
3. Test with fresh database
4. Update migration scripts

### Adding New API Integration

1. Create service file in `services/`
2. Add environment variables
3. Update error handling
4. Add TypeScript types

## Troubleshooting

### Common Issues


**Solution**:

1. Check `.env.local` exists
2. Verify API key is correct
3. Restart development server

#### Supabase Connection Issues

**Solution**:

1. Verify Supabase URL and anon key
2. Check RLS policies
3. Run database setup script

#### TypeScript Errors

**Solution**:

1. Run `npm run build` to see all errors
2. Check `tsconfig.json` configuration
3. Update type definitions

#### Styling Issues

**Solution**:

1. Verify Tailwind CSS configuration
2. Check `tailwind.config.js` or `postcss.config.mjs`
3. Restart development server

### Debugging Tips

#### Console Debugging

```typescript
// Add debug logs
console.log("Debug info:", { variable1, variable2 });

// Use error boundaries
console.error("Error details:", error);
```

#### Network Debugging

- Use browser DevTools Network tab
- Check API response status codes
- Verify request payloads

#### State Debugging

- Use React DevTools
- Check Zustand store state
- Verify store subscriptions

## Performance Optimization

### Development Performance

- Use `npm run dev` for hot reload
- Enable TypeScript strict mode
- Use ESLint for code quality
- Profile with React DevTools

### Build Performance

- Analyze bundle size with `npm run build`
- Use code splitting for large components
- Optimize images and assets
- Enable production optimizations

### Runtime Performance

- Monitor AI token usage
- Optimize database queries
- Use proper React patterns
- Implement loading states

## Deployment

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Environment Setup

1. Set production environment variables
2. Configure Supabase production project
3. Set up domain and SSL
4. Configure monitoring

### Deployment Platforms

- **Vercel**: Recommended for Next.js
- **Netlify**: Alternative static hosting
- **AWS**: Custom deployment option
- **Docker**: Container-based deployment

## Contributing Guidelines

### Code Review Process

1. Create feature branch from main
2. Implement changes with tests
3. Update documentation
4. Submit pull request
5. Address review feedback

### Documentation Updates

- Update relevant documentation files
- Add examples for new features
- Update API documentation
- Maintain changelog

### Testing Requirements

- Test all new functionality
- Verify responsive design
- Check accessibility
- Validate performance

This setup guide provides everything needed to start developing the Genesis Agente Tributário IA application effectively.
