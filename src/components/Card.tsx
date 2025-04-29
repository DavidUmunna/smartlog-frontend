import classNames from "classnames"

function Card({ className, children, ...props }) {
  return (
    <div className={classNames("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props}>
      {children}
    </div>
  )
}

function CardHeader({ className, children, ...props }) {
  return (
    <div className={classNames("flex flex-col space-y-1.5 p-6", className)} {...props}>
      {children}
    </div>
  )
}

function CardTitle({ className, children, ...props }) {
  return (
    <h3 className={classNames("text-2xl font-semibold leading-none tracking-tight", className)} {...props}>
      {children}
    </h3>
  )
}

function CardDescription({ className, children, ...props }) {
  return (
    <p className={classNames("text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  )
}

function CardContent({ className, children, ...props }) {
  return (
    <div className={classNames("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  )
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent }