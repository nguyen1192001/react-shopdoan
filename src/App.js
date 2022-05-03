import '../src/style.css'
import Header from "./component/Header";
import Featured_Product from './component/Featured_Product';
import Product_Banner from './component/Product_Banner';
import Testimonials from './component/Testimonials';
import Footer from './component/Footer';
import Cart from './component/Cart'
import Login from './component/Login'
import PayMent from './component/PayMent';
import { useSelector } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Register from './component/Register';

function App() {
  const isEdit = useSelector((state) => state.changeEdit.isEdit)
  const elogin = useSelector((state) => state.getError.login)
  const stateChangePay = useSelector((state)=>state.changeStatePay.payState)
  
  const showForm = () => {
    if (isEdit) {
      return <Cart />
    }
  }
  const showFormLogin = () => {
    if (!elogin) {
      
      return <Redirect  to="/" />
        
    }
  }

  const showFormPay = () => {
    if(stateChangePay){
      return <PayMent/>
    }
  }


  return (
    <Router>
      <div >
        <Header />
        <Featured_Product />
        {/* <Product_Banner />
        <Testimonials /> */}
        <Footer />
        
        {showForm()}
        {showFormLogin()}
        {showFormPay()}
      </div>
      <Switch>
        <Route path="/dashboard" component={Login} />
        <Route path="/cart" component={Cart} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}
export default App
