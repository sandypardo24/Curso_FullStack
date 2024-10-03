import React from "react";
import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";

const ProductCard = ({ productInfo }) => {
  const { nombre, precio, sku, imagen, stock } = productInfo;

  const disponibilidad = stock === 0 ? "Sin stock" : stock <= 5 ? "Poco stock" : "En stock";
  const stockStatus = stock > 0 ? "Disponible" : "No disponible";

  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={imagen} alt={nombre} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          Precio: ${precio} <br />
          Disponibilidad: {disponibilidad}
        </Card.Text>
        <Card.Text>
          Estado de Stock: <strong>{stockStatus}</strong>{" "}
        </Card.Text>
        <Card.Text style={{ color: "red", fontWeight: "bold" }}>
          SKU: {sku ? sku : "No disponible"}
        </Card.Text>
        <hr />
        <a className="btn btn-primary" href={`/producto/${productInfo.id}`}>
          Ver más
        </a>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
};

ProductCard.propTypes = {
  productInfo: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    imagen: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired, // Asegúrate de que stock sea pasado y requerido
  }).isRequired,
};

export default ProductCard;
