import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  console.log('okok')
  console.log(code)

  if (code) {
    const supabase = createRouteHandlerClient({ cookies })
    const token = await supabase.auth.exchangeCodeForSession(code)
    console.log('wtf wtf')
    console.log(token)
  }

  return NextResponse.redirect(`${requestUrl.origin}/onboarding`)
}
