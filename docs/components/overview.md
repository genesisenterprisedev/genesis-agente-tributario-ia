# Components Documentation

## Overview

The Genesis Agente Tributário IA application follows a modular component architecture with clear separation of concerns. Components are organized by functionality and follow React best practices with TypeScript.

## Component Structure

```
components/
├── ui/                    # Basic UI components (future)
├── composite/             # Composite components (future)
├── business/              # Business logic components
├── layout/                # Layout components (future)
├── icons/                 # Icon components
├── AgentInfoModal.tsx     # Agent information modal
├── ChatInput.tsx          # Chat input interface
├── ChatMessage.tsx        # Message display component
├── CodeBlock.tsx          # Code syntax highlighting
├── DocumentSidebar.tsx    # Document management sidebar
├── DocumentViewerModal.tsx # Document viewer modal
├── HistorySidebar.tsx     # Conversation history sidebar
├── ThemeToggle.tsx       # Theme switcher
└── TokenUsageDisplay.tsx # AI token usage indicator
```

## Core Application Components

### App.tsx

**Purpose**: Main application router and authentication flow
**Location**: `/App.tsx`

**Responsibilities**:

- Authentication state management
- Route handling between login/signup/chat
- Theme management
- Error boundary implementation

**Key Features**:

- Multi-step authentication flow
- Forgot password functionality
- Responsive design
- Loading states

**Props**: None (root component)

**Usage**:

```typescript
export default App;
```

### ChatApplication

**Purpose**: Main chat interface with multi-agent support
**Location**: Embedded in `App.tsx`

**Responsibilities**:

- Agent switching and management
- Conversation display
- Message handling
- Document integration

**Key Features**:

- Multi-agent support (document, code, suggestion)
- Real-time message updates
- Responsive sidebar management
- Theme integration

**Props**: None (internal component)

**State Management**:

```typescript
const {
  activeAgent,
  documentConversations,
  codeConversations,
  suggestionConversations,
  sendMessage,
  setActiveAgent,
} = useChatStore();
```

## Authentication Components

### LoginPage

**Purpose**: User authentication interface
**Location**: Embedded in `App.tsx`

**Responsibilities**:

- Email/password authentication
- Navigation to signup/forgot password
- Error display and handling

**Key Features**:

- Responsive design with branding
- Password visibility toggle
- Form validation
- Loading states

**Props**:

```typescript
interface LoginPageProps {
  onNavigateToSignup: () => void;
  onNavigateToForgotPassword: () => void;
}
```

**Usage**:

```typescript
<LoginPage
  onNavigateToSignup={() => setPage("signup")}
  onNavigateToForgotPassword={() => setIsForgotPasswordOpen(true)}
/>
```

### SignupPage

**Purpose**: User registration interface
**Location**: Embedded in `App.tsx`

**Responsibilities**:

- User registration with metadata
- User type selection
- Email validation

**Key Features**:

- Multiple user types (Contador, Advogado, etc.)
- Password strength requirements
- Success/error messaging
- Responsive design

**Props**:

```typescript
interface SignupPageProps {
  onNavigateToLogin: () => void;
}
```

### ForgotPasswordModal

**Purpose**: Password reset functionality
**Location**: Embedded in `App.tsx`

**Responsibilities**:

- Email-based password reset
- Success/error messaging
- Modal management

**Key Features**:

- Modal overlay design
- Email validation
- Success state handling
- Accessibility features

**Props**:

```typescript
interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}
```

## Chat Interface Components

### ChatMessage

**Purpose**: Individual message display component
**Location**: `/components/ChatMessage.tsx`

**Responsibilities**:

- Message rendering with markdown support
- Source citation display
- Feedback system
- Timestamp formatting

**Key Features**:

- Markdown rendering
- Web source display
- Feedback buttons (good/bad)
- Responsive design

**Props**:

```typescript
interface ChatMessageProps {
  message: Message;
  onFeedback: (feedback: "good" | "bad") => void;
}
```

**Usage**:

```typescript
<ChatMessage
  key={msg.id}
  message={msg}
  onFeedback={(feedback) => handleFeedback(msg.id, feedback)}
/>
```

