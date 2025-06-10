import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | X Blog",
  description: "Reset your X Blog account password",
  openGraph: {
    title: "Forgot Password | X Blog",
    description: "Reset your X Blog account password",
    type: "website",
  },
};

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
