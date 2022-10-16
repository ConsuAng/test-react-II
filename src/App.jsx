import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { ContextProvider } from './context/Context';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import Home from './pages/Home';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pizza/:id' element={<Detail/>}/>
            <Route path='/carrito' element={<Cart />} />
          </Routes>
          <Footer />
        </ContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
