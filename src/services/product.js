import axios from 'axios';

const baseUrl = `${lassApi}/${baseEnv}`;

class Product {

    async getProducts() {
        const url = `${baseUrl}/marketplace/products`;

        // const config = { headers: { Authorization: `Bearer ${token}` } };

        return await axios.get(url)
            .then(
                (resp) => {
                    if (resp.data.header.codigo === 1) {
                        return resp.data.data;
                    } else {
                        return resp.data.header.msg;
                    }
                })
            .catch(err => err);
    }

}

export const productService = new Product();
