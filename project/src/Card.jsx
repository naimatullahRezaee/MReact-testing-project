function User({ shoeName, shoePic = "./images/pic.jpg", shoeDesc }) {
  return (
    <div className="col">
      <div className="card">
        <img className="card-img" src={shoePic} />
        <div className="card-body">
          <h5 className="card-title">{shoeName}</h5>
          <p className="card-text">{shoeDesc}</p>
          <button className="add-to-card">add to card</button>
        </div>
      </div>
    </div>
  );
}

export default User;
