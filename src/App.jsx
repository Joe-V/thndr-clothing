import {Routes , Route } from 'react-router-dom'


import NavBar from "./routes/NavBar/Navbar.component";
import Home from "./routes/Home/home.component";
import Authentication  from './routes/authentication/authentication.component';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<NavBar/>} >
            <Route index element={<Home/>}/>
            <Route path="shop" element={<h1>Shop</h1>} />
            <Route path="auth" element={<Authentication/>} />
        </Route>
    </Routes>
  );
};

export default App;