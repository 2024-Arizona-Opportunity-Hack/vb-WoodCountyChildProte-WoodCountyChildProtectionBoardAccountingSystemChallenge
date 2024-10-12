import './index.css'
import { useState, useEffect } from 'react'
import { createClient, Session } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

function App() {
  const supabaseUrl = "https://zyfeuwmhjyybilebrnnl.supabase.co";
  const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5ZmV1d21oanl5YmlsZWJybm5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3NjA4NTAsImV4cCI6MjA0NDMzNjg1MH0.3u-Tr1P__QeVdgj2t7lDpw3Z8nUzh-P_tkdqkMcCQIw";
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (
      <div>
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={[]} />
      </div>
    )
  }
  else {
    return (<div>Logged in!</div>)
  }
}

export default App;
