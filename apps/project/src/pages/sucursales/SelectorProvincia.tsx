import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const provincias_peru = [
  'Lima',
  'Arequipa',
  'La Libertad',
  'Lambayeque',
  'Piura',
  'Cajamarca',
  'Puno',
  'Cusco',
  'Junín',
  'Huanuco',
  'Ancash',
  'San Martín',
  'Ica',
  'Ayacucho',
  'Loreto',
  'Ucayali',
  'Amazonas',
  'Tacna',
  'Madre de Dios',
  'Moquegua',
  'Pasco',
  'Huancavelica',
  'Tumbes',
]

const ITEM_HEIGHT = 100
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

export default function SelectorProvincia() {
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Provincia</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={age}
          label='Age'
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          {provincias_peru.map((provincia, index) => (
            <MenuItem key={index} value={provincia}>
              {provincia}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
