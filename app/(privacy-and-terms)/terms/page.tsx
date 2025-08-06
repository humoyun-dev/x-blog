import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Terms of Service | X Blog",
  description:
    "Terms of Service for X Blog platform - Read our terms and conditions for using our blogging platform.",
  openGraph: {
    title: "Terms of Service | X Blog",
    description:
      "Terms of Service for X Blog platform - Read our terms and conditions for using our blogging platform.",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

          <p className="text-lg text-muted-foreground mb-8">
            <strong>Last updated:</strong>{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="bg-muted/50 border rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Welcome to X Blog</h2>
            <p className="text-muted-foreground">
              These Terms of Service ("Terms") govern your use of X Blog ("we,"
              "us," or "our") website and services. By accessing or using our
              platform, you agree to be bound by these Terms.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="mb-4">
              By accessing and using X Blog, you accept and agree to be bound by
              the terms and provision of this agreement. If you do not agree to
              abide by the above, please do not use this service.
            </p>
            <p>
              We reserve the right to update these Terms at any time. Your
              continued use of the platform after any changes constitutes
              acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. Description of Service
            </h2>
            <p className="mb-4">
              X Blog is a blogging platform that allows users to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Create and publish blog posts and articles</li>
              <li>Read and interact with content from other users</li>
              <li>Comment on and share articles</li>
              <li>Follow other writers and build a community</li>
              <li>Customize their profile and writing preferences</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect
              of the service at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <h3 className="text-xl font-medium mb-3">3.1 Account Creation</h3>
            <p className="mb-4">
              To use certain features of X Blog, you must create an account. You
              agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>
                Accept responsibility for all activities under your account
              </li>
            </ul>

            <h3 className="text-xl font-medium mb-3">
              3.2 Account Termination
            </h3>
            <p className="mb-4">
              You may terminate your account at any time. We reserve the right
              to suspend or terminate accounts that violate these Terms or for
              any other reason at our sole discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. Content and Conduct
            </h2>
            <h3 className="text-xl font-medium mb-3">4.1 User Content</h3>
            <p className="mb-4">
              You retain ownership of content you create and publish on X Blog.
              By posting content, you grant us a non-exclusive, worldwide,
              royalty-free license to use, display, and distribute your content
              on our platform.
            </p>

            <h3 className="text-xl font-medium mb-3">4.2 Prohibited Content</h3>
            <p className="mb-4">You agree not to post content that:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                Is illegal, harmful, threatening, abusive, or discriminatory
              </li>
              <li>Infringes on intellectual property rights</li>
              <li>Contains spam, malware, or malicious code</li>
              <li>Is sexually explicit or contains nudity</li>
              <li>Promotes violence or illegal activities</li>
              <li>Contains false or misleading information</li>
              <li>Violates privacy rights of others</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">4.3 Content Moderation</h3>
            <p className="mb-4">
              We reserve the right to review, edit, or remove any content that
              violates these Terms or our community guidelines. We may also
              suspend or terminate accounts that repeatedly violate our
              policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. Intellectual Property
            </h2>
            <p className="mb-4">
              The X Blog platform, including its design, features, and
              underlying technology, is owned by us and protected by copyright,
              trademark, and other intellectual property laws.
            </p>
            <p className="mb-4">
              You may not copy, modify, distribute, or create derivative works
              based on our platform without explicit written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Privacy</h2>
            <p className="mb-4">
              Your privacy is important to us. Please review our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              , which explains how we collect, use, and protect your
              information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              7. Disclaimers and Limitations
            </h2>
            <h3 className="text-xl font-medium mb-3">
              7.1 Service Availability
            </h3>
            <p className="mb-4">
              We strive to maintain high availability but cannot guarantee
              uninterrupted service. The platform is provided "as is" without
              warranties of any kind.
            </p>

            <h3 className="text-xl font-medium mb-3">
              7.2 Limitation of Liability
            </h3>
            <p className="mb-4">
              To the maximum extent permitted by law, we shall not be liable for
              any indirect, incidental, special, consequential, or punitive
              damages arising from your use of the platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify and hold us harmless from any claims,
              damages, or expenses arising from your use of the platform or
              violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
            <p className="mb-4">
              These Terms are governed by and construed in accordance with the
              laws of [Your Jurisdiction]. Any disputes shall be resolved in the
              courts of [Your Jurisdiction].
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              10. Contact Information
            </h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <div className="bg-muted/50 border rounded-lg p-4">
              <p>
                <strong>Email:</strong> legal@xblog.com
              </p>
              <p>
                <strong>Address:</strong> [Your Company Address]
              </p>
              <p>
                <strong>Phone:</strong> [Your Phone Number]
              </p>
            </div>
          </section>

          <div className="border-t pt-8 mt-12">
            <p className="text-sm text-muted-foreground">
              By using X Blog, you acknowledge that you have read, understood,
              and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
