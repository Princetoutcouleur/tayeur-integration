import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './Components/homePage/HomePage';
import AtelierPage from './Components/pageAtelier/AtelierPage';
import DetailAtelier from './Components/detailAtelier/DetailAtelier';
import ProductPage from './Components/productPage/ProductPage';
import AboutPage from './Components/aboutPage/AboutPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/atelier' element={<AtelierPage/>}/>
          <Route path='/detailAtelier' element={<DetailAtelier/>}/>
          <Route path='/produit' element={<ProductPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
