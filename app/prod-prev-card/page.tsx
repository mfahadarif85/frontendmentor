import Image from "next/image";
import React from "react";
import product from "/public/images/prod-prev-card/image-product-desktop.jpg";

const Home = () => {
  return (
    <div className='flex h-screen w-full bg-yellow-100'>
      <div className='m-auto flex bg-white'>
        <div>
          <Image src={product} alt='product' width={200} height={200} />
        </div>
        <div>
          <h3>Preview</h3>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <p>
            $149.99 <span> $169.99</span>
          </p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
