import AuthField from "./AuthField";

export default function RegisterForm() {
  return (
    <section className="absolute left-[741px] top-[120px] h-[var(--size-auth-panel-height)] w-[var(--size-auth-panel-width)] rounded-[24px] bg-white" aria-label="Create an account">
      <div className="absolute left-[63px] top-[61px] flex w-[453px] flex-col items-center gap-[122px]">
        <form className="flex h-[524px] w-[453px] flex-col items-start gap-[40px]" action="" method="post">
          <div className="flex w-[453px] flex-col items-start">
            <p className="font-body text-body-l text-[var(--color-primary-800)]">Create an Account</p>
            <h1 id="register-title" className="w-[453px] font-heading text-heading-m tracking-[-0.01em] text-[var(--color-neutral-950)]">
              Welcome to ByteSpace
            </h1>
          </div>

          <div className="flex h-[349px] w-[453px] flex-col items-end gap-[24px]">
            <AuthField
              label="Full Name"
              type="text"
              name="name"
              id="register-name"
              placeholder="Jamie Davis"
              autoComplete="name"
            />

            <AuthField
              label="Email"
              type="email"
              name="email"
              id="register-email"
              placeholder="designer@example.com"
              autoComplete="email"
            />

            <AuthField
              label="Password"
              type="password"
              name="password"
              id="register-password"
              placeholder="********"
              autoComplete="new-password"
            />

            <button
              className="flex h-[46px] items-center justify-center rounded-[24px] bg-[var(--color-secondary-400)] px-[24px] py-[12px] font-body text-label-l text-[var(--color-neutral-950)]"
              type="submit"
            >
              Continue
            </button>
          </div>
        </form>

        <p className="flex items-start gap-[4px] font-body text-body-m text-[var(--color-neutral-700)]">
          <span>Already have an account?</span>
          <a className="text-[var(--color-primary-800)]" href="#">Login</a>
        </p>
      </div>
    </section>
  );
}
