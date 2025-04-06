import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

export function App() {
  return (
    <main className='content-center'>
      <section className='grid h-full min-h-dvh place-content-center-safe bg-neutral-950'>
        <Button
          className='transition hover:-translate-y-1 hover:scale-105 hover:animate-ping focus-visible:-translate-y-1 focus-visible:scale-105 focus-visible:animate-pulse'
          variant='outline'
          onClick={() =>
            toast('You just clicked!', {
              cancel: {
                label: 'Close',
                onClick: () => {
                  return;
                },
              },
            })
          }
        >
          <AlertCircle /> Click me!
        </Button>
        <Toaster />
      </section>
    </main>
  );
}
