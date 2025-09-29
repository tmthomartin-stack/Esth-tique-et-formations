'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { formations } from '@/lib/data'
import { 
  GraduationCap, 
  Clock, 
  Users, 
  Award, 
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'
import { motion } from 'framer-motion'

const FormationsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <GraduationCap className="w-4 h-4 mr-2" />
            Formations Professionnelles
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
            Devenez{' '}
            <span className="text-gradient">formatrice professionnelle</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transformez votre passion en expertise professionnelle avec nos formations 
            certifiantes en onglerie. Apprenez les techniques les plus avancées et 
            développez votre activité.
          </p>
        </motion.div>

        {/* Formations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {formations.map((formation, index) => (
            <motion.div
              key={formation.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group cursor-pointer overflow-hidden">
                <div className="p-8">
                  {/* Level Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <Badge 
                      variant={formation.level === 'Débutant' ? 'secondary' : formation.level === 'Intermédiaire' ? 'default' : 'outline'}
                      className="text-xs"
                    >
                      {formation.level}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{formation.duration}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-display font-bold text-gray-800 mb-3 group-hover:text-rose-deep transition-colors">
                    {formation.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {formation.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {formation.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-rose-soft flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-rose-deep mb-2">
                      {formation.price}
                    </div>
                    <p className="text-sm text-gray-500">
                      Formation complète incluse
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full group-hover:bg-rose-deep transition-colors"
                    asChild
                  >
                    <Link href={`/formations#${formation.id}`}>
                      Découvrir la formation
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Our Formations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-rose-poudre to-rose-light rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="success" className="mb-4">
                <Award className="w-4 h-4 mr-2" />
                Pourquoi nous choisir ?
              </Badge>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-6">
                Une expertise{' '}
                <span className="text-gradient">reconnue</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Avec plus de 10 ans d'expérience et 50+ techniques maîtrisées, 
                nous vous formons aux méthodes les plus avancées du marché.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-rose-deep" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">200+</div>
                  <div className="text-sm text-gray-600">Élèves formées</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-rose-deep" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">100%</div>
                  <div className="text-sm text-gray-600">Certification</div>
                </div>
              </div>

              <Button size="lg" asChild>
                <Link href="/formations">
                  Voir le planning des formations
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-rose-soft rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">Techniques Avancées</h4>
                </div>
                <p className="text-gray-600">
                  Apprenez les techniques les plus récentes et demandées du marché : 
                  Volume russe, BB Glow, Head Spa japonais...
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-rose-poudre rounded-full flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-rose-deep" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">Formation Complète</h4>
                </div>
                <p className="text-gray-600">
                  Matériel professionnel inclus, support de cours, suivi personnalisé 
                  et certification reconnue.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-rose-light rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-rose-deep" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">Suivi Personnalisé</h4>
                </div>
                <p className="text-gray-600">
                  Accompagnement individuel et conseils business pour développer 
                  votre activité professionnelle.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FormationsSection


