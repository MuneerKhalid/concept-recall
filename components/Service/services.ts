export type Service = {
  iconSrc: string;
  title: string;
  description: string;
  link: string;
};

export const services: Service[] = [
  {
    iconSrc: "/1.png",
    title: "Tailored Mobile",
    description:
      "In a digital-first world, our tailored mobile app solutions are your gateway to engaging your audience like never before. We combine cutting-edge technology with user-centric design to create apps that not only look great but also perform flawlessly across iOS and Android.",
    link: "/services/mobile-app-development",
  },
  {
    iconSrc: "/2.png",
    title: "Customized Web",
    description:
      "Our web app development offerings are designed to provide seamless, robust, and scalable solutions tailored to your unique business needs. We leverage the latest technologies to build web applications that offer engaging user experiences and streamline operations.",
    link: "/services/web-app-development",
  },
  {
    iconSrc: "/3.png",
    title: "E-Commerce",
    description:
      "Transform your online store with our cutting-edge e-commerce development solutions. Our team specializes in creating intuitive and responsive websites that provide a seamless shopping experience on both desktops and mobile devices.",
    link: "/services/ecommerce-development",
  },
  {
    iconSrc: "/4.png",
    title: "UI/UX",
    description:
      "Our UI/UX design solutions are crafted to provide exceptional user experiences. We focus on creating intuitive interfaces that engage users and enhance their interaction with your app or website.",
    link: "/services/ui-ux-design",
  },
];
