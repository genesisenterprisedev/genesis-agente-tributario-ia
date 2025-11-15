// Type definitions for Next.js environment variables
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      /** Loaded from `.env.local` */
      NEXT_PUBLIC_GEMINI_API_KEY?: string
      /** Loaded from `.env.local` */
      NEXT_PUBLIC_OPENROUTER_API_KEY?: string
      /** Loaded from `.env.local` */
      NEXT_PUBLIC_OPENROUTER_MODEL?: string
      /** Loaded from `.env.local` */
      NEXT_PUBLIC_LLM_PROVIDER?: string
      /** Loaded from `.env.local` */
      NEXT_PUBLIC_SUPABASE_URL?: string
      /** Loaded from `.env.local` */
      NEXT_PUBLIC_SUPABASE_ANON_KEY?: string
      /** Loaded from `.env.local` */
      NEXT_PUBLIC_RESEND_API_KEY?: string
      /** Loaded from `.env.local` */
      NEXT_PUBLIC_RESEND_API_URL?: string
    }
  }
}
export {}