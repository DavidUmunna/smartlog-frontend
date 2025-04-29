"use client"

import React, { useState, useRef, useEffect } from "react"
import classNames from "classnames"
import { ChevronDown } from "lucide-react"

interface SelectProps extends React.HTMLAttributes<HTMLDivElement>{
  children: React.ReactNode
  placeholder?: string
  value: string
}

interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement>{
  children: React.ReactNode
  isSelected: boolean
  value: string
} 

function Select({ children, value, onChange, placeholder = "Select an option", className, ...props }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Extract options from children
  const options = React.Children.toArray(children).filter((child) => child.type === SelectItem)

  // Find the selected option label
  const selectedOption = options.find((option) => option.props.value === value)
  const displayValue = selectedOption ? selectedOption.props.children : placeholder

  return (
    <div className="relative" ref={selectRef} {...props}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={classNames(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
      >
        <span>{displayValue}</span>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-popover text-popover-foreground shadow-md">
          <div className="p-1">
            {React.Children.map(options, (child) => {
              return React.cloneElement(child, {
                onClick: () => {
                  onChange(child.props.value)
                  setIsOpen(false)
                },
                isSelected: child.props.value === value,
              })
            })}
          </div>
        </div>
      )}
    </div>
  )
}

function SelectItem({ children, value, /*onClick,*/ isSelected, ...props }: SelectItemProps) {
  return (
    <div
      {...props}
      role="option"
      aria-selected={isSelected}
      value={value}
      
      className={classNames(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent hover:text-accent-foreground",
        isSelected ? "bg-accent text-accent-foreground" : "",
      )}
    >
      {children}
    </div>
  )
}

export { Select, SelectItem }
