import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-soft disabled:pointer-events-none disabled:opacity-50'
    
    const variants = {
      primary: 'bg-rose-soft hover:bg-rose-deep text-white shadow-soft hover:shadow-rose-lg transform hover:scale-105',
      secondary: 'bg-rose-poudre hover:bg-rose-light text-rose-deep border-2 border-rose-soft hover:border-rose-deep',
      outline: 'border-2 border-rose-soft text-rose-deep hover:bg-rose-soft hover:text-white',
      ghost: 'text-rose-deep hover:bg-rose-poudre hover:text-rose-deep'
    }
    
    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-11 px-6 text-base',
      lg: 'h-12 px-8 text-lg'
    }

    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }


