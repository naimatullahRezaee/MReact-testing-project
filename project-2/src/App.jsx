function App() {
  const eventHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <form action="">
        <input type="checkbox" value="check 1" onChange={eventHandler} /> Check
        1 <br />
        <input type="checkbox" value="check 2" onChange={eventHandler} /> Check
        2 <br />
        <input type="checkbox" value="check 3" onChange={eventHandler} /> Check
        3 <br />
        <input type="checkbox" value="check 4" onChange={eventHandler} /> Check
        4 <br />
      </form>
    </>
  );
}

export default App;
