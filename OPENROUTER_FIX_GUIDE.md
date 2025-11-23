# OpenRouter API Error - Fix Guide

## Problem
The application was experiencing "OpenRouter request failed: 500 - fetch failed" errors when trying to communicate with the OpenRouter API.

## Root Causes Identified

1. **Incorrect Environment Variable**: The API route was using `NEXT_PUBLIC_OPENROUTER_API_KEY`, which exposes the API key to the browser (security risk)
2. **No Timeout Handling**: Fetch requests could hang indefinitely
3. **Insufficient Error Logging**: Not enough detail to debug failures

## Changes Made

### 1. Updated API Route (`app/api/chat/route.ts`)
- ✅ Changed to use `OPENROUTER_API_KEY` (server-side only) instead of `NEXT_PUBLIC_OPENROUTER_API_KEY`
- ✅ Added 30-second timeout using AbortController
- ✅ Enhanced error logging with detailed information
- ✅ Added fallback to support both variable names during migration

### 2. Updated Environment Example (`.env.local.example`)
- ✅ Changed `NEXT_PUBLIC_OPENROUTER_API_KEY` to `OPENROUTER_API_KEY`
- ✅ Added security comment explaining why

## Required Actions

### Step 1: Update Your `.env.local` File

You need to update your `.env.local` file to use the correct environment variable name:

**Change this:**
```bash
NEXT_PUBLIC_OPENROUTER_API_KEY=your_api_key_here
```

**To this:**
```bash
OPENROUTER_API_KEY=your_api_key_here
```

### Step 2: Restart the Development Server

After updating `.env.local`, restart your dev server:

1. Stop the current server (Ctrl+C in the terminal)
2. Run `npm run dev` again

### Step 3: Test the Fix

Try using the chat feature again. You should now see detailed logs in the terminal showing:
- `[API Route] Making request to OpenRouter: ...`
- `[API Route] Using model: ...`
- `[API Route] Successfully received response from OpenRouter`

## Why This Matters

### Security
- `NEXT_PUBLIC_*` variables are bundled into the client-side JavaScript and visible in the browser
- API keys should NEVER be exposed to the client
- Using `OPENROUTER_API_KEY` (without the prefix) keeps it server-side only

### Reliability
- The 30-second timeout prevents requests from hanging forever
- Better error logging helps identify issues quickly
- The code now handles network failures gracefully

## Troubleshooting

If you still see errors after these changes:

1. **Check your API key is valid**: Make sure your OpenRouter API key is correct
2. **Check network connectivity**: Ensure you can reach https://openrouter.ai
3. **Check the logs**: Look for detailed error messages in your terminal
4. **Verify environment variables**: Run `echo $OPENROUTER_API_KEY` in your terminal (should be empty in dev, that's normal - Next.js loads from .env.local)

## Next Steps

After restarting the server, the error should be resolved. If you still experience issues, check the terminal logs for more specific error messages that will help diagnose the problem.
