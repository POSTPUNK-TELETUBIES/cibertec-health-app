import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
// import db from '../../db'
// import { citaMedicaExample } from '../../examples'

// await db.citaMedica.createOne(citaMedicaExample)

export default function Selectores() {
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

  return (
    <div>
      {/* ESPECIALIDAD */}
      <FormControl sx={{ m: 1, minWidth: 150 }} disabled>
        <InputLabel id='espcialidad-label'>Especialidad</InputLabel>
        <Select
          labelId='espcialidad-label'
          id='espcialidad'
          value={age}
          label='Age'
          onChange={handleChange}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>

      {/* CENTRO MEDICO */}
      {/* <FormControl sx={{ m: 1, minWidth: 160 }} error>
        <InputLabel id='demo-simple-select-error-label'>Centro médico</InputLabel>
        <Select
          labelId='demo-simple-select-error-label'
          id='demo-simple-select-error'
          value={age}
          label='Age'
          onChange={handleChange}
          renderValue={(value) => `⚠️  - ${value}`}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Error</FormHelperText>
      </FormControl> */}

      {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id='demo-simple-select-readonly-label'>Age</InputLabel>
        <Select
          labelId='demo-simple-select-readonly-label'
          id='demo-simple-select-readonly'
          value={age}
          label='Age'
          onChange={handleChange}
          inputProps={{ readOnly: true }}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Read only</FormHelperText>
      </FormControl> */}
    </div>
  )
}
