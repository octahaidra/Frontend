import PageTemplate from "@/components/page-template"
import CTASection from "@/components/cta-section"
import { SignupForm } from "@/components/signup-form"
import { Sign } from "crypto"

export default function SignupPage() {
  return (
    <>
    <PageTemplate
        title="Sign Up and Start exploring Octa's AI Apps"
        description="Please enter your details to create an account.">

        <div className="flex w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
        <SignupForm/>
        </div>
        </div>

      </PageTemplate>

      <CTASection />
    </>
  )
}
