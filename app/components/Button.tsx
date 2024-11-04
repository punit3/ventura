import React, { forwardRef, ComponentPropsWithoutRef } from 'react'
import Link from 'next/link'

type ButtonProps = {
    variant?: 'primary' | 'secondary'
    href?: string
} & ComponentPropsWithoutRef<'button'>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, variant = 'primary', className, href, ...props }, ref) => {
        const baseStyles = 'px-6 py-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2'
        const variantStyles = {
            primary: 'text-white bg-blue hover:bg-blue-dark',
            secondary: 'bg-white hover:text-blue'
        }
        const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className || ''}`

        if (href) {
            return (
                <Link href={href} className={combinedClassName}>
                    {children}
                </Link>
            )
        }

        return (
            <button
                ref={ref}
                className={combinedClassName}
                {...props}
            >
                {children}
            </button>
        )
    }
)

Button.displayName = 'Button'

export default Button