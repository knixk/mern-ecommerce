import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import Product from "./components/Product";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen></HomeScreen>
        </Container>
      </main> 
      <Footer/> 
    </>
  );
}

export default App;
