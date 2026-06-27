import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import NoteProvider from "@/providers/NoteProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neural Notes",
  description: "AI-powered note-taking. Write notes, then ask your AI anything about them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NoteProvider>
            <SidebarProvider>
              <AppSidebar />

              <div className="flex min-h-screen w-full flex-col">
                <Header />

                <main className="flex flex-1 flex-col px-4 pt-6 xl:px-8">
                  {children}
                </main>
              </div>
            </SidebarProvider>

            <Toaster />
          </NoteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
