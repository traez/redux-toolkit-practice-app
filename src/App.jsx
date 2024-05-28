import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./components/Modal";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Footer from "./components/Footer";

import { calculateTotals } from "./redux/cartSlice";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <Counter />
      <Navbar />
      <CartContainer />
      <Footer />
    </main>
  );
}
export default App;
