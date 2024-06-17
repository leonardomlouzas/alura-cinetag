import { Outlet } from "react-router-dom";
import Container from "@/components/container";
import Header from "@/components/header";
import FavoritesProvider from "@/contexts/favorites";
import Footer from "@/components/footer";

export default function Base() {
  return (
    <main>
      <Header />
      <FavoritesProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritesProvider>
      <Footer />
    </main>
  );
}
