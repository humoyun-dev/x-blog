import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | X Blog",
  description: "Sign in to your X Blog account",
  openGraph: {
    title: "Login | X Blog",
    description: "Sign in to your X Blog account",
    type: "website",
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
