import heroImage from "/src/assets/images/heroImage.webp";

/* Skills images */
import cssIcon from "/src/assets/images/CSS.webp";
import gitIcon from "/src/assets/images/git.png";
import githubIcon from "/src/assets/images/githubIcon.webp";
import htmlIcon from "/src/assets/images/HTML.webp";
import javascriptIcon from "/src/assets/images/JavaScript.webp";
import jestIcon from "/src/assets/images/jest.webp";
import npmIcon from "/src/assets/images/npm.png";
import reactIcon from "/src/assets/images/react.webp";
import expressIcon from "/src/assets/images/expressIcon.webp";
import nodeJsIcon from "/src/assets/images/nodeJsIcon.webp";
import postgresIcon from "/src/assets/images/postgresIcon.webp";
import CIcon from "/src/assets/images/CIcon.svg";
import javaIcon from "/src/assets/images/javaIcon.svg";
import pythonIcon from "/src/assets/images/pythonIcon.webp";
import typescriptIcon from "/src/assets/images/typescriptIcon.webp";

/* Projects images */
import cvMakerImage from "/src/assets/images/CVMaker.webp";
import etchASketchImage from "/src/assets/images/EtchASketch.webp";
import quizzicalImage from "/src/assets/images/Quizzical.webp";
import simpsonsMatchupImage from "/src/assets/images/SimpsonsMatchup.webp";
import taskManagerImage from "/src/assets/images/TaskManager.webp";
import tictactoeImage from "/src/assets/images/TicTacToe.webp";
import weatherWebsiteImage from "/src/assets/images/WeatherWebsite.webp";
import jewelHouseImage from "/src/assets/images/jewelHouse.webp";
import memoryDuelImage from "/src/assets/images/memoryDuel.webp";
import inventoryApplicationImage from "/src/assets/images/InventoryApplicationImage.webp";
import readySiteImage from "/src/assets/images/readySiteImage.webp";

/* Contact info images */
import mailIcon from "/src/assets/images/mailIcon.webp";

