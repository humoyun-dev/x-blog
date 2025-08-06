import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Eye, Lock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Privacy Policy | X Blog",
  description:
    "Privacy Policy for X Blog platform - Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | X Blog",
    description:
      "Privacy Policy for X Blog platform - Learn how we collect, use, and protect your personal information.",
    type: "website",
  },
};

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <p className="text-lg text-muted-foreground mb-8">
            <strong>Last updated:</strong>{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="bg-muted/50 border rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Your Privacy Matters</h2>
            <p className="text-muted-foreground">
              At X Blog, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy explains how we collect, use, share, and protect your
              information when you use our platform.
            </p>
          </div>

          {/* Privacy Principles */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Data Protection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We implement industry-standard security measures to protect
                  your personal information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Transparency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We are clear about what data we collect and how we use it.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  User Control
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  You have control over your data and can manage your privacy
                  settings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  No Selling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We never sell your personal information to third parties.
                </p>
              </CardContent>
            </Card>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              1. Information We Collect
            </h2>

            <h3 className="text-xl font-medium mb-3">
              1.1 Information You Provide
            </h3>
            <p className="mb-4">
              When you use X Blog, you may provide us with:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Account Information:</strong> Name, email address,
                username, and password
              </li>
              <li>
                <strong>Profile Information:</strong> Bio, profile picture, and
                other optional profile details
              </li>
              <li>
                <strong>Content:</strong> Blog posts, comments, and other
                content you create
              </li>
              <li>
                <strong>Communication:</strong> Messages you send to us or other
                users
              </li>
              <li>
                <strong>Payment Information:</strong> Billing details for
                premium features (processed securely by third-party providers)
              </li>
            </ul>

            <h3 className="text-xl font-medium mb-3">
              1.2 Information We Collect Automatically
            </h3>
            <p className="mb-4">
              When you use our platform, we automatically collect:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Usage Data:</strong> Pages visited, time spent, features
                used
              </li>
              <li>
                <strong>Device Information:</strong> Browser type, operating
                system, device identifiers
              </li>
              <li>
                <strong>Log Data:</strong> IP address, access times, referring
                URLs
              </li>
              <li>
                <strong>Cookies and Tracking:</strong> See our Cookie Policy
                below
              </li>
            </ul>

            <h3 className="text-xl font-medium mb-3">
              1.3 Information from Third Parties
            </h3>
            <p className="mb-4">We may receive information when you:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Sign up using social media accounts (Google, etc.)</li>
              <li>Share our content on social platforms</li>
              <li>Use third-party integrations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">We use your information to:</p>

            <h3 className="text-xl font-medium mb-3">
              2.1 Provide Our Services
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Create and manage your account</li>
              <li>Enable content creation and publishing</li>
              <li>Facilitate community interactions</li>
              <li>Process payments for premium features</li>
              <li>Provide customer support</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">
              2.2 Improve Our Platform
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Analyze usage patterns and trends</li>
              <li>Develop new features and functionality</li>
              <li>Fix bugs and improve performance</li>
              <li>Conduct research and analytics</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">2.3 Communication</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Send important service updates</li>
              <li>Respond to your inquiries</li>
              <li>Send newsletters (with your consent)</li>
              <li>Notify you of new features or content</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">
              2.4 Safety and Security
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Detect and prevent fraud</li>
              <li>Enforce our Terms of Service</li>
              <li>Protect against spam and abuse</li>
              <li>Ensure platform security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. Information Sharing
            </h2>
            <p className="mb-4">
              We may share your information in the following circumstances:
            </p>

            <h3 className="text-xl font-medium mb-3">3.1 Public Content</h3>
            <p className="mb-4">
              Content you publish on X Blog (posts, comments, profile
              information) is public by default and can be viewed by other users
              and search engines.
            </p>

            <h3 className="text-xl font-medium mb-3">3.2 Service Providers</h3>
            <p className="mb-4">
              We share information with trusted third-party service providers
              who help us:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Host and maintain our platform</li>
              <li>Process payments</li>
              <li>Send emails</li>
              <li>Provide analytics</li>
              <li>Offer customer support</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">3.3 Legal Requirements</h3>
            <p className="mb-4">
              We may disclose information when required by law or to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Comply with legal processes</li>
              <li>Protect our rights and property</li>
              <li>Ensure user safety</li>
              <li>Investigate potential violations</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">3.4 Business Transfers</h3>
            <p className="mb-4">
              In the event of a merger, acquisition, or sale of assets, your
              information may be transferred as part of the transaction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="mb-4">
              We implement comprehensive security measures including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Encryption:</strong> Data is encrypted in transit and at
                rest
              </li>
              <li>
                <strong>Access Controls:</strong> Limited access to personal
                information
              </li>
              <li>
                <strong>Regular Audits:</strong> Security assessments and
                monitoring
              </li>
              <li>
                <strong>Secure Infrastructure:</strong> Industry-standard
                hosting and security practices
              </li>
              <li>
                <strong>Employee Training:</strong> Staff trained on privacy and
                security protocols
              </li>
            </ul>
            <p className="mb-4">
              While we strive to protect your information, no method of
              transmission over the internet is 100% secure. We encourage you to
              use strong passwords and enable two-factor authentication when
              available.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. Your Rights and Choices
            </h2>
            <p className="mb-4">
              You have the following rights regarding your personal information:
            </p>

            <h3 className="text-xl font-medium mb-3">
              5.1 Access and Portability
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Request a copy of your personal information</li>
              <li>Export your content and data</li>
              <li>Review what information we have about you</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">
              5.2 Correction and Updates
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Update your profile and account information</li>
              <li>Correct inaccurate information</li>
              <li>Modify your privacy settings</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">5.3 Deletion</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Delete your account and associated data</li>
              <li>Remove specific content or information</li>
              <li>Request erasure of personal information</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">
              5.4 Communication Preferences
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Unsubscribe from marketing emails</li>
              <li>Manage notification settings</li>
              <li>Opt out of certain data processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              6. Cookies and Tracking
            </h2>
            <p className="mb-4">We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Enable core platform
                functionality
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Understand how you use our
                platform
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your settings and
                preferences
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Deliver relevant content and
                advertisements
              </li>
            </ul>
            <p className="mb-4">
              You can manage cookie preferences through your browser settings or
              our cookie consent banner.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              7. International Data Transfers
            </h2>
            <p className="mb-4">
              Your information may be processed and stored in countries other
              than your own. We ensure appropriate safeguards are in place to
              protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              8. Children's Privacy
            </h2>
            <p className="mb-4">
              X Blog is not intended for children under 13 years of age. We do
              not knowingly collect personal information from children under 13.
              If we become aware that we have collected such information, we
              will take steps to delete it promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              9. Changes to This Policy
            </h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Posting the updated policy on our website</li>
              <li>Sending you an email notification</li>
              <li>Displaying a prominent notice on our platform</li>
            </ul>
            <p className="mb-4">
              Your continued use of X Blog after any changes constitutes
              acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p className="mb-4">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or your personal information, please contact us:
            </p>
            <div className="bg-muted/50 border rounded-lg p-4">
              <p>
                <strong>Privacy Officer:</strong> privacy@xblog.com
              </p>
              <p>
                <strong>General Inquiries:</strong> support@xblog.com
              </p>
              <p>
                <strong>Address:</strong> [Your Company Address]
              </p>
              <p>
                <strong>Phone:</strong> [Your Phone Number]
              </p>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              We will respond to your inquiry within 30 days.
            </p>
          </section>

          <div className="border-t pt-8 mt-12">
            <div className="bg-muted/50 border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-primary hover:underline">
                  Cookie Policy
                </Link>
                <Link href="/contact" className="text-primary hover:underline">
                  Contact Us
                </Link>
                <Link href="/help" className="text-primary hover:underline">
                  Help Center
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
