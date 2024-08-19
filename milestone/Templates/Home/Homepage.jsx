import React from "react";
import Product from "../../src/components/other components/Product";

const Homepage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center font-bold mb-4">
        Welcome to our store!
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <Product
          name="Product 1"
          price={19.99}
          description="This is a product description."
          img="https://picsum.photos/200/300"
        />
        <Product
          name="Product 1"
          price={19.99}
          description="This is a product description."
          img="https://picsum.photos/200/300"
        />
        <Product
          name="Product 1"
          price={19.99}
          description="This is a product description."
          img="https://picsum.photos/200/300"
        />
        <Product
          name="Product 1"
          price={19.99}
          description="This is a product description."
          img="https://picsum.photos/200/300"
        />
        <Product
          name="Product 1"
          price={19.99}
          description="This is a product description."
          img="https://picsum.photos/200/300"
        />
        <Product
          name="Product 1"
          price={19.99}
          description="This is a product description."
          img="https://picsum.photos/200/300"
        />
        <Product
          name="Product 1"
          price={19.99}
          description="This is a product description."
          img="https://picsum.photos/200/300"
        />
        <Product
          name="Product 1"
          price={19.99}
          description="This is a product description."
          img="https://picsum.photos/200/300"
        />
      </div>
    </div>
  );
};

export default Homepage;
