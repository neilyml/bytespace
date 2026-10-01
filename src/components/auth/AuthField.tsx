type AuthFieldProps = {
  label: string;
  type: "text" | "email" | "password";
  name: "name" | "email" | "password";
  id: string;
  autoComplete: "name" | "email" | "current-password" | "new-password";
  placeholder: string;
};

export default function AuthField({
  label,
  type,
  name,
  id,
  autoComplete,
  placeholder,
}: AuthFieldProps) {
  return (
    <label
      className="flex h-[77px] w-[453px] flex-col items-start gap-[8px]"
      htmlFor={id}
    >
      <span className="font-body text-label-s text-[var(--color-neutral-950)]">
        {label}
      </span>
      <input
        className="h-[52px] w-[453px] shrink-0 rounded-[12px] border border-[var(--color-neutral-100)] bg-white px-[24px] py-[12px] font-body text-body-l text-[var(--color-neutral-950)] outline-none placeholder:text-[var(--color-neutral-400)]"
        type={type}
        name={name}
        id={id}
        autoComplete={autoComplete}
        placeholder={placeholder}
      />
    </label>
  );
}
