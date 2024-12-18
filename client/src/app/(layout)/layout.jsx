"use client";
import { usePathname } from "next/navigation";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";

export default function Layout({ children }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");
  return (
    <>
      {!isAdminPage && <NavigationBar />}
      <main className="min-h-screen pt-16 md:pt-20">{children}</main>
      {!isAdminPage && <Footer />}
    </>
  );
}
