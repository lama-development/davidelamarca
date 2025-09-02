export default (langPrefix = "") => ({
  lang: "it",
  navbar: {
    brand: "davidelamarca",
    page1: "Home",
    page2: "Progetti",
    page3: "Contattami",
    aria: {
      menu: "Apri o chiudi menu"
    }
  },
  home: {
    meta: {
      title: "Davide La Marca - Siti Web & SEO",
      description: "Sviluppo siti web moderni, veloci e ottimizzati SEO per far crescere la tua presenza online."
    },
    hero: {
      badge: "Freelance Web Developer",
      title1: "Nuovo sito,",
      title2: "nuova storia",
      subtitle: "Essere online non basta. Serve esserci nel modo giusto. Scopri come posso creare o rinnovare il sito web che meriti.",
      button: "Inizia ora",
      aria: {
        scroll: "Scorri in basso"
      }
    },
    services: {
      badge: "Servizi",
      title: "Il tuo sito, fatto come si deve",
      subtitle: "Soluzioni complete per portare il tuo business online, nel modo giusto.",
      servicesList: [
        {
          title: "Sviluppo Web",
          description: "Siti web moderni, veloci e responsive, pensati per offrire la migliore esperienza utente.",
          icon: "M7 8l-4 4l4 4M17 8l4 4l-4 4M14 4l-4 16"
        },
        {
          title: "Web Design",
          description: "Interfacce intuitive che migliorano la navigazione e convertono i visitatori in clienti.",
          icon: "M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"
        },
        {
          title: "SEO & Best Practice",
          description: "Ottimizzazione SEO e sviluppo secondo best practice per visibilità e performance.",
          icon: "M3 17l6 -6l4 4l8 -8M14 7l7 0l0 7"
        }
      ]
    },
    projects: {
      badge: "Progetti",
      title: "Progetti reali, risultati concreti",
      subtitle: "Scopri alcuni lavori realizzati per i miei clienti.",
      button: "Vedi tutti i progetti"
    },
    faq: {
      badge: "FAQ",
      title: "Tutto quello che vuoi sapere",
      subtitle: "Ecco le risposte alle domande più frequenti sul mio lavoro.",
      questions: [
        {
          question: "Quanto costa un sito web professionale?",
          answer: `Il costo di un sito web dipende da molti fattori: complessità, funzionalità richieste, tempistiche e obiettivi. Ogni progetto viene valutato individualmente in base alle tue esigenze. <a href='${langPrefix}/contact' aria-label='Apri pagina contatti' class='text-sky-500 hover:underline '>Contattami</a> per ricevere un preventivo personalizzato.`
        },
        {
          question: "Quanto tempo serve per realizzare un sito web?",
          answer: `I tempi di realizzazione variano in base alla complessità del progetto. Un sito vetrina può richiedere 3-4 settimane, mentre progetti più complessi con funzionalità avanzate possono richiedere 2-3 mesi o più. Ti fornirò sempre una tempistica chiara all'inizio del progetto. Puoi vedere esempi di lavori già completati nella pagina <a href='${langPrefix}/projects' aria-label='Vai alla pagina progetti' class='text-sky-500 hover:underline '>Progetti</a>.`
        },
        {
          question: "Offri servizi di manutenzione dopo il lancio?",
          answer: `Sì, offro un servizio di manutenzione per garantire che il tuo sito rimanga sicuro, aggiornato e performante nel tempo. Questo include aggiornamenti di sicurezza, backup regolari, e assistenza tecnica. <a href='${langPrefix}/contact' aria-label='Apri pagina contatti' class='text-sky-500 hover:underline '>Contattami</a> per maggiori dettagli.`
        },
        {
          question: "Il sito sarà ottimizzato per i motori di ricerca?",
          answer: "Tutti i siti che sviluppo seguono le migliori pratiche SEO di base. Questo include struttura semantica, ottimizzazione delle immagini, velocità di caricamento e compatibilità mobile."
        },
        {
          question: "Quali piattaforme usi per creare siti web?",
          answer: "Mi specializzo nella realizzazione di siti con <a href='https://squarespace.com' aria-label='Apri sito Squarespace' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline '>Squarespace</a> e <a href='https://framer.com' aria-label='Apri sito Framer' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline '>Framer</a>, entrambe ottime per design moderni e gestione contenuti semplice. Posso anche sviluppare siti completamente da codice per esigenze specifiche, ma questo richiede tempi e costi maggiori."
        }
      ]
    },
    banner: {
      title: "Potenzia la tua presenza online",
      subtitle: "Il tuo business merita una presenza digitale che faccia davvero la differenza. ",
      button: "Inizia ora"
    }
  },
  projects: {
    meta: {
      title: "Progetti - Davide La Marca",
      subtitle: "Esplora il mio portfolio di progetti di sviluppo web inclusi siti moderni, piattaforme e-commerce e applicazioni web."
    },
    header: {
      badge: "Portfolio",
      title: "Idee che diventano realtà",
      subtitle: "Il mio lavoro raccontato attraverso i risultati."
    },
    ProjectCards: [
      {
        id: "sorrento-boat-trips",
        title: "Sorrento Boat Trips",
        description: "Sito web moderno per un'agenzia di tour privati a Sorrento, con sistema di prenotazione online integrato tramite FareHarbor.",
        button: "Vedi dettagli",
        image: "sorrento-boat-trips.png",
        technologies: ["Squarespace", "SEO", "Fareharbor"],
        link: "https://sorrentoboattrips.com",
        ariaLabel: "Pagina web con contatti di Sorrento Boat Trips e foto di due persone sorridenti in barca al sole."
      },
      {
        id: "skillbridge",
        title: "SkillBridge",
        description: "Web app completa che connette freelancer e aziende: post di lavoro, ricerca avanzata, chat in tempo reale e profili personalizzati.",
        button: "Vedi dettagli",
        image: "skillbridge.png",
        technologies: ["HTML", "CSS", "Javascript", "SQLite"],
        link: "https://github.com/lama-development/skillbridge",
        ariaLabel: "Schermata digitale di smartphone con app per cercare lavoro, profili e opportunità."
      },
      {
        id: "caprice-bleu",
        title: "Caprice Bleu",
        description: "Sito web elegante per un'agenzia che offre esperienze e tour privati in barca di lusso, con design raffinato e ottimizzazione SEO.",
        button: "Vedi dettagli",
        image: "caprice-bleu.png",
        technologies: ["Squarespace", "SEO"],
        link: "https://capricebleu.com",
        ariaLabel: "Pagina web con tre donne su una barca, l’isola di Capri sullo sfondo, che promuove tour esclusivi."
      }
      // {
      //   id: "netwatch",
      //   title: "NetWatch",
      //   description: "lorem ipsum dolor sit amet.",
      //   button: "Vedi dettagli",
      //   image: "placeholder.png",
      //   technologies: ["HTML", "CSS", "Javascript", "Python", "SQLite"],
      //   link: "https://github.com/lama-development/netwatch",
      //   ariaLabel: "lorem ipsum dolor sit amet"
      // },
      // {
      //   id: "exotic-county-roleplay",
      //   title: "Exotic County Roleplay",
      //   description: "lorem ipsum dolor sit amet.",
      //   button: "Vedi dettagli",
      //   image: "placeholder.png",
      //   technologies: ["Framer", "Design"],
      //   link: "https://ecrp.framer.website",
      //   ariaLabel: "lorem ipsum dolor sit amet"
      // }
    ],
    testimonials: {
      badge: "Testimonials",
      title: "Non lo dico io, lo dicono loro",
      subtitle: "La voce dei clienti che hanno già lavorato con me.",
      testimonialsList: [
        {
          id: "sorrento-boat-trips-testimonial",
          quote: "Lavorare con te è stata un'esperienza molto positiva. Ho apprezzato la tua disponibilità, la professionalità e soprattutto la pazienza nel seguire ogni dettaglio. Mi è piaciuto il fatto che hai saputo ascoltare le mie esigenze e trasformarle in una pagina web funzionale ed esteticamente curata. Un aspetto che mi ha colpito particolarmente è stata la tua capacità di proporre soluzioni creative e pratiche che hanno reso il risultato finale ancora migliore di quanto immaginassi.",
          author: "Amy e Antonio",
          company: "Sorrento Boat Trips",
          role: "Fondatori"
        }
      ]
    }
  },
  contact: {
    meta: {
      title: "Contattami - Davide La Marca",
      description:  "Raccontami il tuo progetto e scopri come possiamo collaborare per realizzarlo al meglio."
    },
    header: {
      badge: "Form",
      title: "Il tuo prossimo progetto parte da qui",
      subtitle: "Parlami della tua idea e vediamo insieme come trasformarla in realtà."
    },
    form: {
      stepText: "Passo {current} di {total}",
      contacts: {
        title: "Contatti",
        subtitle: "Inserisci i tuoi dati di contatto",
        name: {
          label: "Nome e Cognome",
          placeholder: "Mario Rossi"
        },
        email: {
          label: "Email",
          placeholder: "mariorossi@example.com"
        },
        company: {
          label: "Azienda (opzionale)",
          placeholder: "Nome dell'azienda"
        },
        phone: {
          label: "Telefono (opzionale)",
          placeholder: "+39 123 4567890"
        }
      },
      rules: {
        title: "Termini e Condizioni",
        subtitle: "Per una collaborazione trasparente",
        rulesList: ["Gli obiettivi, lo stile e i contenuti si definiscono all’inizio; modifiche sostanziali richiedono accordi extra.", "I feedback sono fondamentali, ma la coerenza tecnica e creativa del progetto resta sotto la mia responsabilità.", "Testi, immagini e materiali vanno forniti nei tempi concordati.", "Il pagamento avviene in 2 o 3 tranche, a seconda del progetto.", "Le revisioni sono limitate e non includono cambiamenti radicali alla struttura approvata.", "Mi riservo il diritto di mostrare il lavoro sui miei canali, senza divulgare dati riservati."],
        accept: "Sono d'accordo, iniziamo!",
        termsText: "Spuntando la casella, accetti integralmente anche i ",
        termsLink: "Termini di Servizio",
        nextButton: "Continua"
      },
      project: {
        title: "Progetto",
        subtitle: "Raccontami del progetto",
        projectType: {
          label: "Che tipo di progetto hai in mente?",
          options: ["Nuovo sito web", "Redesign di un sito esistente", "E-commerce", "Web app", "SEO e ottimizzazione", "Altro"]
        },
        budget: {
          label: "Qual è il budget?",
          options: ["< 1000€", "1000€ - 2000€", "2000€ - 3000€", "Oltre 3000€"]
        },
        timeline: {
          label: "Qiali sono le tempistiche desiderate?",
          options: ["Urgente (si applicano maggiorazioni)", "Flessibili"]
        }
      },
      details: {
        title: "Dettagli",
        subtitle: "Descrivi meglio il progetto",
        message: {
          label: "Descrivi il progetto nei dettagli",
          placeholder: "Spiegami cosa vorresti ottenere, il tuo settore, funzionalità specifiche, ecc."
        },
        inspiration: {
          label: "Hai ispirazioni o esempi? (opzionale)",
          placeholder: "Link a siti o risorse che rappresentano lo stile che vorresti"
        },
        hasBranding: {
          label: "Hai già un branding (colori, logo, stile grafico)?",
          options: ["Sì, tutto pronto", "In parte, devo definirla meglio", "No, devo crearne uno"]
        }
      },
      navigation: {
        next: "Avanti",
        submit: "Invia"
      },
      validation: {
        required: "Questo campo è obbligatorio",
        email: "Inserisci un indirizzo email valido",
        acceptTerms: "Devi accettare le condizioni per continuare"
      },
      success: {
        title: "Richiesta inviata",
        message: "Grazie! La tua richiesta è stata inviata con successo. Se accettata, verrai ricontattato al più presto.",
        backHome: "Torna alla home"
      },
      aria: {
        prev: "Torna al passo precedente",
        next: "Vai al passo successivo"
      }
    },
    values: {
      badge: "Valori",
      title: "Le fondamenta di ogni progetto",
      subtitle: "I principi che guidano il mio lavoro e le relazioni con i clienti.",
      valuesList: [
        {
          title: "Qualità Prima di Tutto",
          description: "Ogni riga di codice realizzata con attenzione ai dettagli e best practices.",
          icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        },
        {
          title: "Comunicazione Chiara",
          description: "Aggiornamenti trasparenti e dialogo aperto durante tutto il progetto.",
          icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        },
        {
          title: "Apprendimento Continuo",
          description: "Sempre aggiornato con le ultime tecnologie per soluzioni moderne.",
          icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        },
        {
          title: "Successo del Cliente",
          description: "Il tuo successo è il mio successo. Impegnato a fornire risultati concreti.",
          icon: "M13 10V3L4 14h7v7l9-11h-7z"
        }
      ]
    },
    email: {
      badge: "Email",
      title: "Cerchi una Email?",
      description: "Puoi contattarmi direttamente via email per informazioni generali. Per le richieste di progetto, invece, usa il form sopra.",
      aria: {
        email: "Invia email"
      }
    }
  },
  pageNotFound: {
    meta: {
      title: "Pagina Non Trovata - Davide La Marca",
      description: "La pagina che stai cercando non esiste o si è verificato un altro errore. Torna alla home per continuare la navigazione."
    },
    title: "Pagina non trovata",
    subtitle: "La pagina che stai cercando non esiste o si è verificato un altro errore.",
    button: "Torna alla home"
  },
  footer: {
    brand: "davidelamarca",
    page1: "Termini di Servizio",
    page2: "Privacy Policy",
    copyright: "Davide La Marca.",
    vat: "P.I. 02804090039",
    aria: {
      system: "Usa il tema di sistema",
      light: "Usa il tema chiaro",
      dark: "Usa il tema scuro",
      linkedin: "Apri profilo LinkedIn",
      github: "Apri profilo GitHub",
      dribbble: "Apri profilo Dribbble",
      resume: "Vedi CV Online",
      email: "Invia email"
    }
  }
});
