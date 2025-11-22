// Type definitions for Next.js environment variables
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      /** Loaded from `.env.local` */
      NEXT_PUBLIC_SUPABASE_URL?: string
      /** Loaded from `.env.local` */
      NEXT_PUBLIC_SUPABASE_ANON_KEY?: string
      /** Loaded from `.env.local` */
      NEXT_PUBLIC_RESEND_API_KEY?: string
      /** Loaded from `.env.local` */
      NEXT_PUBLIC_RESEND_API_URL?: string
      /** Loaded from `.env.local` */
      NEXT_PUBLIC_OPENROUTER_API_URL?: string
      /** Loaded from `.env.local` */
      NEXT_PUBLIC_LLM_PROVIDER?: string
      /** Loaded from `.env.local` */
      NEXT_PUBLIC_OPENROUTER_API_KEY?: string
      /** Loaded from `.env.local` */
      NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL?: string
      /** Loaded from `.env.local` */
      NEXT_PUBLIC_OPENROUTER_DOCUMENT_MODEL?: string
      /** Loaded from `.env.local` */
      NEXT_PUBLIC_OPENROUTER_CODE_MODEL?: string
      /** Loaded from `.env.local` */
      NEXT_PUBLIC_OPENROUTER_SUGGESTION_MODEL?: string
    }
  }
}
export {}