import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";
import LogOutButton from "./LogOutButton";
import { getUser } from "@/auth/server";
import { SidebarTrigger } from "./ui/sidebar";

async function Header() {
  const user = await getUser();

  return (
    <header className="sticky top-0 z-50 flex h-14 w-full items-center gap-3 border-b bg-background/80 px-3 backdrop-blur-md sm:px-6">
      <SidebarTrigger />

      <Link className="flex items-center gap-2.5" href="/">
        <Image
          src="/Neural_logo.png"
          height={32}
          width={32}
          alt="Neural Notes logo"
          className="rounded-full"
          priority
        />
        <span className="hidden font-semibold tracking-tight sm:block">
          Neural Notes
        </span>
      </Link>

      <div className="ml-auto flex items-center gap-2">
        {user ? (
          <LogOutButton />
        ) : (
          <>
            <Button asChild size="sm">
              <Link href="/sign-up" className="hidden sm:block">
                Sign Up
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default Header;
