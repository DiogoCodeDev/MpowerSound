import { defineStore } from 'pinia';

// import { productService } from '@/services/product';

const useProductStore = defineStore('product', {
  state: () => ({
    productSection: [
      {
        "name": "Produto X - Linha MP30EX",
        "location": "Campinas - SP",
        "saleHomeSection": true,
        "salePage": false,
        "products": [
          {
            "id": 1,
            "name": "Caixa Produto V1.0 - 30 Versão 40t - 1080p.",
            "img": "@/assets/img/products/product1.webp",
            "size": "h-20",
            "alt": "",
            "description": "Smartphone com tela AMOLED de 6.5 polegadas, câmera tripla e bateria de longa duração.",
            "saleCfg": [
              {
                "price": "299,90",
                "installmentPrice": "30,00",
                "installmentMax": "12x",
              }
            ],
            "promotion": null,
          },
          {
            "id": 2,
            "name": "Caixa Produto V1.0 - 30 Versão 40t - 1080p.",
            "img": "@/assets/img/products/product2.webp",
            "size": "h-14",
            "alt": "",
            "description": "Notebook leve e potente com processador Intel i7, 16GB RAM e SSD de 512GB.",
            "saleCfg": [
              {
                "price": "299,90",
                "installmentPrice": "30,00",
                "installmentMax": "12x",
              }
            ],
            "promotion": null,
          },
          {
            "id": 3,
            "name": "Caixa Produto V1.0 - 30 Versão 40t - 1080p.",
            "img": "@/assets/img/products/product3.webp",
            "size": "h-20",
            "alt": "",
            "description": "Fone de ouvido sem fio com cancelamento de ruído e bateria de 20 horas.",
            "saleCfg": [
              {
                "price": "299,90",
                "installmentPrice": "30,00",
                "installmentMax": "12x",
              }
            ],
            "promotion": [
              {
                "price": "1.199.90",
                "installmentPrice": "20,00",
                "installmentMax": "12x",
              }
            ],
          },
          {
            "id": 4,
            "name": "Smartwatch Fit",
            "img": "@/assets/img/products/product4.webp",
            "size": "h-16",
            "alt": "",
            "description": "Relógio inteligente com monitoramento de saúde, GPS e resistência à água.",
            "saleCfg": [
              {
                "price": "299,90",
                "installmentPrice": "30,00",
                "installmentMax": "12x",
              }
            ],
            "promotion": [
              {
                "price": "1.199.90",
                "installmentPrice": "20,00",
                "installmentMax": "12x",
              }
            ],
          },
          {
            "id": 5,
            "name": "Teclado Legal",
            "img": "@/assets/img/products/product5.webp",
            "size": "h-16",
            "alt": "",
            "description": "Mouse ergonômico com sensor de alta precisão e iluminação RGB personalizável.",
            "saleCfg": [
              {
                "price": "299,90",
                "installmentPrice": "30,00",
                "installmentMax": "12x",
              }
            ],
            "promotion": [
              {
                "price": "1.199.90",
                "installmentPrice": "20,00",
                "installmentMax": "12x",
              }
            ],
          },
          {
            "id": 6,
            "name": "Mouse Gamer RGB",
            "img": "@/assets/img/products/product2.webp",
            "size": "h-14",
            "alt": "",
            "description": "Mouse ergonômico com sensor de alta precisão e iluminação RGB personalizável.",
            "saleCfg": [
              {
                "price": "299,90",
                "installmentPrice": "30,00",
                "installmentMax": "12x",
              }
            ],
            "promotion": [
              {
                "price": "1.199.90",
                "installmentPrice": "20,00",
                "installmentMax": "12x",
              }
            ],
          },
          {
            "id": 7,
            "name": "Teclado Legal",
            "img": "@/assets/img/products/product5.webp",
            "size": "h-18",
            "alt": "",
            "description": "Mouse ergonômico com sensor de alta precisão e iluminação RGB personalizável.",
            "saleCfg": [
              {
                "price": "299,90",
                "installmentPrice": "30,00",
                "installmentMax": "12x",
              }
            ],
            "promotion": [
              {
                "price": "1.199.90",
                "installmentPrice": "20,00",
                "installmentMax": "12x",
              }
            ],
          },
          {
            "id": 8,
            "name": "Mouse Gamer RGB",
            "img": "@/assets/img/products/product2.webp",
            "size": "h-14",
            "alt": "",
            "description": "Mouse ergonômico com sensor de alta precisão e iluminação RGB personalizável.",
            "saleCfg": [
              {
                "price": "299,90",
                "installmentPrice": "30,00",
                "installmentMax": "12x",
              }
            ],
            "promotion": [
              {
                "price": "1.199.90",
                "installmentPrice": "20,00",
                "installmentMax": "12x",
              }
            ],
          },
        ]
      },
    ],

  }),
  actions: {

  },
});

export default useProductStore;
