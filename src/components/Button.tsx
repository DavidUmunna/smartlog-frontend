import classNames from "classnames"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode 
  variant?: "default"|"outline"|"ghost" 
  size?: "default"|"sm"|"lg"|"icon"
}

export function Button({ children, variant="default", size="default", ...props }: Props) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"

  const variantStyles = {
    default: "bg-primblue text-white hover:bg-darkblue gap-2",
    outline: "border border-input bg-background hover:bg-accent hover:text-darkblue text-primblue gap-2",
    ghost: "hover:bg-accent hover:text-accent-foreground gap-2",
  }

  const sizeStyles = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  }

  const buttonClasses = classNames(baseStyles, variantStyles[variant], sizeStyles[size], props.className, 'cursor-pointer')

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}