import React from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import ApartmentSection from "./components/ApartmentSection";
import Footer from "./components/Footer";

// Imports for "Appartamento Maestrale" images
import a1i1 from "./assets/a1i1.jpg";
import a1i2 from "./assets/a1i2.jpg";
import a1i3 from "./assets/a1i3.jpg";
import a1i4 from "./assets/a1i4.jpg";
import a1i5 from "./assets/a1i5.jpg";
import a1i6 from "./assets/a1i6.jpg";
import a1i7 from "./assets/a1i7.jpg";
import a1i8 from "./assets/a1i8.jpg";
import a1i9 from "./assets/a1i9.jpg";
import a1i10 from "./assets/a1i10.jpg";

// Imports for "Appartamento Scirocco" images
import a2i1 from "./assets/a2i1.jpg";
import a2i2 from "./assets/a2i2.jpg";
import a2i3 from "./assets/a2i3.jpg";
import a2i4 from "./assets/a2i4.jpg";
import a2i5 from "./assets/a2i5.jpg";
import a2i6 from "./assets/a2i6.jpg";
import a2i7 from "./assets/a2i7.jpg";
import a2i8 from "./assets/a2i8.jpg";
import a2i9 from "./assets/a2i9.jpg";
import a2i10 from "./assets/a2i10.jpg";

// Imports for "Palazzotto Levante" images
import a3i1 from "./assets/a3i1.jpg";
import a3i2 from "./assets/a3i2.jpg";
import a3i3 from "./assets/a3i3.jpg";
import a3i4 from "./assets/a3i4.jpg";
import a3i5 from "./assets/a3i5.jpg";
import a3i6 from "./assets/a3i6.jpg";
import a3i7 from "./assets/a3i7.jpg";
import a3i8 from "./assets/a3i8.jpg";
import a3i9 from "./assets/a3i9.jpg";
import a3i10 from "./assets/a3i10.jpg";
import a3i11 from "./assets/a3i11.jpg";
import a3i12 from "./assets/a3i12.jpg";
import a3i13 from "./assets/a3i13.jpg";

const apartments: { title: string; description: string; images: string[] }[] = [
  {
    title: "Appartamento Maestrale",
    description:
      "Appartamento da due posti letto, con bagno privato, cucina e spazio esterno.",
    images: [a1i1, a1i2, a1i3, a1i4, a1i5, a1i6, a1i7, a1i8, a1i9, a1i10],
  },
  {
    title: "Appartamento Scirocco",
    description:
      "Appartamento con due camere matrimoniali, con esterno, bagno privato e cucina.",
    images: [a2i1, a2i2, a2i3, a2i4, a2i5, a2i6, a2i7, a2i8, a2i9, a2i10],
  },
  {
    title: "Palazzotto Levante",
    description: "Palazzotto da 5 posti letto.",
    images: [
      a3i1,
      a3i2,
      a3i3,
      a3i4,
      a3i5,
      a3i6,
      a3i7,
      a3i8,
      a3i9,
      a3i10,
      a3i11,
      a3i12,
      a3i13,
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
          {apartments.map(({ title, description, images }, index) => (
            <ApartmentSection
              key={index}
              title={title}
              description={description}
              images={images}
            />
          ))}
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
