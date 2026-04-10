import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './global.styles'; // Import the global styles

import NavBar from "./routes/NavBar/Navbar.component";
import Home from "./routes/Home/home.component";
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/Shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;