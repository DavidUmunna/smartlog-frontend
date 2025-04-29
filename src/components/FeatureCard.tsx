export function FeatureCard({ icon: Icon, title, description }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-emerald-500" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    )
}