import { useState, useEffect } from 'react'
import { supabase } from 'libs/supabaseClient'
import Auth from '@/user/Auth'
import Account from '@/user/Account'
import { Session } from '@supabase/supabase-js'

export default function UserPage() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  if (session && session.user) {
    return (
      <div className="container" style={{ padding: '50px 0 100px 0' }}>
        <Account key={session.user.id} session={session} />
      </div>
    )

  }

  return <div className="container" style={{ padding: '50px 0 100px 0' }}>
    <Auth />
  </div>
}
