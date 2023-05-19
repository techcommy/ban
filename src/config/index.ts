import Img1 from "../assets/img/1.png";
import Img2 from "../assets/img/2.png";
import Img3 from "../assets/img/3.png";
import Img4 from "../assets/img/4.png";
import Img5 from "../assets/img/5.png";
import Img6 from "../assets/img/6.png";
import Img7 from "../assets/img/7.png";
import Img8 from "../assets/img/8.png";
import Img9 from "../assets/img/9.png";

export interface BankDataInterface {
  id: number;
  name: string;
  img: any;
}

export const BankData: BankDataInterface[] = [
  { id: 1, name: "Bank of singapore", img: Img1 },
  { id: 2, name: "DBS", img: Img2 },
  { id: 3, name: "HSBC", img: Img3 },
  { id: 4, name: "Maybank", img: Img4 },
  { id: 5, name: "OCBC", img: Img5 },
  { id: 6, name: "POSB", img: Img6 },
  { id: 7, name: "PUBLIC BANK", img: Img7 },
  { id: 8, name: "RHB", img: Img8 },
  { id: 9, name: "UOB", img: Img9 },
];
