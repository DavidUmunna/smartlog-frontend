import type { LucideIcon } from 'lucide-react';

interface Props {
  Icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ Icon, title, description }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="h-12 w-12 rounded-full bg-primblue flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl text-black font-bold mb-2">{title}</h3>
      <p className="text-customgrey">{description}</p>
    </div>
  )
}