import React from 'react'
import CardAtelier from "./CardAtelier";
import SixPointNeuf from "../../Assets/6-point-9.png";
import BambaCouture from "../../Assets/bamba-couture.png";
import DiolofArt from "../../Assets/djolof-art.png";
import Heritage from "../../Assets/heritage-couture.png";
import Bouaba from "../../Assets/made-in-bouaba.png";
import Senegal from "../../Assets/senegal-couture.png";

const CardListAtelier = () => {

    const cardsData = [
        {
          title: "6 point 9",
          image: SixPointNeuf,
        },
        {
          title: "bamba couture",
          image: BambaCouture,
        },
        {
          title: "djolof art",
          image: DiolofArt,
        },
        {
          title: "heritage couture",
          image: Heritage,
        },
        {
          title: "made in bouba",
          image: Bouaba,
        },
        {
          title: "senegal couture",
          image: Senegal,
        },
      ];

  return (
    <div>
      <div className="row mb-5">
            {cardsData.map((card) => (
              <div className="col-xl-4 col-lg-4 mb-3">
                <CardAtelier image={card.image} title={card.title} />
              </div>
            ))}
          </div>
    </div>
  )
}

export default CardListAtelier
