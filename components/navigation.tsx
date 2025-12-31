"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, ChevronDown } from "lucide-react"
import { useState } from "react"

const serviceLinks = [
  { href: "#", label: "Accounting & Payroll" },
  { href: "#", label: "Business Advisory" },
  { href: "#", label: "Corporate Secretarial" },
  { href: "#", label: "Financial Advisory" },
  { href: "#", label: "Human Resources Advisory" },
  { href: "#", label: "Legal Counselling" },
  { href: "#", label: "Tax Advisory" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-25">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 mx-auto lg:mx-0">
            <Image
              src="/images/logo-bonafida.png"
              alt="Bonafida Corporate Advisory Limited"
              width={300}
              height={80}
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-20">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {serviceLinks.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link href={service.href}>{service.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/team" className="text-sm font-medium hover:text-primary transition-colors">
              Team
            </Link>
            <Link href="/news" className="text-sm font-medium hover:text-primary transition-colors">
              News
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" asChild>
              <Link href="https://bonafida.admin.entitydesk.com" target="_blank" rel="noopener noreferrer">
                Login
              </Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button - Hidden, will be shown below logo */}
        </div>

        {/* Mobile Menu Button - Centered below logo */}
        <div className="lg:hidden flex justify-center pb-4">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium">
                Home
              </Link>
              
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-sm font-medium text-left flex items-center justify-between"
              >
                Services <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 flex flex-col gap-2">
                  {serviceLinks.map((service) => (
                    <Link key={service.href} href={service.href} className="text-sm">
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
              
              <Link href="/team" className="text-sm font-medium">
                Team
              </Link>
              <Link href="/news" className="text-sm font-medium">
                News
              </Link>
              <Link href="/contact" className="text-sm font-medium">
                Contact
              </Link>
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="https://bonafida.admin.entitydesk.com" target="_blank" rel="noopener noreferrer">
                  Login
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}