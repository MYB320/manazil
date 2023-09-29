import { ModeToggle } from '../components/togle-mode'
import { Github } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Session } from '@supabase/supabase-js'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'

export default function header({
  session,
  signInWithGitHub,
  signout,
}: {
  session: Session | null
  signInWithGitHub: () => void
  signout: () => void
}) {
  return (
    <header className='relative flex justify-center p-4'>
      <div className='sticky top-0 w-full flex justify-between items-center p-4 border rounded-lg z-50'>
        <a href='/'>
          <h1 className='text-xl font-bold'>
            Mana<span className='text-primary'>zil</span>
          </h1>
        </a>
        <div className='flex gap-2 items-center'>
          <ModeToggle />
          {session ? (
            <Button
              variant='ghost'
              className='rounded-lg'
              size='icon'
              onClick={signout}
            >
              <Avatar>
                <AvatarImage
                  src={
                    session &&
                    session?.user?.identities[0]?.identity_data?.avatar_url
                  }
                />
                <AvatarFallback>MYB</AvatarFallback>
              </Avatar>
            </Button>
          ) : (
            <Button
              variant='ghost'
              className='rounded-lg'
              size='icon'
              onClick={signInWithGitHub}
            >
              <Github className='h-6 w-6' />
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
