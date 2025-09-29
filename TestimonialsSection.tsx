'use client'

import React from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { testimonials } from '@/lib/data'
import { Star, Quote, Users, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

const TestimonialsSection = () => {
  const clientTestimonials = testimonials.filter(t => t.type === 'client')
  const studentTestimonials = testimonials.filter(t => t.type === 'student')

  return (
    <section className="section-padding bg-gradient-to-br from-rose-poudre/20 to-rose-light/20">
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
            <Quote className="w-4 h-4 mr-2" />
            Témoignages
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
            Ce que disent nos{' '}
            <span className="text-gradient">clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les retours de nos clientes satisfaites et de nos anciennes élèves 
            qui ont transformé leur vie grâce à nos services et formations.
          </p>
        </motion.div>

        {/* Client Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3">
              <Users className="w-5 h-5 text-rose-soft" />
              <span className="font-semibold text-gray-800">Clientes Satisfaites</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="testimonial-card h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-rose-soft text-rose-soft" />
                      ))}
                    </div>
                    <Badge variant="outline" className="ml-auto text-xs">
                      {testimonial.service}
                    </Badge>
                  </div>
                  
                  <blockquote className="text-gray-700 mb-4 leading-relaxed">
                    "{testimonial.comment}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-rose-soft to-rose-deep rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">Cliente</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Student Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3">
              <GraduationCap className="w-5 h-5 text-rose-soft" />
              <span className="font-semibold text-gray-800">Anciennes Élèves</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studentTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="testimonial-card h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-rose-soft text-rose-soft" />
                      ))}
                    </div>
                    <Badge variant="success" className="ml-auto text-xs">
                      {testimonial.service}
                    </Badge>
                  </div>
                  
                  <blockquote className="text-gray-700 mb-4 leading-relaxed">
                    "{testimonial.comment}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-rose-poudre to-rose-soft rounded-full flex items-center justify-center text-rose-deep font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">Ancienne élève</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
              Prête à rejoindre nos{' '}
              <span className="text-gradient">clientes satisfaites</span> ?
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Découvrez pourquoi plus de 1000 clientes nous font confiance 
              pour leurs soins esthétiques et leurs formations professionnelles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/reservation"
                className="inline-flex items-center justify-center bg-rose-soft hover:bg-rose-deep text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Réserver mon soin
              </a>
              <a
                href="/formations"
                className="inline-flex items-center justify-center border-2 border-rose-soft text-rose-deep hover:bg-rose-soft hover:text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
              >
                Découvrir les formations
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection


