import ArmanImage from "/src/assets/images/Arman.webp";

const data = {
  en: {
    HeaderSection: {
      NavigationSection: [
        {
          text: "Home",
          link: "#",
          id: 1,
        },
        {
          text: "Hero",
          link: "#HeroSection",
          id: 2,
        },
        {
          text: "About me",
          link: "#AboutSection",
          id: 3,
        },
        {
          text: "Skills",
          link: "#SkillsSection",
          id: 4,
        },
        {
          text: "Projects",
          link: "#ProjectsSection",
          id: 5,
        },
        {
          text: "Contact",
          link: "#ContactSection",
          id: 6,
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
      armanImageSource: ArmanImage,
      armanImageAlt: "Arman Gulistani",
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
              id: 1,
            },
            {
              title: "CSS",
              imageSource: "",
              imageAlt: "",
              id: 2,
            },
            {
              title: "JavaScript",
              imageSource: "",
              imageAlt: "",
              id: 3,
            },
            {
              title: "React",
              imageSource: "",
              imageAlt: "",
              id: 4,
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
              id: 1,
            },
            {
              title: "Git",
              imageSource: "",
              imageAlt: "",
              id: 2,
            },
            {
              title: "GitHub",
              imageSource: "",
              imageAlt: "",
              id: 3,
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
      NavigationSection: [
        {
          text: "Accueil",
          link: "#",
          id: 1,
        },
        {
          text: "Hero",
          link: "#HeroSection",
          id: 2,
        },
        {
          text: "À propos",
          link: "#AboutSection",
          id: 3,
        },
        {
          text: "Compétences",
          link: "#SkillsSection",
          id: 4,
        },
        {
          text: "Projets",
          link: "#ProjectsSection",
          id: 5,
        },
        {
          text: "Contact",
          link: "#ContactSection",
          id: 6,
        },
      ],
      ThemeToggle: {},
      HamburgerMenu: {},
      LanguageSwitcher: {},
    },
    HeroSection: {
      h1: {
        name: "Arman Gulistani",
        career: "Développeur Front End",
      },
      armanImageSource: ArmanImage,
      armanImageAlt: "Arman Gulistani",
    },
    AboutSection: {
      title: "À propos",
      personalIntroduction:
        "Salut ! Je suis Arman, un développeur front-end où je fais rencontrer la technologie avec l'art. Ma formule : du code propre, un design centré sur l'utilisateur, et une touche d'élégance.Je suis un architecte en programmation, passionné par la création de la structure et de la beauté des sites web. Animé par l'excitation de donner vie aux idées, j'apprends et innove constamment. Prêt à créer des solutions numériques étonnantes et fonctionnelles ? Faisons quelque chose d'incroyable ensemble.",
    },
    SkillsSection: {
      title: "Compétences",
      skillsCard: {
        frontEndTools: {
          title: "Développement Front-End",
          skills: [
            {
              title: "HTML",
              imageSource: "",
              imageAlt: "",
              id: 1,
            },
            {
              title: "CSS",
              imageSource: "",
              imageAlt: "",
              id: 2,
            },
            {
              title: "JavaScript",
              imageSource: "",
              imageAlt: "",
              id: 3,
            },
            {
              title: "React",
              imageSource: "",
              imageAlt: "",
              id: 4,
            },
          ],
        },
        devTools: {
          title: "Outils de Développement",
          skills: [
            {
              title: "NPM",
              imageSource: "",
              imageAlt: "",
              id: 1,
            },
            {
              title: "Git",
              imageSource: "",
              imageAlt: "",
              id: 2,
            },
            {
              title: "GitHub",
              imageSource: "",
              imageAlt: "",
              id: 3,
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
            "Le projet Etch A Sketch est une application de dessin interactive et créative basée sur le web, conçue pour émuler le jouet classique Etch A Sketch. Cette application fournit un canevas virtuel en grille où les utilisateurs peuvent créer des œuvres d'art en pixel détaillées.",
          websiteLink: "INSERT HERE",
          id: 1,
        },
        {
          title: "Tic-Tac-Toe",
          imageSource: "INSERT HERE",
          imageAlt: "INSERT HERE",
          description:
            "Le jeu de Tic-Tac-Toe est une application web attrayante et facile à utiliser qui transporte le jeu intemporel de Tic-Tac-Toe sur une plateforme numérique. Cette application permet à deux joueurs de participer au jeu classique, qui consiste à placer des 'X' et des 'O' dans une grille 3x3, avec pour objectif d'être le premier à aligner trois de leurs symboles, horizontalement, verticalement, ou en diagonale.",
          id: 2,
        },
        {
          title: "Task Manager",
          imageSource: "INSERT HERE",
          imageAlt: "INSERT HERE",
          description:
            "Task Manager est une application web conviviale conçue pour aider les individus à gérer leurs tâches quotidiennes de manière efficace. Cette application permet aux utilisateurs d'ajouter, d'organiser et de prioriser rapidement les tâches, assurant ainsi qu'ils restent à jour avec leur charge de travail.",
          id: 3,
        },
        {
          title: "Weather-website",
          imageSource: "INSERT HERE",
          imageAlt: "INSERT HERE",
          description:
            "Weather Website est une application web conviviale conçue pour fournir aux utilisateurs des informations météorologiques complètes pour différents endroits dans le monde. Cette application est adaptée pour tous ceux qui ont besoin de données météorologiques précises et à jour, que ce soit pour planifier des voyages, des activités en plein air, ou simplement pour la vie quotidienne.",
          id: 4,
        },
        {
          title: "CV Maker",
          imageSource: "INSERT HERE",
          imageAlt: "INSERT HERE",
          description:
            "CV Maker est un outil en ligne conçu pour la création de CV professionnels personnalisés selon les différentes candidatures. Il permet aux utilisateurs de télécharger leur CV, d'ajouter une photo personnelle, de personnaliser le schéma de couleurs, parmi d'autres fonctionnalités.",
          id: 5,
        },
      ],
    },
    ContactSection: {
      title: "Contact",
      subTitle: "Laisse moi un message",
      endMessage:
        "C'est la fin ! J'espère que vous avez pu avoir un bon aperçu de mes compétences et de mes expériences. Si vous avez des opportunités ou des questions, je ne suis qu'à un message de distance. Explorons ensemble comment nous pouvons contribuer à un succès mutuel !",
    },
  },
};

export default data;
