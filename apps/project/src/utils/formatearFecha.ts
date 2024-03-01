export function formatearFecha(fecha: string): string {
  const fechaFormateada = new Date(fecha).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  return fechaFormateada
}
