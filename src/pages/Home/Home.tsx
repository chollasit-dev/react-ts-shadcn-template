import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

export function Home() {
  return (
    <section className='grid min-h-[calc(100dvh-8rem)] place-content-center-safe'>
      <Button
        className='transition hover:-translate-y-1 hover:scale-105 hover:animate-ping focus-visible:-translate-y-1 focus-visible:scale-105 focus-visible:animate-pulse'
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
  );
}
