export interface Service {
  id: string
  name: string
  price: number
  duration: number
  category: string
  description: string
  features: string[]
  isPopular?: boolean
  isNew?: boolean
  image?: string
}

export interface ServiceCategory {
  id: string
  name: string
  description: string
  icon: string
  color: string
  services: Service[]
  image: string
}

export interface Testimonial {
  id: string
  name: string
  service: string
  rating: number
  comment: string
  image?: string
  type: 'client' | 'student'
}

export const services: Service[] = [
  // Cils & Sourcils
  { id: 'cils-a-cils', name: 'Cils à cils', price: 50, duration: 90, category: 'cils-sourcils', description: 'Extension cils à cils pour un regard naturel et allongé', features: ['Cils individuels', 'Résultat naturel', 'Durée 3-4 semaines'], isPopular: true },
  { id: 'rehaussement-cils', name: 'Rehaussement cils', price: 45, duration: 60, category: 'cils-sourcils', description: 'Lifting des cils naturels pour un regard plus ouvert', features: ['Cils naturels', 'Effet lifting', 'Durée 6-8 semaines'], isPopular: true },
  { id: 'volume-russe', name: 'Volume russe', price: 80, duration: 120, category: 'cils-sourcils', description: 'Technique avancée pour un volume exceptionnel', features: ['Volume intense', 'Technique russe', 'Durée 4-5 semaines'], isNew: true },
  { id: 'remplissage-cils', name: 'Remplissage', price: 30, duration: 30, category: 'cils-sourcils', description: 'Remplissage des extensions existantes', features: ['Maintenance', 'Résultat optimal', '30 minutes'] },
  { id: 'sourcils', name: 'Sourcils', price: 50, duration: 60, category: 'cils-sourcils', description: 'Microblading et structuration des sourcils', features: ['Microblading', 'Structuration', 'Durée 12-18 mois'] },

  // Soins Visage
  { id: 'soin-simple', name: 'Soin simple', price: 40, duration: 60, category: 'visage', description: 'Soin visage personnalisé selon votre type de peau', features: ['Diagnostic peau', 'Soin adapté', 'Conseils personnalisés'] },
  { id: 'hydrafacial', name: 'Hydrafacial', price: 50, duration: 75, category: 'visage', description: 'Technologie avancée pour une peau parfaitement hydratée', features: ['Hydratation intense', 'Technologie avancée', 'Résultat immédiat'], isPopular: true },
  { id: 'bb-glow', name: 'BB Glow', price: 100, duration: 90, category: 'visage', description: 'Traitement révolutionnaire pour un teint parfait', features: ['Teint uniforme', 'Résultat durable', 'Technique unique'], isNew: true },
  { id: 'plasma', name: 'Plasma', price: 100, duration: 90, category: 'visage', description: 'Traitement au plasma pour un rajeunissement naturel', features: ['Rajeunissement', 'Technologie plasma', 'Résultat naturel'] },
  { id: 'microneedling', name: 'Microneedling', price: 100, duration: 90, category: 'visage', description: 'Stimulation naturelle de la production de collagène', features: ['Collagène naturel', 'Peau repulpée', 'Résultat progressif'] },
  { id: 'dermaroller', name: 'Dermaroller', price: 40, duration: 60, category: 'visage', description: 'Roulette à micro-aiguilles pour améliorer la texture', features: ['Texture améliorée', 'Pores resserrés', 'Peau lissée'] },
  { id: 'peeling-algues', name: 'Peeling algues', price: 40, duration: 60, category: 'visage', description: 'Peeling naturel aux algues marines', features: ['100% naturel', 'Exfoliation douce', 'Peau purifiée'] },
  { id: 'luminotherapie', name: 'Luminothérapie', price: 50, duration: 45, category: 'visage', description: 'Traitement par LED pour stimuler la régénération', features: ['LED thérapeutique', 'Régénération', 'Peau revitalisée'] },

  // Rajeunissement
  { id: 'lifting-fil-collagene', name: 'Lifting fil collagène', price: 100, duration: 90, category: 'rajeunissement', description: 'Lifting non-chirurgical par fils de collagène', features: ['Non-chirurgical', 'Résultat immédiat', 'Durée 12-18 mois'] },
  { id: 'lifting-endormolift', name: 'Lifting endormolift', price: 100, duration: 90, category: 'rajeunissement', description: 'Technique de lifting par radiofréquence', features: ['Radiofréquence', 'Sans douleur', 'Résultat naturel'] },
  { id: 'massage-kobido', name: 'Massage Kobido', price: 40, duration: 60, category: 'rajeunissement', description: 'Massage japonais anti-âge traditionnel', features: ['Technique japonaise', 'Anti-âge', 'Détente profonde'] },
  { id: 'botox-acide', name: 'Botox/Acide', price: 200, duration: 30, category: 'rajeunissement', description: 'Traitements injectables anti-rides', features: ['Anti-rides', 'Résultat immédiat', 'Durée 4-6 mois'] },

  // Massages
  { id: 'liposuccion-froid-chaud', name: 'Liposuccion froid/chaud', price: 100, duration: 90, category: 'massages', description: 'Technique de modelage par alternance chaud/froid', features: ['Modelage', 'Drainage', 'Résultat visible'] },
  { id: 'lifting-colombien', name: 'Lifting colombien', price: 100, duration: 90, category: 'massages', description: 'Technique de lifting corporel colombienne', features: ['Technique unique', 'Résultat immédiat', 'Durée 2-3 semaines'], isNew: true },
  { id: 'head-spa-japonais', name: 'Head Spa japonais', price: 50, duration: 60, category: 'massages', description: 'Rituel de relaxation japonaise pour le cuir chevelu', features: ['Rituel japonais', 'Détente totale', 'Cheveux revitalisés'], isNew: true },
  { id: 'pierre-chaude', name: 'Pierre chaude', price: 50, duration: 60, category: 'massages', description: 'Massage aux pierres chaudes pour une détente profonde', features: ['Pierres chaudes', 'Détente', 'Circulation améliorée'] },
  { id: 'maderotherapie', name: 'Madérothérapie', price: 50, duration: 60, category: 'massages', description: 'Massage avec outils en bois pour drainer et modeler', features: ['Outils en bois', 'Drainage', 'Modelage'] },

  // Ongles
  { id: 'capsule-couleur', name: 'Capsule couleur', price: 45, duration: 60, category: 'ongles', description: 'Pose de capsules colorées pour des ongles parfaits', features: ['Couleurs variées', 'Résistance', 'Durée 3-4 semaines'] },
  { id: 'babyboomer', name: 'Babyboomer', price: 55, duration: 75, category: 'ongles', description: 'Technique de dégradé pour un effet naturel', features: ['Dégradé naturel', 'Effet babyboomer', 'Résultat élégant'] },
  { id: 'french', name: 'French', price: 50, duration: 60, category: 'ongles', description: 'Manucure française classique et intemporelle', features: ['Classique', 'Intemporel', 'Élégant'] },
  { id: 'semi-permanent', name: 'Semi-permanent', price: 25, duration: 45, category: 'ongles', description: 'Vernis semi-permanent longue tenue', features: ['Longue tenue', 'Couleurs variées', 'Facile à retirer'] },
  { id: 'methode-usa', name: 'Méthode USA', price: 45, duration: 60, category: 'ongles', description: 'Technique américaine pour des ongles parfaits', features: ['Technique USA', 'Résultat professionnel', 'Durée 3-4 semaines'] },

  // Maquillage
  { id: 'candy-lips', name: 'Candy lips', price: 100, duration: 60, category: 'maquillage', description: 'Maquillage permanent des lèvres pour un sourire parfait', features: ['Maquillage permanent', 'Résultat naturel', 'Durée 12-18 mois'] },
  { id: 'augmentation-levres', name: 'Augmentation lèvres', price: 200, duration: 45, category: 'maquillage', description: 'Augmentation des lèvres par injection', features: ['Augmentation', 'Résultat immédiat', 'Durée 6-12 mois'] },
  { id: 'tatouage-ephemere', name: 'Tatouage éphémère', price: 40, duration: 30, category: 'maquillage', description: 'Tatouage temporaire pour une occasion spéciale', features: ['Temporaire', 'Design personnalisé', 'Sans douleur'] },
  { id: 'changement-couleur-yeux', name: 'Changement couleur yeux', price: 100, duration: 60, category: 'maquillage', description: 'Technique unique pour changer la couleur des yeux', features: ['Technique unique', 'Résultat spectaculaire', 'Sécurisé'], isNew: true },

  // Dentaire
  { id: 'strass-dentaire', name: 'Strass dentaire', price: 10, duration: 15, category: 'dentaire', description: 'Pose de strass sur les dents pour un sourire brillant', features: ['Strass', 'Résultat immédiat', 'Facile à retirer'] },
  { id: 'blanchiment', name: 'Blanchiment', price: 50, duration: 60, category: 'dentaire', description: 'Blanchiment dentaire professionnel', features: ['Blanchiment', 'Résultat visible', 'Technique sûre'] },

  // Épilation
  { id: 'sourcils-epilation', name: 'Sourcils', price: 10, duration: 15, category: 'epilation', description: 'Épilation des sourcils pour une forme parfaite', features: ['Forme parfaite', 'Résultat net', 'Rapide'] },
  { id: 'definitive-corps', name: 'Définitive corps', price: 150, duration: 120, category: 'epilation', description: 'Épilation définitive du corps par laser', features: ['Définitive', 'Technologie laser', 'Résultat permanent'] },
]

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'cils-sourcils',
    name: 'Cils & Sourcils',
    description: 'Extensions, rehaussement et structuration pour un regard magnifique',
    icon: '👁️',
    color: 'from-rose-poudre to-rose-soft',
    services: services.filter(s => s.category === 'cils-sourcils'),
    image: '/images/cils-sourcils.jpg'
  },
  {
    id: 'visage',
    name: 'Soins Visage',
    description: 'Traitements avancés pour une peau parfaite et rajeunie',
    icon: '✨',
    color: 'from-rose-light to-rose-poudre',
    services: services.filter(s => s.category === 'visage'),
    image: '/images/soins-visage.jpg'
  },
  {
    id: 'rajeunissement',
    name: 'Rajeunissement',
    description: 'Techniques non-chirurgicales pour retrouver votre jeunesse',
    icon: '🌹',
    color: 'from-rose-soft to-rose-deep',
    services: services.filter(s => s.category === 'rajeunissement'),
    image: '/images/rajeunissement.jpg'
  },
  {
    id: 'massages',
    name: 'Massages & Bien-être',
    description: 'Relaxation et modelage pour votre bien-être',
    icon: '🤲',
    color: 'from-rose-poudre to-rose-light',
    services: services.filter(s => s.category === 'massages'),
    image: '/images/massages.jpg'
  },
  {
    id: 'ongles',
    name: 'Ongles & Beauté',
    description: 'Manucure et techniques professionnelles pour des ongles parfaits',
    icon: '💅',
    color: 'from-rose-light to-rose-poudre',
    services: services.filter(s => s.category === 'ongles'),
    image: '/images/ongles.jpg'
  },
  {
    id: 'maquillage',
    name: 'Maquillage & Lèvres',
    description: 'Maquillage permanent et techniques de beauté du visage',
    icon: '💋',
    color: 'from-rose-soft to-rose-deep',
    services: services.filter(s => s.category === 'maquillage'),
    image: '/images/maquillage.jpg'
  },
  {
    id: 'specialites',
    name: 'Spécialités',
    description: 'Services uniques et techniques rares',
    icon: '⭐',
    color: 'from-rose-poudre to-rose-soft',
    services: services.filter(s => ['dentaire', 'epilation'].includes(s.category)),
    image: '/images/specialites.jpg'
  }
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marie L.',
    service: 'BB Glow',
    rating: 5,
    comment: 'Résultat incroyable ! Ma peau n\'a jamais été aussi lumineuse. Je recommande vivement !',
    type: 'client'
  },
  {
    id: '2',
    name: 'Sophie M.',
    service: 'Volume russe',
    rating: 5,
    comment: 'Mes cils sont magnifiques, l\'effet est naturel et dure longtemps. Merci pour votre expertise !',
    type: 'client'
  },
  {
    id: '3',
    name: 'Claire D.',
    service: 'Head Spa japonais',
    rating: 5,
    comment: 'Une expérience unique et relaxante. Je me suis sentie comme dans un spa au Japon !',
    type: 'client'
  },
  {
    id: '4',
    name: 'Emma R.',
    service: 'Formation onglerie',
    rating: 5,
    comment: 'Formation complète et professionnelle. J\'ai appris toutes les techniques nécessaires pour me lancer.',
    type: 'student'
  },
  {
    id: '5',
    name: 'Laura P.',
    service: 'Lifting colombien',
    rating: 5,
    comment: 'Technique exceptionnelle ! Le résultat est immédiat et naturel. Je suis conquise !',
    type: 'client'
  },
  {
    id: '6',
    name: 'Julie T.',
    service: 'Formation perfectionnement',
    rating: 5,
    comment: 'Formation de haut niveau qui m\'a permis de perfectionner mes techniques. Très satisfaite !',
    type: 'student'
  }
]

export const formations = [
  {
    id: 'formation-base',
    name: 'Formation Base Onglerie',
    duration: '3 jours',
    price: 'Sur devis',
    description: 'Apprenez les bases de l\'onglerie professionnelle',
    features: ['Techniques de base', 'Matériel professionnel', 'Certification', 'Support de cours'],
    level: 'Débutant'
  },
  {
    id: 'formation-perfectionnement',
    name: 'Formation Perfectionnement',
    duration: '2 jours',
    price: 'Sur devis',
    description: 'Perfectionnez vos techniques et découvrez les dernières tendances',
    features: ['Techniques avancées', 'Tendances 2024', 'Business tips', 'Certification'],
    level: 'Intermédiaire'
  },
  {
    id: 'formation-business',
    name: 'Formation Business Onglerie',
    duration: '1 jour',
    price: 'Sur devis',
    description: 'Développez votre activité et maximisez vos revenus',
    features: ['Marketing', 'Gestion clientèle', 'Pricing', 'Développement business'],
    level: 'Tous niveaux'
  }
]


