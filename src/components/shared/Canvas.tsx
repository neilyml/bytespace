import type { ReactNode } from "react";

type CanvasProps = {
  children: ReactNode;
};

export default function Canvas({ children }: CanvasProps) {
  return (
    <div className="relative mx-auto h-full w-full max-w-[var(--layout-grid-canvas-width)]">
      {children}
    </div>
  );
}
