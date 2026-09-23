export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  version: string;
  year: string;
  km: string;
  price: string;
  category: "Superesportivos" | "SUVs de Luxo" | "Blindados" | "0 KM";
  image: string;
  power: string;
  acceleration: string;
  topSpeed: string;
  slogan?: string;
  armored?: boolean;
  tag?: string;
  watermarkLogo?: string;
  highlightSpecs?: { label: string; value: string }[];
}

export const SHOWCASE_VEHICLES: Vehicle[] = [
  {
    id: "ferrari-458-italia",
    brand: "FERRARI",
    model: "458 ITALIA",
    version: "4.5 V8 GASOLINA F1-DCT",
    year: "2011/2011",
    km: "22.900 km",
    price: "R$ 2.789.900,00",
    category: "Superesportivos",
    image: "https://d20d1u0tfijfbg.cloudfront.net/primeimports/79086/foto-Album-de-FERRARI-458-ITALIA-A-6ab14f407b68d.webp",
    watermarkLogo: "/watermarks/ferrari-clean.png",
    power: "570 CV",
    acceleration: "3.4s",
    topSpeed: "325 km/h",
    slogan: "A PURA ESSÊNCIA ASPIRADA DE MARANELLO",
    highlightSpecs: [
      { label: "Motor", value: "4.5L V8 Atmosférico" },
      { label: "Câmbio", value: "F1 Dual-Clutch 7 Speed" },
      { label: "0-100 km/h", value: "3.4 segundos" },
      { label: "Tração", value: "Traseira com E-Diff" }
    ]
  },
  {
    id: "porsche-911-gt3",
    brand: "PORSCHE",
    model: "911 GT3",
    version: "4.0 24V H6 GASOLINA PDK",
    year: "2025/2026",
    km: "1.200 km",
    price: "R$ 2.549.900,00",
    category: "Superesportivos",
    image: "https://d20d1u0tfijfbg.cloudfront.net/primeimports/64287/foto-Album-de-PORSCHE-911-A-696fbe0431188.webp",
    watermarkLogo: "/watermarks/porsche-clean.png",
    power: "510 CV",
    acceleration: "3.4s",
    topSpeed: "318 km/h",
    slogan: "ENGENHARIA PURA DIRETO DE WEISSACH",
    highlightSpecs: [
      { label: "Motor", value: "4.0L Boxer 6 Cilindros" },
      { label: "Câmbio", value: "PDK 7 Velocidades" },
      { label: "Aerodinâmica", value: "Swan-Neck Wing" },
      { label: "Rodas", value: "Monobloco Forjadas GT3" }
    ]
  },
  {
    id: "mclaren-artura",
    brand: "MCLAREN",
    model: "ARTURA",
    version: "3.0 V6 BITURBO HYBRID SSG",
    year: "2023/2023",
    km: "7.700 km",
    price: "R$ 2.279.000,00",
    category: "Superesportivos",
    image: "https://d20d1u0tfijfbg.cloudfront.net/primeimports/78700/foto-Album-de-MCLAREN-ARTURA-A-6aa957ba5de62.webp",
    watermarkLogo: "/watermarks/mclaren-clean.png",
    power: "680 CV",
    acceleration: "3.0s",
    topSpeed: "330 km/h",
    slogan: "A REVOLUÇÃO HÍBRIDA DE WOKING",
    highlightSpecs: [
      { label: "Chassi", value: "Monocasco de Carbono MCLA" },
      { label: "Potência Combinada", value: "680 CV / 720 Nm" },
      { label: "Câmbio", value: "8-Speed SSG E-Reverse" },
      { label: "Portas", value: "Diédricas Borboleta" }
    ]
  },
];

