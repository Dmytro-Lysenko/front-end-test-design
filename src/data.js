import Pigama from "./images/Pigama.png";
import Sweater1 from "./images/Woman-sweater.png";
import Sweater2 from "./images/Woman-sweater2.png";
import Sweater3 from "./images/sweater7.jpg";
import Belt from "./images/Belt.png";
import ManSweater1 from "./images/Man-Sweater1.jpeg";
import ManSweater2 from "./images/Man-Sweater2.jpeg";
import ManSweater3 from "./images/Man-Sweater3.jpeg";

//price in doolars
const DUMMY_DATA = [
  {
    id: "m1",
    image: ManSweater1,
    smallImage: [ManSweater1, ManSweater2, ManSweater3],
    sizes: [
      { id: "n1", size: "XS", psc: 1 },
      { id: "n2", size: "S", psc: 2 },
      { id: "n3", size: "M", psc: 3 },
      { id: "n4", size: "L", psc: 3 },
    ],
    price: 52,
    category: "man",
    brand: "Brioni",
    type: "sweater1",
    isOnStock: true,
    description: `Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.`,
  },

  {
    id: "m2",
    image: ManSweater2,
    smallImage: [ManSweater1, ManSweater2, ManSweater3],
    sizes: [
      { id: "f1", size: "XS", psc: 1 },
      { id: "f2", size: "S", psc: 3 },
      { id: "f3", size: "M", psc: 2 },
      { id: "f4", size: "L", psc: 5 },
    ],
    price: 32,
    category: "man",
    brand: "Brioni",
    type: "sweater2",
    isOnStock: true,
    description: `Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.`,
  },

  {
    id: "m3",
    image: ManSweater3,
    smallImage: [ManSweater1, ManSweater2, ManSweater3],
    sizes: [
      { id: "g1", size: "XS", psc: 3 },
      { id: "g2", size: "S", psc: 4 },
      { id: "g3", size: "M", psc: 1 },
      { id: "g4", size: "L", psc: 6 },
    ],
    price: 65,
    category: "man",
    brand: "Brioni",
    type: "sweater3",
    isOnStock: true,
    description: `Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.`,
  },

  {
    id: "j1",
    image: Pigama,
    price: 56,
    category: "woman",
    brand: "H&M",
    type: "pigama1",
    isOnStock: false,
  },
  {
    id: "j2",
    image: Sweater1,
    category: "woman",
    price: 54,
    brand: "H&M",
    type: "sweater2",
    isOnStock: true,
  },
  {
    id: "j3",
    image: Sweater2,
    category: "woman",
    price: 50,
    brand: "H&M",
    type: "sweater",
    isOnStock: true,
  },
  {
    id: "j4",
    image: Sweater3,
    category: "woman",
    price: 53,
    brand: "H&M",
    type: "sweater3",
    isOnStock: true,
  },
  {
    id: "j5",
    image: Belt,
    category: "woman",
    price: 60,
    brand: "H&M",
    type: "belt",
    isOnStock: true,
  },
];

export default DUMMY_DATA;
