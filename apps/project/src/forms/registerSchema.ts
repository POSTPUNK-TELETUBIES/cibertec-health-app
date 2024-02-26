import { object, string, number, date, ref } from 'yup'

const registerSchema = object({
  nombres: string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .required('El nombre es obligatorio'),
  apellidos: string()
    .required('El apellido es obligatorio')
    .min(2, 'El nombre debe tener al menos 2 caracteres'),
  dni: number()
    .min(1000000, 'El DNI debe tener al menos 7 dígitos')
    .required('El DNI es obligatorio'),
  sexo: string(),
  fechaNacimiento: date(),
  direccion: string()
    .min(10, 'La dirección debe tener al menos 10 caracteres')
    .required('La dirección es obligatoria'),
  correo: string()
    .email('El correo electrónico no es válido')
    .required('El correo electrónico es obligatorio'),
  telefono: number()
    .min(100000000, 'El teléfono debe tener al menos 9 dígitos')
    .required('El teléfono es obligatorio'),
  contrasena: string()
    .required('La contraseña es obligatoria')
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
  repetirContrasena: string()
    .oneOf([ref('contrasena')], 'Las contraseñas deben coincidir')
    .required('La confirmación de contraseña es requerida'),
})

export default registerSchema
