import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

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
    <div className='bg-cream mx-auto h-screen max-w-sm p-5 md:max-w-2xl'>
      <div className='grid rounded-lg bg-white md:grid-cols-2'>
        <picture>
          <img
            className='hidden rounded-l-lg object-cover md:block'
            src={imageDesktop}
            alt={name}
          />
          <img
            className='rounded-t-lg object-cover md:hidden'
            src={imageMobile}
            alt={name}
          />
        </picture>
        <div className='space-y-5 p-10'>
          <h2 className='text-xs	uppercase tracking-[5px] text-gray-600'>
            {category}
          </h2>
          <h1 className='font-fraunces text-4xl text-[#1c232b]'>{name}</h1>
          <p className='font-montserrat text-sm text-gray-600'>{description}</p>
          <div className='relative'>
            <p className='font-fraunces text-2xl	text-[#3c8067]'>{price}</p>
            <p className='absolute top-2 left-28 font-montserrat text-xs text-gray-800 line-through'>
              {uvp}
            </p>
          </div>
          <button className='flex w-full items-center justify-center rounded-lg bg-[#3c8067] px-10 py-2 text-white hover:bg-[#1a4031]'>
            <ShoppingCartIcon className='mr-2 h-4' />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
