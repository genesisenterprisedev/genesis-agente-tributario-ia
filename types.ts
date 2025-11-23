// FIX: Replaced circular import with an exported AgentType definition to resolve import errors.
export type AgentType = "document" | "code" | "suggestion";

export interface WebSource {
  uri: string;
  title: string;
}

export interface MessageAttachment {
  id: string;
  name: string;
  sizeBytes?: number;
}

export interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  sources?: WebSource[];
  feedback?: "good" | "bad" | null;
  createdAt: number;
  attachments?: MessageAttachment[];
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
  sizeBytes?: number;
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt: number;
  updatedAt: number;
}

export interface Contact {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
  created_at?: string;
}
