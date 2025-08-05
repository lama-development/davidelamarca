export default {
  lang: "en",
  meta: {
    title: "Davide La Marca - Websites & SEO"
  },
  navbar: {
    brand: "davidelamarca",
    page1: "Home",
    page2: "Projects",
    page3: "Contact",
    aria: {
      menu: "Toggle menu"
    }
  },
  hero: {
    badge: "Freelance Web Developer",
    title1: "New website,",
    title2: "new chapter",
    subtitle: "Being online isn't enough. What matters is being there the right way. Discover how I can create or refresh the website you truly deserve.",
    button: "Get started",
    aria: {
      scroll: "Scroll down"
    }
  },
  services: {
    badge: "Services",
    title: "Your website, done right",
    subtitle: "Complete solutions to bring your business online — the right way.",
    serviceTitle1: "Web Development",
    serviceTitle2: "Web Design",
    serviceTitle3: "SEO & Best Practices",
    serviceSubtitle1: "Modern, fast, and responsive websites designed to deliver the best user experience.",
    serviceSubtitle2: "Intuitive interfaces that enhance navigation and turn visitors into customers.",
    serviceSubtitle3: "SEO optimization and development following best practices for visibility and performance."
  },
  projects: {
    badge: "Projects",
    title: "Real projects, actual results",
    subtitle: "Some of the work I've delivered for my clients.",
    button: "View all projects",
    project1: {
      title: "Sorrento Boat Trips",
      type: "Website",
      description: "Modern website for a private boat tour agency in Sorrento, featuring an online booking system integrated with FareHarbor.",
      button: "View project"
    },
    project2: {
      title: "SkillBridge",
      type: "Web app",
      description: "Fully functional web app connecting freelancers and companies: job posts, advanced search, real-time chat, and customizable profiles.",
      button: "View project"
    }
  },
  faq: {
    badge: "FAQ",
    title: "Questions? Answers!",
    subtitle: "Here are the answers to the most frequently asked questions about my work.",
    questions: [
      {
        question: "How much does a professional website cost?",
        answer: "The cost of a website depends on many factors: complexity, required features, timelines, and goals. Each project is evaluated individually based on your needs. <a href='/contact' aria-label='Open contact page' class='text-sky-600 hover:underline dark:text-sky-400'>Contact me</a> to receive a personalized quote."
      },
      {
        question: "How long does it take to build a website?",
        answer: "Development time varies depending on the complexity of the project. A showcase website may take 3-4 weeks, while more complex projects with advanced features can take 2-3 months or more. I'll always provide you with a clear timeline at the start of the project. You can see examples of completed work in the <a href='/#projects' aria-label='Go to projects section' class='text-sky-600 hover:underline dark:text-sky-400'>Projects</a> section."
      },
      {
        question: "Do you offer maintenance services after launch?",
        answer: "Yes, I offer a maintenance service to ensure your website remains secure, up-to-date, and performant over time. This includes security updates, regular backups, and technical support. <a href='/contact' aria-label='Open contact page' class='text-sky-600 hover:underline dark:text-sky-400'>Contact me</a> for more details."
      },
      {
        question: "Will the website be optimized for search engines?",
        answer: "All the websites I build follow basic SEO best practices. This includes semantic structure, image optimization, loading speed, and mobile compatibility."
      },
      {
        question: "Which platforms do you use to build websites?",
        answer: "I specialize in creating websites with <a href='https://squarespace.com' aria-label='Open Squarespace website' target='_blank' rel='noopener noreferrer' class='text-sky-600 hover:underline dark:text-sky-400'>Squarespace</a> and <a href='https://framer.com' aria-label='Open Framer website' target='_blank' rel='noopener noreferrer' class='text-sky-600 hover:underline dark:text-sky-400'>Framer</a>, both excellent for modern design and simple content management. I can also develop fully custom-coded websites for specific needs, though this requires more time and a higher budget."
      }
    ]
  },
  banner: {
    title: "Power up your online presence",
    subtitle: "Your business deserves a digital presence that truly makes a difference. I create fast and modern websites for ambitious businesses like yours.",
    button: "Get started"
  },
  contact: {
    badge: "Contact",
    title: "Let's work together",
    subtitle: "Before we start, it's important to understand if we're the right match for collaboration.",
    formTitle: "Collaboration Request",
    formSubtitle: "Fill out the form to assess if we can work together",
    rulesButton: "Read Collaboration Rules",
    rulesRequired: "You must read and accept the rules before proceeding",
    startButton: "Start Request",
    contacts: {
      title: "Other Ways to Contact Me",
      subtitle: "For work requests, use exclusively the form above. For everything else:",
      email: "General email",
      social: "Social networks"
    },
    rules: {
      title: "🤝 Collaboration Rules",
      subtitle: "To work together in the best way, it's essential that we both respect some basic rules.",
      sections: [
        {
          title: "💰 Payments and Budget",
          rules: ["50% down payment required before starting any project", "Minimum budget of €1,500 for complete web projects", "Timely payments according to agreed deadlines", "No price changes once the contract is signed"]
        },
        {
          title: "📅 Timelines and Deadlines",
          rules: ["Timelines are agreed upon at the beginning and respected by both parties", "Delays in client feedback result in deadline extensions", "Substantial project changes may incur additional costs", "Unlimited revisions only for what's agreed in the initial brief"]
        },
        {
          title: "🗣️ Communication",
          rules: ["Professional and respectful communication always", "Responses within 48 business hours maximum", "Specific and constructive feedback, not generic", "One agreed communication channel only (email, WhatsApp, etc.)"]
        },
        {
          title: "🎯 Goals and Expectations",
          rules: ["Detailed brief and clear objectives from the start", "No 'let's see how it goes' or 'you decide what's good'", "Realistic expectations about timing and results", "Active collaboration, not total delegation"]
        }
      ],
      agreement: "I accept the collaboration rules and commit to respecting them",
      close: "Close"
    },
    form: {
      steps: {
        personal: "Personal Info",
        project: "The Project",
        budget: "Budget & Timing",
        rules: "Rules"
      },
      step1: {
        title: "Tell me about yourself",
        name: "Full Name",
        email: "Email",
        company: "Company (optional)",
        role: "Your role"
      },
      step2: {
        title: "Your project",
        type: "Project type",
        typeOptions: {
          new: "New website",
          redesign: "Website redesign",
          maintenance: "Maintenance/Updates",
          seo: "SEO only",
          other: "Other"
        },
        description: "Describe the project",
        goals: "Main objectives"
      },
      step3: {
        title: "Budget and timelines",
        budget: "Available budget",
        budgetOptions: {
          under1500: "Under €1,500",
          range1500: "€1,500 - €3,000",
          range3000: "€3,000 - €5,000",
          over5000: "Over €5,000",
          discuss: "To discuss"
        },
        timeline: "When do you need the project?",
        timelineOptions: {
          asap: "As soon as possible",
          month1: "Within 1 month",
          month3: "Within 3 months",
          flexible: "Flexible"
        }
      },
      step4: {
        title: "Final confirmation",
        rulesAccepted: "I have read and accept the collaboration rules",
        dataProcessing: "I consent to the processing of personal data for request evaluation",
        submit: "Send Request"
      },
      navigation: {
        next: "Next",
        prev: "Back",
        submit: "Send"
      }
    }
  },
  pageNotFound: {
    title: "404",
    description: "The page you're looking for doesn't exist or another error occurred.",
    button: "Return home"
  },
  footer: {
    brand: "davidelamarca",
    page1: "Terms of Service",
    page2: "Privacy Policy",
    copyright: "Davide La Marca",
    vat: "VAT: 02804090039",
    aria: {
      system: "Use system theme",
      light: "Use light theme",
      dark: "Use dark theme",
      linkedin: "Open LinkedIn profile",
      github: "Open GitHub profile",
      dribbble: "Open Dribbble profile",
      resume: "View online CV",
      email: "Send email"
    }
  }
};
