import CTASection from "@/components/cta-section"

const services = [
  {
    title: "Gen AI Tools",
    description: "Unlock a suite of cutting-edge generative AI web apps “Octa’s” designed to boost creativity, productivity, and smart project execution.",
  },
  {
    title: "AI Consultation & Strategy",
    description: "Get expert advice on integrating AI solutions into your business processes, from ideation to execution.",
  },
  {
    title: "Digital Transformation ",
    description: "We help businesses rethink and revamp their digital workflows using AI and automation technologies.",
  },
  {
    title: "AI Integration Support",
    description: "Seamless integration of AI tools into your existing systems, ensuring a smooth digital transition.",
  },
  {
    title: "Custom AI App Development",
    description: "Tailored AI-powered web applications built specifically around your needs and challenges.",
  },
  {
    title: "Collaborative Projects",
    description: "Co-create solutions with our experts, from rapid prototypes to full AI-driven product launches.",
  },
  {
    title: "Training & Onboarding ",
    description: "Empower your teams with practical AI usage skills, workshops, and documentation to maximize the value of AI tools.",
  },
  {
    title: "Knowledge Resources",
    description: "Access curated knowledge hubs, resources, and AI best practices to stay ahead in the new AI era.",
  },
  {
    title: "Continuous Support & Scaling",
    description: "Ongoing technical and strategic support to help you grow and evolve with AI trends and opportunities.",
  }
]
export default function ServicesPage() {
  return (
    <div className="gradient-bg">
      <section className="max-w-7xl mx-auto px-4 pt-16 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Big ideas need strong partners.</h1>
          <p className="text-gray-600 mb-8">
            Join forces with Octa&apos;s to bring your vision to life. Our services provide the tools and support you
            need to succeed.
          </p>
        </div>

        <div className="mt-12 relative max-w-3xl mx-auto">
          <div className="bg-transparent rounded-lg border shadow-lg overflow-hidden p-4">
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="bg-gradient-to-br from-purple-500 to-purple-100 p-4 rounded-lg">
                  <h3 className="text-sm font-medium mb-2">{services[i].title}</h3>
                  <p className="text-xs text-gray-600">
                    {services[i].description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
