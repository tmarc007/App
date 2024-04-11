import axios from "axios";

const data = [
    {
      title: "Axis & Allies",
      price: 80.11,
      catagory: "Board Game",
      image: "Axis.jpg",
      id: "1",
    },
    {
      title: "Unearthed Arcana.jpg",
      price: 40,
      catagory: "Misc",
      image: "Unearthed Arcana.jpg",
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
      image: "Magic Realm.png",
      id: "8",
    },
  ];

  class DataService {

    async getCatalog(){
        // without a server
        // return data;

        // call the server
        let response = await axios.get("http://127.0.0.1:5000/api/catalog");
        return response.data;

    }

    async saveProduct(product){
        let response = await axios.post("http://127.0.0.1:5000/api/products", product);
        return response.data;

    }

  }

  export default DataService