import Image from "next/image";
import deskProductImg from "/public/images/prod-prev-card/image-product-desktop.jpg";
import mobProdImg from "/public/images/prod-prev-card/image-product-mobile.jpg";

const Home = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-[#f2ebe3]'>
      <div className='flex w-1/2 rounded-lg bg-white shadow-lg'>
        <div className='basis-1/2'>
          <Image src={deskProductImg} alt='product' />
        </div>
        <div className='ml-4 basis-1/2'>
          <h3 className='mt-10 font-extralight'>Preview</h3>
          <h1 className='mt-6 text-5xl font-extrabold'>
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className='mt-6'>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <p className='mt-6 text-4xl font-extrabold'>
            $149.99{" "}
            <span className='text-lg font-normal line-through'> $169.99</span>
          </p>
          <button className='mt-4 w-full rounded-md border-2 bg-green-800 p-2 text-white'>
            🛒Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
