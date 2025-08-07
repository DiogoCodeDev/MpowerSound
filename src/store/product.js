import { defineStore } from 'pinia';

// import { productService } from '@/services/product';

const useProductStore = defineStore('product', {
  state: () => ({
    productHome: [
      {
        "title": "Caixas Amplificadoras Multi-uso",
        "desc": "As Caixas Amplificadoras Multi-uso da MPower Sound são versáteis, potentes e ideais para diversas aplicações sonoras, oferecendo excelente qualidade de áudio, robustez e conectividade para diferentes tipos de uso.",
        "descMobile": "Caixas Amplificadoras Multi-uso da MPower Sound com qualidade, potência e conectividade para diversas aplicações.",
        "products": [
          2, 3, 9, 1
        ]
      },
      {
        "title": "Amplificadores de Potência",
        "desc": "As Caixas Amplificadoras Multi-uso da MPower Sound são versáteis, potentes e ideais para diversas aplicações sonoras, oferecendo excelente qualidade de áudio, robustez e conectividade para diferentes tipos de uso.",
        "descMobile": "Caixas Amplificadoras Multi-uso da MPower Sound com qualidade, potência e conectividade para diversas aplicações.",
        "products": [
          5, 10, 6, 4
        ]
      },
      {
        "title": "Kits de som ambiente",
        "desc": "Os Kits de som ambiente foram desenvolvidos para oferecer soluções completas de áudio com excelente desempenho e praticidade. Combinando amplificadores e caixas de som de alta qualidade, esses kits garantem potência, clareza e fidelidade sonora para diversos ambientes.",
        "descMobile": "Os Kits de som ambiente oferecem soluções completas de áudio com alta performance e praticidade.",
        "products": [
          7, 8
        ]
      }
    ],
    slidesHome: [
      {
        "title": "Caixas Amplificadoras Multi-uso",
        "desc": "As Caixas Amplificadoras Multi-uso da MPower Sound são versáteis, potentes e ideais para diversas aplicações sonoras, oferecendo excelente qualidade de áudio, robustez e conectividade para diferentes tipos de uso.",
        "descMobile": "Caixas Amplificadoras Multi-uso da MPower Sound com qualidade, potência e conectividade para diversas aplicações.",
        "products": [
          1, 2, 3, 9, 10, 1, 2, 3, 9, 10, 1, 2, 3, 9, 10 
        ]
      },
      {
        "title": "Amplificadores de Potência",
        "desc": "Os Amplificadores de Potência da MPower Sound foram desenvolvidos para entregar um som robusto, claro e fiel em qualquer ambiente. Com tecnologia de ponta e engenharia de alta precisão, nossos amplificadores oferecem desempenho excepcional em todas as frequências sonoras, proporcionando uma experiência sonora imersiva e de alta qualidade.",
        "descMobile": "Os Amplificadores de Potência da M Power Sound foram desenvolvidos para entregar um som robusto, claro e fiel em qualquer ambiente.",
        "products": [
          4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6
        ]
      },
      {
        "title": "Kits de som ambiente",
        "desc": "Os Kits de som ambiente foram desenvolvidos para oferecer soluções completas de áudio com excelente desempenho e praticidade. Combinando amplificadores e caixas de som de alta qualidade, esses kits garantem potência, clareza e fidelidade sonora para diversos ambientes.",
        "descMobile": "Os Kits de som ambiente oferecem soluções completas de áudio com alta performance e praticidade.",
        "products": [
          7, 8, 7, 8, 7, 8, 7, 8, 7, 8, 7, 8, 7, 8
        ]
      }
    ],
    slidesGallery: [
      {
        "title": "Caixas Amplificadoras Multi-uso",
        "desc": "As Caixas Amplificadoras Multi-uso da MPower Sound são versáteis, potentes e ideais para diversas aplicações sonoras, oferecendo excelente qualidade de áudio, robustez e conectividade para diferentes tipos de uso.",
        "descMobile": "Caixas Amplificadoras Multi-uso da MPower Sound com qualidade, potência e conectividade para diversas aplicações.",
        "products": [
          1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3
        ]
      },
      {
        "title": "Amplificadores de Potência",
        "desc": "Os Amplificadores de Potência da MPower Sound foram desenvolvidos para entregar um som robusto, claro e fiel em qualquer ambiente. Com tecnologia de ponta e engenharia de alta precisão, nossos amplificadores oferecem desempenho excepcional em todas as frequências sonoras, proporcionando uma experiência sonora imersiva e de alta qualidade.",
        "descMobile": "Os Amplificadores de Potência da M Power Sound foram desenvolvidos para entregar um som robusto, claro e fiel em qualquer ambiente.",
        "products": [
          4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6
        ]
      },
      {
        "title": "Kits de som ambiente",
        "desc": "Os Kits de som ambiente foram desenvolvidos para oferecer soluções completas de áudio com excelente desempenho e praticidade. Combinando amplificadores e caixas de som de alta qualidade, esses kits garantem potência, clareza e fidelidade sonora para diversos ambientes.",
        "descMobile": "Os Kits de som ambiente oferecem soluções completas de áudio com alta performance e praticidade.",
        "products": [
          7, 8, 7, 8, 7, 8, 7, 8, 7, 8, 7, 8, 7, 8
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
      // {
      //   "id": 1,
      //   "name": "Cxs Acústicas Passiva - Versão 40t - 1080p.",
      //   "img": "/products/product1.webp",
      //   "size": "h-20",
      //   "alt": "Imagem Produto",
      //   "description": "Este amplificador excepcional oferece uma experiência sonora incomparável, onde cada nota e cada nuance são reproduzidas com clareza cristalina e precisão impressionante.",
      //   "magalu": "https://lista.mercadolivre.com.br/amplificadores#D[A:amplificadores]",
      //   "amazon":"https://www.amazon.com.br/s?k=amplificadores&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3AR8WW2DKSE17&sprefix=amplificadore%2Caps%2C254&ref=nb_sb_noss_2",
      //   "topicsDesc": [
      //     {
      //       "title": "Qualidade de som incomparável",
      //       "description": "Desfrute de um som rico e detalhado, com graves profundos, médios exuberantes e agudos cristalinos. O Amplificador [Nome do Modelo] revela a verdadeira beleza da sua música, permitindo que você ouça cada detalhe como nunca antes."
      //     },
      //     {
      //       "title": "Design elegante e construção robusta",
      //       "description": "O Amplificador [Nome do Modelo] combina um design elegante e minimalista com uma construção robusta e durável. Seu acabamento premium e seus componentes de alta qualidade garantem um desempenho confiável e duradouro."
      //     }
      //   ],
      //   "infos": [
      //     {
      //       "name": 'Amplificador MpowerSound X500',
      //       "description": 'O Amplificador MpowerSound X500 oferece alta fidelidade sonora com potência de 500W RMS, ideal para quem busca desempenho e qualidade em sistemas de áudio profissionais e residenciais.',
      //       "specifications": [
      //         { "label": 'Potência', "value": '500W RMS' },
      //         { "label": 'Entradas', "value": '2 entradas RCA estéreo' },
      //         { "label": 'Saídas', "value": 'Saída para 2 canais de alto-falantes' },
      //         { "label": 'Proteção', "value": 'Proteção térmica e contra curto-circuito' },
      //         { "label": 'Compatibilidade', "value": 'Compatível com a maioria dos sistemas de som padrão' },
      //         { "label": 'Resposta de Frequência', "value": '20Hz - 20kHz' },
      //         { "label": 'Relação Sinal-Ruído', "value": '>90dB' },
      //         { "label": 'Impedância', "value": '4-8 ohms' },
      //         { "label": 'Dimensões', "value": '300mm x 200mm x 70mm' },
      //         { "label": 'Peso', "value": '3.5kg' },
      //         { "label": 'Alimentação', "value": 'Bivolt automático (110V/220V)' },
      //         { "label": 'THD (Distorção Harmônica Total)', "value": '<0.1%' },
      //         { "label": 'Sensibilidade de Entrada', "value": '0.775V' },
      //         { "label": 'Consumo de Energia', "value": '600W em plena carga' },
      //         { "label": 'Material do Chassi', "value": 'Alumínio anodizado' },
      //         { "label": 'Temperatura de Operação', "value": '0°C a 40°C' },
      //         { "label": 'Método de Resfriamento', "value": 'Ventilação forçada com ventilador silencioso' }
      //       ],
      //       "warranty": '12 meses de garantia contra defeitos de fabricação.'
      //     }
      //   ],
      //   "saleCfg": [
      //     {
      //       "price": "799,90",
      //       "installmentPrice": "65,00",
      //       "installmentMax": "12x",
      //     }
      //   ],
      //   "imgsProduct": [
      //     {
      //       "img": "/products/product-2-picture.webp",
      //       "alt": "desc product 1"
      //     },
      //     {
      //       "img": "/products/product-4-picture.webp",
      //       "alt": "desc product 2"
      //     },
      //     {
      //       "img": "/products/product-5-picture.webp",
      //       "alt": "desc product 3"
      //     },
      //     {
      //       "img": "/products/product-3-picture.webp",
      //       "alt": "desc product 1"
      //     }
      //   ],
      //   "oldPricePromotion": [
      //     {
      //       "price": "1.599,90",
      //       "discountPercentage": "50%",
      //       "installmentPrice": "133,25 sem juros.",
      //       "installmentMax": "12x",
      //     }
      //   ],
      // },
      {
        "id": 1,
        "name": "Caixa Amplificadora MP900 USB/SD",
        "img": "/products/mp900-2.webp",
        "img2": "/products/mp900-2.webp",
        "size": "h-20",
        "alt": "Imagem Produto",
        "manual": "manual-mp900.pdf",
        "description": "Caixa amplificadora com múltiplas entradas e controles individuais, ideal para apresentações, igrejas, escolas e eventos em geral.",
        "magalu": "https://www.magazineluiza.com.br/caixa-amplificadora-multiuso-mp-900-bluetooth-mpower-sound/p/fe1184cjcj/ea/easm/?partner_id=64068&utm_source=pdp&utm_medium=share",
        "amazon": "",
        "topicsDesc": [
          {
            "title": "Versatilidade de conexões",
            "description": "Com entradas para microfone, guitarra, auxiliar, USB, cartão SD e rádio FM, a MP900 é perfeita para diferentes necessidades de áudio."
          },
          {
            "title": "Controles profissionais",
            "description": "Possui controles de equalização LOW, MID, HIGH e volume geral (MASTER), permitindo um ajuste fino do som conforme o ambiente."
          }
        ],
        "infos": [
          {
            "name": "Caixa Amplificadora MP900",
            "description": "Caixa Amplificadora de 150W com múltiplas entradas, ideal para ambientes diversos como igrejas, escolas e eventos ao ar livre. Oferece grande versatilidade e controle de áudio.",
            "specifications": [
              { "label": "Potência", "value": "150W" },
              { "label": "Entradas", "value": "2 P10 microfone (LOW - HIGH), 1 P10 guitarra (LOW - HIGH), 1 auxiliar P10, 1 RCA" },
              { "label": "USB", "value": "Pendrive / MP3 Player (MP3 ou WMA)" },
              { "label": "Cartão SD", "value": "Formatos MP3 ou WMA" },
              { "label": "FM", "value": "Receptor digital de 88MHz a 108MHz" },
              { "label": "Equalização", "value": "LOW, MID, HIGH" },
              { "label": "Volume", "value": "Controle de volume geral (MASTER)" },
              { "label": "Saídas", "value": "Fone de ouvido (PHONES), linha para mesa de som" },
              { "label": "Tweeter", "value": "1 Piezoelétrico com chave liga/desliga" },
              { "label": "Alto-falante", "value": "1 de 15''" },
              { "label": "Dimensões", "value": "700mm (A) x 500mm (L) x 310mm (P)" },
              { "label": "Peso", "value": "18,5Kg" },
              { "label": "Alimentação", "value": "Bivolt Automático" }
            ],
            "warranty": "12 meses de garantia contra defeitos de fabricação."
          }
        ],
        "saleCfg": [
          {
            "price": "980,00",
            "installmentPrice": "332,73",
            "installmentMax": "4x"
          }
        ],
        "imgsProduct": [
          {
            "img": "/products/mp900-1.webp",
            "alt": "Mp 900 - img 1"
          },
          {
            "img": "/products/mp900-3.webp",
            "alt": "Mp 900 - img 3"
          },
          {
            "img": "/products/mp900-3.webp",
            "alt": "Mp 900 - img 3"
          },
          {
            "img": "/products/mp900-1.webp",
            "alt": "Mp 900 - img 1"
          }
        ],
        "oldPricePromotion": null
      },
      {
        "id": 2,
        "name": "Caixa Amplificadora MP200 USB/SD",
        "img": "/products/mp200-2.webp",
        "img2": "/products/mp200-1.webp",
        "size": "h-20",
        "alt": "Imagem Produto",
        "manual": "manual-mp200.pdf",
        "description": "Compacta e eficiente, a MP200 é uma caixa amplificadora ideal para ambientes menores, oferecendo múltiplas conexões e controle completo de áudio.",
        "magalu": "https://www.magazineluiza.com.br/caixa-amplificadora-multiuso-mp-200-bluetooth-mpower-sound/p/bhak82e45c/ea/cxsm/?partner_id=64068&utm_source=pdp&utm_medium=share",
        "amazon": "",
        "topicsDesc": [
          {
            "title": "Ideal para pequenos eventos",
            "description": "Com potência de 35W e alto-falante de 8'', a MP200 oferece qualidade de som para uso pessoal, educativo ou corporativo."
          },
          {
            "title": "Entradas e controles integrados",
            "description": "Possui entradas para microfone/guitarra, auxiliar, USB, cartão SD e rádio FM, além de controles individuais de volume e equalização."
          }
        ],
        "infos": [
          {
            "name": "Cx Amplificadora MP200",
            "description": "Caixa Amplificadora de 35W com diversas entradas e recursos de equalização, perfeita para uso em escolas, igrejas ou eventos domésticos.",
            "specifications": [
              { "label": "Potência", "value": "35W" },
              { "label": "Entradas", "value": "1 P10 microfone/guitarra, 1 auxiliar P10, 1 RCA" },
              { "label": "USB", "value": "Pendrive / MP3 Player (MP3 ou WMA)" },
              { "label": "Cartão SD", "value": "Formatos MP3 ou WMA" },
              { "label": "FM", "value": "Receptor digital de 88MHz a 108MHz" },
              { "label": "Equalização", "value": "LOW, MID, HIGH" },
              { "label": "Volume", "value": "Controle de volume geral (MASTER)" },
              { "label": "Tweeter", "value": "1 Piezoelétrico" },
              { "label": "Alto-falante", "value": "1 de 8''" },
              { "label": "Chave de voltagem", "value": "110V / 220V manual" },
              { "label": "Dimensões", "value": "420mm (A) x 340mm (L) x 260mm (P)" },
              { "label": "Peso", "value": "7,5Kg" }
            ],
            "warranty": "12 meses de garantia contra defeitos de fabricação."
          }
        ],
        "saleCfg": [
          {
            "price": "480,00",
            "installmentPrice": "167,45",
            "installmentMax": "4x"
          }
        ],
        "imgsProduct": [
          {
            "img": "/products/mp200-1.webp",
            "alt": "Mp 200 - img 1"
          },
          {
            "img": "/products/mp200-2_1.webp",
            "alt": "Mp 200 - img 2"
          },
          {
            "img": "/products/mp200-2_1.webp",
            "alt": "Mp 200 - img 2"
          },
          {
            "img": "/products/mp200-1.webp",
            "alt": "Mp 200 - img 4"
          }
        ],
        "oldPricePromotion": null
      },
      {
        "id": 3,
        "name": "Caixa Amplificadora MP700 USB/SD",
        "img": "/products/mp700-2.webp",
        "img2": "/products/mp700-2.webp",
        "size": "h-12",
        "alt": "Imagem Produto",
        "manual": "manual-mp700.pdf",
        "description": "Com potência de 70W e múltiplas opções de entrada, a MP700 é ideal para apresentações, igrejas e eventos de médio porte.",
        "magalu": "https://www.magazineluiza.com.br/caixa-amplificadora-multiuso-mp-700-bluetooth-mpower-sound/p/hhkc5c5f89/ea/easm/?partner_id=64068&utm_source=pdp&utm_medium=share",
        "amazon": "",
        "topicsDesc": [
          {
            "title": "Versatilidade em conexões",
            "description": "Entradas para microfone, guitarra, USB, cartão SD, rádio FM e controle de equalização permitem personalizar o som conforme o ambiente."
          },
          {
            "title": "Potência e clareza sonora",
            "description": "Equipado com tweeter piezoelétrico e alto-falante de 12'', entrega áudio limpo e potente para diversas finalidades."
          }
        ],
        "infos": [
          {
            "name": "Caixa Amplificadora MP700",
            "description": "Caixa amplificadora de 70W com diversas entradas, ideal para eventos médios, apresentações e uso profissional ou recreativo.",
            "specifications": [
              { "label": "Potência", "value": "70W" },
              { "label": "Entradas", "value": "1 P10 microfone, 1 P10 guitarra, 1 auxiliar P10, 1 RCA, USB" },
              { "label": "USB", "value": "Pendrive / MP3 Player (MP3 ou WMA)" },
              { "label": "Cartão SD", "value": "Formatos MP3 ou WMA" },
              { "label": "FM", "value": "Receptor digital de 88MHz a 108MHz" },
              { "label": "Equalização", "value": "LOW, MID, HIGH" },
              { "label": "Volume", "value": "Controle de volume geral (MASTER)" },
              { "label": "Saída", "value": "Fone de ouvido (PHONES)" },
              { "label": "Tweeter", "value": "Piezoelétrico" },
              { "label": "Alto-falante", "value": "12''" },
              { "label": "Chave de voltagem", "value": "110V x 220V manual" },
              { "label": "Peso", "value": "12Kg" }
            ],
            "warranty": "12 meses de garantia contra defeitos de fabricação."
          }
        ],
        "saleCfg": [
          {
            "price": "680,00",
            "installmentPrice": "227,25",
            "installmentMax": "4x"
          }
        ],
        "imgsProduct": [
          {
            "img": "/products/mp700-2.webp",
            "alt": "Mp 700 - img 1"
          },
          {
            "img": "/products/mp700-1.webp",
            "alt": "Mp 700 - img 2"
          },
          {
            "img": "/products/mp700-1.webp",
            "alt": "Mp 700 - img 1"
          },
          {
            "img": "/products/mp700-2.webp",
            "alt": "Mp 700 - img 2"
          }
        ],
        "oldPricePromotion": null
      },
      {
        "id": 4,
        "name": "Caixa Acústica MP35 - 50W",
        "img": "/products/mp35-3.webp",
        "img2": "/products/mp35-3.webp",
        "size": "h-24",
        "alt": "Imagem Produto",
        "description": "Compacta, leve e eficiente, a MP35 é ideal para ambientes que exigem qualidade sonora com discrição estética.",
        "magalu": "https://www.magazineluiza.com.br/caixa-acustica-mp-35-mpower-sound/p/fk7g31hk57/ea/cxsm/?partner_id=64068&utm_source=pdp&utm_medium=share",
        "amazon": "",
        "topicsDesc": [
          {
            "title": "Design compacto e resistente",
            "description": "Construída com plástico branco de alto impacto, a MP35 combina leveza e durabilidade em um único produto."
          },
          {
            "title": "Qualidade sonora em ambientes pequenos",
            "description": "Com 50W de potência e alto-falante de 4'', entrega som limpo para ambientes internos como lojas, consultórios e escritórios."
          }
        ],
        "infos": [
          {
            "name": "Caixa Acústica MP35",
            "description": "Caixa acústica de 50W injetada em plástico branco de alto impacto, ideal para instalações discretas e ambientes pequenos.",
            "specifications": [
              { "label": "Potência", "value": "50W" },
              { "label": "Material", "value": "Plástico branco de alto impacto" },
              { "label": "Transformador de linha", "value": "Opcional" },
              { "label": "Alto-falante", "value": "4'' @ 8 Ohms" },
              { "label": "Dimensões", "value": "195mm (A) x 135mm (L) x 95mm (P)" },
              { "label": "Peso", "value": "800g" }
            ],
            "warranty": "12 meses de garantia contra defeitos de fabricação."
          }
        ],
        "saleCfg": [
          {
            "price": "120,00",
            "installmentPrice": "49,90",
            "installmentMax": "4x"
          }
        ],
        "imgsProduct": [
          {
            "img": "/products/mp35-1.webp",
            "alt": "Mp 35 - img 1"
          },
          {
            "img": "/products/mp35-2.webp",
            "alt": "Mp 35 - img 2"
          },
          {
            "img": "/products/mp35-3.webp",
            "alt": "Mp 35 - img 3"
          },
          {
            "img": "/products/mp35-2.webp",
            "alt": "Mp 35 - img 1"
          }
        ],
        "oldPricePromotion": null
      },
      {
        "id": 5,
        "name": "Receiver Digital MP250 - 50W RMS",
        "img": "/products/mp250-1.webp",
        "img2": "/products/mp250-1.webp",
        "size": "h-24",
        "alt": "Imagem Produto",
        "manual": "manual-mp250.pdf",
        "description": "O Receiver MP250 oferece conectividade versátil, som de qualidade e funcionalidades ideais para sistemas de som ambiente.",
        "magalu": "https://www.magazineluiza.com.br/receiver-digital-mp-250-bluetooth-sd-card-usb-fm-mpower-sound/p/kc973a87ee/ea/easm/?partner_id=64068&utm_source=pdp&utm_medium=share",
        "amazon": "",
        "topicsDesc": [
          {
            "title": "Versatilidade de conexões",
            "description": "Entrada para microfone, auxiliar, USB, cartão SD e receptor FM digital em um único aparelho compacto."
          },
          {
            "title": "Controle total e visualização clara",
            "description": "Display com indicação completa do modo, faixa e formato da música reproduzida, além de controle de equalização e volume geral."
          }
        ],
        "infos": [
          {
            "name": "Receiver Digital MP250",
            "description": "Receiver compacto com 50W RMS, ideal para som ambiente com entradas variadas e facilidade de operação.",
            "specifications": [
              { "label": "Potência", "value": "50W RMS" },
              { "label": "Entradas", "value": "1 P10 (MIC), 1 RCA auxiliar, USB, Cartão SD" },
              { "label": "Reprodução", "value": "MP3 e WMA" },
              { "label": "Sintonizador", "value": "Receptor FM digital (88MHz a 108MHz)" },
              { "label": "Controles", "value": "Equalização (LOW, MID, HIGH) e volume geral (MASTER)" },
              { "label": "Display", "value": "Indicação de modo, frequência FM, faixa e formato" },
              { "label": "Saídas", "value": "Saída para fone (PHONES), OUT 'A' e OUT 'B' para 1 a 8 caixas (8 Ohms)" },
              { "label": "Alimentação", "value": "Chave seletora 110V / 220V" },
              { "label": "Dimensões", "value": "80mm (A) x 300mm (L) x 190mm (P)" },
              { "label": "Peso", "value": "2,7Kg" }
            ],
            "warranty": "12 meses de garantia contra defeitos de fabricação."
          }
        ],
        "saleCfg": [
          {
            "price": "600,00",
            "installmentPrice": "187,50",
            "installmentMax": "4x"
          }
        ],
        "imgsProduct": [
          {
            "img": "/products/mp250-1.webp",
            "alt": "Mp 250 - img 1"
          },
          {
            "img": "/products/mp250-2.webp",
            "alt": "Mp 250 - img 2"
          },
          {
            "img": "/products/mp250-1.webp",
            "alt": "Mp 250 - img 1"
          },
          {
            "img": "/products/mp250-2.webp",
            "alt": "Mp 250 - img 2"
          }
        ],
        "oldPricePromotion": null
      },
      {
        "id": 6,
        "name": "Arandela 50W",
        "img": "/products/arandela-1.webp",
        "img2": "/products/arandela-1.webp",
        "size": "h-20",
        "alt": "Imagem Produto",
        "description": "Arandela com alto falante de 6'' e potência de 50W, ideal para instalações de som ambiente com fácil montagem e acabamento discreto.",
        "magalu": "https://www.magazineluiza.com.br/arandela-para-som-ambiente-mpower-sound/p/kk5h55acfh/cj/lzar/?partner_id=64068&utm_source=pdp&utm_medium=share",
        "amazon": "",
        "topicsDesc": [
          {
            "title": "Construção de alta qualidade",
            "description": "Fabricada em plástico de alto impacto com tela de metal e pintura epóxi, garantindo durabilidade e estética profissional."
          },
          {
            "title": "Instalação prática",
            "description": "Com design pensado para facilitar a montagem, é ideal para ambientes comerciais e residenciais."
          }
        ],
        "infos": [
          {
            "name": "Arandela 50W",
            "description": "Caixa acústica embutida com 50W de potência, disponível com ou sem transformador de linha.",
            "specifications": [
              { "label": "Potência", "value": "50W" },
              { "label": "Material", "value": "Plástico de alto impacto" },
              { "label": "Transformador", "value": "Opcional com transformador de linha" },
              { "label": "Tela", "value": "Metal com pintura epóxi" },
              { "label": "Alto Falante", "value": "6'' @ 8 Ohms" },
              { "label": "Dimensões", "value": "65mm (P) x 235mm (D)" },
              { "label": "Peso com trafo", "value": "1,0Kg" },
              { "label": "Peso sem trafo", "value": "800g" },
              { "label": "Peso vazia", "value": "200g" }
            ],
            "warranty": "12 meses de garantia contra defeitos de fabricação."
          }
        ],
        "saleCfg": [
          {
            "price": "85,00",
            "installmentPrice": "37,45",
            "installmentMax": "4x"
          }
        ],
        "imgsProduct": [
          {
            "img": "/products/arandela-1.webp",
            "alt": "Arandela - img 1"
          },
          {
            "img": "/products/arandela-1.webp",
            "alt": "Arandela - img 1"
          },
          {
            "img": "/products/arandela-1.webp",
            "alt": "Arandela - img 1"
          },
          {
            "img": "/products/arandela-1.webp",
            "alt": "Arandela - img 1"
          }
        ],
        "oldPricePromotion": null
      },
      {
        "id": 7,
        "name": "Kit Teto Gesso Embutir + 04 Arandelas",
        "img": "/products/kit-1.webp",
        "img2": "/products/kit-1.webp",
        "size": "h-24",
        "alt": "Imagem Produto",
        "description": "O Receiver MP250 oferece conectividade versátil, som de qualidade e funcionalidades ideais para sistemas de som ambiente e Arandela com alto falante de 6'' e potência de 50W, ideal para instalações de som ambiente com fácil montagem e acabamento discreto.",
        "magalu": "https://www.magazineluiza.com.br/kit-som-ambiente-teto-gesso-embutir-04-arandelas-mpower-sound/p/ec597e6k9h/ea/cxsm/?partner_id=64068&utm_source=pdp&utm_medium=share",
        "amazon": "",
        "topicsDesc": [
          {
            "title": "Versatilidade de conexões",
            "description": "Entrada para microfone, auxiliar, USB, cartão SD e receptor FM digital em um único aparelho compacto."
          },
          {
            "title": "Controle total e visualização clara",
            "description": "Display com indicação completa do modo, faixa e formato da música reproduzida, além de controle de equalização e volume geral."
          }
        ],
        "infos": [
          {
            "name": "Receiver Digital MP250 + 4 Arandelas",
            "description": "Receiver compacto com 50W RMS, ideal para som ambiente com entradas variadas e facilidade de operação.",
            "specifications": [
              { "label": "Potência", "value": "50W RMS" },
              { "label": "Entradas", "value": "1 P10 (MIC), 1 RCA auxiliar, USB, Cartão SD" },
              { "label": "Reprodução", "value": "MP3 e WMA" },
              { "label": "Sintonizador", "value": "Receptor FM digital (88MHz a 108MHz)" },
              { "label": "Controles", "value": "Equalização (LOW, MID, HIGH) e volume geral (MASTER)" },
              { "label": "Display", "value": "Indicação de modo, frequência FM, faixa e formato" },
              { "label": "Saídas", "value": "Saída para fone (PHONES), OUT 'A' e OUT 'B' para 1 a 8 caixas (8 Ohms)" },
              { "label": "Alimentação", "value": "Chave seletora 110V / 220V" },
              { "label": "Dimensões", "value": "80mm (A) x 300mm (L) x 190mm (P)" },
              { "label": "Peso", "value": "2,7Kg" }
            ],
            "warranty": "12 meses de garantia contra defeitos de fabricação."
          }
        ],
        "saleCfg": [
          {
            "price": "960,00",
            "installmentPrice": "302,50",
            "installmentMax": "4x"
          }
        ],
        "imgsProduct": [
          {
            "img": "/products/kit-1.webp",
            "alt": "Mp 250 - img 1"
          },
          {
            "img": "/products/mp250-1.webp",
            "alt": "Mp 250 - img 1"
          },
          {
            "img": "/products/arandela-1.webp",
            "alt": "Arandela - img 1"
          },
          {
            "img": "/products/arandela-1.webp",
            "alt": "Arandela - img 2"
          }
        ],
        "oldPricePromotion": null
      },
      {
        "id": 8,
        "name": "Kit Mp250 Amplificador + 4 Caixas",
        "img": "/products/kit-2.webp",
        "img2": "/products/kit-2.webp",
        "size": "h-24",
        "alt": "Imagem Produto",
        "description": "O Receiver MP250 oferece conectividade versátil, som de qualidade e funcionalidades ideais para sistemas de som ambiente.",
        "magalu": "https://www.magazineluiza.com.br/kit-som-ambiente-mp-250-4-caixas-acusticas-mpower-sound/p/cej8a11hch/ea/cxac/?partner_id=64068&utm_source=pdp&utm_medium=share",
        "amazon": "",
        "topicsDesc": [
          {
            "title": "Construção de alta qualidade",
            "description": "Fabricada em plástico de alto impacto com tela de metal e pintura epóxi, garantindo durabilidade e estética profissional."
          },
          {
            "title": "Instalação prática",
            "description": "Com design pensado para facilitar a montagem, é ideal para ambientes comerciais e residenciais."
          }
        ],
        "infos": [
          {
            "name": "Receiver Digital MP250",
            "description": "Receiver compacto com 50W RMS, ideal para som ambiente com entradas variadas e facilidade de operação.",
            "specifications": [
              { "label": "Potência", "value": "50W RMS" },
              { "label": "Entradas", "value": "1 P10 (MIC), 1 RCA auxiliar, USB, Cartão SD" },
              { "label": "Reprodução", "value": "MP3 e WMA" },
              { "label": "Sintonizador", "value": "Receptor FM digital (88MHz a 108MHz)" },
              { "label": "Controles", "value": "Equalização (LOW, MID, HIGH) e volume geral (MASTER)" },
              { "label": "Display", "value": "Indicação de modo, frequência FM, faixa e formato" },
              { "label": "Saídas", "value": "Saída para fone (PHONES), OUT 'A' e OUT 'B' para 1 a 8 caixas (8 Ohms)" },
              { "label": "Alimentação", "value": "Chave seletora 110V / 220V" },
              { "label": "Dimensões", "value": "80mm (A) x 300mm (L) x 190mm (P)" },
              { "label": "Peso", "value": "2,7Kg" }
            ],
            "warranty": "12 meses de garantia contra defeitos de fabricação."
          }
        ],
        "saleCfg": [
          {
            "price": "1.200,00",
            "installmentPrice": "349,98",
            "installmentMax": "4x"
          }
        ],
        "imgsProduct": [
          {
            "img": "/products/kit-2.webp",
            "alt": "Kit Som Ambiente Mp250 Amplificador + 4 Caixas"
          },
          {
            "img": "/products/mp250-1.webp",
            "alt": "Mp250 - img 1"
          },
          {
            "img": "/products/mp250-2.webp",
            "alt": "Mp250 - img 2"
          },
          {
            "img": "/products/kit-2.webp",
            "alt": "Kit Som Ambiente Mp250 Amplificador + 4 Caixas"
          },
        ],
        "oldPricePromotion": null
      },
      {
        "id": 9,
        "name": "Caixa Amplificadora MP800 USB/SD",
        "img": "/products/mp-800.webp",
        "img2": "/products/mp800-2.webp",
        "size": "h-20",
        "alt": "Imagem Produto",
        "manual": "manual-mp800.pdf",
        "description": "Caixa amplificadora de 100W RMS com entradas diversas, controles individuais e conexão Bluetooth. Ideal para eventos, igrejas, escolas e uso profissional.",
        "magalu": "https://www.magazineluiza.com.br/caixa-amplificadora-multiuso-mp-800-bluetooth-mpower-sound/p/cg895e99e9/ea/easm/?partner_id=64068&utm_source=pdp&utm_medium=share",
        "amazon": "",
        "topicsDesc": [
          {
            "title": "Versatilidade de conexões",
            "description": "Com entradas para microfone, guitarra, auxiliar, USB, cartão SD, Bluetooth e rádio FM, a MP800 atende diversas necessidades de áudio com praticidade."
          },
          {
            "title": "Controles profissionais",
            "description": "Permite ajuste de som com controles de equalização LOW, MID, HIGH, controle de volume geral (MASTER) e volumes individuais para cada entrada."
          }
        ],
        "infos": [
          {
            "name": "Caixa Amplificadora MP800",
            "description": "Caixa Amplificadora de 100W RMS com entradas múltiplas e controle fino de som. Perfeita para igrejas, eventos, ambientes escolares ou profissionais.",
            "specifications": [
              { "label": "Potência", "value": "100W RMS" },
              { "label": "Alimentação", "value": "Bivolt Automático" },
              { "label": "Entradas", "value": "2 P10 microfone (LOW - HIGH), 1 P10 guitarra (LOW - HIGH), 1 auxiliar P10, 1 RCA, USB" },
              { "label": "Bluetooth", "value": "Sim" },
              { "label": "USB", "value": "Pendrive / MP3 Player (formatos MP3 ou WMA)" },
              { "label": "Cartão SD", "value": "Formatos MP3 ou WMA" },
              { "label": "FM", "value": "Receptor digital de 88MHz a 108MHz" },
              { "label": "Equalização", "value": "LOW, MID, HIGH" },
              { "label": "Volume", "value": "Controles individuais + Controle de volume geral (MASTER)" },
              { "label": "Saídas", "value": "Fone de ouvido (PHONES), linha para mesa de som (LINE OUT)" },
              { "label": "Tweeter", "value": "1 Piezoelétrico com chave liga/desliga" },
              { "label": "Alto-falante", "value": "1 de 12''" },
              { "label": "Dimensões", "value": "700mm (A) x 500mm (L) x 310mm (P)" },
              { "label": "Peso", "value": "16Kg" }
            ],
            "warranty": "12 meses de garantia contra defeitos de fabricação."
          }
        ],
        "saleCfg": [
          {
            "price": "850,00",
            "installmentPrice": "225,00",
            "installmentMax": "4x"
          }
        ],
        "imgsProduct": [
          {
            "img": "/products/mp800-2.webp",
            "alt": "Mp 800 - img 1"
          },
          {
            "img": "/products/mp-800.webp",
            "alt": "Mp 800 - img 2"
          },
          {
            "img": "/products/mp-800.webp",
            "alt": "Mp 800 - img 3"
          },
          {
            "img": "/products/mp800-2.webp",
            "alt": "Mp 800 - img 4"
          }
        ],
        "oldPricePromotion": null
      },
      {
        "id": 10,
        "name": "Amplificador MP300 USB/SD",
        "img": "/products/mp300-1.webp",
        "img2": "/products/mp300-1.webp",
        "size": "h-24",
        "alt": "Imagem Produto",
        "manual": "manual-mp300.pdf",
        "description": "Amplificador de 300W RMS com múltiplas entradas e saídas, ideal para ambientes que exigem potência e qualidade sonora.",
        "magalu": "https://www.magazineluiza.com.br/amplificador-mp-300-bluetooth-sd-card-usb-fm-mpower-sound/p/cbb1ed8k32/ea/easm/?partner_id=64068&utm_source=pdp&utm_medium=share",
        "amazon": "",
        "topicsDesc": [
          {
            "title": "Potência e conectividade",
            "description": "Com 300W RMS e entradas para microfone, USB, SD, RCA e XLR balanceado, o MP300 oferece alta performance e versatilidade para eventos e instalações."
          },
          {
            "title": "Controles avançados",
            "description": "Controle de equalização completo (LOW, MID, HIGH), controle de volume geral (MASTER) e display com informações de faixa e modo de reprodução."
          }
        ],
        "infos": [
          {
            "name": "Amplificador MP300",
            "description": "Amplificador de 300W RMS com entradas XLR, RCA, USB, SD e FM digital. Ideal para sonorizações em ambientes profissionais e institucionais.",
            "specifications": [
              { "label": "Potência", "value": "300W RMS" },
              { "label": "Entradas", "value": "2 XLR balanceadas, 1 P10 (MIC), 1 RCA auxiliar, USB, Cartão SD" },
              { "label": "Reprodução", "value": "Formatos MP3 / WMA" },
              { "label": "FM", "value": "Receptor digital com display de frequência" },
              { "label": "Display", "value": "Indica modo, faixa e formato da música" },
              { "label": "Equalização", "value": "LOW, MID, HIGH" },
              { "label": "Volume", "value": "Controle de volume geral (MASTER)" },
              { "label": "Alimentação", "value": "Chave seletora 110V / 220V" },
              { "label": "Saídas", "value": "OUT A e OUT B (2 canais de 150W)" },
              { "label": "Dimensões", "value": "88mm (A) x 483mm (L) x 314mm (P)" },
              { "label": "Peso", "value": "2,7Kg" }
            ],
            "warranty": "12 meses de garantia contra defeitos de fabricação."
          }
        ],
        "saleCfg": [
          {
            "price": "2.250,00",
            "installmentPrice": "596,25",
            "installmentMax": "4x"
          }
        ],
        "imgsProduct": [
          {
            "img": "/products/mp300-1.webp",
            "alt": "Mp 300 - img 1"
          },
          {
            "img": "/products/mp300-1.webp",
            "alt": "Mp 300 - img 2"
          },
          {
            "img": "/products/mp300-1.webp",
            "alt": "Mp 300 - img 3"
          },
          {
            "img": "/products/mp300-1.webp",
            "alt": "Mp 300 - img 4"
          }
        ],
        "oldPricePromotion": null
      }


    ],
  }),
  actions: {

  },
});

export default useProductStore;
