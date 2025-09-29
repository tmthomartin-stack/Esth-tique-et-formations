'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const FormationSchedule = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())

  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ]

  const formations = [
    {
      id: '1',
      name: 'Formation Base Onglerie',
      date: '15-17 Janvier 2024',
      time: '9h00 - 17h00',
      duration: '3 jours',
      level: 'Débutant',
      places: 4,
      maxPlaces: 6,
      price: 'Sur devis',
      status: 'available',
      location: 'Studio de formation',
      description: 'Apprenez les fondamentaux de l\'onglerie professionnelle'
    },
    {
      id: '2',
      name: 'Formation Perfectionnement',
      date: '22-23 Janvier 2024',
      time: '9h00 - 17h00',
      duration: '2 jours',
      level: 'Intermédiaire',
      places: 2,
      maxPlaces: 4,
      price: 'Sur devis',
      status: 'available',
      location: 'Studio de formation',
      description: 'Perfectionnez vos techniques et découvrez les tendances'
    },
    {
      id: '3',
      name: 'Formation Business Onglerie',
      date: '29 Janvier 2024',
      time: '9h00 - 17h00',
      duration: '1 jour',
      level: 'Tous niveaux',
      places: 6,
      maxPlaces: 8,
      price: 'Sur devis',
      status: 'available',
      location: 'Studio de formation',
      description: 'Développez votre activité et maximisez vos revenus'
    },
    {
      id: '4',
      name: 'Formation Base Onglerie',
      date: '5-7 Février 2024',
      time: '9h00 - 17h00',
      duration: '3 jours',
      level: 'Débutant',
      places: 0,
      maxPlaces: 6,
      price: 'Sur devis',
      status: 'full',
      location: 'Studio de formation',
      description: 'Apprenez les fondamentaux de l\'onglerie professionnelle'
    },
    {
      id: '5',
      name: 'Formation Perfectionnement',
      date: '12-13 Février 2024',
      time: '9h00 - 17h00',
      duration: '2 jours',
      level: 'Intermédiaire',
      places: 3,
      maxPlaces: 4,
      price: 'Sur devis',
      status: 'available',
      location: 'Studio de formation',
      description: 'Perfectionnez vos techniques et découvrez les tendances'
    },
    {
      id: '6',
      name: 'Formation Business Onglerie',
      date: '19 Février 2024',
      time: '9h00 - 17h00',
      duration: '1 jour',
      level: 'Tous niveaux',
      places: 5,
      maxPlaces: 8,
      price: 'Sur devis',
      status: 'available',
      location: 'Studio de formation',
      description: 'Développez votre activité et maximisez vos revenus'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'full':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'waiting':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Places disponibles'
      case 'full':
        return 'Complet'
      case 'waiting':
        return 'Liste d\'attente'
      default:
        return 'Indisponible'
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Débutant':
        return 'bg-rose-poudre text-rose-deep'
      case 'Intermédiaire':
        return 'bg-rose-soft text-white'
      case 'Tous niveaux':
        return 'bg-rose-light text-rose-deep'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
            Planning des{' '}
            <span className="text-gradient">formations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Consultez les prochaines sessions de formation et réservez votre place. 
            Nos formations se déroulent dans un environnement professionnel et convivial.
          </p>
        </div>

        {/* Month Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {months.map((month, index) => (
            <button
              key={month}
              onClick={() => setSelectedMonth(index)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedMonth === index
                  ? 'bg-rose-soft text-white shadow-rose-lg'
                  : 'bg-rose-poudre/20 text-rose-deep hover:bg-rose-soft hover:text-white'
              }`}
            >
              {month}
            </button>
          ))}
        </div>

        {/* Formations List */}
        <div className="space-y-6">
          <AnimatePresence>
            {formations
              .filter(formation => {
                const formationMonth = new Date(formation.date).getMonth()
                return formationMonth === selectedMonth
              })
              .map((formation, index) => (
                <motion.div
                  key={formation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  layout
                >
                  <Card className="p-6 hover:shadow-rose-lg transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                      {/* Formation Info */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                              {formation.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {formation.description}
                            </p>
                          </div>
                          <Badge className={`text-xs ${getLevelColor(formation.level)}`}>
                            {formation.level}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-rose-soft" />
                            <span>{formation.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-rose-soft" />
                            <span>{formation.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-rose-soft" />
                            <span>{formation.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Places & Status */}
                      <div className="text-center">
                        <div className="mb-2">
                          <div className="text-2xl font-bold text-rose-deep mb-1">
                            {formation.places}/{formation.maxPlaces}
                          </div>
                          <div className="text-sm text-gray-600">places restantes</div>
                        </div>
                        
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(formation.status)}`}>
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {getStatusText(formation.status)}
                        </div>
                      </div>

                      {/* Price & CTA */}
                      <div className="text-center">
                        <div className="text-2xl font-bold text-rose-deep mb-4">
                          {formation.price}
                        </div>
                        
                        <Button 
                          className="w-full"
                          disabled={formation.status === 'full'}
                          asChild
                        >
                          <a href="/reservation">
                            {formation.status === 'full' ? 'Complet' : 'Réserver'}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                        
                        {formation.status === 'full' && (
                          <p className="text-xs text-gray-500 mt-2">
                            Contactez-nous pour la liste d'attente
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* No Formations Message */}
        {formations.filter(formation => {
          const formationMonth = new Date(formation.date).getMonth()
          return formationMonth === selectedMonth
        }).length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-rose-poudre/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-12 h-12 text-rose-soft" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Aucune formation prévue ce mois-ci
            </h3>
            <p className="text-gray-600 mb-6">
              Consultez les autres mois ou contactez-nous pour des sessions privées.
            </p>
            <Button variant="outline" asChild>
              <a href="/contact">Nous contacter</a>
            </Button>
          </motion.div>
        )}

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-rose-poudre to-rose-light rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-rose-deep" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Petits groupes
              </h3>
              <p className="text-gray-600 text-sm">
                Maximum 8 personnes pour un suivi personnalisé et une attention optimale.
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-rose-deep" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Matériel inclus
              </h3>
              <p className="text-gray-600 text-sm">
                Tout le matériel professionnel nécessaire est fourni pour votre formation.
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-rose-deep" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Certification
              </h3>
              <p className="text-gray-600 text-sm">
                Certificat de formation reconnu et suivi post-formation inclus.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FormationSchedule


