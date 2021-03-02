import img1 from "../../images/driver.svg";
import img2 from "../../images/online_banking.svg";
import img3 from "../../images/safe_banking.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting changed any fees",
  buttonLabel: "Get started",
  imgStart: false,
  img: img1,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discovery",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Unlimited Access",
  headline: "Login in to your account any time",
  description:
    "We have you coverd no matter where you are located. All you need is an internet to connection and a phone or computer",
  buttonLabel: "Leran more",
  imgStart: true,
  img: img2,
  alt: "bitcoin",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join our team",
  headline: "Creating an account is extremly easy",
  description:
    "Get everything set up and ready in under 10 mintues. All you need to do is add your information and you're ready to go.",
  buttonLabel: "Get started",
  imgStart: false,
  img: img3,
  alt: "safe",
  dark: false,
  primary: false,
  darkText: true,
};
