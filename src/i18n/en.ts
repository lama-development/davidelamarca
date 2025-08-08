export default (langPrefix = "") => ({
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
  home: {
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
          answer: `The cost of a website depends on many factors: complexity, required features, timelines, and goals. Each project is evaluated individually based on your needs. <a href='${langPrefix}/contact' aria-label='Open contact page' class='text-sky-600 hover:underline dark:text-sky-400'>Contact me</a> to receive a personalized quote.`
        },
        {
          question: "How long does it take to build a website?",
          answer: `Development time varies depending on the complexity of the project. A showcase website may take 3-4 weeks, while more complex projects with advanced features can take 2-3 months or more. I'll always provide you with a clear timeline at the start of the project. You can see examples of completed work in the <a href='${langPrefix}/projects' aria-label='Open projects page' class='text-sky-600 hover:underline dark:text-sky-400'>Projects</a> page  .`
        },
        {
          question: "Do you offer maintenance services after launch?",
          answer: `Yes, I offer a maintenance service to ensure your website remains secure, up-to-date, and performant over time. This includes security updates, regular backups, and technical support. <a href='${langPrefix}/contact' aria-label='Open contact page' class='text-sky-600 hover:underline dark:text-sky-400'>Contact me</a> for more details.`
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
    }
  },
  contact: {
    landing: {
      badge: "Contact",
      title: "Let's work together",
      subtitle: "Tell me about your project and let's find the perfect solution for your business."
    },
    rules: {
      button: "Read the conditions",
      modalTitle: "Collaboration rules",
      sections: [
        {
          title: "Professional communication",
          rules: ["Mutual respect and courteous communication", "Email response within 48 business hours", "Detailed briefing with clear objectives", "Constructive and specific feedback"]
        },
        {
          title: "Project management",
          rules: ["Realistic timelines agreed together", "Maximum 3 revisions per project phase", "50% down payment before starting", "Final payment before delivery"]
        },
        {
          title: "Aligned expectations",
          rules: ["Budget defined from the beginning", "Substantial changes incur additional costs", "Content is the client's responsibility", "Source code remains client property"]
        }
      ],
      checkbox: "I have read and agree to the collaboration rules",
      continue: "Continue"
    },
    form: {
      introBox: {
        title: "Project request form",
        description: "All project requests must be submitted through this form. I don't accept projects via email or other channels to ensure efficient and transparent management.",
        important: "Important:",
        requirements: "You must read and accept the conditions before filling out the form."
      },
      steps: {
        project: "Project",
        details: "Details",
        budget: "Terms",
        contact: "Contact"
      },
      step1: {
        title: "What type of project do you have in mind?",
        options: ["New website", "Redesign existing site", "E-commerce", "Web app", "SEO & optimization", "Other"]
      },
      step2: {
        title: "Tell me more about your project",
        description: {
          label: "Project description",
          placeholder: "Describe your project, what you expect and any inspiration styles..."
        },
        domain: {
          label: "Do you already have a domain?",
          options: ["Yes", "No", "I don't know what that is"]
        },
        content: {
          label: "Do you already have content ready (texts, images, logo)?",
          options: ["Yes, everything ready", "Partially", "No, I still need to prepare them"]
        }
      },
      step3: {
        title: "Budget & Timeline",
        budget: {
          label: "Indicative project budget",
          options: ["< 1000€", "1000€ - 2000€", "2000€ - 3000€", "Over 3000€"]
        },
        timeline: {
          label: "Desired timeline",
          options: ["Flexible", "Urgent (surcharges apply)"]
        }
      },
      step4: {
        title: "Contact",
        name: {
          label: "Full Name",
          placeholder: "John Doe"
        },
        email: {
          label: "Contact email",
          placeholder: "john@example.com"
        },
        phone: {
          label: "Phone (optional)",
          placeholder: "+1 123 456 7890"
        },
        notes: {
          label: "Notes (optional)",
          placeholder: "Add any notes or specific requests..."
        }
      },
      buttons: {
        next: "Continue",
        previous: "Back",
        submit: "Send request"
      },
      confirmation: {
        title: "Confirm request submission",
        message: "Are you sure you want to send this project request? Once sent, it will no longer be possible to modify it.",
        confirm: "Yes, send",
        cancel: "Cancel"
      },
      success: {
        title: "Request sent successfully!",
        message: "Thank you for submitting your project request. If I accept the proposal, I will contact you via the provided email.",
        backButton: "Return home"
      },
      errors: {
        title: "Form validation error",
        step1: "Select project type",
        step2: {
          description: "Project description is required",
          domain: "Please indicate if you have a domain",
          content: "Please indicate content availability"
        },
        step3: {
          budget: "Select an indicative budget",
          timeline: "Indicate desired timeline"
        },
        step4: {
          name: "Name is required",
          email: "Please enter a valid email",
          phone: "Phone number is not valid",
          notes: "Notes are required"
        }
      }
    },
    sidebar: {
      progress: "Progress",
      email: {
        title: "Email",
        subtitle: "Prefer a direct email?",
        button: "Email me"
      },
      social: {
        title: "Social",
        subtitle: "Follow me on social media"
      },
      aria: {
        email: "Send email",
        linkedin: "Open LinkedIn profile",
        github: "Open GitHub profile",
        dribbble: "Open Dribbble profile",
        resume: "View online CV"
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
});
