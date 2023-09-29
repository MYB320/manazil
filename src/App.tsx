import { ThemeProvider } from './providers/theme-provider'
import Header from './modules/header'
import Container from './modules/container'
import Welcome from './modules/welcome'
import Dashboard from './modules/dashboard'
import { useEffect, useState } from 'react'
import { supabase } from './lib/supabaseClient'
import { Session } from '@supabase/supabase-js'
import Discover from './modules/discover'

export default function App() {
  const [session, setSession] = useState<Session | null>(null)
  const [goTo, setGoTO] = useState(false)
  const gotoDiscover = () => setGoTO(!goTo)
  const admin = session?.user?.identities[0]?.identity_data?.preferred_username

  async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
    if (error) alert(error)
    if (data && !error) console.log(data)
  }

  async function signout() {
    const { error } = await supabase.auth.signOut()
    if (error) alert(error)
  }

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

  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <Container>
          <Header
            session={session}
            signout={signout}
            signInWithGitHub={signInWithGitHub}
          />
          <main className='p-4'>
            {!session ? (
              !goTo ? (
                <Welcome onclick={gotoDiscover} />
              ) : (
                <Discover />
              )
            ) : (
              <Dashboard name={admin} />
            )}
          </main>
        </Container>
      </ThemeProvider>
    </>
  )
}
