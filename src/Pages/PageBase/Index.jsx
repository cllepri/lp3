import Header from "../../Components/Header/Header";
import Container from "../../Components/Container/Container";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function PageBase() {
  return (
    <main>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </main>
  );
}

export default PageBase;
