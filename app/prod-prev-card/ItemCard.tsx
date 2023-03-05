import Image from "next/image";

type Product = {
  category: string;
  name: string;
  description: string;
  price: number;
  uvp: number;
  imageDesktop: string;
  imageMobile: string;
};

const ItemCard = ({
  category,
  name,
  description,
  price,
  imageDesktop,
  imageMobile,
  uvp,
}: Product) => {
  return (
    <>
      <div className='flex w-1/2 flex-col overflow-hidden rounded-lg bg-white shadow-lg md:flex-row'>
        <div className='w-1/2'>
          <picture>
            <img src={imageDesktop} alt='product' />
            <img src={imageMobile} alt='product' className='hidden' />
          </picture>
        </div>
        <div className='flex flex-col space-y-6 p-6 md:w-1/2 md:p-8 md:pt-12'>
          <h3 className='font-montserrat text-sm uppercase tracking-widest text-gray-400'>
            {category}
          </h3>
          <h1 className='font-fraunces text-4xl'>{name}</h1>
          <p className='font-montserrat text-lg text-gray-500'>{description}</p>
          <div className='flex flex-row items-center space-x-10'>
            <p className='font-fraunces text-4xl text-green-600'>
              {`$${price}`}{" "}
            </p>
            <p className='text-black line-through'> {`$${uvp}`}</p>
          </div>
          <button className='flex w-full items-center justify-center space-x-4 rounded-md bg-green-600 py-4 px-8 hover:bg-green-900'>
            <Image alt='cart' src='/icon-cart.svg' width={16} height={16} />
            <span className='font-montserrat text-lg font-bold text-white'>
              Add to Cart
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
