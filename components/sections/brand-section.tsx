import React from "react";

const BrandsSection: React.FC = () => {
  return (
  //   <section className="bg-black py-10">
  //     <div className="container mx-auto flex justify-center space-x-12">
  //       {["Versace", "Zara", "Gucci", "Prada", "Calvin Klein"].map((brand) => (
  //         <a
  //           key={brand}
  //           href="#"
  //           className="text-white hover:text-gray-300 text-4xl font-semibold tracking-wider"
  //         >
  //           {brand}
  //         </a>
  //       ))}
  //     </div>
  //   </section>
  // );
  
    <div className="bg-black text-white flex justify-around items-center p-8">
      <img src="images/brand/versace.png" alt="Versace Logo" className="brand-logo" />
      <img src="images/brand/zara.png" alt="Versace Logo" className="brand-logo" />
      <img src="images/brand/gucci.png" alt="Versace Logo" className="brand-logo" />
      <img src="images/brand/prada.png" alt="Versace Logo" className="brand-logo" />
      <img src="images/brand/calvin.png" alt="Versace Logo" className="brand-logo" />

    </div>
  );
};

export default BrandsSection;
