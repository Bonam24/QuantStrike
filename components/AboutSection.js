import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import AutoStoriesIcon from "@mui/icons-material/AutoStories"
import PsychologyIcon from "@mui/icons-material/Psychology"
import SchoolIcon from "@mui/icons-material/School"

export default function AboutSection() {
  const features = [
    {
      icon: <PsychologyIcon sx={{ fontSize: 40, color: "#0033A0" }} />,
      title: "AI-Powered Learning",
      description: "Our conversational AI tutor adapts to each student's learning style and pace.",
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: "#00A85A" }} />,
      title: "Curriculum Aligned",
      description: "Content specifically designed for the Cameroonian educational system.",
    },
    {
      icon: <AutoStoriesIcon sx={{ fontSize: 40, color: "#0033A0" }} />,
      title: "Personalized Diagnosis",
      description: "Identify knowledge gaps and receive tailored recommendations for improvement.",
    },
  ]

  return (
    <Box
      id="about"
      className="section-padding animate-on-scroll"
      sx={{
        bgcolor: "white",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            About QuantStrike
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              fontSize: "1.1rem",
              color: "text.secondary",
              mb: 4,
            }}
          >
            QuantStrike addresses the educational challenges faced by Cameroonian students through innovative AI
            technology. Our platform bridges learning gaps by providing personalized tutoring and diagnostic tools that
            adapt to each student's needs, making quality education more accessible.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: 4,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
