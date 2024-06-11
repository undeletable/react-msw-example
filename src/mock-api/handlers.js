import { http, HttpResponse } from 'msw';
import products from './data/products.json';

const getJSONResponse = data =>
    HttpResponse.json({
      data,
    });

export const handlers = [
  http.get(
    '/api/products',
    () => getJSONResponse(products)
  ),
  http.get(
    '/api/products/:ids',
    ({ params }) => {
        const { ids } = params;
        const idsArray = ids.split(',');
        const filteredProducts = products.filter(({ id }) => idsArray.includes(id.toString()));
        return getJSONResponse(filteredProducts);
    }
  )
];
