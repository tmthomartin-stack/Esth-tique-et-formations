'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Star,
  Calendar,
  GraduationCap
} from 'lucide-react'
import { motion } from 'framer-motion'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'soin'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici vous pouvez intégrer avec votre service d'email
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      value: '06 19 69 89 84',
      description: 'Appelez-nous directement',
      action: 'tel:0619698984',
      color: 'from-rose-soft to-rose-deep'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@esthetienne-multispecialiste.fr',
      description: 'Envoyez-nous un message',
      action: 'mailto:contact@esthetienne-multispecialiste.fr',
      color: 'from-rose-poudre to-rose-soft'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Votre région',
      description: 'Studio professionnel',
      action: '#',
      color: 'from-rose-light to-rose-poudre'
    },
    {
      icon: Clock,
      title: 'Horaires',
      value: 'Lun-Ven: 9h-19h',
      description: 'Sam: 9h-17h',
      action: '#',
      color: 'from-rose-soft to-rose-deep'
    }
  ]

  const quickActions = [
    {
      icon: Calendar,
      title: 'Réserver un soin',
      description: 'Système de réservation en ligne',
      action: '/reservation',
      color: 'bg-rose-soft'
    },
    {
      icon: GraduationCap,
      title: 'Formation',
      description: 'Découvrir nos formations',
      action: '/formations',
      color: 'bg-rose-poudre'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat direct et rapide',
      action: 'https://wa.me/33619698984',
      color: 'bg-green-500'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-800 mb-8">
              Informations de{' '}
              <span className="text-gradient">contact</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 hover:shadow-rose-lg transition-all duration-300">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-1">
                            {info.title}
                          </h3>
                          <a
                            href={info.action}
                            className="text-rose-deep hover:text-rose-soft transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                          <p className="text-sm text-gray-600 mt-1">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Actions rapides
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {quickActions.map((action, index) => {
                  const Icon = action.icon
                  return (
                    <motion.a
                      key={action.title}
                      href={action.action}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="block"
                    >
                      <Card className="p-4 text-center hover:shadow-rose-lg transition-all duration-300 group cursor-pointer">
                        <div className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {action.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {action.description}
                        </p>
                      </Card>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-800 mb-8">
              Envoyez-nous un{' '}
              <span className="text-gradient">message</span>
            </h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Message envoyé !
                </h3>
                <p className="text-gray-600 mb-6">
                  Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>
                  Envoyer un autre message
                </Button>
              </motion.div>
            ) : (
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Type Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Type de demande
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className={`relative cursor-pointer p-4 rounded-lg border-2 transition-all duration-300 ${
                        formData.type === 'soin' 
                          ? 'border-rose-soft bg-rose-poudre/20' 
                          : 'border-gray-200 hover:border-rose-poudre'
                      }`}>
                        <input
                          type="radio"
                          name="type"
                          value="soin"
                          checked={formData.type === 'soin'}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="text-center">
                          <Calendar className="w-6 h-6 mx-auto mb-2 text-rose-soft" />
                          <span className="font-medium text-gray-800">Soin esthétique</span>
                        </div>
                      </label>
                      
                      <label className={`relative cursor-pointer p-4 rounded-lg border-2 transition-all duration-300 ${
                        formData.type === 'formation' 
                          ? 'border-rose-soft bg-rose-poudre/20' 
                          : 'border-gray-200 hover:border-rose-poudre'
                      }`}>
                        <input
                          type="radio"
                          name="type"
                          value="formation"
                          checked={formData.type === 'formation'}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="text-center">
                          <GraduationCap className="w-6 h-6 mx-auto mb-2 text-rose-soft" />
                          <span className="font-medium text-gray-800">Formation</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-soft focus:border-transparent transition-colors"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-soft focus:border-transparent transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Subject */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-soft focus:border-transparent transition-colors"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sujet
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-soft focus:border-transparent transition-colors"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="reservation">Réservation de soin</option>
                        <option value="formation">Inscription formation</option>
                        <option value="conseil">Conseil personnalisé</option>
                        <option value="information">Demande d'information</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-soft focus:border-transparent transition-colors resize-none"
                      placeholder="Décrivez votre demande en détail..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </Card>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-gray-800 mb-4">
              Questions{' '}
              <span className="text-gradient">fréquentes</span>
            </h3>
            <p className="text-lg text-gray-600">
              Trouvez rapidement les réponses à vos questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h4 className="font-semibold text-gray-800 mb-3">
                Comment réserver un soin ?
              </h4>
              <p className="text-gray-600 text-sm">
                Utilisez notre système de réservation en ligne ou appelez-nous directement 
                au 06 19 69 89 84. Nous vous confirmerons votre créneau rapidement.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-gray-800 mb-3">
                Les formations sont-elles certifiantes ?
              </h4>
              <p className="text-gray-600 text-sm">
                Oui, toutes nos formations délivrent un certificat reconnu. 
                Nous vous accompagnons également après la formation.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-gray-800 mb-3">
                Puis-je annuler ma réservation ?
              </h4>
              <p className="text-gray-600 text-sm">
                Oui, vous pouvez annuler jusqu'à 24h avant votre rendez-vous. 
                Contactez-nous pour toute modification.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-gray-800 mb-3">
                Quels sont vos horaires ?
              </h4>
              <p className="text-gray-600 text-sm">
                Nous sommes ouverts du lundi au vendredi de 9h à 19h, 
                et le samedi de 9h à 17h. Fermé le dimanche.
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection


