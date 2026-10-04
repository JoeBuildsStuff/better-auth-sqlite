"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/mode-toggle"
import { authClient } from "@/lib/auth-client"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [defaultOpen, setDefaultOpen] = React.useState(true)
  const { data: session, isPending } = authClient.useSession()

  React.useEffect(() => {
    // Read sidebar state from cookie
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("sidebar_state="))
      ?.split("=")[1]
    
    if (cookieValue) {
      setDefaultOpen(cookieValue === "true")
    }
  }, [])

  React.useEffect(() => {
    // Redirect to sign-in if not authenticated
    if (!isPending && !session?.user) {
      // Use replace instead of push to avoid adding to history
      router.replace("/sign-in?callbackUrl=/app")
    }
  }, [session, isPending, router])

  // Show loading state while checking session
  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="mb-4 text-lg font-semibold">Loading...</div>
          <div className="text-sm text-muted-foreground">Checking authentication...</div>
        </div>
      </div>
    )
  }

  // Show loading state while redirecting if not authenticated
  if (!session?.user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="mb-4 text-lg font-semibold">Redirecting...</div>
          <div className="text-sm text-muted-foreground">Please sign in to continue</div>
        </div>
      </div>
    )
  }

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex shrink-0 items-center gap-2 px-4 py-2">
          <SidebarTrigger className="-ml-1" />
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
