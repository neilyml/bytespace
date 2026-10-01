"use client";

import { useRouter } from "next/navigation";
import { useRef, useState, type FormEvent } from "react";
import SearchIcon from "@/components/shared/SearchIcon";

type HeroSearchProps = {
  initialQuery: string;
};

export default function HeroSearch({ initialQuery }: HeroSearchProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState({
    routeQuery: initialQuery,
    input: initialQuery,
    status: "",
  });

  // Restore the controlled field when navigation supplies a different query.
  if (search.routeQuery !== initialQuery) {
    setSearch({ routeQuery: initialQuery, input: initialQuery, status: "" });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = search.input.trim();

    if (!query) {
      inputRef.current?.focus();
      setSearch({
        ...search,
        status: "Enter a course, topic, or creator to search.",
      });
      return;
    }

    setSearch({ ...search, input: query, status: "" });
    router.push(`/?q=${encodeURIComponent(query)}`);
  }

  return (
    <form
      className="flex items-start gap-[16px]"
      action="/"
      method="get"
      role="search"
      data-search-form
      onSubmit={handleSubmit}
    >
      <label className="flex h-[52px] w-[461px] shrink-0 items-center gap-[8px] rounded-[24px] bg-[var(--color-neutral-50)] px-[24px] py-[12px]">
        <span className="sr-only">Search courses, topics, or creators</span>
        <SearchIcon />
        <input
          className="min-w-0 flex-1 border-0 bg-transparent p-0 font-body text-body-l text-[var(--color-neutral-950)] outline-none placeholder:text-[var(--color-neutral-400)]"
          type="search"
          name="q"
          placeholder="Course, topic, creator"
          autoComplete="off"
          data-search-input
          ref={inputRef}
          value={search.input}
          onChange={(event) => setSearch({ ...search, input: event.target.value })}
        />
      </label>
      <button
        className="flex items-center justify-center gap-[8px] rounded-[24px] bg-[var(--color-secondary-400)] px-[24px] py-[12px] font-body text-label-l text-[var(--color-neutral-950)]"
        type="submit"
      >
        Search
      </button>
      <p className="sr-only" aria-live="polite" data-search-status>{search.status}</p>
    </form>
  );
}
