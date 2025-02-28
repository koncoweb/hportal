import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Health Portal Dashboard",
  description: "Manage your health appointments and records",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check if user is authenticated
  const session = await getAuthSession();
  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold">Health Portal</h1>
          </div>
          <nav className="flex items-center gap-4">
            {/* Add navigation links here */}
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-6">
        {children}
      </main>
      <footer className="border-t py-4 bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Health Portal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}