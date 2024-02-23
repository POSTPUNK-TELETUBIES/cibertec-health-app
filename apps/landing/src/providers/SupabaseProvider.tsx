'use client';

import { PropsWithChildren, createContext, useState } from "react";
import { createClient, SupabaseClient} from '@supabase/supabase-js'

//@ts-expect-error
export const supabaseContext = createContext<SupabaseClient>({})

export const SupabaseProvider = ({children}: PropsWithChildren)=>{
  const [supabaseClient] = useState(()=>createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, 
    process.env.NEXT_PUBLIC_ANON_KEY!
  ))

  return (<supabaseContext.Provider value={supabaseClient}>
    {children}
  </supabaseContext.Provider>)
}
