import React from 'react'
import Link from "next/link"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Home, Folders, Plus } from "lucide-react"

const Aside = () => {
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Link
                    href="/"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <Home className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">Home</span>
                </Link>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/dashboard"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Folders className="h-5 w-5" />
                            <span className="sr-only">Sets</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Sets</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/generate"
                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Plus className="h-5 w-5" />
                            <span className="sr-only" >New Set</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">New Set</TooltipContent>
                </Tooltip>
            </nav>
        </aside>
    )
}

export default Aside