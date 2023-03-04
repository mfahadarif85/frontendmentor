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
        <div className='mx-6 basis-1/2'>
          <h3 className='mt-8 text-xl uppercase tracking-[5px] text-gray-400'>
            Perfume
          </h3>
          <h1 className='mt-6 font-fraunces text-5xl'>
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className='mt-6 font-montserrat'>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className='flex items-end'>
            <p className='mt-6 text-4xl font-extrabold text-green-600'>
              $149.99{" "}
            </p>
            <p className='ml-6 text-lg font-normal text-black line-through'>
              {" "}
              $169.99
            </p>
          </div>
          <button className='mt-8 w-full rounded-lg border-2 bg-green-600 px-10 py-4 font-bold text-white hover:bg-green-900'>
            🛒Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
