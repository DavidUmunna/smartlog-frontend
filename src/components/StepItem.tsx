export function StepItem({ number, title, description, icon }) {
    return (
      <div className="flex flex-col items-center text-center">
        <div className="h-12 w-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-4 font-bold">
          {icon || number}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    )
}