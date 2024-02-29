import { Box, Card, Typography } from "@mui/material";
import { ChatDoctorIcon } from "../ChatDoctorIcon";
import { PillsIcon } from "../PillsIcon";
import { HospitalIcon } from "../HospitalIcon";

export const CategoryShow = () => {
  return (
    <Box paddingInline={{ xs: "1rem", md: "6rem" }} paddingBlock={4}>
      <Typography align="center" variant="h2" sx={{ marginBottom: "4rem" }}>
        Nuestras{" "}
        <Typography
          color="sheldon"
          fontSize="inherit"
          fontWeight="inherit"
          component="span"
        >
          principales
        </Typography>{" "}
        <br />
        Categorias
      </Typography>
      <Box display="flex" justifyContent="center" gap={10} flexWrap="wrap">
        <Card
          sx={{width: "360px", height: "511px", backgroundColor: "#F4FEFF"}}>
          <Box display={"grid"} sx={{placeItems: "center"}}>
            <ChatDoctorIcon
              sx={{
                fontSize: 162,
                marginBlock: "2rem",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            />
          </Box>
          <Typography fontSize={"1.5rem"} variant="h4">
            Chat con doctor
          </Typography>
          <Typography variant="body2"
            sx={{marginBlock: "1rem", paddingX: "1rem", lineHeight: "1.8"}}>
            Podrás conectarte de forma directa, rápida y sencilla, y no tendrás
            que dudar de la calidad de la consulta y el tratamiento ofrecido.
          </Typography>
        </Card>
        <Card
          sx={{
            width: "360px",
            height: "511px",
            backgroundColor: "#F4FEFF",
            background: "linear-gradient(180deg, #4ED6DA 0%, #04789D 100%)",
          }}
        >
          <Box display={"grid"} sx={{ placeItems: "center" }}>
            <PillsIcon
              sx={{
                fontSize: 162,
                marginBlock: "2rem",
                borderRadius: "50%",
                backgroundColor: "white",
              }}
            />
          </Box>
          <Typography color="white" fontSize={"1.5rem"} variant="h4">
            Farmacia
          </Typography>
          <Typography color="white" variant="body2"
            sx={{marginBlock: "1rem", paddingX: "1rem", lineHeight: "1.8"}}>
            Podrás conectarte de forma directa, rápida y sencilla, y no tendrás
            que dudar de la calidad de la consulta y el tratamiento ofrecido.
          </Typography>
        </Card>
        <Card
          sx={{width: "360px", height: "511px", backgroundColor: "#F4FEFF"}}>
          <Box
            display={"grid"}
            sx={{
              placeItems: "center",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <HospitalIcon
              sx={{
                fontSize: 162,
                marginBlock: "2rem",
                borderRadius: "50%",
                backgroundColor: "white",
              }}
            />
          </Box>
          <Typography fontSize={"1.5rem"} variant="h4">
            Clinicas
          </Typography>
          <Typography variant="body2"
            sx={{marginBlock: "1rem", paddingX: "1rem", lineHeight: "1.8"}}>
            Podrás conectarte de forma directa, rápida y sencilla, y no tendrás
            que dudar de la calidad de la consulta y el tratamiento ofrecido.
          </Typography>
        </Card>
      </Box>
    </Box>
  );
};
