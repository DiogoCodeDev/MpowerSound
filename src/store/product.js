import { defineStore } from 'pinia';

// import { productService } from '@/services/product';

const useProductStore = defineStore('product', {
  state: () => ({
    slidesHome: [
      {
        "title": "Caixas Acústicas Passivas",
        "desc": "As Caixas Acústicas Passivas da MPower Sound são projetadas para entregar uma reprodução sonora precisa e de alta qualidade. Com design robusto e tecnologia avançada, elas oferecem excelente desempenho acústico, garantindo graves potentes, médios definidos e agudos cristalinos em qualquer ambiente.",
        "descMobile": "As Caixas Acústicas Passivas da M Power Sound são projetadas para entregar uma reprodução sonora precisa e de alta qualidade.",
        "products":[
          1, 2, 3, 4, 5, 6, 7, 8
        ]
      },
      {
        "title": "Amplificadores de Potência",
        "desc": "Os Amplificadores de Potência da MPower Sound foram desenvolvidos para entregar um som robusto, claro e fiel em qualquer ambiente. Com tecnologia de ponta e engenharia de alta precisão, nossos amplificadores oferecem desempenho excepcional em todas as frequências sonoras, proporcionando uma experiência sonora imersiva e de alta qualidade.",
        "descMobile": "Os Amplificadores de Potência da M Power Sound foram desenvolvidos para entregar um som robusto, claro e fiel em qualquer ambiente.",
        "products":[
          4, 7, 3, 4, 5, 6, 1, 4
        ]
      },
      {
        "title": "Caixas para Sonorização Ambiente",
        "desc": "Transforme seu espaço com as Caixas para Sonorização de Ambiente, oferecendo som de alta qualidade, clareza e potência para qualquer tipo de ambiente!",
        "descMobile": "Transforme seu espaço com as Caixas para Sonorização de Ambiente, oferecendo som de alta qualidade, clareza e potência para qualquer tipo de ambiente!",
        "products":[
          5, 6, 7, 8, 1, 2, 3, 4 
        ]
      }
    ],
    slideSupport: [
      {
        "title": "Recomendados para você!",
        "desc": "As Caixas Acústicas Passivas da MPower Sound são projetadas para entregar uma reprodução sonora precisa e de alta qualidade. Com design robusto e tecnologia avançada, elas oferecem excelente desempenho acústico, garantindo graves potentes, médios definidos e agudos cristalinos em qualquer ambiente.",
        "descMobile": "As Caixas Acústicas Passivas da M Power Sound são projetadas para entregar uma reprodução sonora precisa e de alta qualidade.",
        "products":[
          5, 6, 7, 8, 1, 2, 3, 4
        ]
      }
    ],
    slideEnterprise: [
      {
        "title": "Selecionados para você!",
        "desc": "As Caixas Acústicas Passivas da MPower Sound são projetadas para entregar uma reprodução sonora precisa e de alta qualidade. Com design robusto e tecnologia avançada, elas oferecem excelente desempenho acústico, garantindo graves potentes, médios definidos e agudos cristalinos em qualquer ambiente.",
        "descMobile": "As Caixas Acústicas Passivas da M Power Sound são projetadas para entregar uma reprodução sonora precisa e de alta qualidade.",
        "products":[
          1, 2, 3, 4, 5, 6, 7, 8
        ]
      }
    ],
    products: [
      {
        "id": 1,
        "name": "Caixas Acústicas Passiva - Versão 40t - 1080p.",
        "img": "/products/product1.webp",
        "size": "h-20",
        "alt": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "description": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "topicsDesc": [
          {
            "title": "Qualidade de som incomparável",
            "description": "Desfrute de um som rico e detalhado, com graves profundos, médios exuberantes e agudos cristalinos. O Amplificador [Nome do Modelo] revela a verdadeira beleza da sua música, permitindo que você ouça cada detalhe como nunca antes."
          },
          {
            "title": "Design elegante e construção robusta",
            "description": "O Amplificador [Nome do Modelo] combina um design elegante e minimalista com uma construção robusta e durável. Seu acabamento premium e seus componentes de alta qualidade garantem um desempenho confiável e duradouro."
          }
        ],
        "saleCfg": [
          {
            "price": "799,90",
            "installmentPrice": "65,00",
            "installmentMax": "12x",
          }
        ],
        "imgsProduct": [
          {
            "img": "/products/product-1-picture.webp",
            "alt": "desc product 1"
          },
          {
            "img": "/products/product-2-picture.webp",
            "alt": "desc product 2"
          },
          {
            "img": "/products/product-3-picture.webp",
            "alt": "desc product 3"
          },
          {
            "img": "/products/product-1-picture.webp",
            "alt": "desc product 1"
          }
        ],
        "oldPricePromotion": [
          {
            "price": "1.599,90",
            "discountPercentage": "50%",
            "installmentPrice": "133,25 sem juros.",
            "installmentMax": "12x",
          }
        ],
      },
      {
        "id": 2,
        "name": "Amplificador Compacto - Mpower Sound",
        "img": "/products/product2.webp",
        "size": "h-14",
        "alt": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "description": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "topicsDesc": [
          {
            "title": "Qualidade de som incomparável",
            "description": "Desfrute de um som rico e detalhado, com graves profundos, médios exuberantes e agudos cristalinos. O Amplificador [Nome do Modelo] revela a verdadeira beleza da sua música, permitindo que você ouça cada detalhe como nunca antes."
          },
          {
            "title": "Design elegante e construção robusta",
            "description": "O Amplificador [Nome do Modelo] combina um design elegante e minimalista com uma construção robusta e durável. Seu acabamento premium e seus componentes de alta qualidade garantem um desempenho confiável e duradouro."
          }
        ],
        "saleCfg": [
          {
            "price": "1.299,90",
            "installmentPrice": "30,00",
            "installmentMax": "12x",
          }
        ],
        "imgsProduct": [
          {
            "img": "/products/product-1-picture.webp",
            "alt": "desc product 1"
          },
          {
            "img": "/products/product-2-picture.webp",
            "alt": "desc product 2"
          },
          {
            "img": "/products/product-3-picture.webp",
            "alt": "desc product 3"
          },
          {
            "img": "/products/product-1-picture.webp",
            "alt": "desc product 1"
          }
        ],
        "oldPricePromotion": null,
      },
      {
        "id": 3,
        "name": "Caixa Multiuso - 40t Mpower Sound",
        "img": "/products/product3.webp",
        "size": "h-20",
        "alt": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "description": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "topicsDesc": [
          {
            "title": "Qualidade de som incomparável",
            "description": "Desfrute de um som rico e detalhado, com graves profundos, médios exuberantes e agudos cristalinos. O Amplificador [Nome do Modelo] revela a verdadeira beleza da sua música, permitindo que você ouça cada detalhe como nunca antes."
          },
          {
            "title": "Design elegante e construção robusta",
            "description": "O Amplificador [Nome do Modelo] combina um design elegante e minimalista com uma construção robusta e durável. Seu acabamento premium e seus componentes de alta qualidade garantem um desempenho confiável e duradouro."
          }
        ],
        "saleCfg": [
          {
            "price": "959,92",
            "installmentPrice": "79,99",
            "installmentMax": "12x",
          }
        ],
        "imgsProduct": [
          {
            "img": "/products/product-1-picture.webp",
            "alt": "desc product 1"
          },
          {
            "img": "/products/product-2-picture.webp",
            "alt": "desc product 2"
          },
          {
            "img": "/products/product-3-picture.webp",
            "alt": "desc product 3"
          },
          {
            "img": "/products/product-1-picture.webp",
            "alt": "desc product 1"
          }
        ],
        "oldPricePromotion": [
          {
            "price": "1.199.90",
            "discountPercentage": "20%",
            "installmentPrice": "99,99",
            "installmentMax": "12x",
          }
        ],
      },
      {
        "id": 4,
        "name": "Caixa Multiuso / Mpower Sound",
        "img": "/products/product4.webp",
        "size": "h-16",
        "alt": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "description": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "topicsDesc": [
          {
            "title": "Qualidade de som incomparável",
            "description": "Desfrute de um som rico e detalhado, com graves profundos, médios exuberantes e agudos cristalinos. O Amplificador [Nome do Modelo] revela a verdadeira beleza da sua música, permitindo que você ouça cada detalhe como nunca antes."
          },
          {
            "title": "Design elegante e construção robusta",
            "description": "O Amplificador [Nome do Modelo] combina um design elegante e minimalista com uma construção robusta e durável. Seu acabamento premium e seus componentes de alta qualidade garantem um desempenho confiável e duradouro."
          }
        ],
        "saleCfg": [
          {
            "price": "1.299,90",
            "installmentPrice": "30,00",
            "installmentMax": "12x",
          }
        ],
        "imgsProduct": [
          {
            "img": "/products/product-1-picture.webp",
            "alt": "desc product 1"
          },
          {
            "img": "/products/product-2-picture.webp",
            "alt": "desc product 2"
          },
          {
            "img": "/products/product-3-picture.webp",
            "alt": "desc product 3"
          },
          {
            "img": "/products/product-1-picture.webp",
            "alt": "desc product 1"
          }
        ],
        "oldPricePromotion": null,
      },
      {
        "id": 5,
        "name": "Caixa Produto V1.0 - 30",
        "img": "/products/product5.webp",
        "size": "h-16",
        "alt": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "description": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "topicsDesc": [
          {
            "title": "Qualidade de som incomparável",
            "description": "Desfrute de um som rico e detalhado, com graves profundos, médios exuberantes e agudos cristalinos. O Amplificador [Nome do Modelo] revela a verdadeira beleza da sua música, permitindo que você ouça cada detalhe como nunca antes."
          },
          {
            "title": "Design elegante e construção robusta",
            "description": "O Amplificador [Nome do Modelo] combina um design elegante e minimalista com uma construção robusta e durável. Seu acabamento premium e seus componentes de alta qualidade garantem um desempenho confiável e duradouro."
          }
        ],
        "saleCfg": [
          {
            "price": "209,30",
            "installmentPrice": "17,44",
            "installmentMax": "12x",
          }
        ],
        "imgsProduct": [
          {
            "img": "/products/product-1-picture.webp",
            "alt": "desc product 1"
          },
          {
            "img": "/products/product-2-picture.webp",
            "alt": "desc product 2"
          },
          {
            "img": "/products/product-3-picture.webp",
            "alt": "desc product 3"
          },
          {
            "img": "/products/product-1-picture.webp",
            "alt": "desc product 1"
          }
        ],
        "oldPricePromotion": [
          {
            "price": "299.90",
            "discountPercentage": "30%",
            "installmentPrice": "24,99",
            "installmentMax": "12x",
          }
        ],
      },
      {
        "id": 6,
        "name": "Caixa Produto V1.0 - 30",
        "img": "/products/product2.webp",
        "size": "h-14",
        "alt": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "description": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "topicsDesc": [
          {
            "title": "Qualidade de som incomparável",
            "description": "Desfrute de um som rico e detalhado, com graves profundos, médios exuberantes e agudos cristalinos. O Amplificador [Nome do Modelo] revela a verdadeira beleza da sua música, permitindo que você ouça cada detalhe como nunca antes."
          },
          {
            "title": "Design elegante e construção robusta",
            "description": "O Amplificador [Nome do Modelo] combina um design elegante e minimalista com uma construção robusta e durável. Seu acabamento premium e seus componentes de alta qualidade garantem um desempenho confiável e duradouro."
          }
        ],
        "saleCfg": [
          {
            "price": "719,94",
            "installmentPrice": "59,99",
            "installmentMax": "12x",
          }
        ],
        "imgsProduct": [
          {
            "img": "/products/product-1-picture.webp",
            "alt": "desc product 1"
          },
          {
            "img": "/products/product-2-picture.webp",
            "alt": "desc product 2"
          },
          {
            "img": "/products/product-3-picture.webp",
            "alt": "desc product 3"
          },
          {
            "img": "/products/product-1-picture.webp",
            "alt": "desc product 1"
          }
        ],
        "oldPricePromotion": [
          {
            "price": "1.199.90",
            "discountPercentage": "40%",
            "installmentPrice": "99,99",
            "installmentMax": "12x",
          }
        ],
      },
      {
        "id": 7,
        "name": "Caixa Produto V1.0 - 30",
        "img": "/products/product5.webp",
        "size": "h-18",
        "alt": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "description": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "topicsDesc": [
          {
            "title": "Qualidade de som incomparável",
            "description": "Desfrute de um som rico e detalhado, com graves profundos, médios exuberantes e agudos cristalinos. O Amplificador [Nome do Modelo] revela a verdadeira beleza da sua música, permitindo que você ouça cada detalhe como nunca antes."
          },
          {
            "title": "Design elegante e construção robusta",
            "description": "O Amplificador [Nome do Modelo] combina um design elegante e minimalista com uma construção robusta e durável. Seu acabamento premium e seus componentes de alta qualidade garantem um desempenho confiável e duradouro."
          }
        ],
        "saleCfg": [
          {
            "price": "299,90",
            "installmentPrice": "30,00",
            "installmentMax": "12x",
          }
        ],
        "imgsProduct": [
          {
            "img": "/products/product-1-picture.webp",
            "alt": "desc product 1"
          },
          {
            "img": "/products/product-2-picture.webp",
            "alt": "desc product 2"
          },
          {
            "img": "/products/product-3-picture.webp",
            "alt": "desc product 3"
          },
          {
            "img": "/products/product-1-picture.webp",
            "alt": "desc product 1"
          }
        ],
        "oldPricePromotion": null,
      },
      {
        "id": 8,
        "name": "Caixa Produto V1.0 - 30",
        "img": "/products/product2.webp",
        "size": "h-14",
        "alt": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "description": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "topicsDesc": [
          {
            "title": "Qualidade de som incomparável",
            "description": "Desfrute de um som rico e detalhado, com graves profundos, médios exuberantes e agudos cristalinos. O Amplificador [Nome do Modelo] revela a verdadeira beleza da sua música, permitindo que você ouça cada detalhe como nunca antes."
          },
          {
            "title": "Design elegante e construção robusta",
            "description": "O Amplificador [Nome do Modelo] combina um design elegante e minimalista com uma construção robusta e durável. Seu acabamento premium e seus componentes de alta qualidade garantem um desempenho confiável e duradouro."
          }
        ],
        "saleCfg": [
          {
            "price": "1.299,90",
            "installmentPrice": "30,00",
            "installmentMax": "12x",
          }
        ],
        "imgsProduct": [
          {
            "img": "/products/product-1-picture.webp",
            "alt": "desc product 1"
          },
          {
            "img": "/products/product-2-picture.webp",
            "alt": "desc product 2"
          },
          {
            "img": "/products/product-3-picture.webp",
            "alt": "desc product 3"
          },
          {
            "img": "/products/product-1-picture.webp",
            "alt": "desc product 1"
          }
        ],
        "oldPricePromotion": null,
      },
    ],
  }),
  actions: {

  },
});

export default useProductStore;
