import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '../supabase.database.types'
import AuthForm from '../auth-form'

export default async function Login() {

  // const supabase = createServerComponentClient<Database>({ cookies })

  // const {
  //   data: { session },
  // } = await supabase.auth.getSession()

  return <AuthForm />
}