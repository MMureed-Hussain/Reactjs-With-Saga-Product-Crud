
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../model/actions/getProductActions";
import { deleteProduct } from "../model/actions/deleteProductActions";
import { updateProduct } from "../model/actions/updateProductActions";
import { createProduct } from "../model/actions/createProducActions";

const Products = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
  });
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);
  //form start json server
  //npx json-server --watch db.json --port 8000
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const { name, price } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUpdateMode) {
      await dispatch(
        updateProduct({ id: selectedProductId, formData, navigate })
      );
      setIsUpdateMode(false);
      setSelectedProductId(null);
    } else {
      await dispatch(createProduct({ formData, navigate }));
    }
    setFormData({
      name: "",
      price: "",
    });
    dispatch(fetchProducts()); // Fetch products after creating or updating
  };

  // const handleUpdateProduct = async (productId) => {
  //   const selectedProduct = products.find(
  //     (product) => product.id === productId
  //   );
  //   if (selectedProduct) {
  //     setFormData({
  //       name: selectedProduct.name,
  //       price: selectedProduct.price,
  //     });
  //     setIsUpdateMode(true);
  //     setSelectedProductId(productId);
  //   }
  //   // window.location.reload();
  // };

  const handleUpdateProduct = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
    if (selectedProduct) {
      setFormData({
        name: selectedProduct.name,
        price: selectedProduct.price,
      });
      setIsUpdateMode(true);
      setSelectedProductId(productId);
      handleShow(); // Open the modal
    } else {
      setIsUpdateMode(false);
      setSelectedProductId(null);
      setFormData({
        name: "",
        price: "",
      });
      handleShow(); // Open the modal with empty form
    }
  };

  const handleDeleteProduct = async (productId) => {
    await dispatch(deleteProduct(productId));
    dispatch(fetchProducts());
  };

  const handleDetailsProduct = async (productId) => {
    // await dispatch(FetchProductDetailsRequest(productId));
    navigate(`/products/${productId}`);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  // Filter the products based on the search term
  const filteredProducts = products.filter((product) => {
    const productName = product.name && product.name.toLowerCase();
    return productName && productName.includes(searchTerm.toLowerCase());
  });
  
  // let table = new DataTable('#products-table');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 col-lg-9">
            <h3 className="text-center">Product</h3>
            <input
              type="text"
              className="mt-2 mb-2 form-control"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product?.id}>
                      <td>{product?.name}</td>
                      <td>{product?.price}</td>
                      <td>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                          <button
                            className="btn btn-primary me-md-1 mb-2"
                            onClick={() => handleUpdateProduct(product?.id)}
                          >
                            Update
                          </button>
                          <button
                            className="btn btn-danger me-md-1 mb-2"
                            onClick={() => handleDeleteProduct(product?.id)}
                          >
                            Delete
                          </button>
                          <button
                            className="btn btn-info mb-2"
                            onClick={() => handleDetailsProduct(product?.id)}
                          >
                            Details
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-12 col-lg-3 mb-4 mb-lg-0">
            <Button
              variant="success"
              onClick={handleShow}
              className="float-sm-end mt-5"
            >
              Add Product
            </Button>
            <Modal size="lg" show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  {isUpdateMode ? "Update" : "Create"} Product Form
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form className="mt-5" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fs-5">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={isUpdateMode ? formData.name : name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="price" className="form-label fs-5">
                      Price
                    </label>
                    <input
                      type="number"
                      id="number"
                      name="price"
                      value={isUpdateMode ? formData.price : price}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter your price"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success"
                    disabled={loading}
                  >
                    {loading
                      ? isUpdateMode
                        ? "Updating..."
                        : "Creating..."
                      : isUpdateMode
                      ? "Update"
                      : "Create"}
                  </button>
                </form>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

          {/* <div
            className="col-md-4"
            // style={{backgroundImage:"URL(/images/slider1.jpg)", width:"300px"}}
          >
            <h3 className="text-center">Create Product Form</h3>
            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fs-5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={isUpdateMode ? formData.name : name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fs-5">
                  Price
                </label>
                <input
                  type="number"
                  id="number"
                  name="price"
                  value={isUpdateMode ? formData.price : price}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your price"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-success "
                disabled={loading}
              >
                {loading ? "Creating..." : "Create"}
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Products;
