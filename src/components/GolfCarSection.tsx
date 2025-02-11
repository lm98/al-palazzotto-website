// src/components/GolfcarsSection.tsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

interface GolfcarSectionProps {
  name: string;
  description: string;
  images: string[];
  fitStyle?: "cover" | "contain";
}

const GolfcarsSection: React.FC<GolfcarSectionProps> = ({
  name,
  description,
  images,
  fitStyle = "cover",
}: GolfcarSectionProps) => {
  const [startIndex] = useState<number>(0);

  return (
    <Box sx={{ my: 6, px: 2, textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{ color: "primary.main", fontWeight: "bold", mb: 2 }}
      >
        Phidea Golfcars
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: 600, mx: "auto", mb: 4, color: "text.secondary" }}
      >
        Discover our range of high-quality golfcars, rented by Phidea, designed
        to offer comfort and style.
      </Typography>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} key={startIndex}>
            <Card sx={{ maxWidth: 345, mx: "auto", boxShadow: 3 }}>
              {images.length > 1 ? (
                // Se ci sono più immagini, usa uno Swiper slider
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  style={{ width: "100%", height: "200px" }}
                >
                  {images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={img}
                        alt={`${name} - image ${idx + 1}`}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: fitStyle,
                          objectPosition: "center",
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                // Altrimenti, mostra una singola immagine
                <CardMedia
                  component="img"
                  height="200"
                  image={images[0]}
                  alt={name}
                  sx={{
                    objectFit: "cover",
                    objectPosition: "center", // Centra l'immagine
                  }}
                />
              )}
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GolfcarsSection;
