import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";

function ItemCards() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data); // Uncomment this line to log fetched data to console for debugging purposes.
    setProducts(data);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="item-cards-container">
        {products.map((product) => (
          <Card style={{ width: "18rem" }} key={product.id}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title >
                {product.title ? product.title.slice(0, 39) : ""}
              </Card.Title>
              <Card.Text>
                {product.description ? product.description.slice(0, 90) : ""}
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default ItemCards;
