import React from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import ApartmentSection from "./components/ApartmentSection";
import Footer from "./components/Footer";

const apartments: { title: string; description: string; images: string[] }[] = [
  {
    title: "Appartamento Ossidiana",
    description:
      "Appartamento da due posti letto, con bagno privato, cucina e spazio esterno",
    images: [
      "https://source.unsplash.com/600x400/?luxury,room",
      "https://source.unsplash.com/600x400/?hotel,bedroom",
      "https://source.unsplash.com/600x400/?interior,apartment",
    ],
  },
  {
    title: "Cozy Retreat",
    description:
      "Perfect for couples, this charming apartment offers a warm ambiance and rustic decor.",
    images: [
      "https://source.unsplash.com/600x400/?cozy,apartment",
      "https://source.unsplash.com/600x400/?bedroom,cabin",
      "https://source.unsplash.com/600x400/?rustic,hotel",
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
