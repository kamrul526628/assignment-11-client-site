
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Shared/Footer/Footer';
import RequireAuth from './Pages/Login/RequireAuth';
import Login from './Pages/Login/Login';
import MyItems from './Pages/MyItems/MyItems';
import AddItem from './Pages/AddItem/AddItem';
import ManageItems from './Pages/ManageItems/ManageItems';
import NotFound from './Pages/Shared/NotFound';
import SignUp from './Pages/Login/SignUp';
import ItemDetail from './Pages/ItemDetail/ItemDetail';
import Checkout from './Pages/ItemDetail/Checkout/Checkout';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="myitems" element={<RequireAuth><MyItems/></RequireAuth>} />
        <Route path="manageitems" element={<RequireAuth><ManageItems/></RequireAuth>} />
        <Route path="additems" element={<RequireAuth><AddItem /></RequireAuth>} />
        <Route path="checkout" element={<RequireAuth><Checkout/></RequireAuth>} />
        <Route path='/item/:itemId' element={<ItemDetail></ItemDetail>}></Route>
        

        {/* <Route path="about" element={<About />} /> */}
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