/* Social media images */
import linkedinIcon from "/src/assets/images/LinkedIn.webp";

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
        career: "Full-Stack Developer",
      },
      heroImageSource: heroImage,
      heroImageAlt: "Matrix code",
    },
    AboutSection: {
      title: "About me",
      personalIntroductionP1:
        "Hi! I'm Arman, a full-stack developer passionate about creating clean, efficient code and engaging user experiences. I specialize in transforming ideas into visually appealing and user-friendly websites that drive results.",
      personalIntroductionP2:
        "I’m committed to continuously learning and mastering the latest technologies to deliver top-notch solutions that meet both user needs and business objectives. My approach blends creativity with technical expertise to ensure every project is not just functional but exceptional.",
      personalIntroductionP3:
        "Excited to bring my skills to a talented team and be part of innovative projects. I look forward to collaborating to create exceptional solutions!",
      résuméLink: "/Résumé-English.pdf",
    },
    SkillsSection: {
      title: "Skillset",
      skillsCard: {
        frontEndTools: {
          title: "Front-End Development",
          skills: [
            {
              name: "HTML",
              imageSource: htmlIcon,
              imageAlt: "HTML icon",
              id: 1,
            },
            {
              name: "CSS",
              imageSource: cssIcon,
              imageAlt: "CSS icon",
              id: 2,
            },
            {
              name: "JavaScript",
              imageSource: javascriptIcon,
              imageAlt: "JavaScript icon",
              id: 3,
            },
            {
              name: "TypeScript",
              imageSource: typescriptIcon,
              imageAlt: "TypeScript icon",
              id: 4,
            },
            {
              name: "React",
              imageSource: reactIcon,
              imageAlt: "React icon",
              id: 5,
            },
          ],
        },
        backEndTools: {
          title: "Back-End Development",
          skills: [
            {
              name: "NodeJs",
              imageSource: nodeJsIcon,
              imageAlt: "Node.js icon",
              id: 1,
            },
            {
              name: "Express",
              imageSource: expressIcon,
              imageAlt: "Express icon",
              id: 2,
            },
            {
              name: "PostgreSQL",
              imageSource: postgresIcon,
              imageAlt: "PostgreSQL icon",
              id: 3,
            },
          ],
        },
        devTools: {
          title: "Development Tools",
          skills: [
            {
              name: "NPM",
              imageSource: npmIcon,
              imageAlt: "NPM icon",
              id: 1,
            },
            {
              name: "Git",
              imageSource: gitIcon,
              imageAlt: "Git icon",
              id: 2,
            },
            {
              name: "GitHub",
              imageSource: githubIcon,
              imageAlt: "GitHub icon",
              id: 3,
            },
            {
              name: "Jest",
              imageSource: jestIcon,
              imageAlt: "Jest icon",
              id: 4,
            },
          ],
        },
        coreProgrammingLanguages: {
          title: "Core Programming Languages",
          skills: [
            {
              name: "Java",
              imageSource: javaIcon,
              imageAlt: "Java icon",
              id: 1,
            },
            {
              name: "C",
              imageSource: CIcon,
              imageAlt: "C icon",
              id: 2,
            },
            {
              name: "Python",
              imageSource: pythonIcon,
              imageAlt: "Python icon",
              id: 3,
            },
          ],
        },
      },
    },

    ProjectsSection: {
      title: "My projects",
      projectLinkTextProjectsLists: "View Project",
      projectsList: [
        {
          title: "Jewel House",
          imageSource: jewelHouseImage,
          imageAlt: "Screenshot of Jewel House website",
          description:
            "Jewel House is a sleek, React-based web application that offers a sophisticated online shopping experience. With a refined interface and a dynamic cart system, it ensures smooth navigation and real-time updates for an elegant shopping journey. (Note: This is a fictitious example and does not reflect an actual online store.)",
          websiteLink: "https://jewel-house.netlify.app",
          id: 1,
        },
        {
          title: "Inventory Application",
          imageSource: inventoryApplicationImage,
          imageAlt: "Screenshot of Inventory Application website",
          description:
            "Frootie Inventory Application is a full-stack inventory system built with Node.js, Express.js, EJS, and PostgreSQL. It enables full CRUD management of products and categories with relational integrity, server-side validation, and secure SQL queries. The project highlights clean MVC architecture, practical handling of relational databases, and production-ready backend design, demonstrating real-world full-stack development skills beyond tutorials.",
          websiteLink: "https://inventory-application-qu0a.onrender.com",
          id: 2,
        },
        {
          title: "Memory-Duel",
          imageSource: memoryDuelImage,
          imageAlt: "Screenshot of Memory-Duel website",
          description:
            "Dive into Memory Duel, a head-to-head card matching game for two players. Compete to find pairs and score points, all while enjoying the game’s dynamic visuals, smooth animations, and sound effects. This player vs player challenge is designed to test your memory skills and quick thinking. Ready to see who has the sharper memory?",
          websiteLink: "https://memory-duel.netlify.app/",
          id: 3,
        },
        {
          title: "SimpsonsMatchup",
          imageSource: simpsonsMatchupImage,
          imageAlt: "Screenshot of SimpsonsMatchup website",
          description:
            "Engage in a fun-filled memory challenge with our React-based game featuring The Simpsons. Successfully click on each card just once to win, but beware—clicking the same card twice spells defeat. The game increases in difficulty by randomizing the cards with each click, keeping you on your toes.",
          websiteLink: "https://simpsonsmatchup.netlify.app/",
          id: 4,
        },
        {
          title: "ReadySite",
          imageSource: readySiteImage,
          imageAlt: "Screenshot of ReadySite website",
          description:
            "ReadySite is a flexible and customizable website template designed to help users quickly create websites for clients. Built with React, it features a dynamic and responsive interface that can be tailored to suit a variety of industries. This template offers a ready-to-use structure that clients can easily personalize and deploy.",
          websiteLink: "https://readysite.netlify.app/",
          id: 5,
        },
        {
          title: "Quizzical",
          imageSource: quizzicalImage,
          imageAlt: "Screenshot of Quizzical website",
          description:
            "Quizzical is an engaging trivia quiz game that tests your knowledge across various topics. Enjoy a fun and interactive experience as you answer questions and challenge yourself to achieve high scores.",
          websiteLink: "https://quizzical7630.netlify.app/",
          id: 6,
        },
        {
          title: "CV Maker",
          imageSource: cvMakerImage,
          imageAlt: "Screenshot of CV Maker website",
          description:
            "CV Maker is an online tool designed for crafting professional resumes customized to various job applications. It enables users to download their CVs, add personal photos, and customize the color scheme, among other features.",
          websiteLink: "https://incredible-entremet-748e8c.netlify.app/",
          id: 7,
        },
      ],
      loadMoreProjectsList: [
        {
          title: "Tic-Tac-Toe",
          imageSource: tictactoeImage,
          imageAlt: "Screenshot of Tic-Tac-Toe website",
          description:
            "The Tic-Tac-Toe Game is an engaging and user-friendly web-based application that brings the timeless game of Tic-Tac-Toe to a digital platform. This application allows two players to engage in the classic game, which involves placing 'X's and 'O's in a 3x3 grid, with the goal of being the first to line up three of their symbols either horizontally, vertically, or diagonally.",
          websiteLink: "https://arman75462.github.io/Tic-Tac-Toe/",
          id: 1,
        },
        {
          title: "Weather-website",
          imageSource: weatherWebsiteImage,
          imageAlt: "Screenshot of Weather-website",
          description:
            "The Weather Website is a user-friendly, web-based application designed to provide users with comprehensive weather information for various locations around the world. This application is tailored for anyone needing accurate and up-to-date weather data, whether for planning travel, outdoor activities, or just daily life.",
          websiteLink: "https://arman75462.github.io/Weather-website/",
          id: 2,
        },
        {
          title: "Task Manager",
          imageSource: taskManagerImage,
          imageAlt: "Screenshot of Task Manager website",
          description:
            "The Task Manager is a user-friendly web-based application designed to help individuals manage their daily tasks efficiently. This application enables users to quickly add, organize, and prioritize tasks, ensuring they stay on top of their workload.",
          websiteLink: "https://arman75462.github.io/ToDoList/",
          id: 3,
        },
        {
          title: "EtchASketch",
          imageSource: etchASketchImage,
          imageAlt: "Screenshot of EtchASketch website",
          description:
            "The Etch A Sketch project is a creative and interactive web-based drawing application designed to emulate the classic Etch A Sketch toy. This application provides a virtual grid canvas where users can create detailed pixel art.",
          websiteLink: "https://etch-a-sketch7630.netlify.app/",
          id: 4,
        },
      ],
    },
    ContactSection: {
      title: "Contact",
      subTitle: "Drop me a message",
      endMessage:
        "This is the end! I hope you've gained a good insight into my skills and experiences. If you have opportunities or questions, I’m just a message away. Let's explore how we can contribute to mutual success!",
      contactInfo: {
        telephoneNumberImageAlt: "Phone icon",
        email: "armangulistani@gmail.com",
        emailImage: mailIcon,
        emailImageAlt: "Email icon",
      },
      contactFooter: {
        copyrightText: "© 2026 Arman Gulistani",
        socialMediaInfo: {
          gitHubLink: "https://github.com/Arman75462",
          gitHubImage: githubIcon,
          gitHubImageAlt: "GitHub icon",
          linkedInLink: "https://linkedin.com/in/arman-gulistani-115032263",
          linkedInImage: linkedinIcon,
          linkedInImageAlt: "LinkedIn icon",
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
        career: "Développeur Full-Stack",
      },
      heroImageSource: heroImage,
      heroImageAlt: "Code matrix",
    },
    AboutSection: {
      title: "À propos",
      personalIntroductionP1:
        "Bonjour ! Je suis Arman, un développeur full-stack passionné par la création de code propre et efficace et d'expériences utilisateur engageantes. Je me spécialise dans la transformation d'idées en sites web esthétiques et conviviaux qui produisent des résultats.",
      personalIntroductionP2:
        "Je suis déterminé à apprendre et à maîtriser les dernières technologies pour fournir des solutions de qualité qui répondent aux besoins des utilisateurs et aux objectifs commerciaux. Mon approche combine créativité et expertise technique pour garantir que chaque projet soit non seulement fonctionnel, mais aussi exceptionnel.",
      personalIntroductionP3:
        "Je suis motivé par l'idée de contribuer avec mes compétences à une équipe talentueuse et de participer à des projets innovants. J'ai hâte de collaborer avec vous pour créer des solutions exceptionnelles !",
      résuméLink: "/Résumé-Français.pdf",
    },
    SkillsSection: {
      title: "Compétences",
      skillsCard: {
        frontEndTools: {
          title: "Développement Front-End",
          skills: [
            {
              name: "HTML",
              imageSource: htmlIcon,
              imageAlt: "Icône HTML",
              id: 1,
            },
            {
              name: "CSS",
              imageSource: cssIcon,
              imageAlt: "Icône CSS",
              id: 2,
            },
            {
              name: "JavaScript",
              imageSource: javascriptIcon,
              imageAlt: "Icône JavaScript",
              id: 3,
            },
            {
              name: "TypeScript",
              imageSource: typescriptIcon,
              imageAlt: "Icône TypeScript",
              id: 4,
            },
            {
              name: "React",
              imageSource: reactIcon,
              imageAlt: "Icône React",
              id: 5,
            },
          ],
        },
        backEndTools: {
          title: "Développement Back-End",
          skills: [
            {
              name: "NodeJs",
              imageSource: nodeJsIcon,
              imageAlt: "Icône Node.js",
              id: 1,
            },
            {
              name: "Express",
              imageSource: expressIcon,
              imageAlt: "Icône Express",
              id: 2,
            },
            {
              name: "PostgreSQL",
              imageSource: postgresIcon,
              imageAlt: "Icône PostgreSQL",
              id: 3,
            },
          ],
        },
        devTools: {
          title: "Outils de Développement",
          skills: [
            {
              name: "NPM",
              imageSource: npmIcon,
              imageAlt: "Icône NPM",
              id: 1,
            },
            {
              name: "Git",
              imageSource: gitIcon,
              imageAlt: "Icône Git",
              id: 2,
            },
            {
              name: "GitHub",
              imageSource: githubIcon,
              imageAlt: "Icône GitHub",
              id: 3,
            },
            {
              name: "Jest",
              imageSource: jestIcon,
              imageAlt: "Icône Jest",
              id: 4,
            },
          ],
        },
        coreProgrammingLanguages: {
          title: "Langages de Programmation Fondamentaux",
          skills: [
            {
              name: "Java",
              imageSource: javaIcon,
              imageAlt: "Icône Java",
              id: 1,
            },
            {
              name: "C",
              imageSource: CIcon,
              imageAlt: "Icône C",
              id: 2,
            },
            {
              name: "Python",
              imageSource: pythonIcon,
              imageAlt: "Icône Python",
              id: 3,
            },
          ],
        },
      },
    },
    ProjectsSection: {
      title: "Mes projets",
      projectLinkTextProjectsLists: "Voir Projet",
      projectsList: [
        {
          title: "Jewel House",
          imageSource: jewelHouseImage,
          imageAlt: "Capture d'écran du site web Jewel House",
          description:
            "Jewel House est une application élégante basée sur React qui offre une expérience d'achat en ligne sophistiquée. Avec une interface raffinée et un système de panier dynamique, elle assure une navigation fluide et des mises à jour en temps réel pour un parcours d'achat élégant. (Note : Ce site web est un exemple fictif et ne reflète pas une boutique en ligne réelle.)",
          websiteLink: "https://jewel-house.netlify.app",
          id: 1,
        },
        {
          title: "Frootie Inventory Application",
          imageSource: inventoryApplicationImage,
          imageAlt: "Capture d'écran du site Inventory Application",
          description:
            "Frootie Inventory Application est une application full-stack développée avec Node.js, Express.js, EJS et PostgreSQL. Elle permet de gérer efficacement produits et catégories avec CRUD complet, intégrité relationnelle et requêtes SQL sécurisées. Le projet met en avant une architecture MVC claire, un backend robuste et des compétences full-stack concrètes prêtes pour un environnement réel.",
          websiteLink: "https://inventory-application-qu0a.onrender.com",
          id: 2,
        },
        {
          title: "Memory-Duel",
          imageSource: memoryDuelImage,
          imageAlt: "Screenshot of Memory_Duel website",
          description:
            "Plongez dans Duel de Mémoire, un jeu de cartes compétitif pour deux joueurs. Affrontez un adversaire pour trouver des paires de cartes et marquer des points, tout en profitant de visuels dynamiques, d'animations fluides et d'effets sonores. Ce défi joueur contre joueur est conçu pour tester vos compétences de mémoire et votre rapidité d'esprit. Prêt à découvrir qui a la meilleure mémoire ?",
          websiteLink: "https://memory-duel.netlify.app/",
          id: 3,
        },
        {
          title: "SimpsonsMatchup",
          imageSource: simpsonsMatchupImage,
          imageAlt: "Capture d'écran du site web SimpsonsMatchup",
          description:
            "Plongez dans un défi de mémoire amusant avec notre jeu basé sur React mettant en vedette Les Simpsons. Cliquez avec succès sur chaque carte juste une fois pour triompher, mais attention — cliquer deux fois sur la même carte entraîne une défaite. Le jeu augmente en difficulté en mélangeant les cartes à chaque clic, vous gardant en alerte. ",
          websiteLink: "https://simpsonsmatchup.netlify.app/",
          id: 4,
        },
        {
          title: "ReadySite",
          imageSource: readySiteImage,
          imageAlt: "Capture d'écran du site ReadySite",
          description:
            "ReadySite est un modèle de site web flexible et personnalisable conçu pour aider les utilisateurs à créer rapidement des sites pour leurs clients. Développé avec React, il propose une interface dynamique et responsive qui peut être adaptée à divers secteurs. Ce modèle offre une structure prête à l'emploi que les clients peuvent facilement personnaliser et déployer.",
          websiteLink: "https://readysite.netlify.app/",
          id: 5,
        },

        {
          title: "Quizzical",
          imageSource: quizzicalImage,
          imageAlt: "Capture d'écran du site web Quizzical",
          description:
            "Quizzical est un jeu de quiz captivant qui met vos connaissances à l'épreuve dans divers domaines. Profitez d'une expérience amusante et interactive en répondant aux questions et en vous défiant pour obtenir des scores élevés.",
          websiteLink: "https://quizzical7630.netlify.app/",
          id: 6,
        },
        {
          title: "CV Maker",
          imageSource: cvMakerImage,
          imageAlt: "Capture d'écran du site web CV Maker",
          description:
            "CV Maker est un outil en ligne conçu pour la création de CV professionnels personnalisés selon les différentes candidatures. Il permet aux utilisateurs de télécharger leur CV, d'ajouter une photo personnelle, de personnaliser le schéma de couleurs, parmi d'autres fonctionnalités.",
          websiteLink: "https://incredible-entremet-748e8c.netlify.app/",
          id: 7,
        },
      ],
      loadMoreProjectsList: [
        {
          title: "Tic-Tac-Toe",
          imageSource: tictactoeImage,
          imageAlt: "Capture d'écran du site web Tic-Tac-Toe",
          description:
            "Le jeu de Tic-Tac-Toe est une application web attrayante et facile à utiliser qui transporte le jeu intemporel de Tic-Tac-Toe sur une plateforme numérique. Cette application permet à deux joueurs de participer au jeu classique, qui consiste à placer des 'X' et des 'O' dans une grille 3x3, avec pour objectif d'être le premier à aligner trois de leurs symboles, horizontalement, verticalement, ou en diagonale.",
          websiteLink: "https://arman75462.github.io/Tic-Tac-Toe/",
          id: 1,
        },
        {
          title: "Weather-website",
          imageSource: weatherWebsiteImage,
          imageAlt: "Capture d'écran du site web Weather-website",
          description:
            "Weather Website est une application web conviviale conçue pour fournir aux utilisateurs des informations météorologiques complètes pour différents endroits dans le monde. Cette application est adaptée pour tous ceux qui ont besoin de données météorologiques précises et à jour, que ce soit pour planifier des voyages, des activités en plein air, ou simplement pour la vie quotidienne.",
          websiteLink: "https://arman75462.github.io/Weather-website/",
          id: 2,
        },
        {
          title: "Task Manager",
          imageSource: taskManagerImage,
          imageAlt: "Capture d'écran du site web Task Manager",
          description:
            "Task Manager est une application web conviviale conçue pour aider les individus à gérer leurs tâches quotidiennes de manière efficace. Cette application permet aux utilisateurs d'ajouter, d'organiser et de prioriser rapidement les tâches, assurant ainsi qu'ils restent à jour avec leur charge de travail.",
          websiteLink: "https://arman75462.github.io/ToDoList/",
          id: 3,
        },
        {
          title: "EtchASketch",
          imageSource: etchASketchImage,
          imageAlt: "Capture d'écran du site web EtchASketch",
          description:
            "Le projet Etch A Sketch est une application de dessin interactive et créative basée sur le web, conçue pour émuler le jouet classique Etch A Sketch. Cette application fournit un canevas virtuel en grille où les utilisateurs peuvent créer des œuvres d'art en pixel détaillées.",
          websiteLink: "https://etch-a-sketch7630.netlify.app/",
          id: 4,
        },
      ],
    },
    ContactSection: {
      title: "Contact",
      subTitle: "Laisse moi un message",
      endMessage:
        "C'est la fin ! J'espère que vous avez pu avoir un bon aperçu de mes compétences et de mes expériences. Si vous avez des opportunités ou des questions, je ne suis qu'à un message de distance. Explorons ensemble comment nous pouvons contribuer à un succès mutuel !",
      contactInfo: {
        telephoneNumberImageAlt: "Icône de téléphone",
        email: "armangulistani@gmail.com",
        emailImage: mailIcon,
        emailImageAlt: "Icône de courriel",
      },
      contactFooter: {
        copyrightText: "© 2026 Arman Gulistani",
        socialMediaInfo: {
          gitHubLink: "https://github.com/Arman75462",
          gitHubImage: githubIcon,
          gitHubImageAlt: "Icône GitHub",
          linkedInLink: "https://linkedin.com/in/arman-gulistani-115032263",
          linkedInImage: linkedinIcon,
          linkedInImageAlt: "Icône LinkedIn",
        },
      },
    },
  },
};

export default data;
