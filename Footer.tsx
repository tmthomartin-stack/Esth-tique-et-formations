import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Sparkles,
  GraduationCap,
  Calendar,
  Star
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Soins Esthétiques', href: '/soins' },
    { name: 'Formations', href: '/formations' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'À propos', href: '/apropos' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    { name: 'Cils & Sourcils', href: '/soins#cils-sourcils' },
    { name: 'Soins Visage', href: '/soins#visage' },
    { name: 'Rajeunissement', href: '/soins#rajeunissement' },
    { name: 'Massages', href: '/soins#massages' },
    { name: 'Ongles', href: '/soins#ongles' },
    { name: 'Maquillage', href: '/soins#maquillage' },
  ]

  const formations = [
    { name: 'Formation Base', href: '/formations#base' },
    { name: 'Perfectionnement', href: '/formations#perfectionnement' },
    { name: 'Business Onglerie', href: '/formations#business' },
    { name: 'Planning Sessions', href: '/formations#planning' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-soft to-rose-deep rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-rose-poudre rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-rose-deep">50+</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">
                  Esthéticienne
                </h3>
                <p className="text-sm text-gray-300 -mt-1">
                  Multi-Spécialiste
                </p>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Découvrez 50+ services esthétiques uniques et formations professionnelles 
              en onglerie. Votre référence beauté avec des techniques avancées et 
              une approche personnalisée.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                className="w-10 h-10 bg-rose-soft/20 rounded-full flex items-center justify-center hover:bg-rose-soft hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                className="w-10 h-10 bg-rose-soft/20 rounded-full flex items-center justify-center hover:bg-rose-soft hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-rose-soft">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-rose-soft transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-rose-soft">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-rose-soft transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Formations */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-rose-soft">
              Contact & Formations
            </h4>
            <div className="space-y-4">
              <div className="space-y-3">
                <a
                  href="tel:0619698984"
                  className="flex items-center space-x-3 text-gray-300 hover:text-rose-soft transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>06 19 69 89 84</span>
                </a>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>Votre région</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <Clock className="w-4 h-4 mt-0.5" />
                  <div>
                    <p>Lun-Ven: 9h-19h</p>
                    <p>Sam: 9h-17h</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-700">
                <h5 className="font-medium mb-3 text-rose-soft">Formations</h5>
                <ul className="space-y-2">
                  {formations.map((formation) => (
                    <li key={formation.name}>
                      <Link
                        href={formation.href}
                        className="text-gray-300 hover:text-rose-soft transition-colors text-sm"
                      >
                        {formation.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold mb-2">
                Prête à révéler votre beauté ?
              </h3>
              <p className="text-gray-300">
                Réservez votre soin ou inscrivez-vous à une formation
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Button asChild>
                <Link href="/reservation">
                  <Calendar className="w-4 h-4 mr-2" />
                  Réserver un soin
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/formations">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Découvrir les formations
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <p>&copy; {currentYear} Esthéticienne Multi-Spécialiste</p>
              <span>•</span>
              <Link href="/mentions-legales" className="hover:text-rose-soft transition-colors">
                Mentions légales
              </Link>
              <span>•</span>
              <Link href="/confidentialite" className="hover:text-rose-soft transition-colors">
                Confidentialité
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="success" className="text-xs">
                <Star className="w-3 h-3 mr-1" />
                50+ Services
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Formations Certifiantes
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


