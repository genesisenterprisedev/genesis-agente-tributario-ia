<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Genesis Agente Tributário IA

A sophisticated Next.js 16 application that provides AI-powered tax consultation services through multiple specialized agents. Built with React 19, TypeScript, and Supabase for a complete multi-user experience.

## 🚀 Features

### Multi-Agent System

- **📄 Document Agent (Consultor Fiscal)**: Specialized in Brazilian tax regulations with document-based responses
- **💻 Code Agent (Gerador de Código)**: Generates tax-focused code in Python and Delphi
- **🔍 Suggestion Agent (Otimizador de Prompt)**: Optimizes queries for better AI responses

### Core Capabilities

- **📚 Document Management**: Upload, process, and analyze tax documents
- **💬 Multi-Agent Chat**: Switch between specialized AI agents
- **🔐 Secure Authentication**: Multi-user system with Row Level Security
- **🌙 Dark/Light Theme**: Responsive design with theme switching
- **📱 Mobile Responsive**: Optimized for all device sizes
- **🔍 Web Search**: Integrated web search for up-to-date information

## 🛠 Technology Stack

### Frontend

- **Next.js 16** with App Router
- **React 19** with TypeScript
- **Tailwind CSS 4.1.0** for styling
- **Zustand 5.0.8** for state management

### Backend & Database

- **Supabase** for PostgreSQL database
- **Row Level Security (RLS)** for multi-user data isolation
- **Real-time authentication** and session management

### AI Integration

- **Google Gemini AI** (@google/genai 1.27.0)
- **Multiple specialized agents** with distinct capabilities
- **Web search integration** for current information

## 📋 Prerequisites

- **Node.js** 18.x or higher (recommended 20.x)
- **npm** 9.x or higher
- **Supabase** project (free tier available)
- **Google Gemini AI** API key

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <repository-url>
cd genesis-agente-tributario-ia
npm install
```

### 2. Environment Configuration

```bash
# Copy environment template
cp .env.local.example .env.local

# Edit with your configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# OpenRouter Configuration (Recommended)
OPENROUTER_API_KEY=your_openrouter_api_key_here
NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL=openai/gpt-4o-mini

# Optional: Configure different LLMs for each agent type
NEXT_PUBLIC_OPENROUTER_DOCUMENT_MODEL=openai/gpt-4o
NEXT_PUBLIC_OPENROUTER_CODE_MODEL=anthropic/claude-3-5-sonnet
NEXT_PUBLIC_OPENROUTER_SUGGESTION_MODEL=openai/gpt-4o-mini
```

> 💡 **Tip**: Each agent type can use a different LLM optimized for its specific task. See [LLM Configuration Guide](docs/llm-configuration.md) for detailed setup instructions and model recommendations.


### 3. Get API Keys

**Google Gemini AI**:

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create and copy your API key

**Supabase**:

1. Create a project at [supabase.com](https://supabase.com)
2. Get your Project URL and Anon Key from Settings > API

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📚 Documentation

### Architecture Overview

- **[Architecture Documentation](docs/architecture.md)** - System design and technology choices
- **[API Routes](docs/api/routes.md)** - Complete API reference
- **[Components Overview](docs/components/overview.md)** - Component documentation
- **[LLM Configuration](docs/llm-configuration.md)** - Configure different LLMs for each agent type

### Development Guides

- **[Development Setup](docs/development/setup.md)** - Complete setup guide
- **[Architecture Decisions](docs/decisions/001-architecture-choices.md)** - Technical decision records

## 🤖 LLM Configuration per Agent

Each agent type can use a different Language Model optimized for its specific function:

### Configuration Options

| Agent Type | Environment Variable | Recommended Model | Purpose |
|-----------|---------------------|-------------------|---------|
| **Document** | `NEXT_PUBLIC_OPENROUTER_DOCUMENT_MODEL` | `openai/gpt-4o` | Tax document analysis with long context |
| **Code** | `NEXT_PUBLIC_OPENROUTER_CODE_MODEL` | `anthropic/claude-3-5-sonnet` | Code generation in Python/Delphi |
| **Suggestion** | `NEXT_PUBLIC_OPENROUTER_SUGGESTION_MODEL` | `openai/gpt-4o-mini` | Quick prompt optimization |
| **Default** | `NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL` | `openai/gpt-4o-mini` | Fallback for all agents |

### Example Configurations

**Balanced (Recommended)**:
```bash
NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL=openai/gpt-4o-mini
NEXT_PUBLIC_OPENROUTER_DOCUMENT_MODEL=openai/gpt-4o
NEXT_PUBLIC_OPENROUTER_CODE_MODEL=anthropic/claude-3-5-sonnet
NEXT_PUBLIC_OPENROUTER_SUGGESTION_MODEL=openai/gpt-4o-mini
```

**Budget-Friendly**:
```bash
NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL=openai/gpt-4o-mini
# All agents will use the default model
```

**Premium**:
```bash
NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL=openai/gpt-4o
NEXT_PUBLIC_OPENROUTER_DOCUMENT_MODEL=anthropic/claude-3-opus
NEXT_PUBLIC_OPENROUTER_CODE_MODEL=anthropic/claude-3-5-sonnet
NEXT_PUBLIC_OPENROUTER_SUGGESTION_MODEL=openai/gpt-4o
```

📖 For detailed information, see the [LLM Configuration Guide](docs/llm-configuration.md).

## 🏗 Project Structure

```
genesis-agente-tributario-ia/
├── app/                    # Next.js App Router
├── components/             # React components
│   ├── icons/             # Icon components
│   ├── AgentInfoModal.tsx # Agent information
│   ├── ChatInput.tsx      # Chat interface
│   ├── ChatMessage.tsx    # Message display
│   └── ...                # Other components
├── services/              # External integrations
│   ├── geminiService.ts   # AI integration
│   └── supabaseClient.ts  # Database client
├── docs/                  # Documentation
├── store.ts              # Zustand state management
├── types.ts              # TypeScript definitions
└── utils.ts              # Utility functions
```

## 🔧 Development Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript checking

# Database
# Database setup is automatic on first run
# See docs/development/setup.md for manual setup
```

