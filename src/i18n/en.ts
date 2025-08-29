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
      servicesList: [
        {
          title: "Web Development",
          description: "Modern, fast, and responsive websites designed to deliver the best user experience.",
          icon: "M7 8l-4 4l4 4M17 8l4 4l-4 4M14 4l-4 16"
        },
        {
          title: "Web Design",
          description: "Intuitive interfaces that enhance navigation and turn visitors into customers.",
          icon: "M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"
        },
        {
          title: "SEO & Best Practices",
          description: "SEO optimization and development following best practices for visibility and performance.",
          icon: "M3 17l6 -6l4 4l8 -8M14 7l7 0l0 7"
        }
      ]
    },
    projects: {
      badge: "Projects",
      title: "Real projects, actual results",
      subtitle: "Discover some of the projects I’ve built for my clients.",
      button: "View all projects"
    },
    faq: {
      badge: "FAQ",
      title: "Everything you want to know",
      subtitle: "Here are the answers to the most frequently asked questions about my work.",
      questions: [
        {
          question: "How much does a professional website cost?",
          answer: `The cost of a website depends on many factors: complexity, required features, timelines, and goals. Each project is evaluated individually based on your needs. <a href='${langPrefix}/contact' aria-label='Open contact page' class='text-sky-500 hover:underline '>Contact me</a> to receive a personalized quote.`
        },
        {
          question: "How long does it take to build a website?",
          answer: `Development time varies depending on the complexity of the project. A showcase website may take 3-4 weeks, while more complex projects with advanced features can take 2-3 months or more. I'll always provide you with a clear timeline at the start of the project. You can see examples of completed work in the <a href='${langPrefix}/projects' aria-label='Open projects page' class='text-sky-500 hover:underline '>Projects</a> page  .`
        },
        {
          question: "Do you offer maintenance services after launch?",
          answer: `Yes, I offer a maintenance service to ensure your website remains secure, up-to-date, and performant over time. This includes security updates, regular backups, and technical support. <a href='${langPrefix}/contact' aria-label='Open contact page' class='text-sky-500 hover:underline '>Contact me</a> for more details.`
        },
        {
          question: "Will the website be optimized for search engines?",
          answer: "All the websites I build follow basic SEO best practices. This includes semantic structure, image optimization, loading speed, and mobile compatibility."
        },
        {
          question: "Which platforms do you use to build websites?",
          answer: "I specialize in creating websites with <a href='https://squarespace.com' aria-label='Open Squarespace website' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline '>Squarespace</a> and <a href='https://framer.com' aria-label='Open Framer website' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline '>Framer</a>, both excellent for modern design and simple content management. I can also develop fully custom-coded websites for specific needs, though this requires more time and a higher budget."
        }
      ]
    },
    banner: {
      title: "Power up your online presence",
      subtitle: "Your business deserves a digital presence that truly makes a difference.",
      button: "Get started"
    }
  },
  projects: {
    meta: {
      title: "Projects - Davide La Marca",
      description: "Explore my portfolio of web development projects including modern websites, e-commerce platforms, and web applications."
    },
    header: {
      badge: "Projects",
      title: "Ideas that become reality",
      subtitle: "My work, told through real results."
    },
    ProjectCards: [
      {
        id: "sorrento-boat-trips",
        title: "Sorrento Boat Trips",
        description: "Modern website for a private boat tour agency in Sorrento, featuring an online booking system integrated with FareHarbor.",
        button: "View details",
        image: "sorrento-boat-trips.png",
        technologies: ["Squarespace", "SEO", "Fareharbor"],
        link: "https://sorrentoboattrips.com",
        ariaLabel: "Screenshot of Sorrento Boat Trips website showing homepage with modern design and booking system"
      },
      {
        id: "skillbridge",
        title: "SkillBridge",
        description: "Fully functional web app connecting freelancers and companies: job posts, advanced search, real-time chat, and customizable profiles.",
        button: "View details",
        image: "skillbridge.png",
        technologies: ["HTML", "CSS", "Javascript", "SQLite"],
        link: "https://github.com/lama-development/skillbridge",
        ariaLabel: "Screenshot of SkillBridge web app showing freelancer interface with job search and chat features"
      },
      {
        id: "caprice-bleu",
        title: "Caprice Bleu",
        description: "Elegant website for an agency offering luxury private boat experiences and tours, featuring refined design and SEO optimization.",
        button: "View details",
        image: "caprice-bleu.png",
        technologies: ["Squarespace", "SEO"],
        link: "https://capricebleu.com",
        ariaLabel: "Screenshot of Caprice Bleu website for luxury private boat tours"
      }
      // {
      //   id: "netwatch",
      //   title: "NetWatch",
      //   description: "lorem ipsum dolor sit amet.",
      //   button: "View details",
      //   image: "placeholder.png",
      //   technologies: ["HTML", "CSS", "Javascript", "Python", "SQLite"],
      //   link: "https://github.com/lama-development/netwatch",
      //   ariaLabel: "lorem ipsum dolor sit amet"
      // },
      // {
      //   id: "exotic-county-roleplay",
      //   title: "Exotic County Roleplay",
      //   description: "lorem ipsum dolor sit amet.",
      //   button: "View details",
      //   image: "placeholder.png",
      //   technologies: ["Framer", "Design"],
      //   link: "https://ecrp.framer.website",
      //   ariaLabel: "lorem ipsum dolor sit amet"
      // }
    ],
    testimonials: {
      badge: "Testimonials",
      title: "Don’t take my word for it",
      subtitle: "Hear from clients who have already worked with me.",
      testimonialsList: [
        {
          id: "sorrento-boat-trips-testimonial",
          quote: "Working with you has been a very positive experience. I appreciated your availability, professionalism, and especially your patience in following every detail. I liked how you listened to my needs and transformed them into a functional and aesthetically pleasing website. What particularly impressed me was your ability to propose creative and practical solutions that made the final result even better than I had imagined.",
          author: "Amy and Antonio",
          company: "Sorrento Boat Trips",
          role: "Founders"
        }
      ]
    }
  },
  contact: {
    meta: {
      title: "Get in Touch - Davide La Marca",
      description: "Tell me about your project and discover how we can collaborate to bring it to life."
    },
    header: {
      badge: "Form",
      title: "Your next project starts here",
      subtitle: "Share your idea and let’s explore how to turn it into reality together."
    },
    form: {
      stepText: "Step {current} of {total}",
      contacts: {
        title: "Contact",
        subtitle: "Enter your contact details",
        name: {
          label: "Full Name",
          placeholder: "John Doe"
        },
        email: {
          label: "Email",
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
      rules: {
        title: "Terms & Conditions",
        subtitle: "For a transparent collaboration",
        rulesList: ["Goals, style, and content are defined at the start; major changes require extra agreements.", "Feedback is important, but the technical and creative consistency of the project remains my responsibility.", "Texts, images, and materials must be provided within the agreed timelines.", "Payment is made in 2 or 3 installments, depending on the project.", "Revisions are limited and do not include major structural changes to the approved plan.", "I reserve the right to showcase the work on my channels without disclosing confidential information."],
        accept: "I agree, let's get started!",
        termsText: "By checking this box, you also fully accept the ",
        termsLink: "Terms of Service",
        nextButton: "Continue"
      },
      project: {
        title: "Project",
        subtitle: "Tell me about your project",
        projectType: {
          label: "What type of project do you have in mind?",
          options: ["New website", "Redesign existing site", "E-commerce", "Web app", "SEO & optimization", "Other"]
        },
        budget: {
          label: "What's your indicative budget?",
          options: ["< 1000€", "1000€ - 2000€", "2000€ - 3000€", "Over 3000€"]
        },
        timeline: {
          label: "What's yoour desired timeline?",
          options: ["Urgent (surcharges apply)", "Flexible"]
        }
      },
      details: {
        title: "Details",
        subtitle: "Describe your project in detail",
        message: {
          label: "Describe your project",
          placeholder: "Tell me what you'd like to achieve, your business sector, specific features you want, etc."
        },
        inspiration: {
          label: "Websites that inspire you (optional)",
          placeholder: "Links to resources you like or that represent the style you'd want"
        },
        hasBranding: {
          label: "Do you already have your own branding (colors, logo, design)?",
          options: ["Yes, I have complete branding", "Partially, some elements need defining", "No, I need to create it"]
        }
      },
      navigation: {
        next: "Next",
        submit: "Send"
      },
      validation: {
        required: "This field is required",
        email: "Please enter a valid email address",
        acceptTerms: "You must accept the conditions to continue"
      },
      success: {
        title: "Request sent",
        message: "Thank you! Your request has been sent successfully. If accepted, you will be contacted as soon as possible.",
        backHome: "Back to home"
      },
      aria: {
        prev: "Go back to previous step",
        next: "Go to next step"
      }
    },
    values: {
      badge: "Values",
      title: "The foundation of every project",
      subtitle: "The principles that guide my work and relationships with clients.",
      valuesList: [
        {
          title: "Quality First",
          description: "Every line of code crafted with attention to detail and best practices.",
          icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        },
        {
          title: "Clear Communication",
          description: "Transparent updates and open dialogue throughout the project.",
          icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        },
        {
          title: "Continuous Learning",
          description: "Always updated with latest technologies for modern solutions.",
          icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        },
        {
          title: "Client Success",
          description: "Your success is my success. Committed to delivering real results.",
          icon: "M13 10V3L4 14h7v7l9-11h-7z"
        }
      ]
    },
    email: {
      badge: "Email",
      title: "Searching for an Email?",
      description: "You can contact me directly via email for general information. For project requests, however, use the form above.",
      aria: {
        email: "Send email"
      }
    }
  },
  pageNotFound: {
    meta: {
      title: "Page Not Found - Davide La Marca",
      description: "The page you're looking for doesn't exist or another error occurred. Return to the homepage to keep browsing."
    },
    title: "Page not found",
    subtitle: "The page you're looking for doesn't exist or another error occurred.",
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
