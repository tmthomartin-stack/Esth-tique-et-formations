'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { services, formations } from '@/lib/data'
import { 
  Calendar, 
  Clock, 
  Euro, 
  User, 
  Phone, 
  Mail,
  CheckCircle,
  ArrowRight,
  Sparkles,
  GraduationCap
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { formatPrice } from '@/lib/utils'

interface BookingStep {
  id: string
  title: string
  description: string
  completed: boolean
  active: boolean
}

const BookingSystem = () => {
  const [bookingType, setBookingType] = useState<'soin' | 'formation' | null>(null)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [clientInfo, setClientInfo] = useState({
    name: '',
    phone: '',
    email: ''
  })

  const steps: BookingStep[] = [
    {
      id: 'type',
      title: 'Type de rendez-vous',
      description: 'Choisissez entre soin esthétique ou formation',
      completed: bookingType !== null,
      active: bookingType === null
    },
    {
      id: 'service',
      title: 'Service ou formation',
      description: 'Sélectionnez le service ou la formation souhaitée',
      completed: selectedService !== null,
      active: bookingType !== null && selectedService === null
    },
    {
      id: 'datetime',
      title: 'Date et heure',
      description: 'Choisissez votre créneau préféré',
      completed: selectedDate !== null && selectedTime !== null,
      active: selectedService !== null && (selectedDate === null || selectedTime === null)
    },
    {
      id: 'info',
      title: 'Vos informations',
      description: 'Renseignez vos coordonnées',
      completed: clientInfo.name !== '' && clientInfo.phone !== '' && clientInfo.email !== '',
      active: selectedDate !== null && selectedTime !== null && (clientInfo.name === '' || clientInfo.phone === '' || clientInfo.email === '')
    }
  ]

  const currentStep = steps.find(step => step.active) || steps[steps.length - 1]
  const isCompleted = steps.every(step => step.completed)

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isCompleted) {
      // Ici vous pouvez intégrer avec votre système de réservation
      alert('Réservation confirmée ! Nous vous contacterons bientôt.')
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
          Réservez votre{' '}
          <span className="text-gradient">rendez-vous</span>
        </h2>
        <p className="text-lg text-gray-600">
          Système de réservation unifié pour soins esthétiques et formations
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300
                  ${step.completed 
                    ? 'bg-green-500 text-white' 
                    : step.active 
                      ? 'bg-rose-soft text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }
                `}>
                  {step.completed ? <CheckCircle className="w-5 h-5" /> : index + 1}
                </div>
                <div className="mt-2 text-center">
                  <div className={`text-sm font-medium ${step.active ? 'text-rose-deep' : step.completed ? 'text-green-600' : 'text-gray-500'}`}>
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 hidden sm:block">
                    {step.description}
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-4 ${step.completed ? 'bg-green-500' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Booking Form */}
      <Card className="p-8">
        <AnimatePresence mode="wait">
          {/* Step 1: Type Selection */}
          {currentStep.id === 'type' && (
            <motion.div
              key="type"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-display font-bold text-gray-800 mb-6 text-center">
                Que souhaitez-vous réserver ?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card 
                  className={`p-8 text-center cursor-pointer transition-all duration-300 ${
                    bookingType === 'soin' 
                      ? 'ring-2 ring-rose-soft bg-rose-poudre/20' 
                      : 'hover:shadow-rose-lg'
                  }`}
                  onClick={() => setBookingType('soin')}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-soft to-rose-deep rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Soin Esthétique
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Découvrez nos 50+ services uniques pour révéler votre beauté
                  </p>
                  <Badge variant="secondary">
                    {services.length} services disponibles
                  </Badge>
                </Card>

                <Card 
                  className={`p-8 text-center cursor-pointer transition-all duration-300 ${
                    bookingType === 'formation' 
                      ? 'ring-2 ring-rose-soft bg-rose-poudre/20' 
                      : 'hover:shadow-rose-lg'
                  }`}
                  onClick={() => setBookingType('formation')}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-poudre to-rose-soft rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-rose-deep" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Formation Professionnelle
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Devenez formatrice professionnelle en onglerie
                  </p>
                  <Badge variant="outline">
                    {formations.length} formations disponibles
                  </Badge>
                </Card>
              </div>
            </motion.div>
          )}

          {/* Step 2: Service/Formation Selection */}
          {currentStep.id === 'service' && (
            <motion.div
              key="service"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-display font-bold text-gray-800 mb-6 text-center">
                Choisissez votre {bookingType === 'soin' ? 'service' : 'formation'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                {(bookingType === 'soin' ? services : formations).map((item) => (
                  <Card
                    key={item.id}
                    className={`p-4 cursor-pointer transition-all duration-300 ${
                      selectedService === item.id 
                        ? 'ring-2 ring-rose-soft bg-rose-poudre/20' 
                        : 'hover:shadow-rose-lg'
                    }`}
                    onClick={() => setSelectedService(item.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">{item.name}</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-rose-deep font-bold">
                          {formatPrice(item.price)}
                        </span>
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{item.duration}min</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    {item.isPopular && (
                      <Badge variant="success" className="text-xs">
                        Populaire
                      </Badge>
                    )}
                    {item.isNew && (
                      <Badge variant="outline" className="text-xs ml-2">
                        Nouveau
                      </Badge>
                    )}
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3: Date & Time Selection */}
          {currentStep.id === 'datetime' && (
            <motion.div
              key="datetime"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-display font-bold text-gray-800 mb-6 text-center">
                Choisissez votre créneau
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Date Selection */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    <Calendar className="w-5 h-5 inline mr-2" />
                    Date
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {Array.from({ length: 14 }, (_, i) => {
                      const date = new Date()
                      date.setDate(date.getDate() + i)
                      const dateStr = date.toISOString().split('T')[0]
                      const isToday = i === 0
                      const isWeekend = date.getDay() === 0 || date.getDay() === 6
                      
                      return (
                        <button
                          key={dateStr}
                          className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                            selectedDate === dateStr
                              ? 'bg-rose-soft text-white'
                              : isWeekend
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-gray-100 text-gray-700 hover:bg-rose-poudre hover:text-rose-deep'
                          }`}
                          onClick={() => !isWeekend && setSelectedDate(dateStr)}
                          disabled={isWeekend}
                        >
                          {isToday ? 'Aujourd\'hui' : date.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric' })}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Time Selection */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    <Clock className="w-5 h-5 inline mr-2" />
                    Heure
                  </h4>
                  <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        className={`p-2 rounded-lg text-sm font-medium transition-colors ${
                          selectedTime === time
                            ? 'bg-rose-soft text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-rose-poudre hover:text-rose-deep'
                        }`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Client Information */}
          {currentStep.id === 'info' && (
            <motion.div
              key="info"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-display font-bold text-gray-800 mb-6 text-center">
                Vos informations
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientInfo.name}
                      onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-soft focus:border-transparent transition-colors"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={clientInfo.phone}
                      onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-soft focus:border-transparent transition-colors"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={clientInfo.email}
                    onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-soft focus:border-transparent transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Summary */}
                <div className="bg-rose-poudre/20 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Récapitulatif</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><strong>Type:</strong> {bookingType === 'soin' ? 'Soin esthétique' : 'Formation'}</p>
                    <p><strong>Service:</strong> {
                      bookingType === 'soin' 
                        ? services.find(s => s.id === selectedService)?.name
                        : formations.find(f => f.id === selectedService)?.name
                    }</p>
                    <p><strong>Date:</strong> {selectedDate && new Date(selectedDate).toLocaleDateString('fr-FR')}</p>
                    <p><strong>Heure:</strong> {selectedTime}</p>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={!isCompleted}
                >
                  {isCompleted ? 'Confirmer la réservation' : 'Complétez les informations'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  )
}

export default BookingSystem


