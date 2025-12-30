import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calculator, Building2, FileText, TrendingUp, Users, Scale, Receipt, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Calculator,
      title: "Accounting & Payroll",
      description:
        "Professional bookkeeping, financial statements, accounting system setup, and comprehensive payroll services.",
      href: "/services/accounting",
      color: "primary",
    },
    {
      icon: Building2,
      title: "Business Advisory",
      description:
        "Strategic guidance on company structuring, winding up, IPOs, fraud investigation, and internal control reviews.",
      href: "/services/business-advisory",
      color: "secondary",
    },
    {
      icon: FileText,
      title: "Corporate Secretarial",
      description:
        "Company formation, statutory compliance, maintenance of records, and registered office address services.",
      href: "/services/corporate-secretarial",
      color: "accent",
    },
    {
      icon: TrendingUp,
      title: "Financial Advisory",
      description: "Expert support for budgeting, financial modeling, M&A, due diligence, and corporate restructuring.",
      href: "/services/financial-advisory",
      color: "primary",
    },
    {
      icon: Users,
      title: "Human Resources Advisory",
      description: "Professional recruitment services to help you build the right team for your organization.",
      href: "/services/hr-advisory",
      color: "secondary",
    },
    {
      icon: Scale,
      title: "Legal Counselling",
      description: "Comprehensive legal support including conveyancing, IP rights, due diligence, and notary services.",
      href: "/services/legal",
      color: "accent",
    },
    {
      icon: Receipt,
      title: "Tax Advisory",
      description: "Strategic tax planning, compliance, and review services for Hong Kong and PRC tax obligations.",
      href: "/services/tax-advisory",
      color: "primary",
    },
  ]

  return (
    <>
      <Navigation />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary/5 to-secondary/5 py-20 lg:py-32">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">Comprehensive Corporate Solutions</h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                From accounting and legal services to strategic business advisory, we provide integrated solutions
                tailored to your unique business needs. Our multidisciplinary approach ensures seamless coordination
                across all aspects of your corporate requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card
                  key={service.href}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-14 h-14 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:bg-${service.color} group-hover:text-${service.color}-foreground transition-colors`}
                    >
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                    <Button asChild variant="ghost" className="group/btn p-0 h-auto">
                      <Link
                        href={service.href}
                        className="inline-flex items-center text-sm font-medium text-primary hover:gap-2 transition-all"
                      >
                        View Details{" "}
                        <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Not Sure Which Service You Need?</h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
                Our team can help you identify the right solutions for your business. Schedule a consultation to discuss
                your specific requirements.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
