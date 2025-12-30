import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  Calculator,
  Building2,
  FileText,
  TrendingUp,
  Users,
  Scale,
  Receipt,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react"

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen pt-15">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/10 pb-5">
          {/* Larger, more prominent organic shapes */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 pt-16 pb-16 lg:pt-24 relative z-10">
            {/* Row 1: Badge + Heading (Full Width) */}
            <div className="mb-12">
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Sparkles className="h-4 w-4" />
                  Trusted by 150+ Global Businesses
                </div>
              </div>
              <h1 className="text-7xl lg:text-8xl font-bold text-balance leading-[1.1] bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
                Corporate Advisory
                <br />
                <span className="text-primary">Redefined</span>
              </h1>
            </div>

            {/* Row 2: Two Columns */}
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Column 1: Description + Buttons */}
              <div className="lg:col-span-2">
                <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                  75+ years of combined expertise in accounting, financial, legal, and business advisory services
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild className="text-base shadow-lg shadow-primary/20">
                    <Link href="/contact">Book Consultation</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-base bg-transparent">
                    <Link href="/services">Explore Services</Link>
                  </Button>
                </div>
              </div>

              {/* Column 2: Stats Card */}
              <div className="lg:col-span-3">
                <Card className="border-2 shadow-2xl bg-white/90 backdrop-blur-sm w-full max-w-2xl">
                  <CardContent className="p-2">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent mb-2">
                          75+
                        </div>
                        <div className="text-sm font-medium text-muted-foreground">Years Combined Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent mb-2">
                          150+
                        </div>
                        <div className="text-sm font-medium text-muted-foreground">Active Clients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent mb-2">
                          100%
                        </div>
                        <div className="text-sm font-medium text-muted-foreground">Hong Kong Based</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-15 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-secondary/5 to-transparent" />
          <div className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-[100px]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-10xl mb-10 text-center">
              <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
                WHAT WE DO
              </div>
              <h2 className="text-6xl lg:text-7xl font-bold mb-2 text-balance leading-tight">
                Comprehensive Corporate Solutions
              </h2>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-6xl mx-auto">
                From startups to established enterprises, we provide end-to-end advisory services tailored to your
                business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-6">
              <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 lg:col-span-3 bg-gradient-to-br from-white to-primary/5">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                    <Calculator className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Accounting & Payroll</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Professional bookkeeping, financial statements, and payroll management to keep your business
                    compliant and organized.
                  </p>
                  <Link
                    href="/services/accounting"
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-300 hover:-translate-y-2 border-2 hover:border-secondary/20 lg:col-span-4 bg-gradient-to-br from-white to-secondary/5">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-secondary/20">
                    <Building2 className="h-7 w-7 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Business Advisory</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Strategic guidance on company structuring, IPOs, internal controls, and fraud investigation
                    services.
                  </p>
                  <Link
                    href="/services/business-advisory"
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/20 lg:col-span-4 bg-gradient-to-br from-white to-accent/5">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-accent/20">
                    <FileText className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Corporate Secretarial</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Company formation, statutory compliance, maintenance of records, and registered office services.
                  </p>
                  <Link
                    href="/services/corporate-secretarial"
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 lg:col-span-3 bg-gradient-to-br from-white to-primary/5">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                    <TrendingUp className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Financial Advisory</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Expert support for M&A, due diligence, financial modeling, and corporate restructuring initiatives.
                  </p>
                  <Link
                    href="/services/financial-advisory"
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-300 hover:-translate-y-2 border-2 hover:border-secondary/20 lg:col-span-3 bg-gradient-to-br from-white to-secondary/5">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-secondary/20">
                    <Users className="h-7 w-7 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Human Resources Advisory</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Professional recruitment services to help you build the right team for your organization.
                  </p>
                  <Link
                    href="/services/hr-advisory"
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/20 lg:col-span-4 bg-gradient-to-br from-white to-accent/5">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-accent/20">
                    <Scale className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Legal Counselling</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Comprehensive legal support including conveyancing, IP rights, due diligence, and notary services.
                  </p>
                  <Link
                    href="/services/legal"
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 lg:col-span-7 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
                <CardContent className="p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                      <Receipt className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Tax Advisory</h3>
                    <p className="text-muted-foreground mb-6 md:mb-0 leading-relaxed">
                      Strategic tax planning and compliance services for Hong Kong and PRC tax obligations.
                    </p>
                  </div>
                  <Link
                    href="/services/tax-advisory"
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all md:ml-8"
                  >
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-15 relative overflow-hidden bg-gradient-to-br from-foreground via-foreground to-foreground/90">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-white">
                <div className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6">
                  WHY BONAFIDA
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
                  Your Trusted Partner in Hong Kong
                </h2>
                <p className="text-xl text-white/80 text-pretty leading-relaxed">
                  We combine deep local expertise with comprehensive services to help your business thrive in Hong
                  Kong's dynamic market
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all">
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                        <CheckCircle2 className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="text-white">
                      <h3 className="text-lg font-bold mb-1">Combined Expertise</h3>
                      <p className="text-sm text-white/80 leading-snug">
                        Over 75 years of combined experience across multiple disciplines for comprehensive solutions
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all">
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                        <CheckCircle2 className="h-6 w-6 text-secondary-foreground" />
                      </div>
                    </div>
                    <div className="text-white">
                      <h3 className="text-lg font-bold mb-1">Comprehensive Services</h3>
                      <p className="text-sm text-white/80 leading-snug">
                        All corporate services under one roof, streamlining your business operations
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all">
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                        <CheckCircle2 className="h-6 w-6 text-accent-foreground" />
                      </div>
                    </div>
                    <div className="text-white">
                      <h3 className="text-lg font-bold mb-1">Local Market Knowledge</h3>
                      <p className="text-sm text-white/80 leading-snug">
                        Deep understanding of Hong Kong regulations, culture, and business dynamics
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-15 relative overflow-hidden bg-gradient-to-br from-primary to-secondary">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-gray-100 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center text-white">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
                Ready to Elevate Your Business?
              </h2>
              <p className="text-xl mb-10 text-white/90 text-pretty leading-relaxed max-w-3xl mx-auto">
                Let's discuss how our expertise can help you achieve your corporate goals
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="text-base shadow-xl">
                  <Link href="/contact">Book Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
