interface CouponType {
  id: number;
  title: string;
  issuer: string;
  hash: string;
  src: string;
}

const CouponExamples: Array<CouponType> = [
  {
    id: 1,
    title: "20% off on Burgers!",
    issuer: "DrunkenDog",
    hash: "7B33B70D437ADB736D740414ABB6DA97",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691893409/coupondog/burger_w7f7ku.webp",
  },
  {
    id: 2,
    title: "2x1 Beers!",
    issuer: "DrunkenDog",
    hash: "40629A6D201891F3ECAA9F2DB54F0AFB",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691898661/coupondog/beer2_nrad6i.webp",
  },
  {
    id: 3,
    title: "2x1 on Pizza!",
    issuer: "DrunkenDog",
    hash: "9C66F453BD3B40320321137CB5000A64",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892390/coupondog/pizza3_lvsmmu.webp",
  },
  {
    id: 4,
    title: "10% off on Milkshakes!",
    issuer: "El Merendero",
    hash: "D149CBABBC0246476C2BB1771363C08D",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892391/coupondog/milkshake1_s3mruf.webp",
  },
  {
    id: 5,
    title: "3x2 on Birria Tacos",
    issuer: "El Manolito",
    hash: "D23EF6109C7A1CFCB6300650639EF7D8",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691898716/coupondog/birria2_voecxe.webp",
  },
  {
    id: 6,
    title: "3x2 on Pastor Tacos",
    issuer: "El Manolito",
    hash: "577508DA09D3C4DE00A8E9592B401CF6",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892390/coupondog/tacosAlPastor_eqxrdo.webp",
  },
  {
    id: 7,
    title: "30 Wings for $15!",
    issuer: "Buffalo Wild Wings",
    hash: "8D6921344D041897A7EB4E10DBB039DF",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892390/coupondog/wings_telcrl.webp",
  },
  {
    id: 8,
    title: "Boneless half price!",
    issuer: "Buffalo Wild Wings",
    hash: "4DBF3F68FEB60B2D03BFB1B09520D6D7",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892391/coupondog/wingsboneless_neerlx.webp",
  },
  {
    id: 9,
    title: "20% off on Running Shoes!",
    issuer: "Nike",
    hash: "B6E76D77F459196F4D0B36886B5823C2",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892390/coupondog/shoes1_r2chhp.webp",
  },
];

export default CouponExamples;
