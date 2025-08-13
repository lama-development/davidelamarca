export default (langPrefix = "") => ({
  lang: "en",
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
    meta: {
      title: "Davide La Marca - Websites & SEO",
      description: "I build modern, fast, and SEO-optimized websites to grow your online presence."
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
        description: "Modern website for a private boat tour agency in Sorrento, featuring an online booking system integrated with FareHarbor.",
        button: "View project"
      },
      project2: {
        title: "SkillBridge",
        description: "Fully functional web app connecting freelancers and companies: job posts, advanced search, real-time chat, and customizable profiles.",
        button: "View project"
      },
      aria: {
        image1: "Screenshot of Sorrento Boat Trips website showing homepage with modern design and booking system",
        image2: "Screenshot of SkillBridge web app showing freelancer interface with job search and chat features"
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
    meta: {
      title: "Get in Touch - Davide La Marca",
      description: "Tell me about your project and let's work together to create the website you deserve."
    },
    badge: "Get in Touch",
    title: "Let's start your project",
    description: "Tell me about your idea and let's discover together how to create the website you deserve. Filling out this form is the first step towards your new website.",
    form: {
      stepText: "Step {current} of {total}",
      step1: {
        title: "Project Rules",
        description: "Before proceeding, it's important that you read and accept the rules for starting a project together.",
        rules: ["All projects require a 50% initial deposit to begin work", "Delivery times are agreed at the beginning and may vary based on complexity", "Substantial changes to the original project may incur additional costs", "Communication will primarily be via email and scheduled calls", "Final payment is required before delivery and publication of the site"],
        accept: "I have read and accept the project rules",
        termsText: "I also suggest you read the complete",
        termsLink: "Terms of Service",
        nextButton: "Continue"
      },
      step2: {
        title: "Basic Information",
        name: {
          label: "Full Name*",
          placeholder: "John Doe"
        },
        email: {
          label: "Email*",
          placeholder: "johndoe@example.com"
        },
        company: {
          label: "Company (optional)",
          placeholder: "Your company name"
        },
        phone: {
          label: "Phone (optional)",
          placeholder: "+1 123 4567890"
        }
      },
      step3: {
        title: "Your Project",
        projectType: {
          label: "What type of project do you have in mind?*",
          options: ["New website", "Redesign existing site", "E-commerce", "Web app", "SEO & optimization", "Other"]
        },
        budget: {
          label: "Indicative budget*",
          options: ["< 1000€", "1000€ - 2000€", "2000€ - 3000€", "Oltre 3000€"]
        },
        timeline: {
          label: "Desired timeline*",
          options: ["Urgent (surcharges apply)", "Flexible"]
        }
      },
      step4: {
        title: "Project Details",
        message: {
          label: "Describe your project*",
          placeholder: "Tell me about your idea, what you'd like to achieve, your business sector, if you have an existing site to renovate, examples of sites you like, specific features you want, etc."
        },
        inspiration: {
          label: "Websites that inspire you (optional)",
          placeholder: "Links to sites you like or that represent the style you'd want"
        },
        hasDesign: {
          label: "Do you already have a design or logo?",
          options: ["Yes, I have everything", "I only have the logo", "I have some ideas", "No, everything needed from scratch"]
        }
      },
      navigation: {
        next: "Next",
        submit: "Send"
      },
      validation: {
        required: "This field is required",
        email: "Please enter a valid email address",
        acceptTerms: "You must accept the project rules to continue"
      },
      success: {
        title: "Request Sent!",
        message: "Thank you for your request. I'll get back to you within 24 hours with more details and possible follow-up questions.",
        backHome: "Back to home",
        sendEmail: "Send Direct Email"
      }
    },
    alternative: {
      title: "Other ways to contact me",
      email: {
        title: "Email for general questions",
        description: "Only for general questions, not for project requests",
        address: "hello@davidelamarca.com"
      },
      social: {
        title: "My socials"
      }
    }
  },
  pageNotFound: {
    meta: {
      title: "Page Not Found - Davide La Marca",
      description: "The page you're looking for doesn't exist or another error occurred. Return to the homepage to keep browsing."
    },
    title: "404",
    description: "The page you're looking for doesn't exist or another error occurred.",
    button: "Return home"
  },
  footer: {
    brand: "davidelamarca",
    page1: "Terms of Service",
    page2: "Privacy Policy",
    copyright: "Davide La Marca.",
    vat: "VAT 02804090039",
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
