import { decrement, increment } from "./redux/features/counter/counterSlice";
import type { RootState } from "./redux/store";
import { useAppDispatch, useAppSelector } from "./redux/hook";

const App = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state: RootState) => state.counter.count);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-xl font-semibold text-amber-950">Counter</h2>
      <div className="flex items-center justify-center mt-4 p-9 bg-white shadow-md rounded-lg">
        <button
          onClick={() => dispatch(increment(5))}
          className="btn bg-green-500 px-3 py-2 rounded-md text-white font-semibold mr-3"
        >
          Increment 5
        </button>
        <button
          onClick={() => dispatch(increment(1))}
          className="btn bg-green-500 px-3 py-2 rounded-md text-white font-semibold"
        >
          Increment
        </button>
        <span className="mx-3 font-semibold">{count}</span>
        <button
          onClick={() => dispatch(decrement(1))}
          className="btn bg-red-500 px-3 py-2 rounded-md text-white font-semibold"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(decrement(5))}
          className="btn bg-red-500 px-3 py-2 rounded-md text-white font-semibold ml-3"
        >
          Decrement 5
        </button>
      </div>
    </div>
  );
};

export default App;
