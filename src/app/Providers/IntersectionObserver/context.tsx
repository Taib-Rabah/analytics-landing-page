"use client";

import { createContext, useContext } from "react";
import { IO } from "./utils";
import useIO from "./hooks/useIO";

export type IOContext = IO | null;

export const IOContext = createContext<IOContext>(null);

export function IOProvider({ children }: { children: React.ReactNode }) {
  const io = useIO({ rootMargin: "-150px 0px -150px 0px" });
  return <IOContext.Provider value={io}>{children}</IOContext.Provider>;
}

export function useIOContext(): IO {
  const context = useContext(IOContext);
  if (!context) throw new Error("useIOContext must be used within a IOProvider");
  return context;
}
