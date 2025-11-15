// FIX: Replaced circular import with an exported AgentType definition to resolve import errors.
export type AgentType = 'document' | 'code' | 'suggestion';

export interface WebSource {
  uri: string;
  title: string;
}

export interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  sources?: WebSource[];
  feedback?: 'good' | 'bad' | null;
  createdAt: number;
}

export interface DocumentChunk {
  text: string;
  embedding: number[];
}

export interface Document {
  id: string;
  name: string;
  chunks: DocumentChunk[];
  isDeletable?: boolean;
  content?: string; // Content is stored in DB
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt: number;
  updatedAt: number;
}