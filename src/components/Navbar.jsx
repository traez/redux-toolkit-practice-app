import { useSelector } from "react-redux";
import { CartIcon } from "../icons";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);

  const handleClick = () => {
    window.location.reload(); 
  };

  return (
    <>
      <nav>
        <div className="nav-center">
          <h3 onClick={handleClick}>Trae's Redux Toolkit Practice App</h3>
          <div className="nav-container">
            <CartIcon />
            <div className="amount-container">
              <p className="total-amount">{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
