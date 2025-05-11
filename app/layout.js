"use client"
import { Inter } from "next/font/google"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

// Create a theme with Standard Chartered's color palette
const theme = createTheme({
  palette: {
    primary: {
      main: "#0033A0", // Blue
    },
    secondary: {
      main: "#00A85A", // Green
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          padding: "10px 24px",
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        },
      },
    },
  },
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>QuantStrike - AI-Powered Educational Platform</title>
        <meta
          name="description"
          content="QuantStrike is an AI-powered educational platform focusing on Mathematics and Chemistry for Cameroonian curriculum."
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


