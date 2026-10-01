import BrandLogo from "@/components/shared/BrandLogo";

export default function Footer() {
  return (
    <footer
      className="relative h-[525px] w-full overflow-hidden bg-white"
      aria-label="ByteSpace footer"
    >
      <div className="absolute left-1/2 top-[1px] h-px w-[1440px] -translate-x-1/2 bg-[var(--color-neutral-200)]"></div>

      <div
        className="absolute left-1/2 top-[71px] flex w-[var(--layout-grid-content-width)] -translate-x-1/2 flex-col items-start gap-[130px]"
      >
        <div className="flex h-[237px] items-start gap-[92px]">
          <div className="flex h-[237px] w-[528px] flex-col items-start gap-[45px]">
            <div className="flex flex-col items-start gap-[16px]">
              <BrandLogo variant="footer" />
              <p className="w-[528px] font-body text-body-s text-[var(--color-neutral-950)]">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>

            <div className="flex w-[510px] flex-col items-start gap-[24px]">
              <form className="flex h-[52px] items-start gap-[24px]" action="" method="get">
                <label className="flex h-[52px] w-[376px] shrink-0 items-center rounded-[100px] bg-white px-[24px] py-[18px] [outline:1px_solid_var(--color-neutral-200)] [-outline-offset:1px]">
                  <span className="sr-only">Email address</span>
                  <input
                    className="min-w-0 flex-1 border-0 bg-transparent p-0 font-body text-body-m text-[var(--color-neutral-950)] outline-none placeholder:text-[var(--color-neutral-950)]"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    aria-describedby="newsletter-consent"
                  />
                </label>
                <button
                  className="flex h-[46px] items-center justify-center rounded-[24px] bg-[var(--color-secondary-400)] px-[24px] py-[12px] font-body text-label-l text-[var(--color-neutral-950)]"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <p id="newsletter-consent" className="w-[504px] font-body text-body-xs text-[var(--color-neutral-950)]">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>

          <nav className="flex h-[227px] w-[580px] shrink-0 items-end gap-[40px]" aria-label="Footer navigation">
            <div className="flex h-[227px] w-[167px] shrink-0 flex-col items-start gap-[24px]">
              <h2 className="font-body text-[16px] leading-[24px] text-black">Browse</h2>
              <ul className="flex flex-col items-start gap-[16px] font-body text-body-s text-[var(--color-neutral-950)]">
                <li><a href="#">Featured Courses</a></li>
                <li><a href="#">Featured Categories</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">IT</a></li>
                <li><a href="#">Design</a></li>
              </ul>
            </div>
            <div className="flex h-[179px] w-[167px] shrink-0 flex-col items-start">
              <ul className="flex flex-col items-start gap-[16px] font-body text-body-s text-[var(--color-neutral-950)]">
                <li><a href="#">Development</a></li>
                <li><a href="#">Marketing</a></li>
                <li><a href="#">Photography</a></li>
                <li><a href="#">Finance</a></li>
                <li><a href="#">Sport</a></li>
              </ul>
            </div>
            <div className="flex h-[227px] w-[167px] shrink-0 flex-col items-start gap-[24px]">
              <h2 className="font-body text-[16px] leading-[24px] text-black">Platform</h2>
              <ul className="flex flex-col items-start gap-[16px] font-body text-body-s text-[var(--color-neutral-950)]">
                <li><a href="#">Become a Creator</a></li>
                <li><a href="#">Affiliate Program</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="flex h-[42px] w-[1200px] shrink-0 flex-col items-start justify-between">
          <div className="h-px w-[1200px] bg-[var(--color-neutral-200)]"></div>
          <div className="flex w-[1200px] items-start justify-between font-body text-body-xs text-[var(--color-neutral-950)]">
            <p className="w-[460px] shrink-0">@ 2023 ByteSpace. All rights reserved.</p>
            <nav className="flex items-start gap-[24px]" aria-label="Legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies Settings</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
