interface Props {
  number: number
  title: string 
  description: string 
  icon?: string
}

export function StepItem({ number, title, description, icon }: Props) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="h-12 w-12 rounded-full bg-primblue text-white flex items-center justify-center mb-4 font-bold">
        {icon || number}
      </div>
      <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
      <p className="text-customgrey">{description}</p>
    </div>
  )
}