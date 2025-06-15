"use client"

import {Link} from "react-router-dom"
import { usePathname } from "next/navigation"

import { cn } from "../lib/utils"
import { Button } from "./ui/button"

export function MainNav({
  items,
  className,
  ...props
}: React.ComponentProps<"nav"> & {
  items: { to: string; label: string }[]
}) {
  const pathname = usePathname()
  interface item{
    to:string,
    label:string
  }
  return (
    <nav className={cn("items-center gap-0.5", className)} {...props}>
      {items.map((item)=> (
        <Button key={item.to} variant="ghost" asChild size="sm">
          <Link
            to={item.to}
            className={cn(pathname === item.to && "text-primary")}
          >
            {item.label}
          </Link>
        </Button>
      ))}
    </nav>
  )
}