export const INVENTORY_VEHICLES: Vehicle[] = [
  ...SHOWCASE_VEHICLES,
  {
    id: "audi-rs6-avant-gt",
    brand: "AUDI",
    model: "RS6 AVANT GT",
    version: "4.0 V8 TFSI MHEV TIPTRONIC",
    year: "2025/2025",
    km: "1.900 km",
    price: "R$ 1.999.800,00",
    category: "0 KM",
    image: "https://d20d1u0tfijfbg.cloudfront.net/primeimports/78309/foto-Album-de-AUDI-RS6-A-6aa197b7c24af.webp",
    power: "630 CV",
    acceleration: "3.3s",
    topSpeed: "305 km/h",
    tag: "SÉRIE LIMITADA EXCLUSIVA",
    highlightSpecs: [
      { label: "Motor", value: "4.0 BiTurbo V8" },
      { label: "Tração", value: "quattro Permanente" },
      { label: "Freios", value: "Cerâmica Carbono" }
    ]
  },
  {
    id: "mercedes-g63-amg-magno",
    brand: "MERCEDES-BENZ",
    model: "G 63 AMG MAGNO EDITION",
    version: "4.0 V8 TURBO 4MATIC SPEEDSHIFT",
    year: "2021/2021",
    km: "23.900 km",
    price: "R$ 1.899.900,00",
    category: "Blindados",
    image: "https://d20d1u0tfijfbg.cloudfront.net/primeimports/75625/foto-Album-de-MERCEDES-BENZ-G-63-AMG-A-6a67750a28621.webp",
    power: "585 CV",
    acceleration: "4.5s",
    topSpeed: "220 km/h",
    armored: true,
    tag: "BLINDADO BSS NÍVEL III-A",
    highlightSpecs: [
      { label: "Blindagem", value: "Nível III-A com Vidros Leves" },
      { label: "Pintura", value: "Night Black Magno Fosco" },
      { label: "Escape", value: "AMG Performance Lateral" }
    ]
  },
  {
    id: "gmc-yukon-denali",
    brand: "GMC",
    model: "YUKON DENALI 4WD",
    version: "6.2 V8 ECOTEC3 GASOLINA",
    year: "2025/2025",
    km: "12.000 km",
    price: "R$ 1.779.900,00",
    category: "SUVs de Luxo",
    image: "https://d20d1u0tfijfbg.cloudfront.net/primeimports/77581/foto-Album-de-GMC-YUKON-A-6a9053976ebf1.webp",
    power: "426 CV",
    acceleration: "6.0s",
    topSpeed: "185 km/h",
    tag: "FULL SIZE VIP",
    highlightSpecs: [
      { label: "Motor", value: "6.2L EcoTec3 V8" },
      { label: "Interior", value: "Denali Ultimate Luxury" },
      { label: "Tração", value: "4WD com Reduzida" }
    ]
  },
  {
    id: "cadillac-escalade-esv",
    brand: "CADILLAC",
    model: "ESCALADE ESV SPORT PLATINUM",
    version: "6.2 V8 4WD AUTOMÁTICO",
    year: "2024/2024",
    km: "7.200 km",
    price: "R$ 1.650.000,00",
    category: "SUVs de Luxo",
    image: "https://d20d1u0tfijfbg.cloudfront.net/primeimports/68581/foto-Album-de-CADILLAC-ESCALADE-A-69df9dc7cb9e6.webp",
    power: "426 CV",
    acceleration: "6.1s",
    topSpeed: "180 km/h",
    tag: "SPORT PLATINUM",
    highlightSpecs: [
      { label: "Telas", value: "38 Polegadas OLED Curva" },
      { label: "Áudio", value: "AKG Studio Reference 36 Speakers" },
      { label: "Versão", value: "ESV Long Wheelbase" }
    ]
  },
  {
    id: "chevrolet-corvette-stingray",
    brand: "CHEVROLET",
    model: "CORVETTE STINGRAY CONVERSÍVEL",
    version: "6.2 V8 LT3 GASOLINA AUTOMÁTICO",
    year: "2026/2026",
    km: "0 km",
    price: "R$ 1.399.900,00",
    category: "0 KM",
    image: "https://d20d1u0tfijfbg.cloudfront.net/primeimports/67802/foto-Album-de-CHEVROLET-CORVETTE-A-69cc0a1c70b8a.webp",
    power: "502 CV",
    acceleration: "2.9s",
    topSpeed: "312 km/h",
    tag: "ZERO KM · DISPONÍVEL",
    highlightSpecs: [
      { label: "Configuração", value: "Hardtop Convertible" },
      { label: "Pacote", value: "3LT Premium Package" },
      { label: "Desempenho", value: "Z51 Performance Pack" }
    ]
  }
];
