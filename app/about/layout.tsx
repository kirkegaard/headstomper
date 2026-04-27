import { Logo } from "@/components/logo";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Logo />
      {children}
    </>
  );
}
