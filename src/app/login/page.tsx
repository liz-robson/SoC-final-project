import AuthForm from '../auth-form'



export default async function Login() {
  
  return <AuthForm />
}

















import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '../supabase.database.types'



  // const supabase = createServerComponentClient<Database>({ cookies })

  // const {
  //   data: { session },
  // } = await supabase.auth.getSession()

