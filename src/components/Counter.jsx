import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  incrementAsync,
} from "../redux/counterSlice";

const Counter = () => {
  const { value } = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  return (
    <main className="div-counter">
      <h2 className="menu-h2">{value}</h2>
      <menu>
        <button className="mbutton" onClick={() => dispatch(incrementAsync(4))}>
          Increment (4) by Async
        </button>
        <button
          className="mbutton"
          onClick={() => dispatch(incrementByAmount(2))}
        >
          Increment by Amount (2)
        </button>
        <button className="mbutton" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className="mbutton" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button
          className="mbutton"
          onClick={() => dispatch(decrementByAmount(2))}
        >
          Decrement by Amount (2)
        </button>
      </menu>
    </main>
  );
};

export default Counter;
