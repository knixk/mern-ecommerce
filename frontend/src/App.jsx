import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet></Outlet>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
