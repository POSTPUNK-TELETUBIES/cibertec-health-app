import { object, string } from 'yup'

const loginSchema = object({
  contrasena: string()
    .required('La contraseña es obligatoria')
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
  correo: string()
    .email('El correo electrónico no es válido')
    .required('El correo electrónico es obligatorio'),
})

export default loginSchema
