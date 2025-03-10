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
            "name": "Smartphone X",
            "img": "",
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
            "name": "Notebook Ultra",
            "saleCfg": [
              {
                "price": "299,90",
                "installmentPrice": "30,00",
                "installmentMax": "12x",
                "installmentMode": "12x",
              }
            ],
            "img": "",
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
            "name": "Fone de Ouvido Bluetooth",
            "img": "",
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
                "price": 199.90,
                "installmentPrice": "20,00",
                "installmentMax": "12x",
              }
            ],
          },
          {
            "id": 4,
            "name": "Smartwatch Fit",
            "img": "",
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
                "price": 199.90,
                "installmentPrice": "20,00",
                "installmentMax": "12x",
              }
            ],
          },
          {
            "id": 5,
            "name": "Teclado Legal",
            "img": "",
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
                "price": 199.90,
                "installmentPrice": "20,00",
                "installmentMax": "12x",
              }
            ],
          },
          {
            "id": 6,
            "name": "Mouse Gamer RGB",
            "img": "",
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
                "price": 199.90,
                "installmentPrice": "20,00",
                "installmentMax": "12x",
              }
            ],
          },
          {
            "id": 7,
            "name": "Produto 7",
            "img": "",
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
                "price": 199.90,
                "installmentPrice": "20,00",
                "installmentMax": "12x",
              }
            ],
          },
          {
            "id": 8,
            "name": "Produto 8",
            "img": "",
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
                "price": 199.90,
                "installmentPrice": "20,00",
                "installmentMax": "12x",
              }
            ],
          }
        ]
      },
    ],

  }),
  actions: {

  },
});

export default useProductStore;
