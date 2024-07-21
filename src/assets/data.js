const data = {
  en: {
    HeaderSection: {
      NavigationSection: [
        {
          text: "Home",
          link: "#",
        },
        {
          text: "Hero",
          link: "#hero",
        },
        {
          text: "About me",
          link: "#about-me",
        },
        {
          text: "skills",
          link: "#skills",
        },
        {
          text: "Projects",
          link: "#projects",
        },
        {
          text: "Contact",
          link: "#contact",
        },
      ],

      ThemeToggle: {},
      HamburgerMenu: {},
      LanguageSwitcher: {},
    },
    HeroSection: {
      h1: {
        name: "Arman Gulistani",
        career: "Front End Developer",
      },
      armanImageSource: "INSERT HERE",
      armanImageAlt: "INSERT HERE",
    },
    AboutSection: {
      title: "About me",
      personalIntroduction:
        "Hi! I'm Arman, a front-end developer where I make technology meet art. My formula: clean code, user-focused design, and a dash of elegance.I'm an architect in code, passionate about crafting both the structure and beauty of websites.Driven by the excitement of bringing ideas to life, I'm constantly learning and innovating. Ready to create stunning, functional digital solutions? Let's make something incredible together.",
    },
    SkillsSection: {
      title: "Skillset",
      skillsCard: {
        frontEndTools: {
          title: "Front-End Development",
          skills: [
            {
              title: "HTML",
              imageSource: "",
              imageAlt: "",
            },
            {
              title: "CSS",
              imageSource: "",
              imageAlt: "",
            },
            {
              title: "JavaScript",
              imageSource: "",
              imageAlt: "",
            },
            {
              title: "React",
              imageSource: "",
              imageAlt: "",
            },
          ],
        },
        devTools: {
          title: "Development Tools",
          skills: [
            {
              title: "NPM",
              imageSource: "",
              imageAlt: "",
            },
            {
              title: "Git",
              imageSource: "",
              imageAlt: "",
            },
            {
              title: "GitHub",
              imageSource: "",
              imageAlt: "",
            },
          ],
        },
      },
    },
    ProjectsSection: {
      title: "My projects",
      projectsList: [
        {
          title: "EtchASketch",
          imageSource: "INSERT HERE",
          imageAlt: "INSERT HERE",
          description:
            "The Etch A Sketch project is a creative and interactive web-based drawing application designed to emulate the classic Etch A Sketch toy. This application provides a virtual grid canvas where users can create detailed pixel art.",
          websiteLink: "INSERT HERE",
          id: 1,
        },
        {
          title: "Tic-Tac-Toe",
          imageSource: "INSERT HERE",
          imageAlt: "INSERT HERE",
          description:
            "The Tic-Tac-Toe Game is an engaging and user-friendly web-based application that brings the timeless game of Tic-Tac-Toe to a digital platform. This application allows two players to engage in the classic game, which involves placing 'X's and 'O's in a 3x3 grid, with the goal of being the first to line up three of their symbols either horizontally, vertically, or diagonally.",
          id: 2,
        },
        {
          title: "Task Manager",
          imageSource: "INSERT HERE",
          imageAlt: "INSERT HERE",
          description:
            "The Task Manager is a user-friendly web-based application designed to help individuals manage their daily tasks efficiently. This application enables users to quickly add, organize, and prioritize tasks, ensuring they stay on top of their workload.",
          id: 3,
        },
        {
          title: "Weather-website",
          imageSource: "INSERT HERE",
          imageAlt: "INSERT HERE",
          description:
            "The Weather Website is a user-friendly, web-based application designed to provide users with comprehensive weather information for various locations around the world. This application is tailored for anyone needing accurate and up-to-date weather data, whether for planning travel, outdoor activities, or just daily life.",
          id: 4,
        },
        {
          title: "CV Maker",
          imageSource: "INSERT HERE",
          imageAlt: "INSERT HERE",
          description:
            "CV Maker is an online tool designed for crafting professional resumes customized to various job applications. It enables users to download their CVs, add personal photos, and customize the color scheme, among other features.",
          id: 5,
        },
      ],
    },
    ContactSection: {
      title: "Contact",
      subTitle: "Drop me a message",
      endMessage:
        "This is the end! I hope you've gained a good insight into my skills and experiences. If you have opportunities or questions, I’m just a message away. Let's explore how we can contribute to mutual success!",
    },
  },
  fr: {
    HeaderSection: {
      NavigationSection: {},
      ThemeToggle: {},
      HamburgerMenu: {},
      LanguageSwitcher: {},
    },
    HeroSection: {},
    AboutSection: {},
    SkillsSection: {},
    ProjectsSection: {},
    ContactSection: {},
  },
};

export default data;
