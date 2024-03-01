import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { TextField } from '@mui/material'
import { especialidades } from '../../examples/others'

export default function Selectores() {
  return (
    <FormControl fullWidth sx={{ display: 'flex', gap: 2 }}>
      <TextField name='correo' variant='outlined' placeholder='Nombres y/o apellidos' />

      <FormControl>
        <InputLabel id='especialidad'>Especialidad</InputLabel>
        <Select labelId='especialidad' value={''} label='Especialidad'>
          {especialidades.map((especialidad, index) => (
            <MenuItem key={index} value={especialidad}>
              {especialidad}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </FormControl>
  )
}
