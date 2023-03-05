type Product = {
  category: string;
  name: string;
  description: string;
  price: number;
  uvp: number;
  imageDesktop: string;
  // imageMobile: string;
};

const ItemCard = ({
  category,
  name,
  description,
  price,
  imageDesktop,
  // imageMobile,
  uvp,
}: Product) => {
  return (
    <>
      <div className='flex w-1/2 flex-col overflow-hidden rounded-lg bg-white shadow-lg md:flex-row'>
        <div className='basis-1/2'>
          <picture>
            <img src={imageDesktop} alt='product' />
          </picture>
        </div>
        <div className='mx-6 basis-1/2'>
          <h3 className='mt-8 text-xl uppercase tracking-[5px] text-gray-400'>
            {category}
          </h3>
          <h1 className='mt-6 font-fraunces text-5xl'>{name}</h1>
          <p className='mt-6 font-montserrat'>{description}</p>
          <div className='flex items-end'>
            <p className='mt-6 text-4xl font-extrabold text-green-600'>
              {price}{" "}
            </p>
            <p className='ml-6 text-lg font-normal text-black line-through'>
              {" "}
              {uvp}
            </p>
          </div>
          <button className='mt-8 w-full rounded-lg border-2 bg-green-600 px-10 py-4 font-bold text-white hover:bg-green-900'>
            🛒Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
