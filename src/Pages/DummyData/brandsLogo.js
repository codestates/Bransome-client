import apple from "../../logos/brandLogo-big/it/apple.png";
import microsoft from "../../logos/brandLogo-big/it/microsoft.jpg";
import intel from "../../logos/brandLogo-big/it/Intel.svg";
import AMD from "../../logos/brandLogo-big/it/Amd.png";
import Nvidia from "../../logos/brandLogo-big/it/Nvidia.png";
import Dell from "../../logos/brandLogo-big/it/Dell.png";
import HP from "../../logos/brandLogo-big/it/Hp.png";
import Lenovo from "../../logos/brandLogo-big/it/lenovo.png";
import Samsung from "../../logos/brandLogo-big/it/samsung.png";
import LG from "../../logos/brandLogo-big/it/lg.png";
/*음료수*/
import cocacola from "../../logos/brandLogo-big/drink/cocacola.png";
import idiya from "../../logos/brandLogo-big/drink/idiya.jpg";
import monster from "../../logos/brandLogo-big/drink/monster.jpg";
import pepsi from "../../logos/brandLogo-big/drink/pepsi.jpg";
import redbull from "../../logos/brandLogo-big/drink/redbull.png";
import starbucks from "../../logos/brandLogo-big/drink/starbucks.png";
import twosome from "../../logos/brandLogo-big/drink/twosome.jpg";
/*
IT/미디어: 1~50
자동차: 51~100
커피 및 음료 : 101~200
*/
const brands = [
  //IT/Midea
  {
    _id: 1,
    brand_id: 1,
    brand_name: "Apple",
    brand_main_image: apple,
    brand_sub_image: "",
    category: "IT&미디어",
    urls: "/1111",
  },
  {
    _id: 2,
    brand_id: 2,
    brand_name: "Microsoft",
    brand_main_image: microsoft,
    brand_sub_image: "",
    category: "IT&미디어",
    urls: "/1112",
  },
  {
    _id: 3,
    brand_id: 3,
    brand_name: "Intel",
    brand_main_image: intel,
    brand_sub_image: "",
    category: "IT&미디어",
    urls: "/1113",
  },
  {
    _id: 4,
    brand_id: 4,
    brand_name: "AMD",
    brand_main_image: AMD,
    brand_sub_image: "",
    category: "IT&미디어",
    urls: "/1114",
  },
  {
    _id: 5,
    brand_id: 5,
    brand_name: "Nvidia",
    brand_main_image: Nvidia,
    brand_sub_image: "",
    category: "IT&미디어",
  },
  {
    _id: 6,
    brand_id: 6,
    brand_name: "Dell",
    brand_main_image: Dell,
    brand_sub_image: "",
    category: "IT&미디어",
  },
  {
    _id: 7,
    brand_id: 7,
    brand_name: "HP",
    brand_main_image: HP,
    brand_sub_image: "",
    category: "IT&미디어",
  },
  {
    _id: 8,
    brand_id: 8,
    brand_name: "Lenovo",
    brand_main_image: Lenovo,
    brand_sub_image: "",
    category: "IT&미디어",
  },
  {
    _id: 9,
    brand_id: 9,
    brand_name: "Samsung",
    brand_main_image: Samsung,
    brand_sub_image: "",
    category: "IT&미디어",
  },
  {
    _id: 10,
    brand_id: 10,
    brand_name: "LG",
    brand_main_image: LG,
    brand_sub_image: "",
    category: "IT&미디어",
  },
  //커피, 음료
  {
    _id: 51,
    brand_id: 11,
    brand_name: "Idiya_Coffee",
    brand_main_image: idiya,
    brand_sub_image: "",
    category: "커피&음료",
  },
  {
    _id: 52,
    brand_id: 12,
    brand_name: "StarBucks",
    brand_main_image: starbucks,
    brand_sub_image: "",
    category: "커피&음료",
  },
  {
    _id: 53,
    brand_id: 13,
    brand_name: "AToSomePlace",
    brand_main_image: twosome,
    brand_sub_image: "",
    category: "커피&음료",
  },
  {
    _id: 54,
    brand_id: 14,
    brand_name: "Illy",
    brand_main_image: "./",
    brand_sub_image: "",
    category: "커피&음료",
  },
  {
    _id: 55,
    brand_id: 15,
    brand_name: "Gongcha",
    brand_main_image: "./",
    brand_sub_image: "",
    category: "커피&음료",
  },
  {
    _id: 56,
    brand_id: 16,
    brand_name: "Cocacola",
    brand_main_image: cocacola,
    brand_sub_image: "",
    category: "커피&음료",
  },
  {
    _id: 57,
    brand_id: 17,
    brand_name: "Pepsi",
    brand_main_image: pepsi,
    brand_sub_image: "",
    category: "커피&음료",
  },
  {
    _id: 58,
    brand_id: 18,
    brand_name: "Fanta",
    brand_main_image: "./",
    brand_sub_image: "",
    category: "커피&음료",
  },
  {
    _id: 59,
    brand_id: 19,
    brand_name: "Monster",
    brand_main_image: monster,
    brand_sub_image: "",
    category: "커피&음료",
  },
  {
    _id: 60,
    brand_id: 20,
    brand_name: "RedBull",
    brand_main_image: redbull,
    brand_sub_image: "",
    category: "커피&음료",
  },
  {
    _id: 101,
    brand_id: 21,
    brand_name: "Tesla",
    brand_main_image: "./",
    brand_sub_image: "",
    category: "자동차",
  },
  {
    _id: 102,
    brand_id: 22,
    brand_name: "Tesla",
    brand_main_image: "./",
    brand_sub_image: "",
    category: "자동차",
  },
  {
    _id: 103,
    brand_id: 23,
    brand_name: "Tesla",
    brand_main_image: "./",
    brand_sub_image: "",
    category: "자동차",
  },
  {
    _id: 104,
    brand_id: 24,
    brand_name: "Tesla",
    brand_main_image: "./",
    brand_sub_image: "",
    category: "자동차",
  },
  {
    _id: 105,
    brand_id: 25,
    brand_name: "Tesla",
    brand_main_image: "./",
    brand_sub_image: "",
    category: "자동차",
  },
  {
    _id: 106,
    brand_id: 26,
    brand_name: "Tesla",
    brand_main_image: "./",
    brand_sub_image: "",
    category: "자동차",
  },
  {
    _id: 107,
    brand_id: 27,
    brand_name: "Tesla",
    brand_main_image: "./",
    brand_sub_image: "",
    category: "자동차",
  },
  {
    _id: 108,
    brand_id: 28,
    brand_name: "Tesla",
    brand_main_image: "./",
    brand_sub_image: "",
    category: "자동차",
  },
  {
    _id: 109,
    brand_id: 29,
    brand_name: "Tesla",
    brand_main_image: "./",
    brand_sub_image: "",
    category: "자동차",
  },
  {
    _id: 110,
    brand_id: 30,
    brand_name: "Tesla",
    brand_main_image: "./",
    brand_sub_image: "",
    category: "자동차",
  },
];

export default brands;
