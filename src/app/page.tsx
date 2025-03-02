import Image from "next/image";
import { redirect } from 'next/navigation';
import { getAuthSession } from '@/lib/auth';

export default async function Home() {
  const session = await getAuthSession();
  
  // Redirect to dashboard if authenticated, otherwise show welcome page
  if (session) {
    redirect('/dashboard');
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Health Portal</h1>
      <p className="text-xl mb-8">Your comprehensive healthcare management solution</p>
      
      <div className="flex gap-4">
        <a 
          href="/login" 
          className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Login
        </a>
        <a 
          href="/register" 
          className="px-6 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
        >
          Register
        </a>
      </div>
    </div>
  );
}
