import React from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import ApartmentSection from "./components/ApartmentSection";
import Footer from "./components/Footer";

const apartments: { title: string; description: string; images: string[] }[] = [
  {
    title: "Appartamento Maestrale",
    description:
      "Appartamento da due posti letto, con bagno privato, cucina e spazio esterno.",
    images: [
      "src/assets/a1i1.jpg",
      "src/assets/a1i2.jpg",
      "src/assets/a1i3.jpg",
      "src/assets/a1i4.jpg",
      "src/assets/a1i5.jpg",
      "src/assets/a1i6.jpg",
      "src/assets/a1i7.jpg",
      "src/assets/a1i8.jpg",
      "src/assets/a1i9.jpg",
      "src/assets/a1i10.jpg",
    ],
  },
  {
    title: "Appartamento Scirocco",
    description:
      "Appartamento con due camere matrimoniali, con esterno, bagno privato e cucina.",
    images: [
      "src/assets/a2i1.jpg",
      "src/assets/a2i2.jpg",
      "src/assets/a2i3.jpg",
      "src/assets/a2i4.jpg",
      "src/assets/a2i5.jpg",
      "src/assets/a2i6.jpg",
      "src/assets/a2i7.jpg",
      "src/assets/a2i8.jpg",
      "src/assets/a2i9.jpg",
      "src/assets/a2i10.jpg",
    ],
  },
  {
    title: "Palazzotto Levante",
    description: "Palazzotto da 5 posti letto.",
    images: [
      "src/assets/a3i1.jpg",
      "src/assets/a3i2.jpg",
      "src/assets/a3i3.jpg",
      "src/assets/a3i4.jpg",
      "src/assets/a3i5.jpg",
      "src/assets/a3i6.jpg",
      "src/assets/a3i7.jpg",
      "src/assets/a3i8.jpg",
      "src/assets/a3i9.jpg",
      "src/assets/a3i10.jpg",
      "src/assets/a3i11.jpg",
      "src/assets/a3i12.jpg",
      "src/assets/a3i13.jpg",
    ],
  },
];

const App: React.FC = () => {
  return (
    <>
      {/* Home Section */}
      <div id="home">
        <Header />
      </div>

      {/* Apartments Section */}
      <Container sx={{ py: 4 }}>
        <div id="apartments">
          {apartments.map(({ title, description, images }) => {
            return (
              <ApartmentSection
                title={title}
                description={description}
                images={images}
              />
            );
          })}
        </div>
      </Container>

      {/* Contacts Section */}
      <div id="contacts">
        <Footer />
      </div>
    </>
  );
};

export default App;
