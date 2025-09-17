import italianImage from "@/assets/restaurant-italian.jpg";
import sushiImage from "@/assets/restaurant-sushi.jpg";
import burgerImage from "@/assets/restaurant-burger.jpg";

export interface Menu {
  id: string;
  name: string;
  type: string;
}

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisines: string[];
  location: string;
  rating: number;
  deliveryTime: string;
  menus: Menu[];
}

export const mockRestaurants: Restaurant[] = [
  {
    id: "1",
    name: "Bella Napoli",
    image: italianImage,
    cuisines: ["Italian", "Pizza", "Pasta"],
    location: "Downtown",
    rating: 4.8,
    deliveryTime: "25-35 min",
    menus: [
      { id: "1-dinner", name: "Dinner Menu", type: "dinner" },
      { id: "1-pizza", name: "Pizza Menu", type: "pizza" },
      { id: "1-drinks", name: "Beverages", type: "drinks" },
    ],
  },
  {
    id: "2",
    name: "Sakura Sushi",
    image: sushiImage,
    cuisines: ["Japanese", "Sushi", "Asian"],
    location: "Midtown",
    rating: 4.9,
    deliveryTime: "30-40 min",
    menus: [
      { id: "2-sushi", name: "Sushi Menu", type: "sushi" },
      { id: "2-hot", name: "Hot Dishes", type: "hot" },
      { id: "2-drinks", name: "Japanese Drinks", type: "drinks" },
    ],
  },
  {
    id: "3",
    name: "Burger Barn",
    image: burgerImage,
    cuisines: ["American", "Burgers", "Fast Food"],
    location: "Uptown",
    rating: 4.6,
    deliveryTime: "15-25 min",
    menus: [
      { id: "3-burgers", name: "Burger Menu", type: "burgers" },
      { id: "3-sides", name: "Sides & Fries", type: "sides" },
      { id: "3-drinks", name: "Drinks & Shakes", type: "drinks" },
    ],
  },
  {
    id: "4",
    name: "Green Garden",
    image: italianImage,
    cuisines: ["Healthy", "Salads", "Vegetarian"],
    location: "West Side",
    rating: 4.7,
    deliveryTime: "20-30 min",
    menus: [
      { id: "4-salads", name: "Fresh Salads", type: "salads" },
      { id: "4-bowls", name: "Power Bowls", type: "bowls" },
      { id: "4-smoothies", name: "Smoothies", type: "drinks" },
    ],
  },
  {
    id: "5",
    name: "Spice Route",
    image: sushiImage,
    cuisines: ["Indian", "Curry", "Spicy"],
    location: "East Side",
    rating: 4.5,
    deliveryTime: "35-45 min",
    menus: [
      { id: "5-curry", name: "Curry Menu", type: "curry" },
      { id: "5-tandoor", name: "Tandoor Specials", type: "tandoor" },
      { id: "5-drinks", name: "Lassi & Drinks", type: "drinks" },
    ],
  },
  {
    id: "6",
    name: "Taco Fiesta",
    image: burgerImage,
    cuisines: ["Mexican", "Tacos", "Latin"],
    location: "South Side",
    rating: 4.4,
    deliveryTime: "20-30 min",
    menus: [
      { id: "6-tacos", name: "Taco Menu", type: "tacos" },
      { id: "6-burritos", name: "Burritos & Bowls", type: "burritos" },
      { id: "6-drinks", name: "Mexican Beverages", type: "drinks" },
    ],
  },
  {
    id: "7",
    name: "Dragon Wok",
    image: sushiImage,
    cuisines: ["Chinese", "Stir-fry", "Asian"],
    location: "China Town",
    rating: 4.6,
    deliveryTime: "25-35 min",
    menus: [
      { id: "7-stir", name: "Stir-fry Menu", type: "stir-fry" },
      { id: "7-dim", name: "Dim Sum", type: "dim-sum" },
      { id: "7-tea", name: "Tea & Drinks", type: "drinks" },
    ],
  },
  {
    id: "8",
    name: "French Bistro",
    image: italianImage,
    cuisines: ["French", "European", "Fine Dining"],
    location: "Historic District",
    rating: 4.9,
    deliveryTime: "40-50 min",
    menus: [
      { id: "8-main", name: "Main Course", type: "main" },
      { id: "8-wine", name: "Wine Selection", type: "wine" },
      { id: "8-dessert", name: "Desserts", type: "desserts" },
    ],
  },
  {
    id: "9",
    name: "BBQ Masters",
    image: burgerImage,
    cuisines: ["BBQ", "American", "Grill"],
    location: "Industrial District",
    rating: 4.3,
    deliveryTime: "30-40 min",
    menus: [
      { id: "9-bbq", name: "BBQ Platters", type: "bbq" },
      { id: "9-sides", name: "Classic Sides", type: "sides" },
      { id: "9-beer", name: "Craft Beers", type: "drinks" },
    ],
  },
  {
    id: "10",
    name: "Mediterranean Delight",
    image: italianImage,
    cuisines: ["Mediterranean", "Greek", "Healthy"],
    location: "Harbor View",
    rating: 4.7,
    deliveryTime: "25-35 min",
    menus: [
      { id: "10-gyros", name: "Gyros & Wraps", type: "gyros" },
      { id: "10-mezze", name: "Mezze Platters", type: "mezze" },
      { id: "10-drinks", name: "Fresh Juices", type: "drinks" },
    ],
  },
  {
    id: "11",
    name: "Noodle House",
    image: sushiImage,
    cuisines: ["Vietnamese", "Noodles", "Asian"],
    location: "Little Saigon",
    rating: 4.5,
    deliveryTime: "20-30 min",
    menus: [
      { id: "11-pho", name: "Pho Selection", type: "pho" },
      { id: "11-banh", name: "Banh Mi", type: "banh-mi" },
      { id: "11-fresh", name: "Fresh Rolls", type: "rolls" },
    ],
  },
  {
    id: "12",
    name: "Dessert Palace",
    image: burgerImage,
    cuisines: ["Desserts", "Ice Cream", "Sweet"],
    location: "Shopping Center",
    rating: 4.8,
    deliveryTime: "15-25 min",
    menus: [
      { id: "12-cakes", name: "Cakes & Pastries", type: "cakes" },
      { id: "12-ice", name: "Ice Cream", type: "ice-cream" },
      { id: "12-coffee", name: "Coffee & Hot Drinks", type: "drinks" },
    ],
  },
];