import type { Metadata } from "next";
import AuthShell from "@/components/auth/AuthShell";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Login | ByteSpace",
};

export default function LoginPage() {
  return (
    <AuthShell variant="login">
      <LoginForm />
    </AuthShell>
  );
}
