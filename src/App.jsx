

const App = () => {
  const obj = {
    name: "Abul Asad"
  };
  return (
    <div>
      <h1 className="text-7xl font-bold">Hello</h1>
      {
        obj.map(ob => ob.name)
      }
    </div>
  );
};

export default App;