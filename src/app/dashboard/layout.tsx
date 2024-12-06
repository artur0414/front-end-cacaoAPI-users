// Dashboard layout

"use client";

import SideNav from "@/components/dashboard/sidenav";
import Loader from "@/components/ui/loader";
import ThemeToggle from "@/components/ui/theme";
import useAuth from "@/hooks/auth/useAth";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { loading, data } = useAuth();

  return loading ? (
    <Loader />
  ) : (
    <div className="w-full flex min-h-[100dvh] overflow-hidden bg-slate-200 dark:bg-custom-black ">
      <aside>
        <SideNav isAdmin={data && data?.role === "admin"} />
      </aside>
      <div className="flex grow">{children}</div>
      <ThemeToggle />
    </div>
  );
}
