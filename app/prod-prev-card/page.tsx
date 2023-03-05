import ItemCard from "./ItemCard";
// import deskProductImg from "/public/images/prod-prev-card/image-product-desktop.jpg";
// import mobProdImg from "/public/images/prod-prev-card/image-product-mobile.jpg";

const Home = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-[#f2ebe3]'>
      <ItemCard
        category='Perfume'
        name='Gabrielle Essence Eau De Parfume'
        price={149.99}
        uvp={169.99}
        description='A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.'
        imageDesktop='/image-product-desktop.jpg'
      />
    </div>
  );
};

export default Home;
