const REQUESTS = {
    products: '/api/products'
};

const performRequest = (requestName, subpath) => {
    const apiEndpoint = REQUESTS[requestName];
    const url = subpath ? `${apiEndpoint}/${subpath}` : apiEndpoint;
    return fetch(url).then(response =>response.json());
};

// /api/products
export const getAllProducts = () => performRequest('products');

// e.g., /api/products/1
export const getSingleProduct = productId => {
    return () => performRequest('products', productId);
};

// e.g., /api/products/1,2,3
export const getMultipleProducts = (...productIds) => {
    return () => performRequest('products', productIds.join(','));
};
