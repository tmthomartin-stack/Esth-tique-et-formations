import React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success'
  children: React.ReactNode
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-rose-soft text-white hover:bg-rose-deep',
      secondary: 'bg-rose-poudre text-rose-deep hover:bg-rose-light',
      destructive: 'bg-red-500 text-white hover:bg-red-600',
      outline: 'border border-rose-soft text-rose-deep hover:bg-rose-soft hover:text-white',
      success: 'bg-green-500 text-white hover:bg-green-600'
    }

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-rose-soft focus:ring-offset-2',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }


