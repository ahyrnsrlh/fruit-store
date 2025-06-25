export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  images: string[];
  rating: number;
  reviews: Review[];
  category: string;
  badge: string;
  description: string;
  features: string[];
  nutritionFacts: {
    calories: string;
    carbs: string;
    fiber: string;
    sugar: string;
    vitaminC: string;
  };
  inStock: boolean;
  weight: string;
  stock: number;
}

export interface Review {
  id: number;
  userId: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Apel Fuji Premium",
    price: 45000,
    originalPrice: 55000,
    images: [
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1590005354167-6da97870c757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    ],
    rating: 4.8,
    reviews: [
      {
        id: 1,
        userId: 1,
        userName: "Sari Dewi",
        rating: 5,
        comment:
          "Apel sangat segar dan manis! Kualitas premium benar-benar terasa. Packing juga rapi.",
        date: "2024-01-15",
        verified: true,
      },
      {
        id: 2,
        userId: 2,
        userName: "Budi Santoso",
        rating: 4,
        comment:
          "Rasa enak, tapi agak mahal. Overall worth it untuk kualitasnya.",
        date: "2024-01-10",
        verified: true,
      },
    ],
    category: "apel",
    badge: "Best Seller",
    description:
      "Apel Fuji premium dengan rasa manis dan tekstur renyah yang sempurna.",
    features: [
      "Rasa manis alami",
      "Tekstur renyah",
      "Kaya vitamin C",
      "Bebas pestisida",
      "Kemasan food grade",
    ],
    nutritionFacts: {
      calories: "52 per 100g",
      carbs: "14g",
      fiber: "2.4g",
      sugar: "10g",
      vitaminC: "4.6mg",
    },
    inStock: true,
    weight: "1kg",
    stock: 50,
  },
  {
    id: 2,
    name: "Jeruk Valencia Segar",
    price: 35000,
    originalPrice: 42000,
    images: [
      "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    ],
    rating: 4.9,
    reviews: [
      {
        id: 3,
        userId: 3,
        userName: "Maya Putri",
        rating: 5,
        comment:
          "Jeruk paling segar yang pernah saya beli online! Vitamin C nya kerasa banget.",
        date: "2024-01-12",
        verified: true,
      },
    ],
    category: "jeruk",
    badge: "Fresh",
    description:
      "Jeruk Valencia segar dengan kandungan vitamin C tinggi dan rasa yang menyegarkan.",
    features: [
      "Vitamin C tinggi",
      "Rasa segar",
      "Tanpa bahan kimia",
      "Dipetik fresh",
      "Kemasan higienis",
    ],
    nutritionFacts: {
      calories: "47 per 100g",
      carbs: "12g",
      fiber: "2.4g",
      sugar: "9g",
      vitaminC: "53mg",
    },
    inStock: true,
    weight: "1kg",
    stock: 30,
  },
  {
    id: 3,
    name: "Pisang Cavendish",
    price: 25000,
    originalPrice: 30000,
    images: [
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    ],
    rating: 4.7,
    reviews: [
      {
        id: 4,
        userId: 4,
        userName: "Andi Wijaya",
        rating: 5,
        comment: "Pisang organik terbaik! Anak-anak suka banget.",
        date: "2024-01-08",
        verified: true,
      },
    ],
    category: "pisang",
    badge: "Organic",
    description:
      "Pisang Cavendish organik dengan rasa manis alami dan tekstur yang sempurna.",
    features: [
      "100% organik",
      "Rasa manis alami",
      "Kaya potasium",
      "Bebas pestisida",
      "Matang sempurna",
    ],
    nutritionFacts: {
      calories: "89 per 100g",
      carbs: "23g",
      fiber: "2.6g",
      sugar: "12g",
      vitaminC: "8.7mg",
    },
    inStock: true,
    weight: "1kg",
    stock: 40,
  },
  {
    id: 4,
    name: "Mangga Harum Manis",
    price: 65000,
    originalPrice: 75000,
    images: [
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    ],
    rating: 4.9,
    reviews: [
      {
        id: 5,
        userId: 5,
        userName: "Lisa Maharani",
        rating: 5,
        comment:
          "Mangga terenak yang pernah saya makan! Harum dan manis banget.",
        date: "2024-01-05",
        verified: true,
      },
    ],
    category: "mangga",
    badge: "Premium",
    description:
      "Mangga Harum Manis premium dengan aroma yang menggoda dan rasa yang luar biasa manis.",
    features: [
      "Aroma harum",
      "Rasa super manis",
      "Daging tebal",
      "Tanpa serat",
      "Grade A",
    ],
    nutritionFacts: {
      calories: "60 per 100g",
      carbs: "15g",
      fiber: "1.6g",
      sugar: "14g",
      vitaminC: "36mg",
    },
    inStock: true,
    weight: "1kg",
    stock: 25,
  },
  {
    id: 5,
    name: "Apel Malang",
    price: 40000,
    originalPrice: 48000,
    images: [
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1576179635662-9d1983e97e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    ],
    rating: 4.6,
    reviews: [
      {
        id: 6,
        userId: 6,
        userName: "Rudi Hartono",
        rating: 4,
        comment: "Apel lokal yang berkualitas. Mendukung produk dalam negeri!",
        date: "2024-01-03",
        verified: true,
      },
    ],
    category: "apel",
    badge: "Local",
    description:
      "Apel Malang lokal dengan kualitas terbaik, mendukung petani Indonesia.",
    features: [
      "Produk lokal",
      "Kualitas premium",
      "Harga terjangkau",
      "Fresh dari kebun",
      "Mendukung petani",
    ],
    nutritionFacts: {
      calories: "50 per 100g",
      carbs: "13g",
      fiber: "2.2g",
      sugar: "10g",
      vitaminC: "4mg",
    },
    inStock: true,
    weight: "1kg",
    stock: 35,
  },
  {
    id: 6,
    name: "Jeruk Bali",
    price: 50000,
    originalPrice: 60000,
    images: [
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    ],
    rating: 4.8,
    reviews: [
      {
        id: 7,
        userId: 7,
        userName: "Dewi Sartika",
        rating: 5,
        comment: "Jeruk Bali jumbo dan manis! Cocok untuk jus.",
        date: "2024-01-01",
        verified: true,
      },
    ],
    category: "jeruk",
    badge: "Sweet",
    description:
      "Jeruk Bali manis dengan ukuran jumbo, sempurna untuk dikonsumsi langsung atau dijus.",
    features: [
      "Ukuran jumbo",
      "Rasa manis",
      "Daging tebal",
      "Sedikit biji",
      "Cocok untuk jus",
    ],
    nutritionFacts: {
      calories: "42 per 100g",
      carbs: "11g",
      fiber: "1.6g",
      sugar: "9g",
      vitaminC: "61mg",
    },
    inStock: true,
    weight: "1kg",
    stock: 20,
  },
  {
    id: 7,
    name: "Pisang Raja",
    price: 30000,
    originalPrice: 35000,
    images: [
      "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1520763185298-1b434c919102?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1606548752745-27f1e2e7fdc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    ],
    rating: 4.5,
    reviews: [
      {
        id: 8,
        userId: 8,
        userName: "Agus Setiawan",
        rating: 4,
        comment: "Pisang raja yang autentik. Rasa tradisional yang khas.",
        date: "2023-12-28",
        verified: true,
      },
    ],
    category: "pisang",
    badge: "Traditional",
    description:
      "Pisang Raja tradisional dengan rasa yang khas dan aroma yang menggugah selera.",
    features: [
      "Varietas tradisional",
      "Rasa khas",
      "Aroma harum",
      "Tekstur lembut",
      "Cocok untuk olahan",
    ],
    nutritionFacts: {
      calories: "116 per 100g",
      carbs: "27g",
      fiber: "2.3g",
      sugar: "15g",
      vitaminC: "9mg",
    },
    inStock: true,
    weight: "1kg",
    stock: 45,
  },
  {
    id: 8,
    name: "Mangga Gedong Gincu",
    price: 70000,
    originalPrice: 85000,
    images: [
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1553279768-865429ffd8b8?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1605964969432-b73ced7c56c5?auto=format&fit=crop&w=500&q=80",
    ],
    rating: 4.9,
    reviews: [
      {
        id: 9,
        userId: 9,
        userName: "Indira Sari",
        rating: 5,
        comment: "Mangga Gedong Gincu terbaik! Manis dan harum luar biasa.",
        date: "2023-12-25",
        verified: true,
      },
    ],
    category: "mangga",
    badge: "Exclusive",
    description:
      "Mangga Gedong Gincu eksklusif dengan rasa yang luar biasa dan aroma yang memukau.",
    features: [
      "Varietas eksklusif",
      "Rasa premium",
      "Aroma kuat",
      "Daging orange",
      "Limited edition",
    ],
    nutritionFacts: {
      calories: "65 per 100g",
      carbs: "17g",
      fiber: "1.8g",
      sugar: "15g",
      vitaminC: "28mg",
    },
    inStock: true,
    weight: "1kg",
    stock: 15,
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((product) => product.category === category);
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
  );
}
