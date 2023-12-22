'use client'
import { Auth , SignIn } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from "./supabase.database.types"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'


export default function AuthForm() {
  const supabase = createClientComponentClient<Database>()

  const router = useRouter();

  useEffect(() => {
    localStorage.setItem('isLoggedIn', 'false')
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        localStorage.setItem('isLoggedIn', 'true')
        setTimeout(()=> {router.push('/')}, 500 )
        ;
      }
    });
    return () => subscription.unsubscribe();
  });

  
  

  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      theme="dark"
      providers={[]}
      // redirectTo={"http://localhost:3000/auth/callback"}
    /> 
  )
}
