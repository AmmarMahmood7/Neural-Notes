import AuthForm from "@/components/AuthForm";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

function SignUpPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-16">
      <Link href="/" className="mb-8 flex flex-col items-center gap-3">
        <Image
          src="/Neural_logo.png"
          height={56}
          width={56}
          alt="Neural Notes logo"
          className="rounded-full shadow-md"
        />
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight">Neural Notes</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Your AI-powered note-taking companion
          </p>
        </div>
      </Link>

      <Card className="w-full max-w-md shadow-sm">
        <CardHeader className="mb-2">
          <CardTitle className="text-center text-2xl">Create an account</CardTitle>
        </CardHeader>
        <AuthForm type="signUp" />
      </Card>
    </div>
  );
}

export default SignUpPage;
