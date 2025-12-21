import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Database, 
  Lock, 
  Globe,
  CheckCircle2 
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6" />
            <span className="text-xl font-bold">BetterAuth</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/app" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Modern Authentication
            <span className="text-primary"> Made Simple</span>
          </h1>
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl md:text-2xl">
            Secure, scalable authentication built with Next.js and SQLite. 
            Get started in minutes, not hours.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/app">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="#features">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need
            </h2>
            <p className="text-lg text-muted-foreground">
              Built for developers, designed for scale
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Shield className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Secure by Default</CardTitle>
                <CardDescription>
                  Industry-standard security practices built in from day one
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Optimized for performance with minimal overhead
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Database className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>SQLite Powered</CardTitle>
                <CardDescription>
                  Simple, file-based database that just works
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Lock className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Email & Password</CardTitle>
                <CardDescription>
                  Traditional authentication with modern security
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Next.js Ready</CardTitle>
                <CardDescription>
                  Seamless integration with your Next.js application
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle2 className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Type Safe</CardTitle>
                <CardDescription>
                  Full TypeScript support for better DX
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Ready to get started?</CardTitle>
              <CardDescription className="text-lg">
                Join thousands of developers building secure applications
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button asChild size="lg">
                <Link href="/app">
                  Launch Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <span className="font-semibold">BetterAuth</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 BetterAuth. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
