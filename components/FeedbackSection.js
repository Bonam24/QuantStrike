"use client"

import { useState } from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Rating from "@mui/material/Rating"
import SendIcon from "@mui/icons-material/Send"
import FeedbackIcon from "@mui/icons-material/Feedback"

export default function FeedbackSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    feedback: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRatingChange = (event, newValue) => {
    setFormData((prev) => ({
      ...prev,
      rating: newValue,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Feedback submitted:", formData)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        rating: 5,
        feedback: "",
      })
    }, 3000)
  }

  return (
    <Box
      id="feedback"
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
            Parent Feedback
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              fontSize: "1.1rem",
              color: "text.secondary",
            }}
          >
            We value your input! Share your experience with QuantStrike to help us improve our platform.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                Why Your Feedback Matters
              </Typography>

              <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
                Your insights help us tailor our AI tutoring platform to better serve Cameroonian students. We're
                committed to continuously improving our educational tools based on real experiences from parents and
                students.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 3,
                  bgcolor: "#f8f9fa",
                  borderRadius: 2,
                  mb: 3,
                }}
              >
                <FeedbackIcon sx={{ fontSize: 40, color: "#0033A0", mr: 2 }} />
                <Typography variant="body1" fontStyle="italic">
                  "Every piece of feedback helps us build a better educational future for Cameroon's students."
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 4, boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)" }}>
              <CardContent sx={{ p: 4 }}>
                {submitted ? (
                  <Box sx={{ textAlign: "center", py: 4 }}>
                    <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
                      Thank you for your feedback!
                    </Typography>
                    <Typography variant="body1">
                      We appreciate your input and will use it to improve QuantStrike.
                    </Typography>
                  </Box>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                      Share Your Experience
                    </Typography>

                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ mt: 2, mb: 1 }}>
                          <Typography component="legend">Rate your experience</Typography>
                          <Rating name="rating" value={formData.rating} onChange={handleRatingChange} size="large" />
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Your Feedback"
                          name="feedback"
                          multiline
                          rows={4}
                          value={formData.feedback}
                          onChange={handleChange}
                          required
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          endIcon={<SendIcon />}
                          fullWidth
                          sx={{ mt: 2 }}
                        >
                          Submit Feedback
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
