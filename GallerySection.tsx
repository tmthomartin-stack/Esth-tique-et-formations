'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { 
  Eye, 
  Star, 
  Filter, 
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Heart,
  Zap
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface GalleryItem {
  id: string
  category: string
  service: string
  beforeImage: string
  afterImage: string
  description: string
  rating: number
  isPopular?: boolean
  isNew?: boolean
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    category: 'cils-sourcils',
    service: 'Volume russe',
    beforeImage: '/images/gallery/cils-before-1.jpg',
    afterImage: '/images/gallery/cils-after-1.jpg',
    description: 'Transformation spectaculaire avec la technique Volume russe. Cils plus longs, plus denses et naturellement courbés.',
    rating: 5,
    isPopular: true
  },
  {
    id: '2',
    category: 'visage',
    service: 'BB Glow',
    beforeImage: '/images/gallery/visage-before-1.jpg',
    afterImage: '/images/gallery/visage-after-1.jpg',
    description: 'Teint parfait et uniforme grâce au BB Glow révolutionnaire. Résultat immédiat et durable.',
    rating: 5,
    isNew: true
  },
  {
    id: '3',
    category: 'massages',
    service: 'Lifting colombien',
    beforeImage: '/images/gallery/massage-before-1.jpg',
    afterImage: '/images/gallery/massage-after-1.jpg',
    description: 'Modelage corporel unique pour une silhouette redessinée. Technique colombienne exclusive.',
    rating: 5,
    isPopular: true
  },
  {
    id: '4',
    category: 'ongles',
    service: 'Méthode USA',
    beforeImage: '/images/gallery/ongles-before-1.jpg',
    afterImage: '/images/gallery/ongles-after-1.jpg',
    description: 'Manucure professionnelle avec la méthode américaine. Ongles parfaits et durables.',
    rating: 5
  },
  {
    id: '5',
    category: 'cils-sourcils',
    service: 'Rehaussement cils',
    beforeImage: '/images/gallery/cils-before-2.jpg',
    afterImage: '/images/gallery/cils-after-2.jpg',
    description: 'Lifting des cils naturels pour un regard plus ouvert et expressif.',
    rating: 5
  },
  {
    id: '6',
    category: 'visage',
    service: 'Hydrafacial',
    beforeImage: '/images/gallery/visage-before-2.jpg',
    afterImage: '/images/gallery/visage-after-2.jpg',
    description: 'Hydratation intense et nettoyage en profondeur pour une peau parfaitement hydratée.',
    rating: 5
  },
  {
    id: '7',
    category: 'massages',
    service: 'Head Spa japonais',
    beforeImage: '/images/gallery/headspa-before-1.jpg',
    afterImage: '/images/gallery/headspa-after-1.jpg',
    description: 'Rituel de relaxation japonaise unique pour le cuir chevelu et la détente totale.',
    rating: 5,
    isNew: true
  },
  {
    id: '8',
    category: 'ongles',
    service: 'Babyboomer',
    beforeImage: '/images/gallery/ongles-before-2.jpg',
    afterImage: '/images/gallery/ongles-after-2.jpg',
    description: 'Technique de dégradé pour un effet babyboomer naturel et élégant.',
    rating: 5
  },
  {
    id: '9',
    category: 'maquillage',
    service: 'Candy lips',
    beforeImage: '/images/gallery/levres-before-1.jpg',
    afterImage: '/images/gallery/levres-after-1.jpg',
    description: 'Maquillage permanent des lèvres pour un sourire parfait et durable.',
    rating: 5
  }
]

