import amberNocturne from '../assets/perfumes/AMBER NOCTURNE.jpg'
import vertMystique from '../assets/perfumes/VERT MYSTIQUE.jpg'
import blancEclat from '../assets/perfumes/BLANC ÉCLAT.jpg'
import rougeEternel from '../assets/perfumes/ROUGE ÉTERNEL.jpg'
import goldenVeil from '../assets/perfumes/GOLDEN VEIL.jpg'
import noirAbsolu from '../assets/perfumes/NOIR ABSOLU.jpg'

// The six current ÉLVARÉ signature fragrances.
export const products = [
  {
    id: 1,
    slug: 'amber-nocturne',
    name: 'AMBER NOCTURNE',
    subtitle: 'The art of quiet confidence',
    family: 'Amber · Woody',
    price: 145,
    size: '100 ml',
    notes: ['Golden amber', 'Saffron', 'Sandalwood'],
    description: 'A warm, enveloping fragrance with a glowing amber heart. Saffron adds a subtle spark before smooth sandalwood settles into a deep, lasting finish.',
    mood: 'Intense',
    image: amberNocturne
  },
  {
    id: 2,
    slug: 'vert-mystique',
    name: 'VERT MYSTIQUE',
    subtitle: 'A fresh perspective, beautifully composed',
    family: 'Green · Aromatic',
    price: 132,
    size: '100 ml',
    notes: ['Bergamot', 'Green tea', 'Vetiver'],
    description: 'A crisp green composition that opens with bright bergamot. Delicate green tea brings a calm clarity, while vetiver leaves a refined earthy trail.',
    mood: 'Fresh',
    image: vertMystique
  },
  {
    id: 3,
    slug: 'blanc-eclat',
    name: 'BLANC ÉCLAT',
    subtitle: 'Softness with a presence',
    family: 'Floral · Musk',
    price: 158,
    size: '100 ml',
    notes: ['White flowers', 'Iris', 'White musk'],
    description: 'An airy blend of luminous white florals and elegant iris, softened by a clean musk finish. Understated, graceful and effortlessly memorable.',
    mood: 'Elegant',
    image: blancEclat
  },
  {
    id: 4,
    slug: 'rouge-eternel',
    name: 'ROUGE ÉTERNEL',
    subtitle: 'Made to remain',
    family: 'Floral · Amber',
    price: 126,
    size: '100 ml',
    notes: ['Velvet rose', 'Dark plum', 'Warm amber'],
    description: 'A confident floral amber with the richness of velvet rose and dark plum. Warm amber rounds the composition with a sensual, lingering finish.',
    mood: 'Romantic',
    image: rougeEternel
  },
  {
    id: 5,
    slug: 'golden-veil',
    name: 'GOLDEN VEIL',
    subtitle: 'An understated golden touch',
    family: 'Amber · Floral',
    price: 149,
    size: '100 ml',
    notes: ['Bergamot', 'Jasmine', 'Vanilla'],
    description: 'A radiant composition where sparkling bergamot meets a soft jasmine heart. A veil of creamy vanilla brings warmth and a polished sweetness.',
    mood: 'Radiant',
    image: goldenVeil
  },
  {
    id: 6,
    slug: 'noir-absolu',
    name: 'NOIR ABSOLU',
    subtitle: 'A statement in darkness',
    family: 'Woody · Spicy',
    price: 152,
    size: '100 ml',
    notes: ['Black pepper', 'Cedarwood', 'Vetiver'],
    description: 'Dark woods meet a precise flash of black pepper. Cedarwood and vetiver create a composed, magnetic fragrance with a confident dry-down.',
    mood: 'Bold',
    image: noirAbsolu
  }
]
