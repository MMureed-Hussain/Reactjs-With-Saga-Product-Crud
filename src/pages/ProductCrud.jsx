import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { readProductStart } from '../model/actions/productActions';
import { readStart } from '../model/reducers/productReducer';

const ProductCrud = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  // State for the product form
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

//   useEffect(()=>{
// console.log("hi dispatch")
// const res = dispatch(readProductStart());
// console.log("hi dispatch res" , res)

//   },[dispatch])

  const handleCreateProduct = () => {
    // Handle create product logic
    // dispatch(createProductStart(productName, productPrice));
  };

  const handleUpdateProduct = () => {
    // Handle update product logic
    // dispatch(updateProductStart(productId, productName, productPrice));
  };

  const handleDeleteProduct = () => {
    // Handle delete product logic
    // dispatch(deleteProductStart(productId));
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Product CRUD Component</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <div className="mb-4">
            <h2>Product List</h2>
            {products.length === 0 ? (
              <p>No products found.</p>
            ) : (
              <ul className="list-group">
                {products.map((product) => (
                  <li className="list-group-item" key={product.id}>
                    {product.name} - {product.price}
                    <button
                      className="btn btn-sm btn-danger ms-2"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <h2>Create / Update Product</h2>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productPrice" className="form-label">
                Product Price
              </label>
              <input
                type="text"
                className="form-control"
                id="productPrice"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </div>
            <button className="btn btn-primary me-2" onClick={handleCreateProduct}>
              Create
            </button>
            <button className="btn btn-primary me-2" onClick={() => handleUpdateProduct()}>
              Update
            </button>
            <button className="btn btn-danger" onClick={() => handleDeleteProduct()}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCrud;