const categories = [
  { id: 'all', name: 'Toutes les catégories', icon: '✨' },
  { id: 'cils-sourcils', name: 'Cils & Sourcils', icon: '👁️' },
  { id: 'visage', name: 'Soins Visage', icon: '✨' },
  { id: 'massages', name: 'Massages', icon: '🤲' },
  { id: 'ongles', name: 'Ongles', icon: '💅' },
  { id: 'maquillage', name: 'Maquillage', icon: '💋' }
]

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  const nextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex(prev => prev === 0 ? 1 : 0)
    }
  }

  const prevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex(prev => prev === 0 ? 1 : 0)
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-rose-soft text-white shadow-rose-lg'
                    : 'bg-rose-poudre/20 text-rose-deep hover:bg-rose-soft hover:text-white'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
                {category.id !== 'all' && (
                  <Badge variant="secondary" className="text-xs">
                    {galleryItems.filter(item => item.category === category.id).length}
                  </Badge>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
              >
                <Card className="group cursor-pointer overflow-hidden" onClick={() => openModal(item)}>
                  {/* Before/After Images */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 flex">
                      <div className="w-1/2 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
                        <div className="absolute top-4 left-4 z-20">
                          <Badge variant="destructive" className="text-xs">
                            Avant
                          </Badge>
                        </div>
                        <div 
                          className="w-full h-full bg-cover bg-center"
                          style={{ 
                            backgroundImage: `url(${item.beforeImage})`,
                            filter: 'grayscale(0.3)'
                          }}
                        ></div>
                      </div>
                      <div className="w-1/2 relative">
                        <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent z-10"></div>
                        <div className="absolute top-4 right-4 z-20">
                          <Badge variant="success" className="text-xs">
                            Après
                          </Badge>
                        </div>
                        <div 
                          className="w-full h-full bg-cover bg-center"
                          style={{ 
                            backgroundImage: `url(${item.afterImage})`
                          }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30">
                      <div className="text-center text-white">
                        <Eye className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-sm font-medium">Voir en détail</p>
                      </div>
                    </div>

                    {/* Service Badge */}
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-800 text-sm">{item.service}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-rose-soft text-rose-soft" />
                            <span className="text-sm font-medium text-gray-700">{item.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex space-x-2">
                        {item.isPopular && (
                          <Badge variant="success" className="text-xs">
                            <Star className="w-3 h-3 mr-1" />
                            Populaire
                          </Badge>
                        )}
                        {item.isNew && (
                          <Badge variant="outline" className="text-xs">
                            Nouveau
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-rose-deep">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm font-medium">Résultat spectaculaire</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Zap className="w-4 h-4" />
                        <span className="text-xs">Transformation</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-gray-800">
                      {selectedItem.service}
                    </h3>
                    <p className="text-gray-600">Transformation avant/après</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Images */}
                    <div className="space-y-4">
                      <div className="relative">
                        <div className="aspect-square rounded-xl overflow-hidden">
                          <img
                            src={currentImageIndex === 0 ? selectedItem.beforeImage : selectedItem.afterImage}
                            alt={currentImageIndex === 0 ? 'Avant' : 'Après'}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Navigation */}
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Image Tabs */}
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setCurrentImageIndex(0)}
                          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                            currentImageIndex === 0
                              ? 'bg-rose-soft text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-rose-poudre hover:text-rose-deep'
                          }`}
                        >
                          Avant
                        </button>
                        <button
                          onClick={() => setCurrentImageIndex(1)}
                          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                            currentImageIndex === 1
                              ? 'bg-rose-soft text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-rose-poudre hover:text-rose-deep'
                          }`}
                        >
                          Après
                        </button>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">
                          Résultat de la transformation
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {selectedItem.description}
                        </p>
                      </div>

                      <div className="bg-rose-poudre/20 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Star className="w-5 h-5 text-rose-soft" />
                          <span className="font-semibold text-gray-800">Satisfaction client</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(selectedItem.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-rose-soft text-rose-soft" />
                          ))}
                          <span className="ml-2 text-sm text-gray-600">
                            {selectedItem.rating}/5 - Résultat exceptionnel
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h5 className="font-semibold text-gray-800">Pourquoi ce résultat ?</h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-rose-soft rounded-full"></div>
                            <span>Technique professionnelle avancée</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-rose-soft rounded-full"></div>
                            <span>Matériel de qualité professionnelle</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-rose-soft rounded-full"></div>
                            <span>Approche personnalisée</span>
                          </li>
                        </ul>
                      </div>

                      <Button className="w-full" asChild>
                        <a href="/reservation">
                          <Sparkles className="w-4 h-4 mr-2" />
                          Réserver ce service
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
              Prête pour votre{' '}
              <span className="text-gradient">transformation</span> ?
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Rejoignez nos clientes satisfaites et découvrez des résultats 
              exceptionnels avec nos techniques avancées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/reservation">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Réserver votre soin
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/soins">
                  Découvrir tous les services
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GallerySection


