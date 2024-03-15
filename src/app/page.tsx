import React from 'react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/lib/auth';
import { WelcomeBanner } from '@/components/welcome-banner/WelcomeBanner';
import { TopMenu } from '@/components/top-menu/TopMenu';

export default async function Home() {
  // Get user session token
  const session = await getServerSession(authOptions);
  // session = null || { user: { name, email, image } }

  return (
    <div>
      {!session && <p>Not signed in</p>}
      {session && (
        <div>
          <TopMenu />

          <WelcomeBanner name={session.user?.name?.split(' ')[0]} />
        </div>
      )}
    </div>
  );
}
