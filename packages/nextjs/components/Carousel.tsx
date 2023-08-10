import React from "react";

//Declaring the contents of a coupon card.
interface ICard {
  id: number;
  title: string;
  description: string;
  hash: string;
}

type ICardArray = Array<ICard>;

// Test cards for carrousel
const card2: ICard = {
  id: 1,
  title: "20% off on Burgers!",
  description: "best before aug 43",
  hash: "asdfjewio323425",
};

const card3: ICard = {
  id: 2,
  title: "30% off on Burgers!",
  description: "best before aug 21",
  hash: "asdfjewio323425",
};

const card4: ICard = {
  id: 3,
  title: "50% off on Burgers!",
  description: "best before aug 11",
  hash: "asdfjewio323425",
};

const card5: ICard = {
  id: 4,
  title: "15% off on Burgers!",
  description: "best before aug 21",
  hash: "asdfjewio323425",
};

const card6: ICard = {
  id: 5,
  title: "60% off on Burgers!",
  description: "only on February 31st!",
  hash: "asdfjewio323425",
};

const cardArrr: ICardArray = [card2, card3, card4, card5, card6];

const Carousel = () => {
  return (
    <div className="carousel rounded-box">
      {cardArrr.map((card: ICard) => (
        <div key={card.id}>
          <Card id={card.id} title={card.title} description={card.description} hash={card.hash} />
        </div>
      ))}
    </div>
  );
};

const Card = ({ title, description, hash, id }: ICard) => {
  const before: number = id - 1 == 0 ? 5 : id - 1;
  const after: number = id + 1 == 6 ? 1 : id + 1;
  return (
    <div className="carousel-item relative w-full" id={`slide${id}`}>
      <div className="mx-2 card card-compact bg-base-100 shadow-xl ">
        <figure>
          <img
            src="https://images.ctfassets.net/3vz37y2qhojh/5ovxftNE5jbkvWUqcnohYk/472f2dbf2ec1eb26b1e9a5b879dca535/Korean_Burgers.jpg?w=750&fit=fill&fm=webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{hash}</button>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${before}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${after}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export { Carousel, cardArrr };
