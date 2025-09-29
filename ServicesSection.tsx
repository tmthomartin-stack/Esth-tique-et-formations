'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { serviceCategories } from '@/lib/data'
import { 
  ArrowRight, 
  Star, 
  Clock, 
  Euro,
  Sparkles
} from 'lucide-react'
import { motion } from 'framer-motion'
import { formatPrice } from '@/lib/utils'

const ServicesSection = () => {
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
            <Sparkles className="w-4 h-4 mr-2" />
            50+ Services Uniques
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
            Des techniques{' '}
            <span className="text-gradient">rares et avancées</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de services esthétiques, 
            des spécialités uniques aux techniques les plus avancées 
            pour révéler votre beauté naturelle.
          </p>
        </motion.div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group cursor-pointer overflow-hidden h-full">
                <div className={`h-48 bg-gradient-to-br ${category.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {category.services.length} services
                    </p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="success" className="bg-white/20 text-white border-white/30">
                      {category.services.length} services
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Popular Services */}
                  <div className="space-y-2 mb-6">
                    {category.services
                      .filter(service => service.isPopular)
                      .slice(0, 3)
                      .map((service) => (
                        <div key={service.id} className="flex items-center justify-between text-sm">
                          <span className="text-gray-700">{service.name}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-rose-deep font-semibold">
                              {formatPrice(service.price)}
                            </span>
                            <Clock className="w-3 h-3 text-gray-400" />
                            <span className="text-gray-400">{service.duration}min</span>
                          </div>
                        </div>
                      ))}
                  </div>
                  
                  <Button className="w-full group-hover:bg-rose-deep transition-colors">
                    Découvrir {category.name}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Specialties Highlight */}
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
                <Star className="w-4 h-4 mr-2" />
                Spécialités Rares
              </Badge>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
                Des techniques{' '}
                <span className="text-gradient">uniques</span> en région
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Découvrez des spécialités rares que vous ne trouverez nulle part ailleurs : 
                Head Spa japonais, BB Glow révolutionnaire, Lifting colombien, 
                changement de couleur des yeux...
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-rose-soft" />
                  <span className="font-medium">Head Spa japonais</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-rose-soft" />
                  <span className="font-medium">BB Glow</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-rose-soft" />
                  <span className="font-medium">Volume russe</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-rose-soft" />
                  <span className="font-medium">Lifting colombien</span>
                </div>
              </div>
              <Button size="lg" asChild>
                <Link href="/soins">
                  Voir tous les services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-rose-deep">50+</div>
                    <div className="text-sm text-gray-600">Services</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-rose-deep">1000+</div>
                    <div className="text-sm text-gray-600">Clientes</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-rose-deep">5★</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-rose-deep">10+</div>
                    <div className="text-sm text-gray-600">Années exp.</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-rose-soft/30 rounded-full animate-bounce-gentle"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-rose-poudre/40 rounded-full animate-float"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection


