import classNames from "classnames"

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement>{
  children: React.ReactNode
}

export default function Label({ children, ...props }: Props) {
  return (
    <label
      {...props}
      className={classNames(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        props.className,
      )}
    >
      {children}
    </label>
  )
}
