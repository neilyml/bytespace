import AuthField from "./AuthField";

export default function LoginForm() {
  return (
    <section className="absolute left-[741px] top-[120px] h-[var(--size-auth-panel-height)] w-[var(--size-auth-panel-width)] rounded-[24px] bg-white" aria-label="Sign in to ByteSpace">
      <div className="absolute left-[63px] top-[61px] flex h-[683px] w-[453px] flex-col items-center justify-between">
        <form className="flex h-[370px] w-[453px] flex-col items-start gap-[40px]" action="" method="post">
          <div className="flex w-[453px] flex-col items-start">
            <p className="font-body text-body-l text-[var(--color-primary-800)]">Sign In</p>
            <h1 id="login-title" className="w-[453px] font-heading text-heading-m tracking-[-0.01em] text-[var(--color-neutral-950)]">
              Welcome Back
            </h1>
          </div>

          <div className="flex h-[248px] w-[453px] flex-col items-end gap-[24px]">
            <AuthField
              label="Email"
              type="email"
              name="email"
              id="login-email"
              placeholder="designer@example.com"
              autoComplete="email"
            />

            <AuthField
              label="Password"
              type="password"
              name="password"
              id="login-password"
              placeholder="********"
              autoComplete="current-password"
            />

            <button
              className="flex h-[46px] items-center justify-center rounded-[24px] bg-[var(--color-secondary-400)] px-[24px] py-[12px] font-body text-label-l text-[var(--color-neutral-950)]"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="flex h-[141px] w-[453px] flex-col items-center gap-[40px]" aria-label="Social sign in">
          <div className="flex h-[29px] w-[453px] items-center gap-[11px]">
            <span className="h-px w-[200px] bg-[#D1D1D1]" aria-hidden="true"></span>
            <span className="font-body text-body-l text-[#888888]">or</span>
            <span className="h-px w-[200px] bg-[#D1D1D1]" aria-hidden="true"></span>
          </div>

          <div className="flex h-[72px] w-[160px] items-start gap-[16px]">
            <button className="h-[72px] w-[72px] rounded-[24px]" type="button" aria-label="Sign in with Facebook">
              <svg viewBox="0 0 72 72" width="72" height="72" aria-hidden="true">
                <rect x="0.5" y="0.5" width="71" height="71" rx="23.5" fill="white" stroke="#D1D1D1" />
                <g transform="translate(16 16)">
                  <path
                    d="M33.333 16.464C33.333 25.669 25.871 33.131 16.667 33.131C7.462 33.131 0 25.669 0 16.464C0 8.145 6.095 1.25 14.062 0V11.646H9.831V16.464H14.062V20.136C14.062 24.313 16.551 26.62 20.358 26.62C22.181 26.62 24.089 26.295 24.089 26.295V22.193H21.987C19.917 22.193 19.271 20.909 19.271 19.591V16.464H23.893L23.154 11.646H19.271V0C27.239 1.25 33.333 8.145 33.333 16.464Z"
                    transform="matrix(1 0 0 -1 3.333 36.464)"
                    fill="black"
                  />
                </g>
              </svg>
            </button>

            <button className="h-[72px] w-[72px] rounded-[24px]" type="button" aria-label="Sign in with Google">
              <svg viewBox="0 0 72 72" width="72" height="72" aria-hidden="true">
                <rect x="0.5" y="0.5" width="71" height="71" rx="23.5" fill="white" stroke="#D1D1D1" />
                <g transform="translate(19.333 19.333)" fill="black">
                  <path d="M32.625 17.042C32.625 15.944 32.528 14.903 32.361 13.889H16.667V20.153H25.653C25.25 22.208 24.069 23.944 22.319 25.125V29.292H27.681C30.819 26.389 32.625 22.111 32.625 17.042Z" />
                  <path d="M16.667 6.597C19.125 6.597 21.319 7.444 23.056 9.097L27.806 4.347C24.931 1.653 21.167 0 16.667 0C10.153 0 4.528 3.75 1.792 9.194L7.319 13.486C8.639 9.528 12.319 6.597 16.667 6.597Z" />
                  <path fillRule="evenodd" d="M1.792 24.139C4.528 29.583 10.153 33.333 16.667 33.333C21.167 33.333 24.931 31.833 27.681 29.292L22.319 25.125C20.819 26.125 18.917 26.736 16.667 26.736C12.319 26.736 8.639 23.806 7.319 19.847L1.792 24.139ZM7.319 13.486V9.194H1.792L7.319 13.486Z" />
                  <path d="M7.319 19.847H1.792V24.139C0.653 21.889 0 19.361 0 16.667C0 13.972 0.653 11.444 1.792 9.194L7.319 13.486C6.986 14.486 6.792 15.556 6.792 16.667C6.792 17.778 6.972 18.847 7.319 19.847Z" />
                  <path d="M7.319 19.847H1.792V24.139L7.319 19.847Z" />
                </g>
              </svg>
            </button>
          </div>
        </div>

        <p className="flex items-start gap-[4px] font-body text-body-m text-[var(--color-neutral-700)]">
          <span>New user?</span>
          <a className="text-[var(--color-primary-800)]" href="#">Create an account</a>
        </p>
      </div>
    </section>
  );
}
