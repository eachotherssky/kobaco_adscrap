/* ───── components/ui/button.tsx ───── */
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type Ref,
} from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'

/* A. 실제 쓰는 variant / size 전부 명시 */
export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md transition',
  {
    variants: {
      variant: {
        primary:   'bg-system-blue text-white hover:bg-system-blue/90',
        secondary: 'bg-gray-200 text-black hover:bg-gray-300',
        ghost:     'bg-transparent hover:bg-gray-100',
        outline: "border border-gray-300 text-black hover:bg-gray-50",
      },
      size: {
        default: 'h-10 px-4 text-sm',
        large:   'h-12 px-6 text-base',
        icon:    'h-10 w-10 p-0',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  },
)

/* B. 타입까지 외부로 export */
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = forwardRef(
  (
    { className, variant, size, ...props }: ButtonProps,
    ref: Ref<HTMLButtonElement>,
  ) => (
    <button
      ref={ref}
      className={clsx(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
)
Button.displayName = 'Button'
export default Button
export { Button }
