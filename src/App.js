// App.js
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import GalleryHw from './Components/GalleryHw';
import ApiHw from './Components/ApiHw';
import Layout from './Components/Layout';
import Page404 from './Pages/Page404';
import Shop from './Pages/Shop';
import Query from './Pages/Query';
import Games from './Components/Games'; // Ensure this import is correct

function App() {
  return (
    <BrowserRouter>
      <header className='bg-warning'>
        <Link to="/">Home | </Link>
        <Link to="/gallery">Gallery | </Link>
        <Link to="/vip">VIP | </Link>
        <Link to="/shop/food">Shop | </Link>
        <Link to="/games">Games</Link> {/* Corrected the link for games */}
      </header>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/games" element={<Games />} /> {/* Corrected route for Games */}
        <Route path="/gallery" element={<GalleryHw />} />
        <Route path="/vip" element={<ApiHw />} />
        <Route path="/shop/:catname" element={<Shop/>} />
        <Route path="/query" element={<Query/>} />
        <Route path="*" element={<Page404/>} />
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
