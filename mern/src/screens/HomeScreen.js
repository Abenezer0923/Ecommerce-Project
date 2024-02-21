import { Row, Col } from "react-bootstrap";
import Product from "../components/Products";
import Loader from "../components/Loader";
import { useGetProductsQuery } from "../slices/productApiSlice";
import Message from "../components/Message";

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  console.log('here is data', products);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((pro) => (
              <Col key={pro._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={pro} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
