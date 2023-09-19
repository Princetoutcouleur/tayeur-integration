import React from 'react'
import TailleBasse from "../../Assets/taille-basse.jpeg";
import BayeLahat from "../../Assets/baye-lahat.jpeg";
import GrandBoubou from "../../Assets/Grand-bou-getzner-blanc.jpg";
import ProductCard from './ProductCard';

const ProductList = () => {
  const cardsData = [
    {
      title: "taille basse",
      image: TailleBasse,
    },
    {
      title: "baye lahat",
      image: BayeLahat,
    },
    {
      title: "grand boubou femme",
      image: GrandBoubou,
    },
  ];
  return (
    <div>
      <div className="row mb-3">
            {cardsData.map((card) => (
              <div className="col-xl-4 col-lg-4 mb-3">
                <ProductCard image={card.image} title={card.title} />
              </div>
            ))}
          </div>
    </div>
  )
}

export default ProductList
