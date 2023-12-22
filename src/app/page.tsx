import HomeClientSide from './homeClientSide'
import React from "react";
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import Home from "../../components/homepage/index";
// import NewRoutineForm from "../../components/NewRoutineForm";
// import ActiveList from "../../components/ActiveList";
// import { useState, useEffect } from "react";
// import MainBtn from "../../components/MainBtn";
// import supabase from "../../supabase/initSupabase";
// import { useRouter } from "next/navigation";
// import EndingPopup from "../../components/EndingPopup";

// import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
// import { type NextRequest, NextResponse } from 'next/server'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from './supabase.database.types'





export default function Parent(){

  // async function GET() {
  //   const cookieStore = cookies()
  //   const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  
  //   // Check if we have a session
  //   const {
  //     data: { session },
  //   } = await supabase.auth.getSession()
  
  //   if (session) {
  //     console.log(session)
  //   }
  //   return session
  // }
async function GET(){
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()
  

return session
}

  const session : any = GET()




  return (
    <>
  <HomeClientSide session={session} />
  </>
  )
}