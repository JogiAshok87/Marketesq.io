import { BrowserRouter as Router,Routes , Route,} from 'react-router-dom';

import Header from  './Components/Header'
import Home from './Components/Home'
import Products from './Components/Products';
import Classes from './Components/Classes';
import AboutUs from './Components/AboutUs';
import Login from './Components/Login'
import Register from './Components/Register'
import Cart from './Components/Cart'
import './App.css';

const App = () =>{
  return(
      <Router>
          <Header />
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/Products"  element={<Products />}/>
          <Route path="/Classes"  element={<Classes />}/>
          <Route path="/AboutUs" element={<AboutUs />}/>
          <Route path="/Cart" element={<Cart />}/>
          </Routes>
      </Router>
  )
}


export default App;
