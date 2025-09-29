'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Menu, X, Phone, Calendar, GraduationCap, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Soins Esthétiques', href: '/soins' },
    { name: 'Formations', href: '/formations' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'À propos', href: '/apropos' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-rose-poudre/20' 
        : 'bg-transparent'
    )}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-soft to-rose-deep rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-rose-poudre rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-rose-deep">50+</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-display font-bold text-gray-800">
                Esthéticienne
              </h1>
              <p className="text-sm text-gray-600 -mt-1">
                Multi-Spécialiste
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/formations">
                <GraduationCap className="w-4 h-4 mr-2" />
                Formations
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/reservation">
                <Calendar className="w-4 h-4 mr-2" />
                Réserver
              </Link>
            </Button>
            <a
              href="tel:0619698984"
              className="flex items-center space-x-2 text-rose-deep hover:text-rose-soft transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">06 19 69 89 84</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-rose-deep hover:bg-rose-poudre transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-rose-poudre/20 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-rose-deep font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-rose-poudre/20 space-y-3">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/formations">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Formations
                  </Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/reservation">
                    <Calendar className="w-4 h-4 mr-2" />
                    Réserver
                  </Link>
                </Button>
                <a
                  href="tel:0619698984"
                  className="flex items-center justify-center space-x-2 text-rose-deep hover:text-rose-soft transition-colors py-2"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">06 19 69 89 84</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header


