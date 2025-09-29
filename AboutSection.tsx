'use client'

import React from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { 
  Award, 
  Users, 
  Star, 
  Heart,
  Sparkles,
  GraduationCap,
  Target,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar
} from 'lucide-react'
import { motion } from 'framer-motion'

const AboutSection = () => {
  const stats = [
    { number: '10+', label: 'Années d\'expérience', icon: Award },
    { number: '50+', label: 'Techniques maîtrisées', icon: Sparkles },
    { number: '1000+', label: 'Clientes satisfaites', icon: Users },
    { number: '200+', label: 'Élèves formées', icon: GraduationCap },
    { number: '5★', label: 'Note moyenne', icon: Star },
    { number: '100%', label: 'Satisfaction', icon: Heart }
  ]

  const specialities = [
    {
      title: 'Head Spa japonais',
      description: 'Technique unique de relaxation du cuir chevelu',
      icon: '🌸',
      isRare: true
    },
    {
      title: 'BB Glow révolutionnaire',
      description: 'Traitement pour un teint parfait et uniforme',
      icon: '✨',
      isRare: true
    },
    {
      title: 'Volume russe',
      description: 'Technique avancée d\'extensions de cils',
      icon: '💎',
      isRare: true
    },
    {
      title: 'Lifting colombien',
      description: 'Modelage corporel unique et efficace',
      icon: '🌺',
      isRare: true
    },
    {
      title: 'Changement couleur yeux',
      description: 'Technique sécurisée et spectaculaire',
      icon: '👁️',
      isRare: true
    },
    {
      title: 'Formations certifiantes',
      description: 'Transmission de savoir-faire professionnel',
      icon: '🎓',
      isRare: false
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Une passion authentique pour l\'esthétique et le bien-être de mes clientes',
      color: 'from-rose-soft to-rose-deep'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Un engagement constant vers l\'excellence et l\'innovation',
      color: 'from-rose-poudre to-rose-soft'
    },
    {
      icon: Users,
      title: 'Bienveillance',
      description: 'Une approche humaine et bienveillante pour chaque cliente',
      color: 'from-rose-light to-rose-poudre'
    },
    {
      icon: Award,
      title: 'Expertise',
      description: 'Une expertise reconnue avec plus de 50 techniques maîtrisées',
      color: 'from-rose-soft to-rose-deep'
    }
  ]

  const testimonials = [
    {
      name: 'Marie L.',
      service: 'BB Glow',
      comment: 'Une professionnelle exceptionnelle ! Son expertise et sa bienveillance font toute la différence.',
      rating: 5
    },
    {
      name: 'Sophie M.',
      service: 'Volume russe',
      comment: 'Techniques parfaites et résultat au-delà de mes attentes. Je recommande vivement !',
      rating: 5
    },
    {
      name: 'Claire D.',
      service: 'Head Spa japonais',
      comment: 'Une expérience unique et relaxante. Une vraie artiste de l\'esthétique !',
      rating: 5
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
              Mon{' '}
              <span className="text-gradient">parcours</span> et ma passion
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Depuis plus de 10 ans, je me consacre à l'art de l'esthétique avec une passion 
              inébranlable. Mon objectif : révéler la beauté naturelle de chaque femme et 
              transmettre mon savoir-faire aux futures professionnelles.
            </p>
            <div className="bg-gradient-to-r from-rose-poudre to-rose-light rounded-2xl p-8">
              <p className="text-lg text-gray-700 italic leading-relaxed">
                "L'esthétique n'est pas seulement un métier, c'est une passion qui me permet 
                de révéler la beauté qui sommeille en chaque femme. Chaque soin est une œuvre 
                d'art, chaque formation une transmission de savoir-faire précieux."
              </p>
              <div className="mt-4 text-rose-deep font-semibold">
                - Votre esthéticienne multi-spécialiste
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
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

        {/* Specialities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-gray-800 mb-4">
              Mes{' '}
              <span className="text-gradient">spécialités</span> rares
            </h3>
            <p className="text-lg text-gray-600">
              Des techniques uniques que vous ne trouverez nulle part ailleurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialities.map((speciality, index) => (
              <motion.div
                key={speciality.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center group hover:shadow-rose-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{speciality.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    {speciality.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {speciality.description}
                  </p>
                  {speciality.isRare && (
                    <Badge variant="success" className="text-xs">
                      <Star className="w-3 h-3 mr-1" />
                      Spécialité rare
                    </Badge>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-gray-800 mb-4">
              Mes{' '}
              <span className="text-gradient">valeurs</span>
            </h3>
            <p className="text-lg text-gray-600">
              Les principes qui guident mon approche professionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 h-full">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-3">
                          {value.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-gray-800 mb-4">
              Ce que disent mes{' '}
              <span className="text-gradient">clientes</span>
            </h3>
            <p className="text-lg text-gray-600">
              Leurs témoignages sont ma plus belle récompense
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-white to-rose-poudre/10">
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
                      <div className="text-sm text-gray-500">Cliente satisfaite</div>
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
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-rose-poudre to-rose-light rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
              Prête à découvrir{' '}
              <span className="text-gradient">mon univers</span> ?
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Rejoignez mes clientes satisfaites et découvrez des soins exceptionnels 
              ou des formations professionnelles de qualité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/reservation">
                  <Calendar className="w-5 h-5 mr-2" />
                  Réserver un soin
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/formations">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Découvrir les formations
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Me contacter
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection


