import "./Catalog.css";
import Product from "./../Product";

function Catalog() {
  const data = [
    {
      title: "Axis & Allies",
      price: "80",
      catagory: "Board Game",
      image: "Axis.jpg",
      id: "1",
    },
    {
      title: "Unearthed Arcana",
      price: 40,
      catagory: "Misc",
      image: "Unearthed Arcna.jpg",
      id: "2",
    },
    {
      title: "D & D DM Manual",
      price: 80,
      catagory: "Classic Fantasy",
      image: "D & D Guide.jpg",
      id: "3",
    },
    {
      title: "Star Frontiers",
      price: 50,
      catagory: "Sci-Fi",
      image: "Star Frontiers.jpg",
      id: "4",
    },
    {
      title: "Game of Thrones",
      price: 50,
      catagory: "Fantasy Board Game",
      image: "Game of thrones.jpg",
      id: "5",
    },
    {
      title: "Gloomhaven",
      price: 110,
      catagory: "Fantasy Board Game",
      image: "Gloomhaven.jpg",
      id: "6",
    },
    {
      title: "Hero Quest",
      price: 85,
      catagory: "Fantasy Board Game",
      image: "Hero Quest.jpg",
      id: "7",
    },
    {
      title: "Magic Realm",
      price: 95,
      catagory: "Fantasy Board Game",
      image: "Magic Realm.jpg",
      id: "8",
    },
  ];

  return (
    <div className="catalog page">
      <h1>Our amazing catalog!</h1>

      <Product info={data[0]} />
      <Product info={data[1]} />
      <Product info={data[2]} />
      <Product info={data[3]} />
      <Product info={data[4]} />
      <Product info={data[5]} />
      <Product info={data[6]} />
      <Product info={data[7]} />

      {/* This section was replaced with the above to make things easier */}
      {/* <Product title="Axis & Allies" price="80" image="" />
      <Product title="Unearthed Arcana" price="40" image="" />
      <Product title="Star Frontiers" price="30" image="" />
      <Product title="Fortress America" price="75" image="" /> */}
    </div>
  );
}

export default Catalog;
