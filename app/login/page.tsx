import PageTemplate from "@/components/page-template"
import CTASection from "@/components/cta-section"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <>
    <PageTemplate
        title="Login and get started"
        description="Please sign in to your account to continue. If you don’t have an account, you can create one in just a few clicks.">

        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
        <LoginForm />
        </div>
        </div>

      </PageTemplate>

      <CTASection />
    </>
  )
}
