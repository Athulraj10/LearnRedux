import { Fragment, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductList, Header } from "./components";
import { updateUser } from "./redux/cart";
function App() {
   return (
      <Fragment>
         <Header />
         <ProductList />
      </Fragment>
   );
}

export default App;