### ChatInput

**Purpose**: Message input and file upload interface
**Location**: `/components/ChatInput.tsx`

**Responsibilities**:

- Message composition
- File upload handling
- Agent-specific suggestions
- Input validation

**Key Features**:

- Auto-resize textarea
- File upload for document agent
- Character/word counting
- Keyboard shortcuts

**Props**:

```typescript
interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  onUploadClick: () => void;
  activeAgent: AgentType;
}
```

**State Management**:

```typescript
const [message, setMessage] = useState("");
const [isComposing, setIsComposing] = useState(false);
```

### CodeBlock

**Purpose**: Syntax-highlighted code display
**Location**: `/components/CodeBlock.tsx`

**Responsibilities**:

- Code syntax highlighting
- Copy functionality
- Language detection
- Responsive formatting

**Key Features**:

- Multiple language support
- Copy to clipboard
- Line numbers
- Responsive design

**Props**:

```typescript
interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}
```

## Sidebar Components

### HistorySidebar

**Purpose**: Conversation history management
**Location**: `/components/HistorySidebar.tsx`

**Responsibilities**:

- Conversation list display
- Conversation switching
- New conversation creation
- Conversation deletion

**Key Features**:

- Agent-specific conversation grouping
- Search functionality
- Swipe gestures (mobile)
- Responsive design

**Props**:

```typescript
interface HistorySidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
```

**State Management**:

```typescript
const {
  documentConversations,
  codeConversations,
  suggestionConversations,
  activeDocumentConversationId,
  activeCodeConversationId,
  activeSuggestionConversationId,
  deleteConversation,
  setActiveConversation,
} = useChatStore();
```

### DocumentSidebar

**Purpose**: Document management interface
**Location**: `/components/DocumentSidebar.tsx`

**Responsibilities**:

- Document list display
- File upload handling
- Document deletion/renaming
- Document preview

**Key Features**:

- Drag-and-drop upload
- Document search
- File type indicators
- Storage usage display

**Props**:

```typescript
interface DocumentSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
```

**State Management**:

```typescript
const {
  documents,
  isLoading,
  error,
  addDocument,
  deleteDocument,
  renameDocument,
} = useDocumentStore();
```

## Modal Components

### AgentInfoModal

**Purpose**: Agent information and capabilities display
**Location**: `/components/AgentInfoModal.tsx`

**Responsibilities**:

- Agent description display
- Capabilities and limitations
- Usage statistics
- Help and support information

**Key Features**:

- Agent-specific content
- Responsive design
- Accessibility features
- Theme integration

**Props**:

```typescript
interface AgentInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  agentType: AgentType;
}
```

**Agent Types**:

```typescript
type AgentType = "document" | "code" | "suggestion";

// Document Agent: Brazilian tax specialist
// Code Agent: Tax-focused programmer
// Suggestion Agent: Query optimizer
```

### DocumentViewerModal

**Purpose**: Document content preview
**Location**: `/components/DocumentViewerModal.tsx`

**Responsibilities**:

- Document content display
- Full-screen viewing
- Navigation controls
- Download functionality

**Key Features**:

- Full-screen modal
- Scrollable content
- Close controls
- Responsive design

**Props**:

```typescript
interface DocumentViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  document: Document;
}
```

## Utility Components

### ThemeToggle

**Purpose**: Application theme switching
**Location**: `/components/ThemeToggle.tsx`

**Responsibilities**:

- Light/dark theme toggle
- Theme persistence
- System preference detection
- Smooth transitions

**Key Features**:

- Icon-based toggle
- System preference detection
- Local storage persistence
- CSS variable updates

**Props**:

```typescript
interface ThemeToggleProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
```

**Implementation**:

```typescript
const toggleTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);

  // Update DOM
  if (newTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Persist preference
  localStorage.setItem("theme", newTheme);
};
```

### TokenUsageDisplay

**Purpose**: AI token usage monitoring
**Location**: `/components/TokenUsageDisplay.tsx`

**Responsibilities**:

- Token usage display
- Model switching indication
- Usage warnings
- Performance metrics

**Key Features**:

