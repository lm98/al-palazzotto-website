import { useState, useRef } from "react";
import { Box, Typography, CardMedia, Paper } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import VerticalGalleryDialog from "./VerticalGalleryDialog";

interface ApartmentProps {
  title: string;
  description: string;
  images: string[];
  fitStyle?: "cover" | "contain";
}

const ApartmentSection: React.FC<ApartmentProps> = ({
  title,
  description,
  images,
  fitStyle = "cover",
}) => {
  const [openGallery, setOpenGallery] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleOpenGallery = () => {
    setOpenGallery(true);
  };

  const handleCloseGallery = () => {
    setOpenGallery(false);
  };

  return (
    <Box sx={{ my: 6, px: 2, py: 4, textAlign: "center" }}>
      {/* Titolo e descrizione */}
      <Typography
        variant="h4"
        sx={{ color: "primary.main", fontWeight: "bold", mb: 2 }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: 600,
          mx: "auto",
          mb: 4,
          color: "text.secondary",
        }}
      >
        {description}
      </Typography>
      {/* Carosello principale */}
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
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              onClick={() => handleOpenGallery()}
              style={{ cursor: "pointer" }}
            >
              <CardMedia
                component="img"
                image={img}
                alt={`Immagine ${index + 1} di ${title}`}
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

export default ApartmentSection;
