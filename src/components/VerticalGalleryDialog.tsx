import {
  Box,
  CardMedia,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface VerticalGalleryDialogProps {
  openGallery: boolean;
  handleCloseGallery: (...args: any) => void;
  contentRef: React.RefObject<HTMLDivElement | null>;
  images: string[];
}

const VerticalGalleryDialog: React.FC<VerticalGalleryDialogProps> = ({
  openGallery,
  handleCloseGallery,
  contentRef,
  images,
}) => {
  return (
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
              alt={`Galleria - immagine ${index + 1}`}
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
  );
};

export default VerticalGalleryDialog;
