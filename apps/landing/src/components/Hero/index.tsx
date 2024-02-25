import { Box, Button, Typography } from "@mui/material"

export const Hero = ()=>{
  return <Box>
          <Box>
            <Typography variant="h2" fontWeight={900}>Estamos listos</Typography>
            <Typography color={"sheldon"} variant="h2" fontWeight={900}>para ayudarte</Typography>
            <Typography variant="h2" fontWeight={900}>con tu salud</Typography>
            <Typography color={"#C4C4C4"}>En tiempos como hoy, tu salud es muy importante, especialmente porque el número de casos de COVID-19 es aumentando día a día, por eso estamos listos para ayudarte con tu consulta de salud</Typography>
            <Button variant="contained" color="primary">Afiliate</Button>
          </Box>
          <Box>

          </Box>
        </Box>
}
