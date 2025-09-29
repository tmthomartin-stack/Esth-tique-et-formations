'use client'

import React from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { serviceCategories } from '@/lib/data'
import { ArrowRight, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const ServiceCategories = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
            Explorez par{' '}
            <span className="text-gradient">catégorie</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Naviguez facilement dans nos services organisés par spécialité. 
            Chaque catégorie regroupe des techniques complémentaires pour votre beauté.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  
                  {/* Category Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">{category.icon}</span>
                    </div>
                  </div>

                  {/* Service Count Badge */}
                  <div className="absolute top-6 right-6">
                    <Badge variant="success" className="bg-white/20 text-white border-white/30">
                      {category.services.length} services
                    </Badge>
                  </div>

                  {/* Category Info */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-rose-poudre transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Popular Services Preview */}
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Services populaires :
                    </h4>
                    {category.services
                      .filter(service => service.isPopular)
                      .slice(0, 3)
                      .map((service) => (
                        <div key={service.id} className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-rose-soft" />
                            <span className="text-gray-700">{service.name}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-rose-deep font-semibold">
                            {service.price}€
                          </div>
                        </div>
                      ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Link href={`/soins#${category.id}`}>
                    <div className="w-full bg-rose-soft hover:bg-rose-deep text-white font-medium py-3 px-6 rounded-full text-center transition-all duration-300 transform group-hover:scale-105">
                      Découvrir {category.name}
                      <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
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
          className="mt-16 bg-gradient-to-r from-rose-poudre to-rose-light rounded-3xl p-8 md:p-12"
        >
          <div className="text-center">
            <Badge variant="success" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Spécialités Rares
            </Badge>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-6">
              Des techniques{' '}
              <span className="text-gradient">uniques</span> en région
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Découvrez des spécialités que vous ne trouverez nulle part ailleurs : 
              Head Spa japonais, BB Glow révolutionnaire, Lifting colombien, 
              changement de couleur des yeux...
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌸</span>
                </div>
                <h4 className="font-semibold text-gray-800">Head Spa japonais</h4>
                <p className="text-sm text-gray-600">Rituel de relaxation unique</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">✨</span>
                </div>
                <h4 className="font-semibold text-gray-800">BB Glow</h4>
                <p className="text-sm text-gray-600">Teint parfait révolutionnaire</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💎</span>
                </div>
                <h4 className="font-semibold text-gray-800">Volume russe</h4>
                <p className="text-sm text-gray-600">Technique cils avancée</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌺</span>
                </div>
                <h4 className="font-semibold text-gray-800">Lifting colombien</h4>
                <p className="text-sm text-gray-600">Modelage corporel unique</p>
              </div>
            </div>

            <Link href="/reservation">
              <div className="inline-flex items-center bg-rose-soft hover:bg-rose-deep text-white font-medium py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Réserver maintenant
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceCategories


