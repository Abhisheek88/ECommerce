import { Route, Routes } from "react-router-dom";
import Auth from "./components/auth/index";
import Authlogin from "./Pages/auth/login";
import Authregister from "./Pages/auth/register";
import Adminlayout from "./components/admin-view/layout";
import Adminorder from "./Pages/admin-view/order";
import Adminfeatures from "./Pages/admin-view/features";
import Admindashboard from "./Pages/admin-view/dashboard";
import Adminproducts from "./Pages/admin-view/products";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./Pages/Not-found";
import ShoppingAccount from "./Pages/shopping-view/account";
import ShoppingHome from "./Pages/shopping-view/home";
import ShoppingListing from "./Pages/shopping-view/listing";
import ShoppingCheckout from "./Pages/shopping-view/checkout";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      

      <Routes>
        <Route path="/" element={<Auth />}>
          <Route path="login" element={<Authlogin />}/>
          <Route path="register" element={<Authregister />}/>
        </Route>

        <Route path="/admin" element={<Adminlayout/>}>
          <Route path="order" element={<Adminorder/>}/>
          <Route  path="features" element={<Adminfeatures/>}/>
          <Route  path="dashboard" element={<Admindashboard/>}/>
          <Route path="products" element={<Adminproducts/>}/>
        </Route>

        <Route path="/shop" element={<ShoppingLayout/>}>
        <Route path="account" element={<ShoppingAccount/>}/>
        <Route path="home" element={<ShoppingHome/>} />
        <Route path="listing" element={<ShoppingListing/>}   />
        <Route path="checkout" element={<ShoppingCheckout/>} />

        </Route>

        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
