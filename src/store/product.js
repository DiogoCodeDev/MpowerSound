import { defineStore } from 'pinia';

// import { productService } from '@/services/product';

const useProductStore = defineStore('product', {
  state: () => ({
    productSection: [
      {
        "products": [
          {
            "id": 1,
            "name": "Caixa Produto V1.0 - 30 Versão 40t - 1080p.",
            "img": "/products/product1.webp",
            "size": "h-20",
            "alt": "Desc Produto X",
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
            "img": "/products/product2.webp",
            "size": "h-14",
            "alt": "Desc Produto X",
            "description": "Notebook leve e potente com processador Intel i7, 16GB RAM e SSD de 512GB.",
            "saleCfg": [
              {
                "price": "1.299,90",
                "installmentPrice": "30,00",
                "installmentMax": "12x",
              }
            ],
            "promotion": null,
          },
          {
            "id": 3,
            "name": "Caixa Produto V1.0 - 30 Versão 40t - 1080p.",
            "img": "/products/product3.webp",
            "size": "h-20",
            "alt": "Desc Produto X",
            "description": "Fone de ouvido sem fio com cancelamento de ruído e bateria de 20 horas.",
            "saleCfg": [
              {
                "price": "899,90",
                "installmentPrice": "30,00",
                "installmentMax": "12x",
              }
            ],
            "promotion": [
              {
                "price": "1.199.90",
                "discountPercentage": "15%",
                "installmentPrice": "20,00",
                "installmentMax": "12x",
              }
            ],
          },
          {
            "id": 4,
            "name": "Caixa Produto V1.0 - 30",
            "img": "/products/product4.webp",
            "size": "h-16",
            "alt": "Desc Produto X",
            "description": "Relógio inteligente com monitoramento de saúde, GPS e resistência à água.",
            "saleCfg": [
              {
                "price": "1.299,90",
                "installmentPrice": "30,00",
                "installmentMax": "12x",
              }
            ],
            "promotion": null,
          },
          {
            "id": 5,
            "name": "Caixa Produto V1.0 - 30",
            "img": "/products/product5.webp",
            "size": "h-16",
            "alt": "Desc Produto X",
            "description": "Mouse ergonômico com sensor de alta prDesc Produto Xecisão e iluminação RGB personalizável.",
            "saleCfg": [
              {
                "price": "199,90",
                "installmentPrice": "30,00",
                "installmentMax": "12x",
              }
            ],
            "promotion": [
              {
                "price": "299.90",
                "discountPercentage": "30%",
                "installmentPrice": "20,00",
                "installmentMax": "12x",
              }
            ],
          },
          {
            "id": 6,
            "name": "Caixa Produto V1.0 - 30",
            "img": "/products/product2.webp",
            "size": "h-14",
            "alt": "Desc Produto X",
            "description": "Mouse ergonômico com sensor de alta prDesc Produto Xecisão e iluminação RGB personalizável.",
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
                "discountPercentage": "50%",
                "installmentPrice": "20,00",
                "installmentMax": "12x",
              }
            ],
          },
          {
            "id": 7,
            "name": "Caixa Produto V1.0 - 30",
            "img": "/products/product5.webp",
            "size": "h-18",
            "alt": "Desc Produto X",
            "description": "Mouse ergonômico com sensor de alta prDesc Produto Xecisão e iluminação RGB personalizável.",
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
            "id": 8,
            "name": "Caixa Produto V1.0 - 30",
            "img": "/products/product2.webp",
            "size": "h-14",
            "alt": "Desc Produto X",
            "description": "Mouse ergonômico com sensor de alta prDesc Produto Xecisão e iluminação RGB personalizável.",
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
                "discountPercentage": "25%",
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
