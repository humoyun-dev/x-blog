import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | X Blog",
  description: "Create your X Blog account and join our community",
  openGraph: {
    title: "Sign Up | X Blog",
    description: "Create your X Blog account and join our community",
    type: "website",
  },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
