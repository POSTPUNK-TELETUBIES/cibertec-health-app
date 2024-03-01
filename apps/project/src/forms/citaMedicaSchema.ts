import { object, string } from 'yup'

const citaMedicaSchema = object({
  doctor_id: string().required('La contraseña es obligatoria'),
  sucursal_id: string().required('El correo electrónico es obligatorio'),
  especialidad: string().required('El correo electrónico es obligatorio'),
  fecha: string().required('El correo electrónico es obligatorio'),
  tipo_cita: string().required('El correo electrónico es obligatorio'),
})

export default citaMedicaSchema
