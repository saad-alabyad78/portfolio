import EduerkaImg from "./../images/EduerkaImg.png";
import NwafrhaImg from "./../images/NwafrhaImg.webp";
import MuahepImg from "./../images/MuahepImg.svg";
import BaraImg from "./../images/BaraImg.png";
import TheqaImg from "./../images/TheqaImg.webp";

export const Bio = {
  name: "Saad Al-Abyad",
  roles: ["Backend Developer", "AI Engineering Student", "Software Engineer"],
  description:
    "Backend Developer and AI student with a strong foundation in Laravel, .NET, and Spring Boot. Experienced in designing scalable systems, optimizing APIs, and integrating AI techniques into production-ready solutions. Passionate about clean code, refactoring, and leveraging algorithms to build smarter, more efficient applications.",
  github: "https://github.com/saad-alabyad78",
  gitlab: "https://gitlab.com/saad-alabyad78",
  resume: "/mycv.pdf",
  linkedin: "https://www.linkedin.com/in/saad-alabyad-16a92a244/",
  twitter: "",
  insta: "",
  facebook: "https://www.facebook.com/saad.alabyad.92/",
  whatsapp: "963996725629", // just the number (no + or spaces)
  telegram: "saad20034", // without @
};

export const skills = [
  {
    title: "Backend",
    skills: [
      { name: "Laravel", image: "https://laravel.com/img/logomark.min.svg" },
      { name: "PHP", image: "https://www.php.net/images/logos/php-logo.svg" },
      {
        name: ".NET Core",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
      },
      {
        name: "Spring Boot",
        image: "https://img.icons8.com/color/48/spring-logo.png",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "PostgreSQL",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "SQL Server",
        image: "https://img.icons8.com/color/48/microsoft-sql-server.png",
      },
      {
        name: "GraphQL",
        image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      },
      { name: "Three.js", image: "https://threejs.org/files/favicon.ico" },
      {
        name: "Laravel Blade",
        image: "https://laravel.com/img/logomark.min.svg",
      },
    ],
  },
  {
    title: "DevOps",
    skills: [
      {
        name: "Linux",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png",
      },
      {
        name: "Nginx",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg",
      },
      {
        name: "Apache",
        image:
          "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-apache-a-free-and-open-source-cross-platform-web-server-software-logo-color-tal-revivo.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Git",
        image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "GitLab",
        image:
          "https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Backend Developer",
    company: "ICR Company",
    date: "Jun 2024 - Apr 2025",
    desc: "Built and maintained robust backend systems using Laravel and MySQL. Led API development, integrated payment gateways, and ensured server stability with Linux and Docker deployments. Collaborated cross-functionally across product and design teams.",
    skills: ["Laravel", "PHP", "MySQL", "Linux", "Docker", "REST APIs"],
  },
  {
    id: 1,
    role: "Backend Developer (Freelance)",
    company: "Al Hadara Group",
    date: "Sep 2023 - Oct 2023",
    desc: "Developed a transportation route optimization system for educational institutions using Laravel and Flutter, featuring JWT authentication and A*/BFS algorithms for efficient pathfinding.",
    skills: ["Laravel", "Flutter", "JWT", "Algorithms", "A*", "BFS"],
  },
];

export const education = [
  {
    id: 0,
    school: "Damascus University",
    date: "Oct 2021 - Aug 2026",
    grade: "AI Engineering - Ongoing",
    desc: "Pursuing Bachelor's degree in Artificial Intelligence Engineering. Engaged in algorithmic problem solving and backend system architecture.",
    degree: "Bachelor of Engineering, Artificial Intelligence",
  },
];

export const projects = [
  {
    id: 0,
    title: "Eduerka",
    date: "2024",
    description:
      "An educational web platform with dashboards allowing students to explore courses, internships, consultations, blogs, and process payments. Supports multiple languages (Arabic, English, French).",
    tags: ["Laravel", "PHP", "MySQL", "REST API", "PayPal", "Multilingual"],
    category: "web app",
    github: "",
    webapp: "https://ed-eureka.com/",
    image: EduerkaImg,
    avatar: EduerkaImg,
  },
  {
    id: 1,
    title: "Nwafrha",
    date: "2024",
    description:
      "An e-commerce platform with dashboards for providers and purchasers to manage services, bookings, and payments.",
    tags: ["Laravel", "PHP", "MySQL", "Booking", "Payments"],
    category: "web app",
    github: "",
    webapp: "https://nwafrha-site.nwafrha.com/",
    image: NwafrhaImg,
    avatar: NwafrhaImg,
  },
  {
    id: 2,
    title: "Muahep LMS",
    date: "2024",
    description:
      "An LMS system for schools offering lessons, exams, and user roles (teachers/students), accessible via app, web, and dashboard.",
    tags: ["Laravel", "LMS", "Multiplatform", "MySQL"],
    category: "web app",
    github: "",
    webapp: "https://muahep.com.sy/",
    image: MuahepImg,
    avatar: MuahepImg,
  },
  {
    id: 3,
    title: "Baraa LMS",
    date: "2024",
    description:
      "A feature-rich LMS for institutions including attendance, homework, parent interaction, salary and statistics, with strict access control and permission systems.",
    tags: ["Laravel", "LMS", "Role-based Access", "Statistics", "MySQL"],
    category: "web app",
    github: "",
    webapp: "",
    image: BaraImg,
    avatar: BaraImg,
  },
  {
    id: 4,
    title: "ELITE LMS",
    date: "2024",
    description:
      "LMS system with section/course/exam creation, automated exam handling, and user role management.",
    tags: ["Laravel", "LMS", "Automated Exams"],
    category: "web app",
    github: "",
    webapp:
      "https://www.linkedin.com/posts/icrcompany_aetaeuaedaerabraepaesaeuaewaeqaer-aepaesaesaehaesaeyaetabraepaesaezaeqaetaey-activity-7295728454988103680-sr-_/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADymUmIBYuZIntlzGZjiJbPnxow-30o6nCM",
  },
  {
    id: 5,
    title: "Theqa LMS",
    date: "2024",
    description:
      "An LMS solution focused on course delivery and educational assessment with automation features.",
    tags: ["Laravel", "Education", "Automation", "PHP"],
    category: "web app",
    github: "",
    webapp: "https://theqa-team.com/",
    image: TheqaImg,
    avatar: TheqaImg,
  },
  {
    id: 6,
    title: "Beauty Station",
    date: "2024",
    description:
      "A service marketplace platform enabling providers to list services and customers to book and manage orders. Payment and refund handling included.",
    tags: ["Laravel", "Marketplace", "PayPal", "Dashboard"],
    category: "web app",
    github: "",
    webapp:
      "https://www.linkedin.com/posts/icrcompany_aepaesaeqaezaepaejabraepaesaesaehaesaeyaetaey-activity-7295101800557268993-uTRr/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADymUmIBYuZIntlzGZjiJbPnxow-30o6nCM",
  },
  {
    id: 7,
    title: "Tamkeen LMS",
    date: "2024",
    description:
      "Advanced LMS supporting unit-based learning, auto-generated exams, and dynamic content delivery.",
    tags: ["Laravel", "Education", "Exam Generator", "Dashboard"],
    category: "web app",
    github: "",
    webapp: "",
  },
  {
    id: 8,
    title: "Khareejen LMS",
    date: "2024",
    description:
      "LMS accessible across platforms (app/web/dashboard) with section, lesson, exam, and user control modules.",
    tags: ["Laravel", "LMS", "Multiplatform", "Automation"],
    category: "web app",
    github: "",
    webapp: "",
  },
  {
    id: 9,
    title: "Pet Care (Refactor)",
    date: "2024",
    description:
      "Refactored codebase for an animal care app to improve maintainability and code structure.",
    tags: ["Refactoring", "Laravel"],
    category: "maintenance",
    github: "",
    webapp: "",
  },
  {
    id: 10,
    title: "Bahj Al Deaa (Refactor)",
    date: "2024",
    description:
      "Refactored an e-commerce web platform managing services, products, carts, and payments.",
    tags: ["Refactoring", "Laravel", "E-commerce"],
    category: "maintenance",
    github: "",
    webapp: "",
  },
  {
    id: 11,
    title: "Hurry Up - Transportation App",
    date: "2023",
    description:
      "Educational route planning app with real-time optimization using A* and BFS algorithms. Includes JWT auth, Laravel backend, Docker deployment.",
    tags: ["Laravel", "Flutter", "A*", "BFS", "JWT", "Docker"],
    category: "mobile app",
    github: "https://github.com/saad-alabyad78/HurryUp-docker",
    webapp: "",
  },
];
