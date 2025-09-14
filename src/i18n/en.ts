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
      title: "Davide La Marca - Websites & Design",
      description: "I build modern, fast, and optimized websites to grow your online presence."
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
      subtitle: "Discover some of the projects I've built for my clients.",
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
          answer: `After delivery, I provide a warranty period during which I fix any technical issues or bugs that may arise in real-world use. This ensures your website runs smoothly. For more details, please refer to my <a href='${langPrefix}/terms' aria-label='Open Terms of Service' class='text-sky-500 hover:underline'>Terms of Service</a>.`
        },
        {
          question: "Will the website be optimized for search engines?",
          answer: "All the websites I build follow essential SEO best practices to give your project a solid starting point: semantic structure, image optimization, loading speed, and mobile compatibility. This ensures your site is well-prepared from the beginning. However, I do not provide advanced SEO services or positioning strategies — for that, you would need to work with an SEO specialist."
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
        button: "Go to website",
        image: "sorrento-boat-trips.png",
        technologies: ["Squarespace", "SEO", "Fareharbor"],
        link: "https://sorrentoboattrips.com",
        ariaLabel: "Website page with Sorrento Boat Trips contact details and two people smiling on a sunny boat ride."
      },
      {
        id: "skillbridge",
        title: "SkillBridge",
        description: "Fully functional web app connecting freelancers and companies: job posts, advanced search, real-time chat, and customizable profiles.",
        button: "Go to project",
        image: "skillbridge.png",
        technologies: ["HTML", "CSS", "Javascript", "SQLite"],
        link: "https://github.com/lama-development/skillbridge",
        ariaLabel: "Digital display of smartphone screens showing a job search app with profiles, accounts, and opportunities."
      },
      {
        id: "caprice-bleu",
        title: "Caprice Bleu",
        description: "Elegant website for an agency offering luxury private boat experiences and tours, featuring refined design and SEO optimization.",
        button: "Go to website",
        image: "caprice-bleu.png",
        technologies: ["Squarespace", "SEO"],
        link: "https://capricebleu.com",
        ariaLabel: "Website page with three women posing on a boat, Capri Island and calm sea in background, promoting exclusive tours."
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
      title: "Don't take my word for it",
      subtitle: "Hear from clients who have already worked with me.",
      testimonialsList: [
        {
          id: "sorrento-boat-trips-testimonial",
          quote: "Working with you has been a very positive experience. I appreciated your availability, professionalism, and especially your patience in following every detail. I liked how you listened to my needs and transformed them into a functional and aesthetically pleasing website. What particularly impressed me was your ability to propose creative and practical solutions that made the final result even better than I had imagined.",
          author: "Amy and Antonio",
          company: "Sorrento Boat Trips",
          website: "https://sorrentoboattrips.com",
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
      subtitle: "Share your idea and let's explore how to turn it into reality together."
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
        acceptTerms: "You must accept the conditions to continue",
        submitError: "There was an error submitting the form. Please try again."
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
  termsOfService: {
    meta: {
      title: "Terms of Service - Davide La Marca",
      description: "Terms and conditions of service for web development projects and collaborations."
    },
    header: {
      badge: "Legal",
      title: "Terms of Service",
      subtitle: "Last updated: <code>2025-09-09</code>"
    },
    sections: [
      {
        title: "Introduction",
        content : [
          {
            type: "paragraph",
            text: "The term “Provider” refers to LA MARCA DAVIDE (sole proprietorship, VAT ID 02804090039). The term “Client” refers to the natural or legal person who submits a request through the form on the <a href='/en/contact' class='text-sky-500 hover:underline'>contact page</a> or accepts the written offer. These Terms govern the provision of website design, development, optimization, and maintenance services and related services (the “Services”). Submitting the form or continued use of the website <a href='https://davidelamarca.com/en' class='text-sky-500 hover:underline'>davidelamarca.com</a> constitutes full acceptance of these Terms. The Provider reserves the right to modify these Terms at any time; changes will take effect from the date of publication on the website. Continued use of the website or execution of new orders following the publication of changes constitutes tacit acceptance thereof. The date of the latest version is shown at the top of this document and is updated when changes are published."
          }
        ]
      },
      {
        title: "1. Scope of service and operating procedures",
        content: [
          {
            type: "paragraph",
            text: "Services are performed according to the agreed brief and specifications. Websites are typically built on SaaS platforms such as <a href='https://squarespace.com' aria-label='Open Squarespace website' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline '>Squarespace</a> or <a href='https://framer.com' aria-label='Open Framer website' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline '>Framer</a>; custom code development is possible exclusively for complex requirements and will be specified in the quote."
          },
          {
            type: "paragraph",
            text: "The graphic, structural, and functional design of the website is entrusted to the Provider's experience and professional competence: the Client may express preferences, guidelines, and content constraints, but does not have the authority to impose technical or graphic solutions that conflict with the Provider's vision, style, or professional standards. Substantial changes from the initial brief (scope change) require written agreement and may result in changes to timelines and costs."
          }
        ]
      },
      {
        title: "2. Client obligations, provided materials, and content responsibility",
        content: [
          {
            type: "paragraph", 
            text: "The Client undertakes to provide in useful time and in the required formats texts, images, logos, videos, licenses, and any other material necessary for website development. The Client guarantees to be the owner of the rights or to have the right to use the provided material and indemnifies the Provider from any claim, cost, or liability arising from violations of copyright, trademarks, or other third-party rights connected to the provided material. The Provider is not responsible for improper or illegal use of material provided by the Client. Any material provided beyond the agreed terms that causes delays does not make the Provider responsible for milestone delays."
          }
        ]
      },
      {
        title: "3. Access, hosting, third parties, and external links",
        content: [
          {
            type: "paragraph",
            text: "The Client provides necessary access (accounts, hosting, DNS, APIs) within the required timeframes; operational management of hosting, domain, and third-party services remains the Client's responsibility. The use of third-party components (plugins, templates, fonts, APIs) will be carried out in compliance with their respective licenses: any license/subscription costs will fall on the Client. For websites built on SaaS platforms, complete exportability or portability of content may be limited by the platform's functionality; any migration or export requirements must be defined and agreed upon during the contract phase. Any links to external resources are provided for informational purposes only: the Provider does not control and is not responsible for external content."
          }
        ]
      },
      {
        title: "4. Timeline, delivery, hosting, and domains",
        content: [
          {
            type: "paragraph",
            text: "For projects built on SaaS platforms (e.g., <a href='https://squarespace.com' aria-label='Open Squarespace website' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline'>Squarespace</a>, <a href='https://framer.com' aria-label='Open Framer website' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline '>Framer</a> or similar) the Client is required to independently purchase the necessary plan/subscription on the chosen platform and grant the Provider access to the project with appropriate privileges (e.g., collaborator role, workspace access, or technical credentials) to enable the performance of activities. Part of the project's content or functionality may remain blocked or invisible until final payment; this limitation is intended to protect the ownership of the work and ensure fulfillment of contractual obligations, and cannot be interpreted as non-compliance, defect, or grounds for complaint against the Provider."
          },
          {
            type: "paragraph",
            text: "Domain registration is the Client's responsibility: the Client arranges to purchase the domain from their chosen registrar and remains responsible for payment of related fees and renewals. Once purchased, the Client provides the Provider with necessary access (registrar account, administrative credentials, authorization/EPP code if required) or grants management delegation so that the Provider can proceed with technical configuration, addition, or transfer of the domain to the project. The Provider will handle technical transfer/configuration operations upon receipt of all authorizations from the Client; any transfer costs imposed by the registrar are the Client's responsibility. Technical timeframes for DNS propagation, completion of transfers between registrars, or SSL certificate activation depend on the registrars and providers involved and are not attributable to the Provider."
          }
        ]
      },
      {
        title: "5. Compensation, billing, VAT, and payment methods",
        content: [
          {
            type: "paragraph",
            text: "Payment methods depend on the project type and total amount: the final solution will be indicated in the quote accompanying the estimate. Fees are those indicated in the quote and exclude VAT. Payment is made exclusively by bank transfer to the coordinates provided by the Provider. Typical payment methods:"
          },
          {
            type: "list", 
            items: [
              "Option A (3 installments): 40% down payment at start, 40% intermediate installment, 20% balance upon delivery;",
              "Option B (2 installments): 50% down payment at start and 50% balance upon delivery.",
            ]
          },
          {
            type: "paragraph",
            text: "Invoices will be issued with applicable VAT and according to current regulations. In case of payment delay, the Provider reserves the right to suspend work and access to materials until payment; late interest and any collection costs in accordance with the law will be applied. The down payment is generally non-refundable unless otherwise agreed in writing."
          }
        ]
      },
      {
        title: "6. Revisions, change requests, and technical warranty",
        content: [
          {
            type: "paragraph",
            text: "The quote typically includes 2 revision rounds; these revisions are intended exclusively for correction, refinement, and adaptation of content and do not include structural changes or redefinition of the project concept. Requests involving significant changes to the structure, architecture, or concept of the website will be considered change requests and will be billed separately at the agreed hourly rate (hourly rate: €25/hour)."
          },
          {
            type: "paragraph",
            text: "Website delivery does not include ongoing technical support, future updates, or subsequent interventions, which are considered extra paid services to be agreed separately (maintenance, support, updates, urgent interventions). Typically included is a 7-day technical warranty period from publication for fixing bugs directly attributable to development; interventions requested beyond this period fall under a possible maintenance contract or will be billed separately."
          }
        ]
      },
      {
        title: "7. Intellectual property and promotional use",
        content: [
          {
            type: "paragraph",
            text: "Copyright and economic exploitation rights on the created works (graphics, layout, structures, code where provided) are transferred to the Client only after full payment of the agreed fee. Until complete payment, the code, design, and technical solutions developed remain the Provider's property and the Provider may retain the source files or limit delivery."
          },
          {
            type: "paragraph",
            text: "The Provider reserves the right to include discrete references to their professional activity, for example with the phrase “Designed by Davide La Marca” in the footer or another non-intrusive location, and to use images, screenshots, and project descriptions for their portfolio and promotional channels. Any requests for embargo, anonymization, or NDA must be agreed upon prior to the project commencement."
          }
        ]
      },
      {
        title: "8. Collaboration termination, withdrawal, and force majeure",
        content: [
          {
            type: "paragraph",
            text: "The Provider reserves the right to unilaterally terminate the collaboration and withdraw from the contract in case of:"
          },
          {
            type: "list", 
            items: [
              "Non-compliance with economic or contractual conditions by the Client;",
              "Client behavior detrimental to the Provider's professionalism or dignity;",
              "Client communications or conduct that are manifestly inappropriate, harassing, aggressive, manipulative, or offensive toward the Provider.",
            ]
          },
          {
            type: "paragraph",
            text: "In case of termination for the above reasons, the Provider will retain the down payment and/or what has been earned up to that point in proportion to the work performed."
          },
          {
            type: "paragraph",
            text: "Force majeure events (calamities, wars, large-scale cyber attacks, infrastructure or third-party service interruptions) suspend the parties' obligations for the duration of the event; the parties will endeavor to resume performance as soon as possible."
          }
        ]
      },
      {
        title: "9. Warranties, limitation of liability, indemnification, and applicable law",
        content: [
          {
            type: "paragraph",
            text: "The Provider performs services with professional diligence but does not guarantee economic results, SEO rankings, or performance not directly controllable by technical activity. The Provider's overall liability is limited to the total amount paid by the Client for the project subject to the dispute. The Client indemnifies and holds harmless the Provider from any request or claim by third parties arising from material provided by the Client that violates third-party rights or legal provisions. These Terms are governed by Italian law."
          }
        ]
      },
      {
        title: "Contact information",
        content: [
          {
            type: "list", 
            items: [
              "LA MARCA DAVIDE",
              "VAT ID: 02804090039",
              "Website: <a href='https://davidelamarca.com/en' aria-label='Go to website' class='text-sky-500 hover:underline'>davidelamarca.com</a>",
              "Email: <a href='mailto:info@davidelamarca.com' aria-label='Send email' class='text-sky-500 hover:underline'>info@davidelamarca.com</a>",
              "PEC (Certified Email): <a href='mailto:davidelamarca@legalmail.it' aria-label='Send email' class='text-sky-500 hover:underline'>davidelamarca@legalmail.it</a>",
            ]
          },
        ]
      },
    ],
    questions: {
      title: "Questions?",
      description: "For any questions regarding the terms of service, you can contact me at the address ",
      ariaLabel: "Send email"
    }
  }, 
privacyPolicy: {
  meta: {
    title: "Privacy Policy - Davide La Marca",
    description: "Terms and conditions of service for web development projects and collaborations."
  },
  header: {
    badge: "Legal",
    title: "Privacy Policy",
    subtitle: "Last updated: <code>2025-09-08</code>"
  },
  sections: [
    {
      title: "Introduction",
      content: [
        {
          type: "paragraph",
          text: "This Privacy Policy describes how LA MARCA DAVIDE (hereinafter, the “Controller” or “we”) collects, processes, stores, and protects personal data through the website <a href='https://davidelamarca.com' aria-label='Go to website' class='text-sky-500 hover:underline'>davidelamarca.com</a> (hereinafter, the “Website”) in accordance with the EU Regulation 2016/679 (hereinafter, “GDPR”) and applicable national law. Using the Website implies acceptance of the terms in this Policy. If you do not accept them, please do not use the Website."
        }
      ]
    },
    {
      title: "1. Data Controller",
      content: [
        {
          type: "list",
          items: [
            "LA MARCA DAVIDE",
            "VAT: 02804090039",
            "Website: <a href='https://davidelamarca.com' aria-label='Go to website' class='text-sky-500 hover:underline'>davidelamarca.com</a>",
            "Email: <a href='mailto:info@davidelamarca.com' aria-label='Send email' class='text-sky-500 hover:underline'>info@davidelamarca.com</a>",
            "PEC (Certified Email): <a href='mailto:davidelamarca@legalmail.it' aria-label='Send email' class='text-sky-500 hover:underline'>davidelamarca@legalmail.it</a>"
          ]
        },
        {
          type: "paragraph",
          text: "Project requests must be submitted exclusively via the dedicated form available at <a href='https://davidelamarca.com/contact' aria-label='Go to contact page' class='text-sky-500 hover:underline'>davidelamarca.com/contact</a>. For any questions regarding this Privacy Policy or the exercise of rights, please contact the above references. No Data Protection Officer (DPO) has been appointed."
        }
      ]
    },
    {
      title: "2. Definitions",
      content: [
        {
          type: "paragraph",
          text: "For the purposes of this Privacy Policy, the following definitions apply:"
        },
        {
          type: "list",
          items: [
            "Personal data: any information relating to an identified or identifiable natural person;",
            "Data subject/User: the natural person to whom the personal data relates;",
            "Processing: any operation or set of operations performed on personal data;",
            "Data controller: the natural or legal person who determines the purposes and means of the processing;",
            "Data processor: the natural or legal person who processes data on behalf of the controller;",
            "Tracker/Cookie/localStorage: tools that allow information to be stored on the User's device."
          ]
        }
      ]
    },
    {
      title: "3. Types of data processed",
      content: [
        {
          type: "list",
          items: [
            "Data voluntarily provided by the User (via form): first and last name (mandatory); email address (mandatory); company name (optional); phone number (optional); project details and specifications (e.g., budget, type, reference links).",
            "Automatically collected data (Usage Data): technical navigation and communication data (IP address, device and browser type, visited pages, requested URIs, response times, HTTP status code, etc.); system logs and diagnostics."
          ]
        },
        {
          type: "paragraph",
          text: "No special categories of data (sensitive data) are collected through the Website."
        }
      ]
    },
    {
      title: "4. Purpose of processing and legal bases",
      content: [
        {
          type: "paragraph",
          text: "Personal Data are processed for the following purposes with the corresponding legal bases:"
        },
        {
          type: "list",
          items: [
            "Handling requests submitted via the contact form – purpose: evaluation and possible response to inquiries or requests for quotes; legal basis: pre-contractual measures requested by the Data Subject (Art. 6, par. 1, lett. b GDPR) and, if applicable, legitimate interest to engage in collaboration opportunities (Art. 6, par. 1, lett. f GDPR).",
            "Execution and management of contractual relationships – purpose: contract performance and related obligations; legal basis: contract execution (Art. 6, par. 1, lett. b GDPR).",
            "Accounting and tax record-keeping – purpose: compliance with legal obligations; legal basis: fulfillment of legal obligations (Art. 6, par. 1, lett. c GDPR).",
            "Ensuring security and abuse prevention – purpose: protection of the Website and the Controller's interests; legal basis: legitimate interest of the Controller (Art. 6, par. 1, lett. f GDPR).",
            "Aggregate traffic analysis – purpose: analyzing Website usage in an anonymous and non-intrusive manner; legal basis: legitimate interest of the Controller (Art. 6, par. 1, lett. f GDPR)."
          ]
        },
        {
          type: "paragraph",
          text: "Data will not be subject to automated profiling nor sold or shared with third parties for commercial purposes."
        }
      ]
    },
    {
      title: "5. Processing methods",
      content: [
        {
          type: "paragraph",
          text: "Processing is carried out using manual, IT, and telematic tools, strictly linked to the purposes indicated, and with technical and organizational measures to ensure data security, confidentiality, and integrity. Access to Data is limited to authorized personnel and external processors appointed by the Controller. Data are processed according to principles of minimization, purpose limitation, and limited retention time."
        }
      ]
    },
    {
      title: "6. External processors and providers",
      content: [
        {
          type: "paragraph",
          text: "To carry out the activities related to the above purposes, the Controller uses the following third-party providers and services (role indicated):"
        },
        {
          type: "list",
          items: [
            "<a href='https://web3forms.com' aria-label='Open Web3Forms website' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline'>Web3Forms</a>: technical management of the contact form; submissions are forwarded via email to the Controller; Web3Forms states that it does not permanently store submissions and periodically deletes logs. See Web3Forms <a href='https://web3forms.com/privacy' aria-label='Open Web3Forms Privacy Policy' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline'>Privacy Policy</a>.",
            "<a href='https://cloudflare.com' aria-label='Open Cloudflare website' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline'>Cloudflare</a>: protection services (WAF), CDN, partial hosting, and aggregate traffic analysis through <a href='https://cloudflare.com/web-analytics' aria-label='Open Cloudflare Web Analytics website' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline'>Cloudflare Web Analytics</a>, used in a way that does not employ personal tracking cookies. See Cloudflare <a href='https://cloudflare.com/privacypolicy' aria-label='Open Cloudflare Privacy Policy' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline'>Privacy Policy</a>.",
            "<a href='https://zoho.com' aria-label='Open Zoho website' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline'>Zoho</a>: management of the professional email account where submissions are received. See Zoho <a href='https://zoho.com/privacy' aria-label='Open Zoho Privacy Policy' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline'>Privacy Policy</a>."
          ]
        }
      ]
    },
    {
      title: "7. International transfers",
      content: [
        {
          type: "paragraph",
          text: "The services listed in this document may involve transferring Data to third countries. Where transfers outside the European Union occur, the Controller adopts adequate safeguards (such as standard contractual clauses approved by the European Commission, SCCs, or other recognized guarantees) to ensure a level of protection substantially equivalent to GDPR. Copies of these safeguards are available upon request."
        }
      ]
    },
    {
      title: "8. Retention periods",
      content: [
        {
          type: "paragraph",
          text: "Personal Data will be retained for as long as necessary to fulfill the purposes for which they were collected and, in any case, within the limits and periods provided by applicable law:"
        },
        {
          type: "list",
          items: [
            "Data submitted via form (unconverted leads): retained for handling requests and follow-ups for a period not exceeding 12 months from the last interaction, unless the Data Subject consents to a longer duration or legal obligations dictate otherwise.",
            "Data related to contracts/projects: retained for the duration of the contractual relationship and subsequently for the period necessary to fulfill legal and tax obligations.",
            "System logs and security data: retained for the duration necessary for security and diagnostics, usually no more than 12 months, unless investigative needs or legal obligations apply.",
            "Anonymized statistical data: retained in aggregated, non-identifiable form indefinitely."
          ]
        },
        {
          type: "paragraph",
          text: "After the retention period, Data will be deleted or irreversibly anonymized."
        }
      ]
    },
    {
      title: "9. Cookies, trackers, and localStorage",
      content: [
        {
          type: "paragraph",
          text: "The Website uses exclusively:"
        },
        {
          type: "list",
          items: [
            "<a href='https://cloudflare.com/web-analytics' aria-label='Open Cloudflare Web Analytics website' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline'>Cloudflare Web Analytics</a>, a traffic analysis system that does not use personal tracking cookies and provides aggregated, non-identifiable data;",
            "Browser localStorage solely for saving the user's theme preference (light/dark mode)."
          ]
        },
        {
          type: "paragraph",
          text: "No other profiling or third-party tracking tools are used. If additional cookies or trackers are introduced in the future, a specific notice will be provided, and consent will be requested when required by law."
        }
      ]
    },
    {
      title: "10. Data security and data breaches",
      content: [
        {
          type: "paragraph",
          text: "The Controller adopts appropriate technical and organizational measures to protect personal data against destruction, loss, alteration, unauthorized disclosure, or unauthorized access. Measures include using secure protocols (HTTPS), firewalls and protections provided by Cloudflare, access control, and backups. In case of a security breach that may pose a risk to the rights and freedoms of Data Subjects, the Controller will take notification measures as required by GDPR, including notification to the supervisory authority and, if necessary, to Data Subjects."
        }
      ]
    },
    {
      title: "11. Communication and disclosure of data",
      content: [
        {
          type: "paragraph",
          text: "Data may be shared only with parties necessary for the purposes described above (service providers, consultants, competent authorities when required by law). Data are not disclosed or transferred to third parties for commercial purposes."
        }
      ]
    },
    {
      title: "12. Rights of the Data Subject",
      content: [
        {
          type: "paragraph",
          text: "Data Subjects may exercise at any time the rights under Articles 15-22 of the GDPR, including: access, rectification, erasure (right to be forgotten), restriction of processing, objection, data portability, and withdrawal of consent (where processing is based on consent)."
        },
        {
          type: "paragraph",
          text: "Such rights may be exercised by submitting a written request to <a href='mailto:info@davidelamarca.com' aria-label='Send email' class='text-sky-500 hover:underline'>info@davidelamarca.com</a> or PEC (Certified Email) <a href='mailto:davidelamarca@legalmail.it' aria-label='Send email' class='text-sky-500 hover:underline'>davidelamarca@legalmail.it</a>. Requests will be processed within the terms and conditions established by GDPR. The Controller may request reasonable information to verify the identity of the Data Subject if necessary to protect rights and security; except for exceptional cases, identity documents are not required for ordinary requests."
        },
        {
          type: "paragraph",
          text: "In case of disputes regarding the processing of personal data, the Data Subject also has the right to lodge a complaint with the Data Protection Authority."
        }
      ]
    },
    {
      title: "13. How to exercise rights and additional information",
      content: [
        {
          type: "paragraph",
          text: "Requests regarding rights may be submitted free of charge. If a request is manifestly unfounded or excessive, the Controller may charge a reasonable fee or refuse to act, in accordance with GDPR. After exercising rights, the Controller will inform any recipients to whom Data were communicated if necessary and not disproportionate."
        }
      ]
    },
    {
      title: "14. Legal purposes, judicial actions, and protection of minors",
      content: [
        {
          type: "paragraph",
          text: "Personal Data may be used for establishing, exercising, or defending a legal right in court or administrative proceedings and for compliance with legal obligations."
        },
        {
          type: "paragraph",
          text: "The Website is not directed at minors, and we do not knowingly collect personal data from individuals under 16 years of age. If we become aware of data from a minor under 16 without parental or guardian consent, we will take steps to delete such data. Minors or their parents/guardians may request deletion of data by contacting <a href='mailto:info@davidelamarca.com' aria-label='Send email' class='text-sky-500 hover:underline'>info@davidelamarca.com</a>."
        }
      ]
    },
    {
      title: "15. Updates to this Privacy Policy",
      content: [
        {
          type: "paragraph",
          text: "The Controller reserves the right to modify or update this Privacy Policy. Any substantial changes will be published on this page with the update date. Users are advised to check this page periodically for changes."
        }
      ]
    }
  ],
    questions: {
      title: "Questions?",
      description: "For any questions regarding the privacy policy, you can contact me at the address ",
      ariaLabel: "Send email"
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
