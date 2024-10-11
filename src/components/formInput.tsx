import { InputHTMLAttributes, ReactNode } from 'react'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  placeholder?: string
  leftElement?: ReactNode
  rightElement?: ReactNode
}

export default function FormInput({
  label,
  placeholder,
  leftElement,
  rightElement,
  ...props
}: FormInputProps) {
  return (
    <div className="flex flex-col">
      <span className="label-md text-gray-300">{label}</span>
      <div className="flex items-center gap-[0.625rem] border-b border-spacing-[1px] border-gray-100">
        {leftElement}
        <input
          className="body-md w-full placeholder-gray-200 h-[3rem] outline-none"
          placeholder={placeholder ?? ''}
          {...props}
        />
        {rightElement}
      </div>
    </div>
  )
}
