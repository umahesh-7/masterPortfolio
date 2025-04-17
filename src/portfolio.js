/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mahesh's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Mahesh Utlapalli Portfolio",
    type: "website",
    url: "http://maheshutlapalli.com/",
  },
};

//Home Page
const greeting = {
  title: "Mahesh Utlapalli",
  logo_name: "MaheshUtlapalli",
  subTitle:
  "Passionate about building impactful, end to end products that blend technology with purpose, crafting scalable systems that drive real world value and long term sustainability.",
  resumeLink:
    "https://drive.google.com/file/d/1rlwNG81pmkDqLBK-zBFlPGDk0aK12GWE/view?usp=sharing",
  portfolio_repository: "https://github.com/umahesh-7/masterPortfolio",
  githubProfile: "https://github.com/umahesh-7",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/umahesh-7",
  // linkedin: "https://www.linkedin.com/in/umahesh/",
  // gmail: "utlapalli.usedu@gmail.com",

  {
    name: "Github",
    link: "https://github.com/umahesh-7",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/umahesh/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:utlapalli.usedu@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Built scalable, responsive web applications using React, NextJS, and TypeScript with a focus on clean architecture and performance optimization.",
        "⚡ Developed cross-platform mobile apps using React Native, leveraging reusable components and modular design patterns for efficient development cycles.",
        "⚡ Engineered robust backend systems with Node.js, Spring Boot, and .NET Core, integrating secure RESTful APIs and microservices to support complex business logic.",
        "⚡ Followed industry best practices with Git, CI/CD pipelines, unit testing, and Agile methodologies to ensure high-quality code delivery across the stack.",
      ],
      softwareSkills: [
        { skillName: "HTML5", fontAwesomeClassname: "simple-icons:html5", style: { color: "#E34F26" } },
        { skillName: "CSS3", fontAwesomeClassname: "fa-css3", style: { color: "#1572B6" } },
        { skillName: "JavaScript", fontAwesomeClassname: "simple-icons:javascript", style: { color: "#F7DF1E" } },
        { skillName: "ReactJS", fontAwesomeClassname: "simple-icons:react", style: { color: "#61DAFB" } },
        { skillName: "NextJS", fontAwesomeClassname: "devicon-plain:nextjs", style: { color: "#000000" } },
        { skillName: "TypeScript", fontAwesomeClassname: "logos:typescript", style: { color: "#3178C6" } },
        { skillName: "NodeJS", fontAwesomeClassname: "devicon-plain:nodejs-wordmark", style: { color: "#339933" } },
        { skillName: ".NET Core", fontAwesomeClassname: "devicon-plain:dotnetcore", style: { color: "#512BD4" } },
        { skillName: "Spring Boot", fontAwesomeClassname: "bxl:spring-boot", style: { color: "#6DB33F" } },
        { skillName: "Flutter", fontAwesomeClassname: "simple-icons:flutter", style: { color: "#02569B", } },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudDevOpsImg",
      skills: [
        "⚡ Designed, deployed, and maintained cloud-native applications on AWS, Azure, and GCP with a strong focus on scalability, availability, and security.",
        "⚡ Built resilient infrastructure using AWS EC2, S3, RDS and Azure App Services, enabling high-performance, fault-tolerant application environments.",
        "⚡ Containerized and orchestrated microservices using Docker and Kubernetes, improving deployment efficiency and reducing environment inconsistencies.",
        "⚡ Developed and automated robust CI/CD pipelines using Azure DevOps, Jenkins, and Git, accelerating release cycles and ensuring seamless rollouts.",
        "⚡ Implemented end-to-end monitoring, logging, and diagnostics with Splunk, Dynatrace, and Azure Application Insights to drive system reliability and proactive issue resolution.",
      ],
      softwareSkills: [
        { skillName: "AWS", fontAwesomeClassname: "simple-icons:amazonaws", style: { color: "#FF9900" } },
        { skillName: "Azure", fontAwesomeClassname: "simple-icons:microsoftazure", style: { color: "#0089D6" } },
        { skillName: "GCP", fontAwesomeClassname: "simple-icons:googlecloud", style: { color: "#4285F4" } },
        { skillName: "Docker", fontAwesomeClassname: "simple-icons:docker", style: { color: "#1488C6" } },
        { skillName: "Kubernetes", fontAwesomeClassname: "simple-icons:kubernetes", style: { color: "#326CE5" } },
        { skillName: "Azure DevOps", fontAwesomeClassname: "devicon:azuredevops", style: { color: "#0078D7" } },
        { skillName: "Jenkins", fontAwesomeClassname: "skill-icons:jenkins-light", style: { color: "#D24939" } },
        { skillName: "Git", fontAwesomeClassname: "skill-icons:git", style: { color: "#F05032" } },
      ],
    },

    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Designed and deployed end-to-end machine learning pipelines for predictive analytics and intelligent decision-making in real-world business environments.",
        "⚡ Applied advanced statistical modeling, time series forecasting, and hypothesis testing to extract actionable insights from large datasets.",
        "⚡ Built deep learning models using TensorFlow and Scikit-learn to solve classification, regression, and NLP problems with measurable accuracy improvements.",
        "⚡ Engineered data preprocessing workflows using Pandas and NumPy, optimizing data pipelines for speed, accuracy, and scalability.",
        "⚡ Created interactive dashboards and compelling visualizations to communicate complex findings to both technical and non-technical stakeholders.",
      ],
      softwareSkills: [
        { skillName: "Python", fontAwesomeClassname: "ion-logo-python", style: { color: "#3776AB" } },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        { skillName: "TensorFlow", fontAwesomeClassname: "logos-tensorflow", style: { backgroundColor: "transparent" } },
        { skillName: "Scikit-learn", fontAwesomeClassname: "skill-icons:scikitlearn-light", style: { color: "#F7931E" } },
        { skillName: "Pandas", fontAwesomeClassname: "devicon-plain:pandas-wordmark", style: { color: "#150458" } },
        { skillName: "NumPy", fontAwesomeClassname: "logos:numpy", style: { color: "#013243" } },
      ],
    },
  ],
};


// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/h170031326",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/mahesh141",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@umahesh143/",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/umahesh_7/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/maheshaa",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Koneru Lakshmaiah Education Foundation",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "klu.jpeg",
      alt_name: "KL University",
      duration: "2017 - 2021",
      descriptions: [
        "💡 Built a strong foundation in software engineering, algorithms, and computer architecture through intensive core coursework — with hands-on development of full-stack applications, scalable backend systems, and real-time software solutions.",
        "🚀 Specialized in Deep Learning, Cloud Computing, and Web Development, actively integrating advanced concepts into academic projects that addressed real-world challenges using technologies like React, Node.js, and AWS.",
        "🛠️ Designed and implemented end-to-end projects in areas such as IoT, intelligent systems, and enterprise applications — demonstrating a consistent ability to bridge theory with industry-ready development practices.",
        "🌱 Spearheaded student-led coding groups and mentored peers in core CS topics, while organizing hackathons and contributing to collaborative development environments that nurtured innovation and team success.",
        "🏆 Recognized for academic excellence and project leadership, consistently ranking among the top performers while pushing the boundaries of traditional curriculum through self-initiated learning and applied experimentation.",
      ],
      website_link: "https://www.kluniversity.in/",
    },
    {
      title: "University at Albany - State University of New York",
      subtitle: "M.S. in Data Science",
      logo_path: "ualbany_logo.png",
      alt_name: "University at Albany - State University of New York",
      duration: "2021 - 2023",
      descriptions: [
        "📚 Gained in-depth expertise in advanced mathematical foundations critical to data science, including Functional Analysis, Optimization of Nonlinear Systems, and Topological Data Analysis (TDA I & II), enabling effective modeling of high-dimensional and complex systems.",
        "🤖 Mastered both theoretical and applied machine learning through courses like Machine Learning and Practical Methods in ML, with hands-on experience in developing predictive models and data-driven solutions across domains.",
        "📈 Strengthened analytical and statistical acumen through focused electives in Business Analytics, Text Mining, and Applied Statistics — combining data-driven thinking with domain knowledge to extract insights and drive decision-making.",
        "🔐 Built a strong understanding of cybersecurity, risk modeling, and data governance in enterprise systems, with focused studies on Risk Assessment, Information Security, and secure data practices across cloud and distributed architectures.",
        "💡 Applied interdisciplinary knowledge in real-world projects involving big data pipelines, model evaluation, and visualization — bridging academia and industry with practical, impactful results."
      ],
      website_link: "https://www.albany.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python Data Structures",
      subtitle: "- University of Michigan",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/X8RLKY7DTEYS",
      alt_name: "Coursera",
      color_code: "#1F70C199",
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      subtitle: "- University of Michigan",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/57LJRYY3CHND",
      alt_name: "Coursera",
      color_code: "#1F70C199",
    },
    {
      title: "Automation Anywhere Certified Advanced RPA Professional",
      subtitle: "- Automation Anywhere",
      logo_path: "Automation_Anywhere_Logo.png",
      certificate_link:
        "https://certificates.automationanywhere.com/89f726f2-0f31-4266-9e4b-c502bf0a8378#acc.waIZkirh",
      alt_name: "Automation Anywhere",
      color_code: "#0C9D5899",
    },
    {
      title: "Automation Anywhere University Certified Essentials RPA Professional V11",
      subtitle: "- Automation Anywhere",
      logo_path: "Automation_Anywhere_Logo.png",
      certificate_link:
        "https://certificates.automationanywhere.com/fa93cc87-0b15-4ade-8424-983cc39ee813#acc.WGlDdf3R",
      alt_name: "Automation Anywhere",
      color_code: "#00000099",
    },
    {
      title: "Certified System Administrator",
      subtitle: "- Servicenow",
      logo_path: "ServiceNow_Logo.png",
      certificate_link:
        "https://drive.google.com/file/d/10cMXXdvcQhYGd12tFOevYYxvIi2WyroT/view?usp=sharing",
      alt_name: "Servicenow",
      color_code: "#2A73CC",
    },
    {
      title: "Java J2EE",
      subtitle: "- Wipro",
      logo_path: "wipro_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/17eTLbv_p739yKTy8EeNVZgreUefM5ybt/view?usp=sharing",
      alt_name: "WIPRO",
      color_code: "#4285F499",
    },
    {
      title: "Big Data Hadoop and spark Developer",
      subtitle: "- Simplilearn",
      logo_path: "simplilearn_logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1ol_JSaF9tJx5nhI5EpwUSPCDj8GtYZC9/view",
      alt_name: "Simplilearn",
      color_code: "#FFBB0099",
    },
    {
      title: "BigQuery for Data Warehousing",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/ed3070e6-780e-413c-96b8-117292534a05/badges/135755",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "BigQuery Basics for Data Analysts",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/ed3070e6-780e-413c-96b8-117292534a05/badges/195655",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Data Engineering",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/ed3070e6-780e-413c-96b8-117292534a05",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Data Science on Google Cloud",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/ed3070e6-780e-413c-96b8-117292534a05/badges/133957",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Google Cloud Essentials",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/ed3070e6-780e-413c-96b8-117292534a05/badges/134869",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Scientific Data Processing",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/ed3070e6-780e-413c-96b8-117292534a05/badges/134710",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Baseline: Data, ML, AI",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/ed3070e6-780e-413c-96b8-117292534a05/badges/131416",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cisco Certified CCNA",
      subtitle: "Cisco Networking Academy",
      logo_path: "cisco_logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1ThqeQPSN9HsdPj6e5StGB6t6JgzaXpA9/view?usp=sharing",
      alt_name: "CISCO",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Professional Experience",
  subtitle: "Full Time, Internship and Volunteership",
  description:
  "Engineered scalable software solutions across diverse domains by leveraging full-stack development, API integration, cloud infrastructure, and DevOps practices. Spearheaded innovation in both agile startups and enterprise teams by architecting intelligent systems focused on performance and maintainability. Facilitated cross-functional collaboration, optimized deployment pipelines, and mentored peers to elevate code quality and delivery standards.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Full Time",
      work: true,
      experiences: [
        {
          title: "Senior Software Engineer",
          company: "Cigna Healthcare",
          company_url: "https://www.cigna.com/?PID=ps_01_23479&customtrack1=0311435&gad_source=1&gclid=Cj0KCQjwqcO_BhDaARIsACz62vP8uV90qErX8wWaKObiJhQq3-JQzipk91qZpFGowWKyv3f76GMZlnMaAoFmEALw_wcB&gclsrc=aw.ds",
          logo_path: "cigna_healthcare-logo.png",
          duration: "July 2024 - Present",
          location: "Raynham, MA, USA",
          description:
          "Led the development of scalable, cross-platform web applications using React Native and Next.js, ensuring high performance and responsive design. Engineered micro-frontend architectures and modular UI components with TypeScript and CSS to streamline feature delivery. Spearheaded containerized deployments using Docker and Kubernetes across AWS and Azure environments, improving infrastructure scalability and reliability. Directed frontend test automation strategy with Jest and Selenium, achieving over 90% test coverage and significantly reducing post-release defects.",
          color: "#000000",
        },
        {
          title: "Software Engineer",
          company: "Office of Information Technology Services, NYS Taxation and Finance",
          company_url: "https://www.tax.ny.gov/",
          logo_path: "nys_office_of_information_technology_services_logo.jpeg",
          duration: "Feb 2024 - June 2024",
          location: "Albany, NY, USA",
          description:
          "Modernized legacy systems by migrating core components from COBOL to Java, enhancing performance and maintainability. Engineered backend integrations across Java, C++, C#, .NET, and AIX DB2, resulting in a 30% increase in system efficiency. Automated critical workflows, reducing manual interventions by 50% and boosting operational throughput. Delivered timely technical resolutions by closing 95% of support tickets within SLA, contributing to a 98% system uptime and improved stakeholder satisfaction.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "Cloud Data Systems Inc",
          company_url: "https://clouddatasystemsus.com/",
          logo_path: "Cloud data systems inc.jpeg",
          duration: "Aug 2022 - Jan 2024",
          location: "Albany, NY, USA",
          description:
          "Engineered and deployed secure, high-performance web applications using React Native, NextJS, and TypeScript, significantly enhancing data integrity and user trust. Implemented J2EE design patterns such as Factory and Singleton to streamline code reusability and maintainability across the SDLC. Developed dynamic, user-centric interfaces with JSP, JavaScript, jQuery, and HTML. Strengthened API security using OAuth2 with Spring Security and optimized complex MySQL queries, reducing response times by 25% and boosting application efficiency.",
          color: "#9b1578",
        },
        {
          title: "Java Full Stack Developer",
          company: "Maxis software Private Limited",
          company_url: "https://www.maxissoft.in/index.php",
          logo_path: "mlogo.png",
          duration: "Aug 2019 - Jul 2021",
          location: "Hyderabad, Telangana, India",
          description:
          "Developed and maintained robust full-stack applications using Java, SQL, MySQL, and HTML5 in Linux-based environments. Enhanced application performance by 40% through optimized database schema design leveraging Oracle and NoSQL technologies. Architected scalable backend systems utilizing J2EE, MVC, Hibernate, and Spring frameworks. Designed and implemented RESTful APIs to ensure seamless integration between frontend and backend services. Spearheaded cloud infrastructure deployments on AWS (EC2, S3, RDS), significantly improving application uptime, scalability, and fault tolerance.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      internships: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "BRAIN O VISION SOLUTIONS (INDIA) PVT LTD",
          company_url: "https://brainovision.org/",
          logo_path: "bovlogo2.svg",
          duration: "Aug 2020 - Sep 2020",
          location: "Guntur, Andhra Pradesh, India",
          description:
          "Applied core machine learning techniques in real-time industry projects, focusing on data preprocessing, feature engineering, and model development. Collaborated with cross-functional teams to analyze datasets and implement predictive models using Python libraries such as Pandas, NumPy, Scikit-learn, and TensorFlow. Delivered actionable insights by evaluating model accuracy and optimizing performance metrics. Gained hands-on experience in rapid prototyping, problem-solving, and adapting to dynamic project requirements in a fast-paced environment.",
          color: "#000000",
        },
        {
          title: "Cyber Security Intern",
          company: "Supraja Technologies",
          company_url: "https://suprajatechnologies.com/",
          logo_path: "suprajatechnologies.jpeg",
          duration: "May 2019 - June 2019",
          location: "Guntur, Andhra Pradesh, India",
          description:
          "Conducted in-depth vulnerability assessments and penetration testing to identify potential security threats and enhance system integrity. Utilized industry-standard tools including Maltego, Nmap, and Steganography to analyze network vulnerabilities and simulate attack vectors. Explored ethical hacking methodologies such as social engineering, DoS, and DDoS attacks to understand real-world threat models. Delivered a comprehensive presentation on findings, earning recognition for outstanding technical clarity and communication. Strengthened foundational knowledge in cybersecurity protocols, risk mitigation, and ethical hacking practices.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      volunteerships: true, 
      experiences: [
        {
          title: "Student Researcher - R&D",
          company: "KL University",
          company_url: "https://www.kluniversity.in/",
          logo_path: "KLU_logo.jpeg",
          duration: "Jan 2018 - Jun 2019",
          location: "Guntur, Andhra Pradesh, India",
          description:
          "Collaborated on research-led software development initiatives, focusing on rapid prototyping, data modeling, and system simulation for real-world applications. Designed and tested proof-of-concept solutions, contributing to the development of intelligent systems with academic and practical relevance. Authored technical documentation and reports to support ongoing innovation cycles. Gained hands-on experience with ServiceNow, enhancing skills in workflow automation and enterprise service management. Demonstrated strong analytical thinking, adaptability, and teamwork within a high-impact R&D environment.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Designed and delivered innovative software solutions by combining computer science principles with robust full-stack development. Leveraged modern frameworks, cloud technologies, and database systems to build scalable, high-performance applications. These projects showcase my ability to architect user-centric platforms, streamline data pipelines, and solve real-world problems through clean, maintainable code.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "A Novel Approach to Apply Different Algorithms to Predict COVID-19 Disease",
      name: "A Novel Approach to Apply Different Algorithms to Predict COVID-19 Disease",
      createdAt: "2022-02-01T00:00:00Z",
      description: "Paper published in Springer",
      url: "https://link.springer.com/chapter/10.1007/978-981-16-6460-1_6",
    },
    {
      id: "GuidoBot: A Novel Approach for Assisting Faculty in Tracking Goals and finding tasks",
      name: "GuidoBot: A Novel Approach for Assisting Faculty in Tracking Goals and finding tasks",
      createdAt: "2021-02-26T00:00:00Z",
      description: "Paper published in IEEE",
      url: "https://ieeexplore.ieee.org/document/9358613",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Mahesh_Animated.png",
    description:
      "I'm active on most social platforms and always open to connecting. Feel free to reach out — I typically respond within 24 hours. I'm always happy to collaborate, assist, or just have a meaningful tech conversation.",
  },
  addressSection: {
    title: "Address",
    subtitle: "King Philip St, Raynham, MA, 02767",
    locality: "Raynham",
    country: "USA",
    region: "Boston",
    postalCode: "02767",
    streetAddress: "King Philip St",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/YTpP6qyXvqvW3uQPA",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};