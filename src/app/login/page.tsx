import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '../supabase.database.types'
import AuthForm from '../auth-form'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'



export default async function Login(req, res) {
  const cookieStore = cookies()

  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

  // Handle login logic and obtain the session data
  const { email, password } = req.body
  const { user, session, error } = await supabase.auth.signIn({ email, password })

  // Pass the session data to the client-side homepage
  res.redirect(302, '/?session=' + JSON.stringify(session))
  return <AuthForm />
}

  // const supabase = createServerComponentClient<Database>({ cookies })

  // const {
  //   data: { session },
  // } = await supabase.auth.getSession()