## 🤖 AI Agents

### Document Agent (Consultor Fiscal)

Specializes in Brazilian tax regulations with:

- Document-based responses
- Web search integration
- Source citation
- Professional tax advice

### Code Agent (Gerador de Código)

Generates tax-focused code with:

- Python and Delphi expertise
- Well-documented functions
- Tax calculation logic
- Best practice patterns

### Suggestion Agent (Otimizador de Prompt)

Optimizes user queries with:

- Alternative question formulations
- Search improvement suggestions
- Query analysis and enhancement

## 🔒 Security Features

- **Row Level Security (RLS)**: Complete data isolation between users
- **Secure Authentication**: Email/password with verification
- **Input Validation**: Comprehensive type checking and sanitization
- **API Key Security**: Environment variable protection
- **HTTPS Enforcement**: Secure communication in production

## 📊 Database Schema

### Core Tables

- **user_profiles**: User metadata and types
- **documents**: File storage with public/private separation
- **conversations**: Multi-agent chat sessions
- **messages**: Individual messages with feedback

### Security Features

- Multi-user data isolation
- Public knowledge base documents
- Cascade deletion handling
- Proper authentication flow

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach
- **Dark/Light Theme**: System preference detection
- **Loading States**: Smooth user experience
- **Error Handling**: User-friendly error messages
- **Accessibility**: ARIA support and keyboard navigation

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Other Platforms

- **Netlify**: Static hosting with serverless functions
- **AWS**: Custom deployment with Docker
- **Railway**: Simple container deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'feat: add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript strict mode
- Use ESLint and Prettier configurations
- Write clear commit messages
- Update documentation for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Common Issues

- **API Key Errors**: Verify environment variables
- **Database Issues**: Check Supabase configuration
- **Build Errors**: Ensure Node.js version compatibility

### Getting Help

- Check the [documentation](docs/)
- Review [development setup guide](docs/development/setup.md)
- Open an issue for bugs or feature requests

## 🗺 Roadmap

### Upcoming Features

- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Integration APIs for third-party services
- [ ] Mobile application (React Native)
- [ ] Advanced document processing
- [ ] Team collaboration features

### Technical Improvements

- [ ] Progressive Web App (PWA) capabilities
- [ ] Advanced caching strategies
- [ ] Performance monitoring
- [ ] Automated testing suite

---

**Built with ❤️ for the Brazilian tax community**
