import './App.css';
import Home from './pages/Home/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './organizm/Header';
// import ProductList from './organizm/ProductList';
import ProductDetail from './organizm/ProductDetail';

function App() {
  return (
    <div className="App container">
      {/* <ProductList></ProductList> */}
      {/* <ProductDetail></ProductDetail> */}
      <Router>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/product/:id' element={<ProductDetail/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
