const config = {
  title: "Arsh Sharma | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Arsh Sharma, a full-stack developer specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including DevFlow, StreamVibe, Carepulse, and Imaginify. Let's build something amazing together!",
    short:
      "Discover the portfolio of Arsh Sharma, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Arsh Sharma",
    "portfolio",
    "full-stack developer",
    "web development",
    "3D animations",
    "interactive websites",
    "DevFlow",
    "StreamVibe",
    "Carepulse",
    "Imaginify",
    "React",
    "Next.js",
    "Three.js",
    "Node.js",
    "Tailwind CSS",
  ],
  author: "Arsh Sharma",
  email: "arsharma9966@gmail.com",
  site: "https://yourdomain.com", // Replace with your actual domain

  // for github stars button
  githubUsername: "Arsh-sudo",
  githubRepo: "python_practice", // Update this if your repo name is different

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/hsra_amrahs", // Add your X handle
    linkedin: "https://www.linkedin.com/in/arsh-sharma-6a328332a/",
    instagram: "https://www.instagram.com/__arsharma__96/", // Add your Instagram handle
    facebook: "https://www.facebook.com/profile.php?id=61585608341330", // Add your Facebook handle
    github: "https://github.com/Arsh-sudo",
  },
};
export { config };