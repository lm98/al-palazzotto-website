import { Box, Typography, CardMedia, Paper } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Define TypeScript Props Interface
interface ApartmentProps {
  title: string;
  description: string;
  images: string[];
}

const ApartmentSection: React.FC<ApartmentProps> = ({
  title,
  description,
  images,
}) => {
  return (
    <Box
      sx={{
        my: 6,
        px: 2,
        py: 4,
        textAlign: "center",
        // Optionally use a background color if desired:
        // backgroundColor: "background.default",
      }}
    >
      {/* Apartment Title */}
      <Typography
        variant="h4"
        sx={{ color: "primary.main", fontWeight: "bold", mb: 2 }}
      >
        {title}
      </Typography>

      {/* Apartment Description */}
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

      {/* Slideshow Container styled as a Paper card */}
      <Paper
        elevation={3}
        sx={{
          maxWidth: 600,
          mx: "auto",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          style={{ width: "100%", height: "300px" }} // Fixed size for the slideshow
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <CardMedia
                component="img"
                image={img}
                alt={`Apartment ${title} image ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Paper>
    </Box>
  );
};

export default ApartmentSection;
