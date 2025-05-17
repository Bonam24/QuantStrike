import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import SchoolIcon from "@mui/icons-material/School"
import AssessmentIcon from "@mui/icons-material/Assessment"

export default function HeroSection() {
  return (
    <Box
      id="home"
      sx={{
        background: "linear-gradient(135deg, #0033A0 0%, #00A85A 100%)", // Standard Chartered-style blue to green
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        color: "#fff", // Set default text color to white
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} className="slide-in">
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 800,
                mb: 2,
              }}
            >
              Empowering Every Learner with AI
            </Typography>

            <Typography
              variant="h5"
              component="p"
              sx={{
                mb: 4,
                maxWidth: "90%",
                color: "#ffffffcc", // slightly transparent white
              }}
            >
              Personalized AI tutoring and diagnostics aligned with the Cameroonian curriculum, focusing on Mathematics
              Physics, Chemistry and other Science subjects.
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<SchoolIcon />}
                sx={{ mb: { xs: 2, sm: 0 }, backgroundColor: "#fff", color: "#0033A0", "&:hover": { backgroundColor: "#e0e0e0" } }}
              >
                Try AI Tutor
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#fff",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#ffffff22",
                    borderColor: "#fff",
                  },
                }}
                size="large"
                startIcon={<AssessmentIcon />}
              >
                Get Diagnosis
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} className="fade-in">
            <Box
              sx={{
                width: "100%",
                height: { xs: "300px", md: "400px" },
                background: "url(/placeholder.svg?height=400&width=500)",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: 4,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
