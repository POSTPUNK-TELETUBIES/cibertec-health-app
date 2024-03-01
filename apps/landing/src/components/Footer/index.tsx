import { Box, Button, Card, Link, Stack, Typography } from "@mui/material";


export const Footer = () => {
  const footerLinks = {
    Tutorify: ["Learn more than just a language"],
    FindTeacher: [
      "English Teachers",
      "Chinese Teachers",
      "French Teachers",
      "Spanish Teachers",
      "Other Teachers",
    ],
    Lessons: [
      "Learn English",
      "Learn Chinese",
      "Learn French",
      "Learn Spanish",
      "Learn More Languages",
    ],
    Company: ["About", "How it Works", "Term", "Privacy Policy"],
    More: ["Documentation", "License"],
  };

  return (
    <Box
      sx={{
        padding: "2rem",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxWidth: "1500px", width: "100%", textAlign: "center", mb: 4 }}>
        <Card
          sx={{
            width: "1500px",
            height: "417px",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mb: 14,
          }}
        >
          <Typography align="center" variant="h2">
            Empezar{" "}
            <Typography
              color="sheldon"
              fontSize="inherit"
              fontWeight="inherit"
              component="span"
            >
              con HaiDoc
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              justifyContent: "center",
              my: 2,
              maxWidth: "70ch", 
              mx: 'auto',
              textAlign: "center", 
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
            morbi tristique libero urna sem vitae. Viverra facilisis rhoncus et,
            nibh nullam vitae laoreet.
          </Typography>
          <Button variant="contained" sx={{ mt: 4, borderRadius: "40px" }}>
            Empecemos
          </Button>
        </Card>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        divider={<Box sx={{ width: "1px", bgcolor: "grey.300", mx: 4 }} />}
        spacing={2}
        sx={{
          width: "100%",
        }}
      >
        {Object.entries(footerLinks).map(([section, links]) => (
          <Box key={section}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: '20px' }}>
              {section}
            </Typography>
            {links.map((text) => (
              <Link
                href="#"
                key={text}
                color="inherit"
                underline="hover"
                sx={{ display: "block", mb: 0.5, fontWeight: 'normal', fontSize: '20px' }}
              >
                {text}
              </Link>
            ))}
          </Box>
        ))}
      </Stack>
      </Box>
    </Box>
  );
};
