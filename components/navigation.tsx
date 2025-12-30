"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, ChevronDown } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-25">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
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
                <DropdownMenuItem asChild>
                  <Link href="/services/accounting">Accounting & Payroll</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/business-advisory">Business Advisory</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/corporate-secretarial">Corporate Secretarial</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/financial-advisory">Financial Advisory</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/hr-advisory">Human Resources Advisory</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/legal">Legal Counselling</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/tax-advisory">Tax Advisory</Link>
                </DropdownMenuItem>
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

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
              <Link href="/services" className="text-sm font-medium">
                Services
              </Link>
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
                <Link href="/login">Login</Link>
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
