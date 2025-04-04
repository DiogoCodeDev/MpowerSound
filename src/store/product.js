import { defineStore } from 'pinia';

// import { productService } from '@/services/product';

const useProductStore = defineStore('product', {
  state: () => ({
    slidesGallery: [
      {
        "title": "Caixas Acústicas Passivas",
        "desc": "As Caixas Acústicas Passivas da MPower Sound são projetadas para entregar uma reprodução sonora precisa e de alta qualidade.",
        "descMobile": "As Caixas Acústicas Passivas da M Power Sound são projetadas para entregar uma reprodução sonora precisa e de alta qualidade.",
        "products": [
          1, 2, 3, 4, 5, 6, 7, 8
        ]
      },
      {
        "title": "Amplificadores de Potência",
        "desc": "Os Amplificadores de Potência da MPower Sound foram desenvolvidos para entregar um som robusto, claro e fiel em qualquer ambiente.",
        "descMobile": "Os Amplificadores de Potência da M Power Sound foram desenvolvidos para entregar um som robusto, claro e fiel em qualquer ambiente.",
        "products": [
          4, 7, 3, 4, 5, 6, 1, 4
        ]
      },
      {
        "title": "Caixas para Sonorização Ambiente",
        "desc": "Transforme seu espaço com as Caixas para Sonorização de Ambiente, oferecendo som de alta qualidade, clareza e potência para qualquer tipo de ambiente!",
        "descMobile": "Transforme seu espaço com as Caixas para Sonorização de Ambiente, oferecendo som de alta qualidade, clareza e potência para qualquer tipo de ambiente!",
        "products": [
          5, 6, 7, 8, 1, 2, 3, 4
        ]
      },
      {
        "title": "Produtos X",
        "desc": "As Caixas Acústicas Passivas da MPower Sound são projetadas para entregar uma reprodução sonora precisa e de alta qualidade.",
        "descMobile": "As Caixas Acústicas Passivas da M Power Sound são projetadas para entregar uma reprodução sonora precisa e de alta qualidade.",
        "products": [
          1, 2, 3, 4, 5, 6, 7, 8
        ]
      },
      {
        "title": "Produtos Y",
        "desc": "Os Amplificadores de Potência da MPower Sound foram desenvolvidos para entregar um som robusto, claro e fiel em qualquer ambiente.",
        "descMobile": "Os Amplificadores de Potência da M Power Sound foram desenvolvidos para entregar um som robusto, claro e fiel em qualquer ambiente.",
        "products": [
          4, 7, 3, 4, 5, 6, 1, 4
        ]
      },
      {
        "title": "Produtos Z",
        "desc": "Transforme seu espaço com as Caixas para Sonorização de Ambiente, oferecendo som de alta qualidade, clareza e potência para qualquer tipo de ambiente!",
        "descMobile": "Transforme seu espaço com as Caixas para Sonorização de Ambiente, oferecendo som de alta qualidade, clareza e potência para qualquer tipo de ambiente!",
        "products": [
          5, 6, 7, 8, 1, 2, 3, 4
        ]
      }
    ],
    slidesHome: [
      {
        "title": "Caixas Acústicas Passivas",
        "desc": "As Caixas Acústicas Passivas da MPower Sound são projetadas para entregar uma reprodução sonora precisa e de alta qualidade. Com design robusto e tecnologia avançada, elas oferecem excelente desempenho acústico, garantindo graves potentes, médios definidos e agudos cristalinos em qualquer ambiente.",
        "descMobile": "As Caixas Acústicas Passivas da M Power Sound são projetadas para entregar uma reprodução sonora precisa e de alta qualidade.",
        "products": [
          1, 2, 3, 4, 5, 6, 7, 8
        ]
      },
      {
        "title": "Amplificadores de Potência",
        "desc": "Os Amplificadores de Potência da MPower Sound foram desenvolvidos para entregar um som robusto, claro e fiel em qualquer ambiente. Com tecnologia de ponta e engenharia de alta precisão, nossos amplificadores oferecem desempenho excepcional em todas as frequências sonoras, proporcionando uma experiência sonora imersiva e de alta qualidade.",
        "descMobile": "Os Amplificadores de Potência da M Power Sound foram desenvolvidos para entregar um som robusto, claro e fiel em qualquer ambiente.",
        "products": [
          4, 7, 3, 4, 5, 6, 1, 4
        ]
      },
      {
        "title": "Caixas para Sonorização Ambiente",
        "desc": "Transforme seu espaço com as Caixas para Sonorização de Ambiente, oferecendo som de alta qualidade, clareza e potência para qualquer tipo de ambiente!",
        "descMobile": "Transforme seu espaço com as Caixas para Sonorização de Ambiente, oferecendo som de alta qualidade, clareza e potência para qualquer tipo de ambiente!",
        "products": [
          5, 6, 7, 8, 1, 2, 3, 4
        ]
      }
    ],
    slideSupport: [
      {
        "title": "Recomendados para você!",
        "desc": "As Caixas Acústicas Passivas da MPower Sound são projetadas para entregar uma reprodução sonora precisa e de alta qualidade. Com design robusto e tecnologia avançada, elas oferecem excelente desempenho acústico, garantindo graves potentes, médios definidos e agudos cristalinos em qualquer ambiente.",
        "descMobile": "As Caixas Acústicas Passivas da M Power Sound são projetadas para entregar uma reprodução sonora precisa e de alta qualidade.",
        "products": [
          5, 6, 7, 8, 1, 2, 3, 4
        ]
      }
    ],
    slideEnterprise: [
      {
        "title": "Selecionados para você!",
        "desc": "As Caixas Acústicas Passivas da MPower Sound são projetadas para entregar uma reprodução sonora precisa e de alta qualidade. Com design robusto e tecnologia avançada, elas oferecem excelente desempenho acústico, garantindo graves potentes, médios definidos e agudos cristalinos em qualquer ambiente.",
        "descMobile": "As Caixas Acústicas Passivas da M Power Sound são projetadas para entregar uma reprodução sonora precisa e de alta qualidade.",
        "products": [
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
        "alt": "Imagem Produto",
        "description": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "mercadolivre": "https://lista.mercadolivre.com.br/amplificadores#D[A:amplificadores]",
        "amazon":"https://www.amazon.com.br/s?k=amplificadores&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3AR8WW2DKSE17&sprefix=amplificadore%2Caps%2C254&ref=nb_sb_noss_2",
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
        "infos": [
          {
            "name": 'Amplificador MpowerSound X500',
            "description": 'O Amplificador MpowerSound X500 oferece alta fidelidade sonora com potência de 500W RMS, ideal para quem busca desempenho e qualidade em sistemas de áudio profissionais e residenciais.',
            "specifications": [
              { "label": 'Potência', "value": '500W RMS' },
              { "label": 'Entradas', "value": '2 entradas RCA estéreo' },
              { "label": 'Saídas', "value": 'Saída para 2 canais de alto-falantes' },
              { "label": 'Proteção', "value": 'Proteção térmica e contra curto-circuito' },
              { "label": 'Compatibilidade', "value": 'Compatível com a maioria dos sistemas de som padrão' },
              { "label": 'Resposta de Frequência', "value": '20Hz - 20kHz' },
              { "label": 'Relação Sinal-Ruído', "value": '>90dB' },
              { "label": 'Impedância', "value": '4-8 ohms' },
              { "label": 'Dimensões', "value": '300mm x 200mm x 70mm' },
              { "label": 'Peso', "value": '3.5kg' },
              { "label": 'Alimentação', "value": 'Bivolt automático (110V/220V)' },
              { "label": 'THD (Distorção Harmônica Total)', "value": '<0.1%' },
              { "label": 'Sensibilidade de Entrada', "value": '0.775V' },
              { "label": 'Consumo de Energia', "value": '600W em plena carga' },
              { "label": 'Material do Chassi', "value": 'Alumínio anodizado' },
              { "label": 'Temperatura de Operação', "value": '0°C a 40°C' },
              { "label": 'Método de Resfriamento', "value": 'Ventilação forçada com ventilador silencioso' }
            ],
            "warranty": '12 meses de garantia contra defeitos de fabricação.'
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
            "img": "/products/product-2-picture.webp",
            "alt": "desc product 1"
          },
          {
            "img": "/products/product-4-picture.webp",
            "alt": "desc product 2"
          },
          {
            "img": "/products/product-5-picture.webp",
            "alt": "desc product 3"
          },
          {
            "img": "/products/product-3-picture.webp",
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
        "alt": "Imagem Produto",
        "description": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "mercadolivre": "https://lista.mercadolivre.com.br/amplificadores#D[A:amplificadores]",
        "amazon":"https://www.amazon.com.br/s?k=amplificadores&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3AR8WW2DKSE17&sprefix=amplificadore%2Caps%2C254&ref=nb_sb_noss_2",
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
        "infos": [
          {
            "name": 'Amplificador MpowerSound X500',
            "description": 'O Amplificador MpowerSound X500 oferece alta fidelidade sonora com potência de 500W RMS, ideal para quem busca desempenho e qualidade em sistemas de áudio profissionais e residenciais.',
            "specifications": [
              { "label": 'Potência', "value": '500W RMS' },
              { "label": 'Entradas', "value": '2 entradas RCA estéreo' },
              { "label": 'Saídas', "value": 'Saída para 2 canais de alto-falantes' },
              { "label": 'Proteção', "value": 'Proteção térmica e contra curto-circuito' },
              { "label": 'Compatibilidade', "value": 'Compatível com a maioria dos sistemas de som padrão' },
              { "label": 'Resposta de Frequência', "value": '20Hz - 20kHz' },
              { "label": 'Relação Sinal-Ruído', "value": '>90dB' },
              { "label": 'Impedância', "value": '4-8 ohms' },
              { "label": 'Dimensões', "value": '300mm x 200mm x 70mm' },
              { "label": 'Peso', "value": '3.5kg' },
              { "label": 'Alimentação', "value": 'Bivolt automático (110V/220V)' },
              { "label": 'THD (Distorção Harmônica Total)', "value": '<0.1%' },
              { "label": 'Sensibilidade de Entrada', "value": '0.775V' },
              { "label": 'Consumo de Energia', "value": '600W em plena carga' },
              { "label": 'Material do Chassi', "value": 'Alumínio anodizado' },
              { "label": 'Temperatura de Operação', "value": '0°C a 40°C' },
              { "label": 'Método de Resfriamento', "value": 'Ventilação forçada com ventilador silencioso' }
            ],
            "warranty": '12 meses de garantia contra defeitos de fabricação.'
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
            "img": "/products/product-3-picture.webp",
            "alt": "desc product 4"
          },
          {
            "img": "/products/product-2-picture.webp",
            "alt": "desc product 3"
          },
          {
            "img": "/products/product-6-picture.webp",
            "alt": "desc product 2"
          },
          {
            "img": "/products/product-5-picture.webp",
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
        "alt": "Imagem Produto",
        "description": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "mercadolivre": "https://lista.mercadolivre.com.br/amplificadores#D[A:amplificadores]",
        "amazon":"https://www.amazon.com.br/s?k=amplificadores&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3AR8WW2DKSE17&sprefix=amplificadore%2Caps%2C254&ref=nb_sb_noss_2",
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
        "infos": [
          {
            "name": 'Amplificador MpowerSound X500',
            "description": 'O Amplificador MpowerSound X500 oferece alta fidelidade sonora com potência de 500W RMS, ideal para quem busca desempenho e qualidade em sistemas de áudio profissionais e residenciais.',
            "specifications": [
              { "label": 'Potência', "value": '500W RMS' },
              { "label": 'Entradas', "value": '2 entradas RCA estéreo' },
              { "label": 'Saídas', "value": 'Saída para 2 canais de alto-falantes' },
              { "label": 'Proteção', "value": 'Proteção térmica e contra curto-circuito' },
              { "label": 'Compatibilidade', "value": 'Compatível com a maioria dos sistemas de som padrão' },
              { "label": 'Resposta de Frequência', "value": '20Hz - 20kHz' },
              { "label": 'Relação Sinal-Ruído', "value": '>90dB' },
              { "label": 'Impedância', "value": '4-8 ohms' },
              { "label": 'Dimensões', "value": '300mm x 200mm x 70mm' },
              { "label": 'Peso', "value": '3.5kg' },
              { "label": 'Alimentação', "value": 'Bivolt automático (110V/220V)' },
              { "label": 'THD (Distorção Harmônica Total)', "value": '<0.1%' },
              { "label": 'Sensibilidade de Entrada', "value": '0.775V' },
              { "label": 'Consumo de Energia', "value": '600W em plena carga' },
              { "label": 'Material do Chassi', "value": 'Alumínio anodizado' },
              { "label": 'Temperatura de Operação', "value": '0°C a 40°C' },
              { "label": 'Método de Resfriamento', "value": 'Ventilação forçada com ventilador silencioso' }
            ],
            "warranty": '12 meses de garantia contra defeitos de fabricação.'
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
            "img": "/products/product-3-picture.webp",
            "alt": "desc product 6"
          },
          {
            "img": "/products/product-5-picture.webp",
            "alt": "desc product 1"
          },
          {
            "img": "/products/product-2-picture.webp",
            "alt": "desc product 2"
          },
          {
            "img": "/products/product-1-picture.webp",
            "alt": "desc product 3"
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
        "alt": "Imagem Produto",
        "description": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "mercadolivre": "https://lista.mercadolivre.com.br/amplificadores#D[A:amplificadores]",
        "amazon":"https://www.amazon.com.br/s?k=amplificadores&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3AR8WW2DKSE17&sprefix=amplificadore%2Caps%2C254&ref=nb_sb_noss_2",
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
        "infos": [
          {
            "name": 'Amplificador MpowerSound X500',
            "description": 'O Amplificador MpowerSound X500 oferece alta fidelidade sonora com potência de 500W RMS, ideal para quem busca desempenho e qualidade em sistemas de áudio profissionais e residenciais.',
            "specifications": [
              { "label": 'Potência', "value": '500W RMS' },
              { "label": 'Entradas', "value": '2 entradas RCA estéreo' },
              { "label": 'Saídas', "value": 'Saída para 2 canais de alto-falantes' },
              { "label": 'Proteção', "value": 'Proteção térmica e contra curto-circuito' },
              { "label": 'Compatibilidade', "value": 'Compatível com a maioria dos sistemas de som padrão' },
              { "label": 'Resposta de Frequência', "value": '20Hz - 20kHz' },
              { "label": 'Relação Sinal-Ruído', "value": '>90dB' },
              { "label": 'Impedância', "value": '4-8 ohms' },
              { "label": 'Dimensões', "value": '300mm x 200mm x 70mm' },
              { "label": 'Peso', "value": '3.5kg' },
              { "label": 'Alimentação', "value": 'Bivolt automático (110V/220V)' },
              { "label": 'THD (Distorção Harmônica Total)', "value": '<0.1%' },
              { "label": 'Sensibilidade de Entrada', "value": '0.775V' },
              { "label": 'Consumo de Energia', "value": '600W em plena carga' },
              { "label": 'Material do Chassi', "value": 'Alumínio anodizado' },
              { "label": 'Temperatura de Operação', "value": '0°C a 40°C' },
              { "label": 'Método de Resfriamento', "value": 'Ventilação forçada com ventilador silencioso' }
            ],
            "warranty": '12 meses de garantia contra defeitos de fabricação.'
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
            "img": "/products/product-5-picture.webp",
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
            "img": "/products/product-6-picture.webp",
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
        "alt": "Imagem Produto",
        "description": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "mercadolivre": "https://lista.mercadolivre.com.br/amplificadores#D[A:amplificadores]",
        "amazon":"https://www.amazon.com.br/s?k=amplificadores&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3AR8WW2DKSE17&sprefix=amplificadore%2Caps%2C254&ref=nb_sb_noss_2",
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
        "infos": [
          {
            "name": 'Amplificador MpowerSound X500',
            "description": 'O Amplificador MpowerSound X500 oferece alta fidelidade sonora com potência de 500W RMS, ideal para quem busca desempenho e qualidade em sistemas de áudio profissionais e residenciais.',
            "specifications": [
              { "label": 'Potência', "value": '500W RMS' },
              { "label": 'Entradas', "value": '2 entradas RCA estéreo' },
              { "label": 'Saídas', "value": 'Saída para 2 canais de alto-falantes' },
              { "label": 'Proteção', "value": 'Proteção térmica e contra curto-circuito' },
              { "label": 'Compatibilidade', "value": 'Compatível com a maioria dos sistemas de som padrão' },
              { "label": 'Resposta de Frequência', "value": '20Hz - 20kHz' },
              { "label": 'Relação Sinal-Ruído', "value": '>90dB' },
              { "label": 'Impedância', "value": '4-8 ohms' },
              { "label": 'Dimensões', "value": '300mm x 200mm x 70mm' },
              { "label": 'Peso', "value": '3.5kg' },
              { "label": 'Alimentação', "value": 'Bivolt automático (110V/220V)' },
              { "label": 'THD (Distorção Harmônica Total)', "value": '<0.1%' },
              { "label": 'Sensibilidade de Entrada', "value": '0.775V' },
              { "label": 'Consumo de Energia', "value": '600W em plena carga' },
              { "label": 'Material do Chassi', "value": 'Alumínio anodizado' },
              { "label": 'Temperatura de Operação', "value": '0°C a 40°C' },
              { "label": 'Método de Resfriamento', "value": 'Ventilação forçada com ventilador silencioso' }
            ],
            "warranty": '12 meses de garantia contra defeitos de fabricação.'
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
            "img": "/products/product-4-picture.webp",
            "alt": "desc product 1"
          },
          {
            "img": "/products/product-2-picture.webp",
            "alt": "desc product 2"
          },
          {
            "img": "/products/product-2-picture.webp",
            "alt": "desc product 3"
          },
          {
            "img": "/products/product-6-picture.webp",
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
        "alt": "Imagem Produto",
        "description": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "mercadolivre": "https://lista.mercadolivre.com.br/amplificadores#D[A:amplificadores]",
        "amazon":"https://www.amazon.com.br/s?k=amplificadores&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3AR8WW2DKSE17&sprefix=amplificadore%2Caps%2C254&ref=nb_sb_noss_2",
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
        "infos": [
          {
            "name": 'Amplificador MpowerSound X500',
            "description": 'O Amplificador MpowerSound X500 oferece alta fidelidade sonora com potência de 500W RMS, ideal para quem busca desempenho e qualidade em sistemas de áudio profissionais e residenciais.',
            "specifications": [
              { "label": 'Potência', "value": '500W RMS' },
              { "label": 'Entradas', "value": '2 entradas RCA estéreo' },
              { "label": 'Saídas', "value": 'Saída para 2 canais de alto-falantes' },
              { "label": 'Proteção', "value": 'Proteção térmica e contra curto-circuito' },
              { "label": 'Compatibilidade', "value": 'Compatível com a maioria dos sistemas de som padrão' },
              { "label": 'Resposta de Frequência', "value": '20Hz - 20kHz' },
              { "label": 'Relação Sinal-Ruído', "value": '>90dB' },
              { "label": 'Impedância', "value": '4-8 ohms' },
              { "label": 'Dimensões', "value": '300mm x 200mm x 70mm' },
              { "label": 'Peso', "value": '3.5kg' },
              { "label": 'Alimentação', "value": 'Bivolt automático (110V/220V)' },
              { "label": 'THD (Distorção Harmônica Total)', "value": '<0.1%' },
              { "label": 'Sensibilidade de Entrada', "value": '0.775V' },
              { "label": 'Consumo de Energia', "value": '600W em plena carga' },
              { "label": 'Material do Chassi', "value": 'Alumínio anodizado' },
              { "label": 'Temperatura de Operação', "value": '0°C a 40°C' },
              { "label": 'Método de Resfriamento', "value": 'Ventilação forçada com ventilador silencioso' }
            ],
            "warranty": '12 meses de garantia contra defeitos de fabricação.'
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
            "img": "/products/product-5-picture.webp",
            "alt": "desc product 1"
          },
          {
            "img": "/products/product-2-picture.webp",
            "alt": "desc product 2"
          },
          {
            "img": "/products/product-6-picture.webp",
            "alt": "desc product 3"
          },
          {
            "img": "/products/product-4-picture.webp",
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
        "alt": "Imagem Produto",
        "description": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "mercadolivre": "https://lista.mercadolivre.com.br/amplificadores#D[A:amplificadores]",
        "amazon":"https://www.amazon.com.br/s?k=amplificadores&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3AR8WW2DKSE17&sprefix=amplificadore%2Caps%2C254&ref=nb_sb_noss_2",
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
        "infos": [
          {
            "name": 'Amplificador MpowerSound X500',
            "description": 'O Amplificador MpowerSound X500 oferece alta fidelidade sonora com potência de 500W RMS, ideal para quem busca desempenho e qualidade em sistemas de áudio profissionais e residenciais.',
            "specifications": [
              { "label": 'Potência', "value": '500W RMS' },
              { "label": 'Entradas', "value": '2 entradas RCA estéreo' },
              { "label": 'Saídas', "value": 'Saída para 2 canais de alto-falantes' },
              { "label": 'Proteção', "value": 'Proteção térmica e contra curto-circuito' },
              { "label": 'Compatibilidade', "value": 'Compatível com a maioria dos sistemas de som padrão' },
              { "label": 'Resposta de Frequência', "value": '20Hz - 20kHz' },
              { "label": 'Relação Sinal-Ruído', "value": '>90dB' },
              { "label": 'Impedância', "value": '4-8 ohms' },
              { "label": 'Dimensões', "value": '300mm x 200mm x 70mm' },
              { "label": 'Peso', "value": '3.5kg' },
              { "label": 'Alimentação', "value": 'Bivolt automático (110V/220V)' },
              { "label": 'THD (Distorção Harmônica Total)', "value": '<0.1%' },
              { "label": 'Sensibilidade de Entrada', "value": '0.775V' },
              { "label": 'Consumo de Energia', "value": '600W em plena carga' },
              { "label": 'Material do Chassi', "value": 'Alumínio anodizado' },
              { "label": 'Temperatura de Operação', "value": '0°C a 40°C' },
              { "label": 'Método de Resfriamento', "value": 'Ventilação forçada com ventilador silencioso' }
            ],
            "warranty": '12 meses de garantia contra defeitos de fabricação.'
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
            "img": "/products/product-4-picture.webp",
            "alt": "desc product 1"
          },
          {
            "img": "/products/product-6-picture.webp",
            "alt": "desc product 2"
          },
          {
            "img": "/products/product-2-picture.webp",
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
        "alt": "Imagem Produto",
        "description": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
        "mercadolivre": "https://lista.mercadolivre.com.br/amplificadores#D[A:amplificadores]",
        "amazon":"https://www.amazon.com.br/s?k=amplificadores&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3AR8WW2DKSE17&sprefix=amplificadore%2Caps%2C254&ref=nb_sb_noss_2",
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
        "infos": [
          {
            "name": 'Amplificador MpowerSound X500',
            "description": 'O Amplificador MpowerSound X500 oferece alta fidelidade sonora com potência de 500W RMS, ideal para quem busca desempenho e qualidade em sistemas de áudio profissionais e residenciais.',
            "specifications": [
              { "label": 'Potência', "value": '500W RMS' },
              { "label": 'Entradas', "value": '2 entradas RCA estéreo' },
              { "label": 'Saídas', "value": 'Saída para 2 canais de alto-falantes' },
              { "label": 'Proteção', "value": 'Proteção térmica e contra curto-circuito' },
              { "label": 'Compatibilidade', "value": 'Compatível com a maioria dos sistemas de som padrão' },
              { "label": 'Resposta de Frequência', "value": '20Hz - 20kHz' },
              { "label": 'Relação Sinal-Ruído', "value": '>90dB' },
              { "label": 'Impedância', "value": '4-8 ohms' },
              { "label": 'Dimensões', "value": '300mm x 200mm x 70mm' },
              { "label": 'Peso', "value": '3.5kg' },
              { "label": 'Alimentação', "value": 'Bivolt automático (110V/220V)' },
              { "label": 'THD (Distorção Harmônica Total)', "value": '<0.1%' },
              { "label": 'Sensibilidade de Entrada', "value": '0.775V' },
              { "label": 'Consumo de Energia', "value": '600W em plena carga' },
              { "label": 'Material do Chassi', "value": 'Alumínio anodizado' },
              { "label": 'Temperatura de Operação', "value": '0°C a 40°C' },
              { "label": 'Método de Resfriamento', "value": 'Ventilação forçada com ventilador silencioso' }
            ],
            "warranty": '12 meses de garantia contra defeitos de fabricação.'
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
            "img": "/products/product-4-picture.webp",
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
