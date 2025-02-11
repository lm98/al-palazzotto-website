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
  Paper,
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
      <Paper
        sx={{
          maxWidth: 600,
          mx: "auto",
          borderRadius: 2,
          overflow: "hidden",
        }}
        elevation={3}
      >
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          style={{ width: "100%", height: "300px" }}
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
      </Paper>
    </Box>
  );
};

export default GolfcarsSection;
