import type React from "react"

interface PageTemplateProps {
  title: string
  description?: string
  children?: React.ReactNode
}

export default function PageTemplate({ title, description, children }: PageTemplateProps) {
  return (
    <div className="gradient-bg">
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-bold mb-4">{title}</h1>
          {description && <p className="text-gray-600 mb-8 px-2">{description}</p>}
        </div>

        <div className="mt-8 md:mt-12">
          {children || (
            <div className="text-center p-4 md:p-8 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">This page is under construction. Content will be added soon.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
