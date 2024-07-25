import { IOProvider } from "./IntersectionObserver";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <IOProvider >{children}</IOProvider>;
}
