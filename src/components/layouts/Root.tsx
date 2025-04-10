import { Outlet } from 'react-router';
import { Footer, Header } from '@/components/customs';

export function Root() {
  return (
    <>
      <Header />
      <main className='bg-background'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