- Real-time usage tracking
- Visual indicators
- Model switching alerts
- Responsive display

**Props**: None (uses store directly)

**State Management**:

```typescript
const { proTokenCount, proTokenLimit, activeModel } = useChatStore();
```

## Icon Components

### Icon Structure

**Location**: `/components/icons/`

**Available Icons**:

- `BotIcon.tsx` - Main application bot icon
- `CheckIcon.tsx` - Success/checkmark icon
- `ClipboardIcon.tsx` - Copy to clipboard icon
- `CloseIcon.tsx` - Close/dismiss icon
- `DocumentIcon.tsx` - Document/file icon
- `EyeIcon.tsx` - Show/reveal icon
- `EyeSlashIcon.tsx` - Hide/conceal icon
- `InfoIcon.tsx` - Information icon
- `KeyIcon.tsx` - Password/key icon
- `MenuIcon.tsx` - Menu/hamburger icon

**Icon Pattern**:

```typescript
interface IconProps {
  className?: string;
  width?: number;
  height?: number;
}

const ExampleIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
  width = 24,
  height = 24,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* SVG paths */}
  </svg>
);
```

## Component Patterns

### State Management Pattern

Components use Zustand stores for state management:

```typescript
// Chat Store Usage
const { activeAgent, sendMessage, isLoading } = useChatStore();

// Document Store Usage
const { documents, addDocument, deleteDocument } = useDocumentStore();
```

### Responsive Design Pattern

All components follow mobile-first responsive design:

```typescript
// Mobile-first approach
<div className="w-full md:w-1/2 p-4 sm:p-8">
  {/* Content */}
</div>

// Responsive utilities
<div className="hidden md:flex lg:hidden">
  {/* Tablet-specific content */}
</div>
```

### Theme Integration Pattern

Components support light/dark themes:

```typescript
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
  {/* Themed content */}
</div>
```

### Accessibility Pattern

Components include accessibility features:

```typescript
<button
  onClick={handleClick}
  className="p-2 rounded-full"
  aria-label="Toggle theme"
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();
    }
  }}
>
  {/* Button content */}
</button>
```

## Error Handling

### Error Boundaries

Components include error handling:

```typescript
try {
  await operation();
} catch (error) {
  const errorMessage = getErrorMessage(error);
  setError(errorMessage);
  console.error("Operation failed:", error);
}
```

### Loading States

Components show loading states:

```typescript
if (isLoading) {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin">
        <BotIcon className="w-6 h-6" />
      </div>
      <span className="ml-2">Loading...</span>
    </div>
  );
}
```

### Empty States

Components handle empty states:

```typescript
if (items.length === 0) {
  return (
    <div className="text-center py-8">
      <p className="text-gray-500">No items found</p>
    </div>
  );
}
```

## Performance Considerations

### Component Optimization

- **React.memo**: Prevent unnecessary re-renders
- **useCallback**: Memoize event handlers
- **useMemo**: Memoize expensive calculations
- **Code splitting**: Lazy load components

### State Optimization

- **Selective subscriptions**: Only subscribe to needed store values
- **Debounced updates**: Prevent excessive state updates
- **Efficient comparisons**: Use proper dependency arrays

### Rendering Optimization

- **Virtualization**: For large lists (future enhancement)
- **Image optimization**: Lazy load images
- **CSS optimization**: Use CSS transforms for animations

## Testing Strategy

### Component Testing

- **Unit Tests**: Individual component testing
- **Integration Tests**: Component interaction testing
- **Accessibility Tests**: ARIA and keyboard navigation
- **Visual Tests**: Screenshot-based testing

### Testing Tools

- **Jest**: Unit testing framework
- **React Testing Library**: Component testing utilities
- **Storybook**: Component development and documentation
- **Playwright**: End-to-end testing

## Future Enhancements

### Component Library

- **Design System**: Standardized component library
- **Component Variants**: Multiple component variations
- **Theme System**: Advanced theming capabilities
- **Animation Library**: Consistent animations

### Advanced Features

- **Virtualization**: Large list handling
- **Internationalization**: Multi-language support
- **Offline Support**: Service worker integration
- **Progressive Web App**: PWA capabilities
