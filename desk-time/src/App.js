import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './routes/AllRoutes';
import { Image } from "@chakra-ui/react";
import Footer from './components/Footer';
import Home from './pages/Home';
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    <div className="App">
      <AllRoutes />
    </div>

  );
}

export default App;
