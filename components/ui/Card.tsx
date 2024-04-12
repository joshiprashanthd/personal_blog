import * as React from "react"

import cn from "../../helpers/cn"
import {Slot} from "@radix-ui/react-slot";

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {asChild? : boolean}
>(({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
        <Comp
            className={cn("group block rounded-md px-4 py-4 transition-all hover:-translate-y-1 hover:bg-primary-light/20 dark:hover:bg-primary-dark/20", className)}
            ref={ref}
            {...props}
        />
    )
})
Card.displayName = "Card"

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("font-mono text-xs", className)}
        {...props}
    />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            "mb-1 font-bold text-primary-light dark:text-primary-dark sm:text-lg font-ui",
            className
        )}
        {...props}
    />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm sm:text-sm", className)}
        {...props}
    />
))
CardDescription.displayName = "CardDescription"

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center p-6 pt-0", className)}
        {...props}
    />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription }
