'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  Sparkles, 
  GraduationCap, 
  Images, 
  User, 
  Phone,
  Calendar
} from 'lucide-react'
import { cn } from '@/lib/utils'

const MobileNav = () => {
  const pathname = usePathname()

  const navItems = [
    {
      name: 'Accueil',
      href: '/',
      icon: Home,
      active: pathname === '/'
    },
    {
      name: 'Soins',
      href: '/soins',
      icon: Sparkles,
      active: pathname.startsWith('/soins')
    },
    {
      name: 'Formations',
      href: '/formations',
      icon: GraduationCap,
      active: pathname.startsWith('/formations')
    },
    {
      name: 'Galerie',
      href: '/galerie',
      icon: Images,
      active: pathname.startsWith('/galerie')
    },
    {
      name: 'Profil',
      href: '/apropos',
      icon: User,
      active: pathname.startsWith('/apropos')
    }
  ]

  return (
    <nav className="mobile-nav">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'mobile-nav-item',
                item.active && 'active'
              )}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </div>
      
      {/* Quick CTA */}
      <div className="mt-2 pt-2 border-t border-rose-poudre/20">
        <div className="flex space-x-2">
          <Link
            href="/reservation"
            className="flex-1 bg-rose-soft text-white text-center py-2 px-3 rounded-lg text-xs font-medium hover:bg-rose-deep transition-colors"
          >
            <Calendar className="w-3 h-3 inline mr-1" />
            Réserver
          </Link>
          <a
            href="tel:0619698984"
            className="flex-1 bg-rose-poudre text-rose-deep text-center py-2 px-3 rounded-lg text-xs font-medium hover:bg-rose-light transition-colors"
          >
            <Phone className="w-3 h-3 inline mr-1" />
            Appeler
          </a>
        </div>
      </div>
    </nav>
  )
}

export default MobileNav


