'use client'

import React from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { formations } from '@/lib/data'
import { 
  GraduationCap, 
  Clock, 
  Users, 
  Award, 
  CheckCircle,
  ArrowRight,
  Star,
  BookOpen,
  Target,
  TrendingUp
} from 'lucide-react'
import { motion } from 'framer-motion'

const FormationsList = () => {
  const formationDetails = {
    'formation-base': {
      icon: GraduationCap,
      color: 'from-rose-soft to-rose-deep',
      bgColor: 'bg-rose-poudre/20',
      borderColor: 'border-rose-soft/20',
      modules: [
        'Anatomie de l\'ongle et physiologie',
        'Techniques de base : French, couleur, dégradé',
        'Pose et retrait des capsules',
        'Hygiène et sécurité',
        'Matériel professionnel et entretien',
        'Gestion clientèle et conseils'
      ],
      included: [
        'Kit de matériel professionnel complet',
        'Support de cours détaillé',
        'Certificat de formation',
        'Suivi post-formation 3 mois',
        'Accès groupe privé Facebook',
        'Liste de fournisseurs privilégiés'
      ],
      prerequisites: 'Aucun prérequis nécessaire',
      maxStudents: 6,
      duration: '3 jours (21h)',
      schedule: '9h-17h avec pause déjeuner'
    },
    'formation-perfectionnement': {
      icon: Award,
      color: 'from-rose-poudre to-rose-soft',
      bgColor: 'bg-rose-light/20',
      borderColor: 'border-rose-light/20',
      modules: [
        'Techniques avancées : 3D, nail art, chrome',
        'Tendances 2024 et créativité',
        'Correction et réparation',
        'Techniques de finition professionnelle',
        'Photographie et réseaux sociaux',
        'Développement de votre style'
      ],
      included: [
        'Kit perfectionnement (valeur 200€)',
        'Templates et modèles exclusifs',
        'Formation photo professionnelle',
        'Certificat perfectionnement',
        'Accès masterclass en ligne',
        'Coaching personnalisé 1 mois'
      ],
      prerequisites: 'Formation base ou expérience équivalente',
      maxStudents: 4,
      duration: '2 jours (14h)',
      schedule: '9h-17h avec pause déjeuner'
    },
    'formation-business': {
      icon: TrendingUp,
      color: 'from-rose-light to-rose-poudre',
      bgColor: 'bg-rose-soft/20',
      borderColor: 'border-rose-soft/20',
      modules: [
        'Création et développement d\'activité',
        'Marketing digital et réseaux sociaux',
        'Gestion financière et tarification',
        'Fidélisation et parrainage client',
        'Communication et vente',
        'Développement durable et éthique'
      ],
      included: [
        'Business plan personnalisé',
        'Templates marketing (valeur 150€)',
        'Formation réseaux sociaux',
        'Certificat business',
        'Accompagnement 6 mois',
        'Réseau professionnel exclusif'
      ],
      prerequisites: 'Tous niveaux',
      maxStudents: 8,
      duration: '1 jour (7h)',
      schedule: '9h-17h avec pause déjeuner'
    }
  }

  return (
    <section id="programmes" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
            Nos{' '}
            <span className="text-gradient">programmes</span> de formation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des formations complètes et progressives pour devenir une formatrice 
            professionnelle reconnue et développer votre activité indépendante.
          </p>
        </div>

        {/* Formations Grid */}
        <div className="space-y-12">
          {formations.map((formation, index) => {
            const details = formationDetails[formation.id as keyof typeof formationDetails]
            const Icon = details.icon

            return (
              <motion.div
                key={formation.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className={`overflow-hidden ${details.bgColor} ${details.borderColor} border-2`}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Info */}
                    <div className="lg:col-span-1 p-8">
                      <div className="text-center lg:text-left">
                        {/* Icon & Level */}
                        <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-br ${details.color} rounded-full flex items-center justify-center`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-display font-bold text-gray-800">
                              {formation.name}
                            </h3>
                            <Badge 
                              variant={formation.level === 'Débutant' ? 'secondary' : formation.level === 'Intermédiaire' ? 'default' : 'outline'}
                              className="mt-2"
                            >
                              {formation.level}
                            </Badge>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {formation.description}
                        </p>

                        {/* Key Info */}
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center space-x-3">
                            <Clock className="w-5 h-5 text-rose-soft" />
                            <span className="text-gray-700">{details.duration}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Users className="w-5 h-5 text-rose-soft" />
                            <span className="text-gray-700">Max {details.maxStudents} personnes</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <BookOpen className="w-5 h-5 text-rose-soft" />
                            <span className="text-gray-700">{details.schedule}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Target className="w-5 h-5 text-rose-soft" />
                            <span className="text-gray-700">{details.prerequisites}</span>
                          </div>
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

                        {/* CTA */}
                        <Button className="w-full" asChild>
                          <Link href="/reservation">
                            S'inscrire à cette formation
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="lg:col-span-2 p-8 bg-white/50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Modules */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2 text-rose-soft" />
                            Programme détaillé
                          </h4>
                          <ul className="space-y-2">
                            {details.modules.map((module, moduleIndex) => (
                              <li key={moduleIndex} className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 text-rose-soft mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{module}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Included */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                            <Award className="w-5 h-5 mr-2 text-rose-soft" />
                            Inclus dans la formation
                          </h4>
                          <ul className="space-y-2">
                            {details.included.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start space-x-2">
                                <Star className="w-4 h-4 text-rose-soft mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="mt-8 p-4 bg-rose-poudre/20 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-rose-soft text-rose-soft" />
                            ))}
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            Formation exceptionnelle !
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 italic">
                          "J'ai appris des techniques que je ne connaissais pas et j'ai pu 
                          développer mon activité rapidement. Le suivi personnalisé fait toute la différence !"
                        </p>
                        <p className="text-xs text-gray-500 mt-2">- Marie L., ancienne élève</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-rose-poudre to-rose-light rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
              Prête à transformer votre{' '}
              <span className="text-gradient">passion en profession</span> ?
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Rejoignez plus de 200 professionnelles qui ont déjà transformé leur vie 
              grâce à nos formations. Votre nouvelle carrière vous attend !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/reservation">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  S'inscrire maintenant
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Poser une question
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FormationsList


