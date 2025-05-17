"use client"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Link from "@mui/material/Link"
import Divider from "@mui/material/Divider"
import Logo from "./Logo"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log("Subscribed to newsletter")
    // Reset form
    e.target.reset()
  }

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0072CE",
        color: "white",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Logo />
            </Box>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Empowering Cameroonian students with AI-powered educational tools for Mathematics Physics,Chemistry and other Science subjects.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconLink icon={<FacebookIcon />} href="#" />
              <IconLink icon={<TwitterIcon />} href="#" />
              <IconLink icon={<InstagramIcon />} href="#" />
              <IconLink icon={<LinkedInIcon />} href="#" />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#subjects">Subjects</FooterLink>
              <FooterLink href="#feedback">Feedback</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Stay Updated
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Subscribe to our newsletter for the latest updates and educational resources.
            </Typography>
            <Box component="form" onSubmit={handleSubscribe} sx={{ mb: 4 }}>
              <TextField
                fullWidth
                placeholder="Your email address"
                variant="outlined"
                size="small"
                required
                sx={{
                  mb: 1.5,
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.5)",
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "rgba(255, 255, 255, 0.7)",
                    opacity: 1,
                  },
                }}
              />
              <Button type="submit" variant="contained" color="secondary" fullWidth>
                Subscribe
              </Button>
            </Box>

            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <ContactItem icon={<EmailIcon />} text="info@quantstrike.com" />
              <ContactItem icon={<PhoneIcon />} text="+237 123 456 789" />
              <ContactItem icon={<LocationOnIcon />} text="Kumba, Cameroon" />
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)", my: 4 }} />

        <Typography variant="body2" align="center" sx={{ opacity: 0.8 }}>
          © {new Date().getFullYear()} QuantStrike. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      underline="hover"
      sx={{
        color: "rgba(255, 255, 255, 0.8)",
        transition: "color 0.2s",
        "&:hover": {
          color: "white",
        },
      }}
    >
      {children}
    </Link>
  )
}

function IconLink({ icon, href }) {
  return (
    <Link
      href={href}
      sx={{
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 36,
        height: 36,
        borderRadius: "50%",
        bgcolor: "rgba(255, 255, 255, 0.1)",
        transition: "all 0.2s",
        "&:hover": {
          bgcolor: "#00A85A",
          transform: "translateY(-3px)",
        },
      }}
    >
      {icon}
    </Link>
  )
}

function ContactItem({ icon, text }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      <Box sx={{ color: "#00A85A" }}>{icon}</Box>
      <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
        {text}
      </Typography>
    </Box>
  )
}
