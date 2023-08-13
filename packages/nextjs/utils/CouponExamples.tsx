interface CouponType {
  id: number;
  title: string;
  issuer: string;
  hash: string;
  src: string;
  issuerSrc: string;
}

const CouponExamples: Array<CouponType> = [
  {
    id: 1,
    title: "Buy one, get one free!",
    issuer: "DrunkenDog",
    hash: "7B33B70D437ADB736D740414ABB6DA97",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691893409/coupondog/burger_w7f7ku.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691906155/Businesses/drunkendog_fsnufh.png",
  },
  {
    id: 2,
    title: "2 for 1 on Beers!",
    issuer: "DrunkenDog",
    hash: "40629A6D201891F3ECAA9F2DB54F0AFB",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691898661/coupondog/beer2_nrad6i.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691906155/Businesses/drunkendog_fsnufh.png",
  },
  {
    id: 3,
    title: "2 for 1 on Pizza!",
    issuer: "DrunkenDog",
    hash: "9C66F453BD3B40320321137CB5000A64",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892390/coupondog/pizza3_lvsmmu.webp",
    issuerSrc: "",
  },
  {
    id: 4,
    title: "10% off on Milkshakes!",
    issuer: "El Merendero",
    hash: "D149CBABBC0246476C2BB1771363C08D",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892391/coupondog/milkshake1_s3mruf.webp",
    issuerSrc:
      "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691906103/Businesses/do1_IqUbFKUm2hav1xxt8gcB_bauamu.webp",
  },
  {
    id: 5,
    title: "3 for 2 on Birria Tacos",
    issuer: "El Manolito",
    hash: "D23EF6109C7A1CFCB6300650639EF7D8",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691898716/coupondog/birria2_voecxe.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691905929/Businesses/donmanolitowebp_tim5ov.jpg",
  },
  {
    id: 6,
    title: "3 for 2 on Pastor Tacos",
    issuer: "El Manolito",
    hash: "577508DA09D3C4DE00A8E9592B401CF6",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892390/coupondog/tacosAlPastor_eqxrdo.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691905929/Businesses/donmanolitowebp_tim5ov.jpg",
  },
  {
    id: 7,
    title: "30 Wings for $15!",
    issuer: "Buffalo Wild Wings",
    hash: "8D6921344D041897A7EB4E10DBB039DF",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892390/coupondog/wings_telcrl.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691905811/Businesses/bww_ljf0nq.png",
  },
  {
    id: 8,
    title: "Boneless half price!",
    issuer: "Buffalo Wild Wings",
    hash: "4DBF3F68FEB60B2D03BFB1B09520D6D7",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892391/coupondog/wingsboneless_neerlx.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691905811/Businesses/bww_ljf0nq.png",
  },
  {
    id: 9,
    title: "20% off on Running Shoes!",
    issuer: "Nike",
    hash: "B6E76D77F459196F4D0B36886B5823C2",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892390/coupondog/shoes1_r2chhp.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691905872/Businesses/nike_q78pa4.webp",
  },
];

interface BriefSubscription {
  id: number;
  issuer: string;
  couponAmt: number;
  src: string;
}

const BriefSubArr: Array<BriefSubscription> = [];

CouponExamples.forEach((coupon: CouponType) => {
  const found = BriefSubArr.find(e => e.issuer == coupon.issuer);
  if (found) {
    BriefSubArr[BriefSubArr.indexOf(found)].couponAmt += 1;
  } else {
    const notFound = {
      id: BriefSubArr.length,
      issuer: coupon.issuer,
      couponAmt: 1,
      src: coupon.issuerSrc,
    };
    BriefSubArr.push(notFound);
  }
});

type BusinessCoupons = Array<CouponType>;
type BusinessesArr = Array<BusinessCoupons>;

const issArr: Array<string> = [];
CouponExamples.forEach((coupon: CouponType) => {
  if (!issArr.includes(coupon.issuer)) {
    issArr.push(coupon.issuer);
  }
});
const SrtdBsnsCpns: BusinessesArr = [];
issArr.forEach(x => {
  const thisArr: BusinessCoupons = CouponExamples.filter(coupon => (coupon.issuer === x ? coupon : null));
  SrtdBsnsCpns.push(thisArr);
});

export default CouponExamples;
export { BriefSubArr, SrtdBsnsCpns };
