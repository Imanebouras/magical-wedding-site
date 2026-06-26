export interface ParticlePosition {
  x: number
  y: number
  opacity: number
}

export interface GalleryItem {
  id: string
  type: 'image' | 'video'
  src: string
  thumbnail?: string
  title?: string
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
  icon: string
}

export interface RSVPFormData {
  name: string
  email: string
  guests: number
  attending: boolean
  message: string
}