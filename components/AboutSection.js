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
    icon: <PsychologyIcon sx={{ fontSize: 50, color: "#0033A0" }} />,
    title: "AI-Powered Learning",
    description:
      "Our conversational AI tutor dynamically adjusts to individual learning styles, offering real-time guidance, adaptive questioning, and continuous engagement to help students grasp complex concepts in Mathematics and Chemistry.",
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 50, color: "#00A85A" }} />,
    title: "Curriculum Aligned",
    description:
      "Every lesson and diagnostic tool is carefully mapped to the Cameroonian national curriculum, ensuring students receive relevant, exam-ready content that supports classroom learning and national assessments.",
  },
  {
    icon: <AutoStoriesIcon sx={{ fontSize: 50, color: "#0033A0" }} />,
    title: "Personalized Diagnosis",
    description:
      "Our smart diagnostic engine pinpoints individual knowledge gaps using data-driven analytics and delivers actionable insights—enabling students, teachers, and parents to focus on the areas that matter most.",
  },
]


  return (
    <Box
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
        background: "linear-gradient(135deg, #eaf6f6 0%, #e1f5ec 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: "2.2rem", md: "3rem" },
              color: "#003366",
            }}
          >
            About QuantStrike
          </Typography>

          <Typography
  variant="body1"
  sx={{
    maxWidth: "800px",
    mx: "auto",
    fontSize: "1.15rem",
    color: "#4a4a4a",
    lineHeight: 1.7,
    textAlign: "justify", // Justified main paragraph
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
                elevation={3}
                sx={{
                  p: 5,
                  height: "100%",
                  backdropFilter: "blur(8px)",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: 4,
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <Box sx={{ mb: 3 }}>{feature.icon}</Box>
                <Typography variant="h6" component="h3" sx={{ mb: 1.5, fontWeight: 700, color: "#003366" }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#5a5a5a", fontSize: "1rem", lineHeight: 1.6 }}>
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
