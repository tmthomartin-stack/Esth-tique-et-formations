'use client'

import React from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { 
  Award, 
  Users, 
  Star, 
  CheckCircle,
  BookOpen,
  Target,
  TrendingUp,
  Heart,
  Shield,
  Zap
} from 'lucide-react'
import { motion } from 'framer-motion'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Expertise Reconnue',
      description: 'Plus de 10 ans d\'expérience et 50+ techniques maîtrisées',
      color: 'from-rose-soft to-rose-deep'
    },
    {
      icon: Users,
      title: 'Suivi Personnalisé',
      description: 'Accompagnement individuel et conseils business personnalisés',
      color: 'from-rose-poudre to-rose-soft'
    },
    {
      icon: BookOpen,
      title: 'Formation Complète',
      description: 'Matériel professionnel inclus et support de cours détaillé',
      color: 'from-rose-light to-rose-poudre'
    },
    {
      icon: Target,
      title: 'Certification Garantie',
      description: 'Certificat reconnu et suivi post-formation de 6 mois',
      color: 'from-rose-soft to-rose-deep'
    },
    {
      icon: TrendingUp,
      title: 'Développement Business',
      description: 'Conseils marketing et développement d\'activité inclus',
      color: 'from-rose-poudre to-rose-soft'
    },
    {
      icon: Heart,
      title: 'Passion & Bienveillance',
      description: 'Approche humaine et bienveillante pour votre réussite',
      color: 'from-rose-light to-rose-poudre'
    }
  ]

  const stats = [
    { number: '200+', label: 'Élèves formées', icon: Users },
    { number: '100%', label: 'Certification', icon: Award },
    { number: '5★', label: 'Satisfaction', icon: Star },
    { number: '10+', label: 'Années expérience', icon: Shield }
  ]

  const testimonials = [
    {
      name: 'Sophie M.',
      formation: 'Formation Base',
      comment: 'Formation exceptionnelle ! J\'ai appris des techniques que je ne connaissais pas et j\'ai pu développer mon activité rapidement.',
      rating: 5
    },
    {
      name: 'Laura P.',
      formation: 'Perfectionnement',
      comment: 'Le suivi personnalisé fait toute la différence. J\'ai pu perfectionner mes techniques et développer mon style unique.',
      rating: 5
    },
    {
      name: 'Emma R.',
      formation: 'Business Onglerie',
      comment: 'Grâce à la formation business, j\'ai pu structurer mon activité et multiplier mes revenus par 3 en 6 mois !',
      rating: 5
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-rose-poudre/10 to-rose-light/10">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Award className="w-4 h-4 mr-2" />
            Pourquoi nous choisir ?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
            Une expertise{' '}
            <span className="text-gradient">reconnue</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Avec plus de 10 ans d'expérience et 200+ élèves formées, 
            nous vous accompagnons vers le succès avec des méthodes éprouvées.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-soft to-rose-deep rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-rose-deep mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 text-center group hover:shadow-rose-lg transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-gray-800 text-center mb-12">
            Ce que disent nos{' '}
            <span className="text-gradient">anciennes élèves</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 bg-white/80 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-rose-soft text-rose-soft" />
                      ))}
                    </div>
                    <Badge variant="outline" className="ml-auto text-xs">
                      {testimonial.formation}
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
                      <div className="text-sm text-gray-500">Ancienne élève</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-display font-bold text-gray-800 text-center mb-12">
            Votre parcours vers le{' '}
            <span className="text-gradient">succès</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-soft to-rose-deep rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Inscription</h4>
              <p className="text-sm text-gray-600">Choisissez votre formation et réservez votre place</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-poudre to-rose-soft rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-deep">2</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Formation</h4>
              <p className="text-sm text-gray-600">Apprenez les techniques avec notre expert</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-light to-rose-poudre rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-deep">3</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Certification</h4>
              <p className="text-sm text-gray-600">Obtenez votre certificat reconnu</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-soft to-rose-deep rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Succès</h4>
              <p className="text-sm text-gray-600">Développez votre activité avec notre suivi</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs

