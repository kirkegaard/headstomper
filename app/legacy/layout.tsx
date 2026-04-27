import { Logo } from "@/components/logo";

export default function LegacyLayout({
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
