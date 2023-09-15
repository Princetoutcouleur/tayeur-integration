import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './Components/homePage/HomePage';
import AtelierPage from './Components/pageAtelier/AtelierPage';
import DetailAtelier from './Components/detailAtelier/DetailAtelier';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* <AtelierPage/> */}
      {/* <DetailAtelier/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/atelier' element={<AtelierPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
