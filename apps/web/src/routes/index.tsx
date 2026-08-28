import { createFileRoute } from "@tanstack/react-router"
import { ActivityIcon, ArrowUpRightIcon, CircleDollarSignIcon, MoreHorizontalIcon, UsersIcon } from "lucide-react"

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 md:px-6">
          <SidebarTrigger className="-ml-1" />
          <div className="h-4 w-px bg-border" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">Workspace</BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <main className="flex flex-1 flex-col gap-6 p-4 md:p-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Friday, August 28, 2026</p>
              <h1 className="mt-1 text-2xl font-semibold tracking-tight">Good morning, Shadcn</h1>
              <p className="mt-1 text-sm text-muted-foreground">Here&apos;s what&apos;s happening across your workspace.</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="size-2 rounded-full bg-emerald-500" />
              All systems operational
            </div>
          </div>

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Workspace metrics">
            <MetricCard label="Total revenue" value="$48,290" change="+12.5%" icon={<CircleDollarSignIcon />} />
            <MetricCard label="Active users" value="2,431" change="+8.2%" icon={<UsersIcon />} />
            <MetricCard label="Conversion rate" value="6.84%" change="+2.1%" icon={<ActivityIcon />} />
            <MetricCard label="Avg. order value" value="$186.40" change="+4.6%" icon={<ArrowUpRightIcon />} />
          </section>

          <section className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle>Revenue overview</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">Monthly performance for 2026</p>
                </div>
                <button className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground" aria-label="More revenue options">
                  <MoreHorizontalIcon className="size-4" />
                </button>
              </CardHeader>
              <CardContent>
                <div className="flex h-56 items-end gap-2 pt-6 sm:gap-4">
                  {[38, 52, 46, 61, 55, 72, 68, 84, 76, 91, 86, 100].map((height, index) => (
                    <div key={index} className="group flex h-full flex-1 flex-col justify-end gap-2">
                      <div className="relative rounded-t-sm bg-primary/85 transition-colors group-hover:bg-primary" style={{ height: `${height}%` }}>
                        <span className="absolute -top-6 left-1/2 hidden -translate-x-1/2 text-xs font-medium group-hover:block">{height}</span>
                      </div>
                      <span className="text-center text-xs text-muted-foreground">{["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][index]}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent activity</CardTitle>
                <p className="mt-1 text-sm text-muted-foreground">The latest updates from your team</p>
              </CardHeader>
              <CardContent className="space-y-5">
                {[
                  ["Olivia Martin", "Published a new campaign", "2 min ago", "OM"],
                  ["Jackson Lee", "Updated the Q3 forecast", "24 min ago", "JL"],
                  ["Isabella Nguyen", "Added a new team member", "1 hr ago", "IN"],
                  ["Sofia Davis", "Exported monthly report", "3 hr ago", "SD"],
                ].map(([name, action, time, initials]) => (
                  <div key={name} className="flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold">{initials}</div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{name}</p>
                      <p className="truncate text-xs text-muted-foreground">{action}</p>
                    </div>
                    <time className="shrink-0 text-xs text-muted-foreground">{time}</time>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

function MetricCard({
  label,
  value,
  change,
  icon,
}: {
  label: string
  value: string
  change: string
  icon: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{label}</CardTitle>
        <span className="text-muted-foreground [&>svg]:size-4">{icon}</span>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold tracking-tight">{value}</div>
        <p className="mt-1 text-xs text-muted-foreground"><span className="font-medium text-emerald-600">{change}</span> from last month</p>
      </CardContent>
    </Card>
  )
}
