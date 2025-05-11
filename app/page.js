"use client"
import { useEffect } from "react"
import Box from "@mui/material/Box"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import SubjectsSection from "../components/SubjectsSection"
import FeedbackSection from "../components/FeedbackSection"
import Footer from "../components/Footer"

export default function Home() {
  useEffect(() => {
    // Add intersection observer for animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  return (
    <Box>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SubjectsSection />
      <FeedbackSection />
      <Footer />
    </Box>
  )
}
