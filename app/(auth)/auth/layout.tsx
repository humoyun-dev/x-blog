"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    if (status == "authenticated") {
      router.push(`/`);
    }
  }, [status]);

  const logoSrc = useMemo(() => {
    if (!mounted) return "/logo.png";
    return resolvedTheme === "dark" ? "/logo-dark.png" : "/logo.png";
  }, [mounted, resolvedTheme]);

  return (
    <div className="min-h-svh bg-background">
      <div className="flex min-h-svh flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-sm">
          <div className="mb-6 flex flex-col items-center">
            <Link
              href="/"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-32 items-center justify-center rounded-md">
                <Image
                  src={logoSrc}
                  alt="X Blog Logo"
                  width={300}
                  height={300}
                  className="rounded-md"
                  priority
                />
              </div>
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
