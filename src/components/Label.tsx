import classNames from "classnames"

export function Label({ className, children, htmlFor, ...props }) {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className,
      )}
      {...props}
    >
      {children}
    </label>
  )
}
