"use client"

import { useState } from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import FunctionsIcon from "@mui/icons-material/Functions"
import ScienceIcon from "@mui/icons-material/Science"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`subject-tabpanel-${index}`}
      aria-labelledby={`subject-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  )
}

export default function SubjectsSection() {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const subjects = [
    {
      name: "Mathematics",
      icon: <FunctionsIcon />,
      description: "Master mathematical concepts through interactive problem-solving and step-by-step explanations.",
      features: [
        "Algebra and Functions",
        "Geometry and Trigonometry",
        "Calculus and Statistics",
        "Problem-solving Techniques",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      name: "Chemistry",
      icon: <ScienceIcon />,
      description: "Explore chemistry concepts with virtual experiments and personalized explanations.",
      features: ["Atomic Structure", "Chemical Bonding", "Organic Chemistry", "Chemical Reactions"],
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <Box
      id="subjects"
      className="section-padding animate-on-scroll"
      sx={{
        bgcolor: "#f8f9fa",
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
            Our Subjects
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
            QuantStrike offers specialized AI tutoring in key subjects aligned with the Cameroonian curriculum.
          </Typography>
        </Box>

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="subject tabs"
            centered
            sx={{
              "& .MuiTab-root": {
                fontSize: "1.1rem",
                fontWeight: 600,
                textTransform: "none",
                minWidth: 120,
              },
              "& .Mui-selected": {
                color: value === 0 ? "#0033A0" : "#00A85A",
              },
              "& .MuiTabs-indicator": {
                backgroundColor: value === 0 ? "#0033A0" : "#00A85A",
              },
            }}
          >
            <Tab
              icon={<FunctionsIcon />}
              iconPosition="start"
              label="Mathematics"
              id="subject-tab-0"
              aria-controls="subject-tabpanel-0"
            />
            <Tab
              icon={<ScienceIcon />}
              iconPosition="start"
              label="Chemistry"
              id="subject-tab-1"
              aria-controls="subject-tabpanel-1"
            />
          </Tabs>
        </Box>

        {subjects.map((subject, index) => (
          <TabPanel value={value} index={index} key={index}>
            <Card sx={{ overflow: "hidden", borderRadius: 4 }}>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={subject.image}
                    alt={subject.name}
                    sx={{
                      height: { xs: "200px", md: "100%" },
                      objectFit: "cover",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h4" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                      {subject.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                      {subject.description}
                    </Typography>

                    <Typography variant="h6" component="h4" sx={{ mb: 2, fontWeight: 600 }}>
                      Key Topics:
                    </Typography>

                    <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                      {subject.features.map((feature, idx) => (
                        <Typography component="li" key={idx} sx={{ mb: 1 }}>
                          {feature}
                        </Typography>
                      ))}
                    </Box>

                    <Button variant="contained" color={index === 0 ? "primary" : "secondary"} size="large">
                      Start Learning {subject.name}
                    </Button>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </TabPanel>
        ))}
      </Container>
    </Box>
  )
}
