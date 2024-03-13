import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/lib/auth';
import { WelcomeBanner } from '@/components/welcome-banner/WelcomeBanner';

export default async function Home() {
  // Get user session token
  const session = await getServerSession(authOptions);
  // session = null || { user: { name, email, image } }

  return (
    <div>
      {session && (
        <div>
          <WelcomeBanner
            name={session.user?.name?.split(' ')[0] || 'there'}
            team='some-team'
          />
          <a href='/api/auth/signout'>Sign out</a>
        </div>
      )}

      {!session && <p>Not signed in</p>}
    </div>
  );
}
