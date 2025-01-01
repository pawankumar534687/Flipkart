import React from "react";
import jaket from "./assets/jaket.webp";
import shoes from "./assets/shoes.webp";
import bra from "./assets/bra.avif";
import dress from "./assets/dress.webp";
import lower from "./assets/lower.jpg";
import shirt from "./assets/shirt.jfif";
import tshirt from "./assets/tshirt.jpg"
import suitsalwer from "./assets/suitsalwer.jpg"
import sadi from "./assets/sadi.jpeg"
import kurta from "./assets/kurta.jpg"
import jeans from "./assets/jeans.webp"
import pant from "./assets/pant.webp"





const Card = () => {
  return (
    <div className="m-6">
      <p className="bg-white  text-2xl p-6">Fashion & Best Seller</p>
      <div className="bg-white  flex justify-evenly">
        <div className="border border-black-800 h-64 w-48  flex items-center justify-center  ">
          <div className="border  h-44 w-36 mb-16">
            <img className="h-full w-full  " src={jaket} alt="" />
            <p className="overflow-hidden text-sm ">
              Sweatshirts
            </p>
            <span>From ₹249</span>
          </div>
        </div>
        <div className="border border-black-800 h-64 w-48 flex items-center justify-center  ">
          <div className="border  h-44 w-36 mb-16">
            <img className="h-full w-full  " src={shoes} alt="" />
            <p className="overflow-hidden text-sm ">
              
              Shoes
            </p>
            <span>Min. 40% Off </span>
          </div>
        </div>
        <div className="border border-black-800 h-64 w-48  flex items-center justify-center  ">
          <div className="border  h-44 w-36 mb-16">
            <img className="h-full w-full  " src={bra} alt="" />
            <p className="overflow-hidden text-sm ">
              Bra
            </p>
            <span>From ₹99</span>
          </div>
        </div>
        <div className="border border-black-800 h-64 w-48  flex items-center justify-center  ">
          <div className="border  h-44 w-36 mb-16">
            <img className="h-full w-full  " src={lower} alt="" />
            <p className="overflow-hidden text-sm ">
              Lower
            </p>
            <span>Up to 60% Off</span>
          </div>
        </div>
        <div className="border border-black-800 h-64 w-48 flex items-center justify-center  ">
          <div className="border  h-44 w-36 mb-16">
            <img className="h-full w-full  " src={dress} alt="" />
            <p className="overflow-hidden text-sm ">
              Dress
            </p>
            <span>Min. 60% Off</span>
          </div>
        </div>
        <div className="border border-black-800 h-64 w-48 flex items-center justify-center  ">
          <div className="border  h-44 w-36 mb-16">
            <img className="h-full w-full  " src={shirt} alt="" />
            <p className="overflow-hidden text-sm ">
              Shirt
            </p>
            <span>From ₹399</span>
          </div>
        </div>
      </div>
      <div className="bg-white  flex justify-evenly">
        <div className="border border-black-800 h-64 w-48  flex items-center justify-center  ">
          <div className="border  h-44 w-36 mb-16">
            <img className="h-full w-full  " src={pant} alt="" />
            <p className="overflow-hidden text-sm ">
              Pant
            </p>
            <span>From ₹699</span>
          </div>
        </div>
        <div className="border border-black-800 h-64 w-48 flex items-center justify-center  ">
          <div className="border  h-44 w-36 mb-16">
            <img className="h-full w-full  " src={jeans} alt="" />
            <p className="overflow-hidden text-sm ">
              Jeans
            </p>
            <span>Up to 60% Off</span>
          </div>
        </div>
        <div className="border border-black-800 h-64 w-48  flex items-center justify-center  ">
          <div className="border  h-44 w-36 mb-16">
            <img className="h-full w-full  " src={sadi} alt="" />
            <p className="overflow-hidden text-sm ">
              Sadi
            </p>
            <span>From ₹1249</span>
          </div>
        </div>
        <div className="border border-black-800 h-64 w-48  flex items-center justify-center  ">
          <div className="border  h-44 w-36 mb-16">
            <img className="h-full w-full  " src={kurta} alt="" />
            <p className="overflow-hidden text-sm ">
              Kurta
            </p>
            <span>From ₹449</span>
          </div>
        </div>
        <div className="border border-black-800 h-64 w-48 flex items-center justify-center  ">
          <div className="border  h-44 w-36 mb-16">
            <img className="h-full w-full  " src={suitsalwer} alt="" />
            <p className="overflow-hidden text-sm ">
              Suitsalwer
            </p>
            <span>From ₹999</span>
          </div>
        </div>
        <div className="border border-black-800 h-64 w-48 flex items-center justify-center  ">
          <div className="border  h-44 w-36 mb-16">
            <img className="h-full w-full  " src={tshirt} alt="" />
            <p className="overflow-hidden text-sm ">
              Tshirt
            </p>
            <span>Min. 50% Off</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
