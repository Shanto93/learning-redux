const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2>Counter  with Redux</h2>
      <div className="flex items-center justify-center mt-4 bg-slate-200 p-8 rounded-md">
        <button className="btn bg-green-500 text-white font-semibold py-2 px-3 rounded-md">Increment</button>
        <span className="mx-4 text-xl">0</span>
        <button className="btn bg-red-500 text-white font-semibold py-2 px-3 rounded-md">Decrement</button>
        
      </div>
    </div>
  );
};

export default App;
