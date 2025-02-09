import { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  CardMedia,
  Paper,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import CloseIcon from "@mui/icons-material/Close";

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
  const [startIndex, setStartIndex] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleOpenGallery = (index: number) => {
    setStartIndex(index);
    setOpenGallery(true);
  };

  const handleCloseGallery = () => {
    setOpenGallery(false);
  };

  // Quando il dialogo si apre, scrolla fino all'immagine selezionata
  useEffect(() => {
    if (openGallery && contentRef.current) {
      const element = contentRef.current.querySelector(`#img-${startIndex}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [openGallery, startIndex]);

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
              onClick={() => handleOpenGallery(index)}
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

      {/* Dialog con galleria verticale */}
      <Dialog
        open={openGallery}
        onClose={handleCloseGallery}
        fullWidth
        maxWidth="md"
      >
        <IconButton
          onClick={handleCloseGallery}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "white",
            zIndex: 10,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          ref={contentRef}
          sx={{
            p: 2,
            overflowY: "auto",
            maxHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {images.map((img, index) => (
            <Box key={index} id={`img-${index}`}>
              <CardMedia
                component="img"
                image={img}
                alt={`Galleria ${title} - immagine ${index + 1}`}
                sx={{
                  width: "100%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
            </Box>
          ))}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ApartmentSection;
