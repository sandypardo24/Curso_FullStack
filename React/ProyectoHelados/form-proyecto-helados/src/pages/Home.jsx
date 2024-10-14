// Home.jsx
import { Container, Row, Col } from "react-bootstrap";
import { productos } from "../assets/productos";
import ProductCard from "../components/ProductCard";

export const Home = () => {
  const mapeoProductos = productos.map((producto) => {
    return (
      <Col key={producto.id} sm={12} md={6} lg={4} xl={3}>
        <ProductCard
          productInfo={{
            nombre: producto.nombre,
            precio: producto.precio,
            sku: producto.sku,
            stock: producto.stock,
            imagen: "https://via.placeholder.com/150",
          }}
        />
      </Col>
    );
  });

  return (
    <Container>
      <Row className="g-4">{mapeoProductos}</Row>
    </Container>
  );
};
