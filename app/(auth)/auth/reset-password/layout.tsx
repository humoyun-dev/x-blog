import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password | X Blog",
  description: "Create a new password for your X Blog account",
  openGraph: {
    title: "Reset Password | X Blog",
    description: "Create a new password for your X Blog account",
    type: "website",
  },
};

export default function ResetPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
