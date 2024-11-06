import React from 'react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/lib/auth';
import { WelcomeBanner } from '@/components/welcome-banner/WelcomeBanner';
import { TopMenu } from '@/components/top-menu/TopMenu';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <TopMenu
        loggedIn={session?.user !== undefined}
        avatar={session?.user?.image || undefined}
      />
      <WelcomeBanner name={(session?.user?.name || 'there').split(' ')[0]} />
      <main>
        {session ? (
          <>Here are your repos:</>
        ) : (
          <>
            You are not signed in -{' '}
            <a href='/api/auth/signin'>sign in with your Github account</a> to
            see all your repos and start tracking your progress!
          </>
        )}
      </main>
    </div>
  );
}
