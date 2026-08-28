import { createFileRoute } from "@tanstack/react-router"

import { AppSidebar } from "@/components/app-sidebar"
import { Page as CompaniesGridPage } from "@/components/blocks/data-grid-columns-5/page"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"

export const Route = createFileRoute("/companies")({ component: Companies })

function Companies() {
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
                <BreadcrumbPage>Companies</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <CompaniesGridPage />
      </SidebarInset>
    </SidebarProvider>
  )
}
