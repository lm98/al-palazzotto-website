import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "primary.main",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="body1">Al Palazzotto - Appartamenti</Typography>
      <Typography variant="body2">
        Contattaci:
        <Link
          href="mailto:alpalazzottopantelleria@gmail.com"
          color="inherit"
          sx={{ mx: 1 }}
        >
          alpalazzottopantelleria@gmail.com
        </Link>{" "}
        |
        <Link href="tel:+393427615010" color="inherit" sx={{ mx: 1 }}>
          +39 342 761 5010
        </Link>
      </Typography>
      <Typography variant="caption">
        © {new Date().getFullYear()} Al Palazzotto. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
