'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { services, serviceCategories } from '@/lib/data'
import { 
  Clock, 
  Euro, 
  Star, 
  Filter, 
  Search,
  Calendar,
  ArrowRight
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { formatPrice } from '@/lib/utils'

const ServicesGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'duration'>('name')

  const filteredServices = services
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price
        case 'duration':
          return a.duration - b.duration
        default:
          return a.name.localeCompare(b.name)
      }
    })

  const categories = [
    { id: 'all', name: 'Tous les services', count: services.length },
    ...serviceCategories.map(cat => ({
      id: cat.id,
      name: cat.name,
      count: services.filter(s => s.category === cat.id).length
    }))
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-rose-poudre/10 to-rose-light/10">
      <div className="container-custom">
        {/* Filters */}
        <div className="mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un service..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-soft focus:border-transparent transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-soft focus:border-transparent transition-colors"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'duration')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-soft focus:border-transparent transition-colors"
                >
                  <option value="name">Trier par nom</option>
                  <option value="price">Trier par prix</option>
                  <option value="duration">Trier par durée</option>
                </select>
              </div>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2">
              {selectedCategory !== 'all' && (
                <Badge 
                  variant="secondary" 
                  className="cursor-pointer hover:bg-rose-soft hover:text-white transition-colors"
                  onClick={() => setSelectedCategory('all')}
                >
                  <Filter className="w-3 h-3 mr-1" />
                  {categories.find(c => c.id === selectedCategory)?.name}
                  <span className="ml-1">×</span>
                </Badge>
              )}
              {searchTerm && (
                <Badge 
                  variant="outline" 
                  className="cursor-pointer hover:bg-rose-soft hover:text-white transition-colors"
                  onClick={() => setSearchTerm('')}
                >
                  Recherche: "{searchTerm}"
                  <span className="ml-1">×</span>
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
              >
                <Card className="group cursor-pointer h-full overflow-hidden">
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-rose-deep transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        {service.isPopular && (
                          <Badge variant="success" className="text-xs">
                            <Star className="w-3 h-3 mr-1" />
                            Populaire
                          </Badge>
                        )}
                        {service.isNew && (
                          <Badge variant="outline" className="text-xs">
                            Nouveau
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-rose-soft rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price & Duration */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1 text-rose-deep font-bold">
                          <Euro className="w-4 h-4" />
                          <span className="text-xl">{service.price}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{service.duration}min</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link href="/reservation">
                      <div className="w-full bg-rose-soft hover:bg-rose-deep text-white font-medium py-3 px-4 rounded-lg text-center transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center">
                        Réserver maintenant
                        <Calendar className="w-4 h-4 ml-2" />
                      </div>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-rose-poudre/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-rose-soft" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Aucun service trouvé
            </h3>
            <p className="text-gray-600 mb-6">
              Essayez de modifier vos critères de recherche ou de filtrer par catégorie.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
              }}
            >
              Réinitialiser les filtres
            </Button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
              Vous ne trouvez pas ce que vous cherchez ?
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Contactez-nous pour un conseil personnalisé. Nous avons peut-être 
              la solution parfaite pour vous !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/reservation">
                  <Calendar className="w-5 h-5 mr-2" />
                  Réserver une consultation
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Nous contacter
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesGrid


