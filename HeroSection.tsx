'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { 
  Sparkles, 
  GraduationCap, 
  Star, 
  ArrowRight, 
  Phone,
  Calendar,
  Users,
  Award
} from 'lucide-react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Floating Particles */}
      <div className="floating-particles">
        <div className="particle w-4 h-4"></div>
        <div className="particle w-6 h-6"></div>
        <div className="particle w-3 h-3"></div>
        <div className="particle w-5 h-5"></div>
        <div className="particle w-4 h-4"></div>
        <div className="particle w-7 h-7"></div>
        <div className="particle w-3 h-3"></div>
        <div className="particle w-6 h-6"></div>
        <div className="particle w-4 h-4"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              <Badge variant="success" className="text-sm px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                50+ Services Uniques
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Formations Certifiantes
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-800 mb-6 leading-tight">
              Votre{' '}
              <span className="text-gradient">
                référence beauté
              </span>
              <br />
              multi-spécialiste
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Découvrez des techniques rares et avancées : Head Spa japonais, 
              BB Glow, Volume russe, Lifting colombien... Plus de 50 services 
              uniques pour révéler votre beauté naturelle.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" asChild className="group">
                <Link href="/reservation">
                  <Calendar className="w-5 h-5 mr-2" />
                  Réserver mon soin
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="group">
                <Link href="/formations">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Devenir professionnelle
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-gray-600">
              <a
                href="tel:0619698984"
                className="flex items-center space-x-2 hover:text-rose-deep transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">06 19 69 89 84</span>
              </a>
              <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Plus de 1000 clientes satisfaites</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Double Activity Split */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Soins Esthétiques Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="card p-8 text-center group cursor-pointer bg-gradient-to-br from-white to-rose-poudre/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-soft to-rose-deep rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-800 mb-3">
                  Soins Esthétiques
                </h3>
                <p className="text-gray-600 mb-6">
                  Techniques avancées et spécialités rares pour révéler votre beauté naturelle
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Star className="w-4 h-4 text-rose-soft" />
                    <span>Head Spa japonais</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Star className="w-4 h-4 text-rose-soft" />
                    <span>BB Glow révolutionnaire</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Star className="w-4 h-4 text-rose-soft" />
                    <span>Volume russe</span>
                  </div>
                </div>
                <Button className="w-full group-hover:bg-rose-deep transition-colors">
                  Découvrir les soins
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Formations Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                transition={{ duration: 0.3 }}
                className="card p-8 text-center group cursor-pointer bg-gradient-to-br from-white to-rose-light/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-poudre to-rose-soft rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-rose-deep" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-800 mb-3">
                  Formations Pro
                </h3>
                <p className="text-gray-600 mb-6">
                  Devenez formatrice professionnelle en onglerie avec nos formations certifiantes
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Award className="w-4 h-4 text-rose-soft" />
                    <span>Formation base</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Award className="w-4 h-4 text-rose-soft" />
                    <span>Perfectionnement</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Award className="w-4 h-4 text-rose-soft" />
                    <span>Business onglerie</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-rose-soft group-hover:text-white transition-colors">
                  Découvrir les formations
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-rose-soft/30 rounded-full animate-bounce-gentle"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-rose-poudre/40 rounded-full animate-float"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-rose-light/50 rounded-full animate-pulse-soft"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-rose-soft rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-rose-soft rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection


