import classNames from "classnames"

interface Props extends React.HTMLAttributes<HTMLDivElement>{
  children: React.ReactNode
}

function Card({ children, ...props }: Props) {
  return (
    <div {...props} className={classNames("rounded-lg border bg-card text-card-foreground shadow-sm", props.className)}>
      {children}
    </div>
  )
}

function CardHeader({ children, ...props }: Props) {
  return (
    <div {...props} className={classNames("flex flex-col space-y-1.5 p-6", props.className)}>
      {children}
    </div>
  )
}

function CardTitle({ children, ...props }: Props) {
  return (
    <h3 {...props} className={classNames("text-2xl font-bold leading-none tracking-tight", props.className)}>
      {children}
    </h3>
  )
}

function CardDescription({ children, ...props }: Props) {
  return (
    <p {...props} className={classNames("text-sm text-muted-foreground font-medium", props.className)}>
      {children}
    </p>
  )
}

function CardContent({ children, ...props }: Props) {
  return (
    <div {...props} className={classNames("p-6 pt-0", props.className)}>
      {children}
    </div>
  )
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent }