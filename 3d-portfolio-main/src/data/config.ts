const config = {
  title: "Nguyen Ngoc Ha Nguyen | Portfolio IT- Photographer",
  description: {
    long: "Explore the portfolio of Nguyen Ngoc Ha Nguyen, a full-stack developer and creative photographer specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Nguyen Ngoc Ha Nguyen, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Ha Nguyen",
    "portfolio",
    "full-stack developer",
    "creative photographer",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "HnBeeIT-Portfolio",
  email: "hnguynbee.hng@gmail.com",
  site: "https://hnguynbeeit-portfolio.netlify.app", 

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "Not available",
    linkedin: "https://www.linkedin.com/in/hnguynbeeit",
    instagram: "https://www.instagram.com/_hnguynbee.hng_",
    facebook: "https://www.facebook.com/hanguyenbee.2006/",
    github: "https://github.com/HnguynbeeIT",
  },
};
export { config };
