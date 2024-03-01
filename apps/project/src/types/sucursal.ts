export interface Sucursal {
  id: string
  created_at: Date
  nombre: string
  direccion: string
  telefono: string
  ubicacion_mapa: string
}

export type SucursalPayload = Partial<Omit<Sucursal, 'id' | 'created_at'>>
export type SucursalResponse = Sucursal
