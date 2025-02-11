// src/components/GolfcarsSection.tsx
import React, { useRef, useState } from "react";
import { Box, Typography, CardMedia, Paper } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import VerticalGalleryDialog from "./VerticalGalleryDialog";

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
  const [openGallery, setOpenGallery] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleOpenGallery = () => {
    setOpenGallery(true);
  };

  const handleCloseGallery = () => {
    setOpenGallery(false);
  };

  return (
    <Box sx={{ my: 6, px: 2, textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{ color: "primary.main", fontWeight: "bold", mb: 2 }}
      >
        {name}
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: 600, mx: "auto", mb: 4, color: "text.secondary" }}
      >
        {description}
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
            <SwiperSlide key={idx} onClick={handleOpenGallery}>
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
      <VerticalGalleryDialog
        openGallery={openGallery}
        handleCloseGallery={handleCloseGallery}
        contentRef={contentRef}
        images={images}
      />
    </Box>
  );
};

export default GolfcarsSection;
