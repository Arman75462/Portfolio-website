import ArmanImage from "/src/assets/images/Arman.webp";

const data = {
  en: {
    HeaderSection: {
      NavigationSection: [
        {
          text: "Home",
          link: "#HeroSection",
          id: 1,
        },
        {
          text: "About me",
          link: "#AboutSection",
          id: 2,
        },
        {
          text: "Skills",
          link: "#SkillsSection",
          id: 3,
        },
        {
          text: "Projects",
          link: "#ProjectsSection",
          id: 4,
        },
        {
          text: "Contact",
          link: "#ContactSection",
          id: 5,
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
        "Hi! I'm Arman, a front-end developer where I make technology meet art. My formula: clean code, user-focused design, and a dash of elegance. I'm an architect in code, passionate about crafting both the structure and beauty of websites. Driven by the excitement of bringing ideas to life, I'm constantly learning and innovating. Ready to create stunning, functional digital solutions? Let's make something incredible together.",
      résuméLink:
        "https://1drv.ms/w/c/743c0a64b9cc236f/EdFNOOEdLqNPgSKpJi4eaSsB3EshKsNbmj8JPYEPw1SHSw?e=4vR6oF",
    },
    SkillsSection: {
      title: "Skillset",
      skillsCard: {
        frontEndTools: {
          title: "Front-End Development",
          skills: [
            {
              name: "HTML",
              imageSource: "/src/assets/images/HTML.webp",
              imageAlt: "HTML icon by Icons8",
              id: 1,
            },
            {
              name: "CSS",
              imageSource: "/src/assets/images/CSS.webp",
              imageAlt: "CSS icon by Icons8",
              id: 2,
            },
            {
              name: "JavaScript",
              imageSource: "/src/assets/images/JavaScript.webp",
              imageAlt: "JavaScript icon by Icons8n",
              id: 3,
            },
            {
              name: "React",
              imageSource: "/src/assets/images/react.webp",
              imageAlt: "React icon by Icons8",
              id: 4,
            },
          ],
        },
        devTools: {
          title: "Development Tools",
          skills: [
            {
              name: "NPM",
              imageSource: "/src/assets/images/npm.png",
              imageAlt: "NPM icon by Icons8",
              id: 1,
            },
            {
              name: "Git",
              imageSource: "/src/assets/images/git.png",
              imageAlt: "Git icon by Icons8",
              id: 2,
            },
            {
              name: "GitHub",
              imageSource: "/src/assets/images/githubIcon.webp",
              imageAlt: "GitHub icon by Icons8",
              id: 3,
            },
            {
              name: "Jest",
              imageSource: "/src/assets/images/jest.webp",
              imageAlt: "Jest icon by Icons8",
              id: 4,
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
          imageSource: "/src/assets/images/EtchASketch.webp",
          imageAlt: "Screenshot of EtchASketch website",
          description:
            "The Etch A Sketch project is a creative and interactive web-based drawing application designed to emulate the classic Etch A Sketch toy. This application provides a virtual grid canvas where users can create detailed pixel art.",
          websiteLink: "https://arman75462.github.io/EtchASketch/",
          id: 1,
        },
        {
          title: "Quizzical",
          imageSource: "/src/assets/images/Quizzical.webp",
          imageAlt: "Screenshot of Quizzical website",
          description:
            "Quizzical is an engaging trivia quiz game that tests your knowledge across various topics. Enjoy a fun and interactive experience as you answer questions and challenge yourself to achieve high scores.",
          websiteLink: "https://quizzical7630.netlify.app/",
          id: 2,
        },
        {
          title: "SimpsonsMatchup",
          imageSource: "/src/assets/images/SimpsonsMatchup.webp",
          imageAlt: "Screenshot of SimpsonsMatchup website",
          description:
            "SimpsonsMatchup is a fun memory card game featuring characters from The Simpsons. Match pairs, choose difficulty levels, and enjoy animations, sound, and music. Track your progress with the scoreboard and easily restart or adjust settings.",
          websiteLink: "https://simpsonsmatchup.netlify.app/",
          id: 3,
        },
        {
          title: "Weather-website",
          imageSource: "/src/assets/images/Weather-website.webp",
          imageAlt: "Screenshot of Weather-website",
          description:
            "The Weather Website is a user-friendly, web-based application designed to provide users with comprehensive weather information for various locations around the world. This application is tailored for anyone needing accurate and up-to-date weather data, whether for planning travel, outdoor activities, or just daily life.",
          websiteLink: "https://arman75462.github.io/Weather-website/",
          id: 4,
        },
        {
          title: "CV Maker",
          imageSource: "/src/assets/images/CVMaker.webp",
          imageAlt: "Screenshot of CV Maker website",
          description:
            "CV Maker is an online tool designed for crafting professional resumes customized to various job applications. It enables users to download their CVs, add personal photos, and customize the color scheme, among other features.",
          websiteLink: "https://incredible-entremet-748e8c.netlify.app/",
          id: 5,
        },
      ],
      loadMoreProjectsList: [
        {
          title: "Tic-Tac-Toe",
          imageSource: "/src/assets/images/TicTacToe.webp",
          imageAlt: "Screenshot of Tic-Tac-Toe website",
          description:
            "The Tic-Tac-Toe Game is an engaging and user-friendly web-based application that brings the timeless game of Tic-Tac-Toe to a digital platform. This application allows two players to engage in the classic game, which involves placing 'X's and 'O's in a 3x3 grid, with the goal of being the first to line up three of their symbols either horizontally, vertically, or diagonally.",
          websiteLink: "https://arman75462.github.io/Tic-Tac-Toe/",
          id: 1,
        },
        {
          title: "Task Manager",
          imageSource: "/src/assets/images/TaskManager.webp",
          imageAlt: "Screenshot of Task Manager website",
          description:
            "The Task Manager is a user-friendly web-based application designed to help individuals manage their daily tasks efficiently. This application enables users to quickly add, organize, and prioritize tasks, ensuring they stay on top of their workload.",
          websiteLink: "https://arman75462.github.io/ToDoList/",
          id: 2,
        },
      ],
    },
    ContactSection: {
      title: "Contact",
      subTitle: "Drop me a message",
      endMessage:
        "This is the end! I hope you've gained a good insight into my skills and experiences. If you have opportunities or questions, I’m just a message away. Let's explore how we can contribute to mutual success!",
      contactInfo: {
        telephoneNumber: "1 438 990 8805",
        telephoneNumberImage: "/src/assets/images/phoneIcon.webp",
        telephoneNumberImageAlt: "Phone icon",
        email: "armangulistani@gmail.com",
        emailImage: "/src/assets/images/mailIcon.webp",
        emailImageAlt: "Email icon",
      },
      contactFooter: {
        copyrightText: "© 2024 Arman Gulistani",
        socialMediaInfo: {
          gitHubLink: "https://github.com/Arman75462",
          gitHubImage: "/src/assets/images/githubIcon.webp",
          gitHubImageAlt: "GitHub icon by Icons8",
          linkedInLink: "https://linkedin.com/in/arman-gulistani-115032263",
          linkedInImage: "/src/assets/images/LinkedIn.webp",
          linkedInImageAlt: "LinkedIn icon by Icons8",
        },
      },
    },
  },
  fr: {
    HeaderSection: {
      NavigationSection: [
        {
          text: "Accueil",
          link: "#HeroSection",
          id: 1,
        },
        {
          text: "À propos",
          link: "#AboutSection",
          id: 2,
        },
        {
          text: "Compétences",
          link: "#SkillsSection",
          id: 3,
        },
        {
          text: "Projets",
          link: "#ProjectsSection",
          id: 4,
        },
        {
          text: "Contact",
          link: "#ContactSection",
          id: 5,
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
      résuméLink:
        "https://1drv.ms/w/c/743c0a64b9cc236f/Eajbz59dAJNEhlVY7vKMsHwBAdg0z8ifw8INvd3YuYULeQ?e=0xihJA",
    },
    SkillsSection: {
      title: "Compétences",
      skillsCard: {
        frontEndTools: {
          title: "Développement Front-End",
          skills: [
            {
              name: "HTML",
              imageSource: "/src/assets/images/HTML.webp",
              imageAlt: "Icône HTML par Icons8",
              id: 1,
            },
            {
              name: "CSS",
              imageSource: "/src/assets/images/CSS.webp",
              imageAlt: "Icône CSS par Icons8",
              id: 2,
            },
            {
              name: "JavaScript",
              imageSource: "/src/assets/images/JavaScript.webp",
              imageAlt: "Icône JavaScript par Icons8",
              id: 3,
            },
            {
              name: "React",
              imageSource: "/src/assets/images/react.webp",
              imageAlt: "Icône React par Icons8",
              id: 4,
            },
          ],
        },
        devTools: {
          title: "Outils de Développement",
          skills: [
            {
              name: "NPM",
              imageSource: "/src/assets/images/npm.png",
              imageAlt: "Icône NPM par Icons8",
              id: 1,
            },
            {
              name: "Git",
              imageSource: "/src/assets/images/git.png",
              imageAlt: "Icône Git par Icons8",
              id: 2,
            },
            {
              name: "GitHub",
              imageSource: "/src/assets/images/githubIcon.webp",
              imageAlt: "Icône GitHub par Icons8",
              id: 3,
            },
            {
              name: "Jest",
              imageSource: "/src/assets/images/jest.webp",
              imageAlt: "Icône Jest par Icons8",
              id: 4,
            },
          ],
        },
      },
    },
    ProjectsSection: {
      title: "Mes projets",
      projectsList: [
        {
          title: "EtchASketch",
          imageSource: "/src/assets/images/EtchASketch.webp",
          imageAlt: "Capture d'écran du site web EtchASketch",
          description:
            "Le projet Etch A Sketch est une application de dessin interactive et créative basée sur le web, conçue pour émuler le jouet classique Etch A Sketch. Cette application fournit un canevas virtuel en grille où les utilisateurs peuvent créer des œuvres d'art en pixel détaillées.",
          websiteLink: "https://arman75462.github.io/EtchASketch/",
          id: 1,
        },
        {
          title: "Quizzical",
          imageSource: "/src/assets/images/Quizzical.webp",
          imageAlt: "Capture d'écran du site web Quizzical",
          description:
            "Quizzical est un jeu de quiz captivant qui met vos connaissances à l'épreuve dans divers domaines. Profitez d'une expérience amusante et interactive en répondant aux questions et en vous défiant pour obtenir des scores élevés.",
          websiteLink: "https://quizzical7630.netlify.app/",
          id: 2,
        },
        {
          title: "SimpsonsMatchup",
          imageSource: "/src/assets/images/SimpsonsMatchup.webp",
          imageAlt: "Capture d'écran du site web SimpsonsMatchup",
          description:
            "SimpsonsMatchup est un jeu de mémoire amusant mettant en vedette les personnages des Simpsons. Associez les paires, choisissez différents niveaux de difficulté et profitez des animations, des sons et de la musique. Suivez vos progrès avec le tableau des scores et redémarrez ou ajustez facilement les paramètres.",
          websiteLink: "https://simpsonsmatchup.netlify.app/",
          id: 3,
        },
        {
          title: "Weather-website",
          imageSource: "/src/assets/images/Weather-website.webp",
          imageAlt: "Capture d'écran du site web Weather-website",
          description:
            "Weather Website est une application web conviviale conçue pour fournir aux utilisateurs des informations météorologiques complètes pour différents endroits dans le monde. Cette application est adaptée pour tous ceux qui ont besoin de données météorologiques précises et à jour, que ce soit pour planifier des voyages, des activités en plein air, ou simplement pour la vie quotidienne.",
          websiteLink: "https://arman75462.github.io/Weather-website/",
          id: 4,
        },
        {
          title: "CV Maker",
          imageSource: "/src/assets/images/CVMaker.webp",
          imageAlt: "Capture d'écran du site web CV Maker",
          description:
            "CV Maker est un outil en ligne conçu pour la création de CV professionnels personnalisés selon les différentes candidatures. Il permet aux utilisateurs de télécharger leur CV, d'ajouter une photo personnelle, de personnaliser le schéma de couleurs, parmi d'autres fonctionnalités.",
          websiteLink: "https://incredible-entremet-748e8c.netlify.app/",
          id: 5,
        },
      ],
      loadMoreProjectsList: [
        {
          title: "Tic-Tac-Toe",
          imageSource: "/src/assets/images/TicTacToe.webp",
          imageAlt: "Capture d'écran du site web Tic-Tac-Toe",
          description:
            "Le jeu de Tic-Tac-Toe est une application web attrayante et facile à utiliser qui transporte le jeu intemporel de Tic-Tac-Toe sur une plateforme numérique. Cette application permet à deux joueurs de participer au jeu classique, qui consiste à placer des 'X' et des 'O' dans une grille 3x3, avec pour objectif d'être le premier à aligner trois de leurs symboles, horizontalement, verticalement, ou en diagonale.",
          websiteLink: "https://arman75462.github.io/Tic-Tac-Toe/",
          id: 1,
        },
        {
          title: "Task Manager",
          imageSource: "/src/assets/images/TaskManager.webp",
          imageAlt: "Capture d'écran du site web Task Manager",
          description:
            "Task Manager est une application web conviviale conçue pour aider les individus à gérer leurs tâches quotidiennes de manière efficace. Cette application permet aux utilisateurs d'ajouter, d'organiser et de prioriser rapidement les tâches, assurant ainsi qu'ils restent à jour avec leur charge de travail.",
          websiteLink: "https://arman75462.github.io/ToDoList/",
          id: 2,
        },
      ],
    },
    ContactSection: {
      title: "Contact",
      subTitle: "Laisse moi un message",
      endMessage:
        "C'est la fin ! J'espère que vous avez pu avoir un bon aperçu de mes compétences et de mes expériences. Si vous avez des opportunités ou des questions, je ne suis qu'à un message de distance. Explorons ensemble comment nous pouvons contribuer à un succès mutuel !",
      contactInfo: {
        telephoneNumber: "1 438 990 8805",
        telephoneNumberImage: "/src/assets/images/phoneIcon.webp",
        telephoneNumberImageAlt: "Icône de téléphone",
        email: "armangulistani@gmail.com",
        emailImage: "/src/assets/images/mailIcon.webp",
        emailImageAlt: "Icône de courriel",
      },
      contactFooter: {
        copyrightText: "© 2024 Arman Gulistani",
        socialMediaInfo: {
          gitHubLink: "https://github.com/Arman75462",
          gitHubImage: "/src/assets/images/githubIcon.webp",
          gitHubImageAlt: "Icône GitHub par Icons8",
          linkedInLink: "https://linkedin.com/in/arman-gulistani-115032263",
          linkedInImage: "/src/assets/images/LinkedIn.webp",
          linkedInImageAlt: "Icône LinkedIn par Icons8",
        },
      },
    },
  },
};

export default data;
