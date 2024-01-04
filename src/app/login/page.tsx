'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Database } from '../../../lib/supabase';
import BeeWithShadow from '../../../public/assets/bee-with-shadow.png';
import Image from 'next/image';
import ButtonBar from '../../../components/ButtonBar';
import { useAppContext } from '../../../src/app/context';


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const [user, setUser] = useState(null)
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    async function getUser() {
      const { data: user, error } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser();
  }, [supabase.auth])

  const handleSignUp = async () => {
    const res = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    setUser(res.data.user)
    router.refresh()
    setEmail('')
    setPassword('')
  }

  const handleSignIn = async () => {
    const res = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    setUser(res.data.user)
    router.refresh()
    setEmail('')
    setPassword('')
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
    setUser(null)
  }

  console.log({ user})

  // if (loading) {
  //   return <p>Loading ...</p>
  // }

  // if (user) {
  //   return (
  //     <>
  //       <h1>You are already signed in</h1>
  //       <button onClick={handleSignOut}>Sign out</button>
  //     </>
  //   )
  // }


  return (
    <>
      <h1>Welcome Back!</h1>
      <Image
          src={BeeWithShadow}
          id="bee-with-shadow"
          alt="Habitap Bee Mascot"
          width="100"
        />
      <h2 id="profile-username">Sign In</h2>
      <div id="signin-form">
        <p>Email: </p>
        <input name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <p>Password:</p>
        <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
        <div className="btn-container">
          <button className="signInBtn" onClick={handleSignIn}>Sign In</button>
          <button className="registerBtn" onClick={handleSignUp}>Register</button>
          <button className="signInBtn" onClick={handleSignOut}>Sign Out</button>
          </div>
          </div>
          <ButtonBar />
    </>
  )
}