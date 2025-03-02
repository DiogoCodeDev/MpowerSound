import { defineStore } from 'pinia';

import { productService } from '@/services/product';

const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    loadingProducts: true,
    selectedProduct: null,
    productToBuy: null,
    productsInCart: []
  }),
  actions: {
    async getProducts() {
      this.loadingProducts = true;

      await productService
        .getProducts()
        .then((resp) => (this.products = resp))
        .finally(() => (this.loadingProducts = false));
    },
    resetProductToBuy() {
      this.productToBuy = null
    },
  },
});

export default useProductStore;
