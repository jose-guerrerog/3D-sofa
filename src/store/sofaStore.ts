import { create } from 'zustand'

interface SofaColor {
  color: string
  name: string
}

interface Sofa {
  material: string
  setMaterial: (material: string) => void
  color: SofaColor
  setColor: (color: SofaColor) => void
}

export const useSofaStore = create<Sofa>( (set) => ({
  material: 'fabric',
  setMaterial: (material: string ) => {
    set({ material })
  },
  color: {
    color: '#683434',
    name: 'brown'
  },
  setColor: (color: SofaColor ) => {
    set({ color })
  },
}));