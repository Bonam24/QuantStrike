import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

export default function Logo({ variant = "default" }) {
  const isSmall = variant === "small"

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        component="span"
        sx={{
          fontWeight: 800,
          fontSize: isSmall ? "1.5rem" : "2rem",
          color: "#0033A0",
          mr: 0.5,
        }}
      >
        Quant
      </Typography>
      <Typography
        component="span"
        sx={{
          fontWeight: 800,
          fontSize: isSmall ? "1.5rem" : "2rem",
          color: "#00A85A",
        }}
      >
        Strike
      </Typography>
    </Box>
  )
}
