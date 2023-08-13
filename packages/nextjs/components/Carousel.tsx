import React from "react";
import Image from "next/image";

//Declaring the contents of a coupon card.
interface ICard {
  id: number;
  title: string;
  description: string;
  hash: string;
  src: string;
}

type ICardArray = Array<ICard>;

// Test cards for carrousel
const card2: ICard = {
  id: 1,
  title: "20% off on Burgers!",
  description: "best before aug 43",
  hash: "asdfjewio323425",
  src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691893409/coupondog/burger_w7f7ku.webp",
};

const card3: ICard = {
  id: 2,
  title: "30% off on Milkshakes!",
  description: "best before aug 21",
  hash: "asdfjewio323425",
  src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892391/coupondog/milkshake1_s3mruf.webp",
};

const card4: ICard = {
  id: 3,
  title: "50% off on Birria!",
  description: "best before aug 11",
  hash: "asdfjewio323425",
  src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892391/coupondog/tacosBirria_fpxt97.jpg",
};

const card5: ICard = {
  id: 4,
  title: "15% off on Boneless!",
  description: "best before aug 21",
  hash: "asdfjewio323425",
  src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892391/coupondog/wingsboneless_neerlx.webp",
};

const card6: ICard = {
  id: 5,
  title: "60% off on Pizza!",
  description: "only on February 31st!",
  hash: "asdfjewio323425",
  src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892390/coupondog/pizza3_lvsmmu.webp",
};

//Test cards for carousel ^

const cardArrr: ICardArray = [card2, card3, card4, card5, card6];

const Carousel = () => {
  return (
    <div className="carousel rounded-box">
      {cardArrr.map((card: ICard) => (
        <div key={card.id}>
          <Card src={card.src} id={card.id} title={card.title} description={card.description} hash={card.hash} />
        </div>
      ))}
    </div>
  );
};

const Card = ({ title, description, hash, id, src }: ICard) => {
  return (
    <div className="carousel-item relative w-full h-full" id={`slide${id}`}>
      <div className="mx-2 card card-compact bg-base-100 shadow-xl ">
        <div className="avatar">
          <div className="relative h-44 w-44 rounded-xl mx-auto mt-4">
            <Image src={src} alt="Shoes" height={750} width={750} />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <code className="text-base">{hash}</code>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
    </div>
  );
};

export { Carousel };
