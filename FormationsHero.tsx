'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { 
  GraduationCap, 
  Award, 
  Users, 
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react'
import { motion } from 'framer-motion'

const FormationsHero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-rose-poudre/20 to-rose-light/20">
      <div className="container-custom">
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
                <Award className="w-4 h-4 mr-2" />
                Formations Certifiantes
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                200+ Élèves Formées
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-800 mb-6 leading-tight">
              Devenez{' '}
              <span className="text-gradient">
                formatrice professionnelle
              </span>
              <br />
              en onglerie
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transformez votre passion en expertise professionnelle. Apprenez les techniques 
              les plus avancées, développez votre business et créez votre activité indépendante 
              avec nos formations complètes et certifiantes.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-soft" />
                <span className="text-gray-700">Techniques avancées et tendances 2024</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-soft" />
                <span className="text-gray-700">Matériel professionnel inclus</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-soft" />
                <span className="text-gray-700">Suivi personnalisé et conseils business</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-soft" />
                <span className="text-gray-700">Certification reconnue</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" asChild className="group">
                <Link href="/reservation">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  S'inscrire à une formation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#programmes">
                  Voir les programmes
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-rose-deep mb-1">200+</div>
                <div className="text-sm text-gray-600">Élèves formées</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-deep mb-1">100%</div>
                <div className="text-sm text-gray-600">Certification</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-deep mb-1">5★</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Formation Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="space-y-6">
              {/* Formation Base Card */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-rose-poudre/20"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-soft to-rose-deep rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Formation Base</h3>
                    <p className="text-sm text-gray-600">3 jours • Débutant</p>
                  </div>
                  <Badge variant="success" className="ml-auto">Populaire</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Apprenez les fondamentaux de l'onglerie professionnelle avec les techniques 
                  essentielles pour débuter votre activité.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-rose-deep">Sur devis</span>
                  <Button size="sm" asChild>
                    <Link href="#base">Découvrir</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Formation Perfectionnement Card */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-rose-light/20"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-poudre to-rose-soft rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-rose-deep" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Perfectionnement</h3>
                    <p className="text-sm text-gray-600">2 jours • Intermédiaire</p>
                  </div>
                  <Badge variant="outline" className="ml-auto">Nouveau</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Perfectionnez vos techniques et découvrez les dernières tendances 
                  pour vous démarquer de la concurrence.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-rose-deep">Sur devis</span>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="#perfectionnement">Découvrir</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Formation Business Card */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-rose-soft/20"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-light to-rose-poudre rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-rose-deep" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Business Onglerie</h3>
                    <p className="text-sm text-gray-600">1 jour • Tous niveaux</p>
                  </div>
                  <Badge variant="secondary" className="ml-auto">Essentiel</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Développez votre activité et maximisez vos revenus avec nos conseils 
                  business et marketing spécialisés.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-rose-deep">Sur devis</span>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="#business">Découvrir</Link>
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-rose-soft/30 rounded-full animate-bounce-gentle"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-rose-poudre/40 rounded-full animate-float"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-rose-light/50 rounded-full animate-pulse-soft"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FormationsHero


