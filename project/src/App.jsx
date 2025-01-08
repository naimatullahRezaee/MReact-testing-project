import Card from "./Card";

const Cardinfo = [
  {
    shoeName: "shoe 1",
    shoePic: "./images/01.png",
    shoeDesc:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias deserunt error eius sunt! Ad nobis blanditiis adipisci!",
  },
  {
    shoeName: "shoe 2",
    shoePic: "./images/02.png",
    shoeDesc:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias deserunt error eius sunt! Ad nobis blanditiis adipisci!",
  },
  {
    shoeName: "shoe 3",
    shoePic: "./images/03.png",
    shoeDesc:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias deserunt error eius sunt! Ad nobis blanditiis adipisci!",
  },
];
function App() {
  return (
    <>
      <header>header</header>
      <section>
        <div className="row">
          <Card {...Cardinfo[0]} />

          <Card {...Cardinfo[1]} />
          <Card {...Cardinfo[2]} />
        </div>
      </section>
      <footer>footer</footer>
    </>
  );
}

export default App;
