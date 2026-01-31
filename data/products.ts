export type Product = {
  id: number;
  slug: string;
  title: string;
  category: "acrylic" | "louvers" | "solid";
  image: string;
  code: string;
  price: number;
  thickness: string;
  height: string;
  material: string;
  usage: string;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "404-red-acrylic-led",
    title: "404 Red Acrylic LED Letter",
    category: "acrylic",
    image: "/images/red-404.jpg",
    code: "SB-A3D-01",
    price: 600,
    thickness: "3mm / 5mm / 8mm",
    height: '6" – 24"',
    material: "Acrylic",
    usage: "Indoor / Outdoor",
  },
  {
    id: 2,
    slug: "gym-red-acrylic-led",
    title: "GYM Red Acrylic LED Letter",
    category: "acrylic",
    image: "/images/red-gym.jpg",
    code: "SB-A3D-02",
    price: 650,
    thickness: "3mm / 5mm / 8mm",
    height: '6" – 24"',
    material: "Acrylic",
    usage: "Indoor / Outdoor",
  },
  {
    id: 3,
    slug: "solid-colour-acrylic-sheet",
    title: "Solid Colour Acrylic Sheet",
    category: "solid",
    image: "/images/solid.png",
    code: "SA-01",
    price: 400,
    thickness: "2mm / 3mm / 5mm",
    height: "Custom",
    material: "Acrylic",
    usage: "Indoor",
  },
  {
    id: 4,
    slug: "designer-louvers-panel",
    title: "Designer Louvers Panel",
    category: "louvers",
    image: "/images/marble.png",
    code: "LV-01",
    price: 900,
    thickness: "10mm / 12mm",
    height: "Custom",
    material: "PVC / Acrylic",
    usage: "Indoor / Exterior",
  },
  {
    id: 5,
    slug: "corian-acrylic-sheet",
    title: "Corian Acrylic Sheet",
    category: "solid",
    image: "/images/corien.png",
    code: "CR-01",
    price: 1200,
    thickness: "12mm",
    height: "Custom",
    material: "Corian",
    usage: "Interior",
  },
];
