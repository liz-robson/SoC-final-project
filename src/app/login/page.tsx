import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '../supabase.database.types'
import AuthForm from '../auth-form'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'



export default async function Login() {

  return <AuthForm />
}

  // const supabase = createServerComponentClient<Database>({ cookies })

  // const {
  //   data: { session },
  // } = await supabase.auth.getSession()

