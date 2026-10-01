import type { ReactNode } from "react";
import BrandLogo from "@/components/shared/BrandLogo";
import Canvas from "@/components/shared/Canvas";
import GridBackdrop from "@/components/shared/GridBackdrop";
import AuthCollage from "./AuthCollage";
import AuthOrnaments from "./AuthOrnaments";

type AuthShellProps = {
  variant: "login" | "register";
  children: ReactNode;
};

const introductions = {
  login: {
    label: "Sign-in introduction",
    title: "Sign in with ease",
    description: "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
  },
  register: {
    label: "Registration introduction",
    title: "Sign up and come in",
    description: "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
  },
};

export default function AuthShell({ variant, children }: AuthShellProps) {
  const introduction = introductions[variant];

  return (
    <div className="min-h-screen overflow-x-auto bg-[var(--color-primary-800)] font-sans">
      <main
        className="relative h-[var(--size-page-hero-height)] w-full overflow-hidden bg-[var(--color-primary-800)] antialiased [font-synthesis:none]"
        aria-labelledby={`${variant}-title`}
      >
        <GridBackdrop variant="auth" />
        <Canvas>
          <header className="absolute left-0 top-0 h-[120px] w-full overflow-hidden">
            <div className="absolute left-[122px] top-[35px]">
              <BrandLogo variant="auth" />
            </div>
          </header>
          <section className="absolute left-[122px] top-[120px] flex w-[475px] flex-col items-start gap-[16px]" aria-label={introduction.label}>
            <h2 className="font-heading text-heading-xs tracking-[-0.01em] text-[var(--color-neutral-50)]">{introduction.title}</h2>
            <p className="w-[475px] font-body text-body-l text-[var(--color-neutral-50)]">{introduction.description}</p>
          </section>
          <AuthCollage variant={variant} />
          <AuthOrnaments />
          {children}
        </Canvas>
      </main>
    </div>
  );
}
