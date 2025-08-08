export default (langPrefix = "") => ({
  lang: "it",
  meta: {
    title: "Davide La Marca - Siti Web & SEO"
  },
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
      serviceTitle1: "Sviluppo Web",
      serviceTitle2: "Web Design",
      serviceTitle3: "SEO & Best Practice",
      serviceSubtitle1: "Siti web moderni, veloci e responsive, pensati per offrire la migliore esperienza utente.",
      serviceSubtitle2: "Interfacce intuitive che migliorano la navigazione e convertono i visitatori in clienti.",
      serviceSubtitle3: "Ottimizzazione SEO e sviluppo secondo best practice per visibilità e performance."
    },
    projects: {
      badge: "Progetti",
      title: "Progetti reali, risultati concreti",
      subtitle: "Alcuni dei lavori che ho realizzato per i miei clienti.",
      button: "Vedi tutti i progetti",
      project1: {
        title: "Sorrento Boat Trips",
        type: "Sito web",
        description: "Sito web moderno per un'agenzia di tour privati a Sorrento, con sistema di prenotazione online integrato tramite FareHarbor.",
        button: "Vedi progetto"
      },
      project2: {
        title: "SkillBridge",
        type: "Web app",
        description: "Web app completa che connette freelancer e aziende: post di lavoro, ricerca avanzata, chat in tempo reale e profili personalizzati.",
        button: "Vedi progetto"
      }
    },
    faq: {
      badge: "FAQ",
      title: "Domande? Risposte!",
      subtitle: "Ecco le risposte alle domande più frequenti sul mio lavoro.",
      questions: [
        {
          question: "Quanto costa un sito web professionale?",
          answer: `Il costo di un sito web dipende da molti fattori: complessità, funzionalità richieste, tempistiche e obiettivi. Ogni progetto viene valutato individualmente in base alle tue esigenze. <a href='${langPrefix}/contact' aria-label='Apri pagina contatti' class='text-sky-600 hover:underline dark:text-sky-400'>Contattami</a> per ricevere un preventivo personalizzato.`
        },
        {
          question: "Quanto tempo serve per realizzare un sito web?",
          answer: `I tempi di realizzazione variano in base alla complessità del progetto. Un sito vetrina può richiedere 3-4 settimane, mentre progetti più complessi con funzionalità avanzate possono richiedere 2-3 mesi o più. Ti fornirò sempre una tempistica chiara all'inizio del progetto. Puoi vedere esempi di lavori già completati nella pagina <a href='${langPrefix}/projects' aria-label='Vai alla pagina progetti' class='text-sky-600 hover:underline dark:text-sky-400'>Progetti</a>.`
        },
        {
          question: "Offri servizi di manutenzione dopo il lancio?",
          answer: `Sì, offro un servizio di manutenzione per garantire che il tuo sito rimanga sicuro, aggiornato e performante nel tempo. Questo include aggiornamenti di sicurezza, backup regolari, e assistenza tecnica. <a href='${langPrefix}/contact' aria-label='Apri pagina contatti' class='text-sky-600 hover:underline dark:text-sky-400'>Contattami</a> per maggiori dettagli.`
        },
        {
          question: "Il sito sarà ottimizzato per i motori di ricerca?",
          answer: "Tutti i siti che sviluppo seguono le migliori pratiche SEO di base. Questo include struttura semantica, ottimizzazione delle immagini, velocità di caricamento e compatibilità mobile."
        },
        {
          question: "Quali piattaforme usi per creare siti web?",
          answer: "Mi specializzo nella realizzazione di siti con <a href='https://squarespace.com' aria-label='Apri sito Squarespace' target='_blank' rel='noopener noreferrer' class='text-sky-600 hover:underline dark:text-sky-400'>Squarespace</a> e <a href='https://framer.com' aria-label='Apri sito Framer' target='_blank' rel='noopener noreferrer' class='text-sky-600 hover:underline dark:text-sky-400'>Framer</a>, entrambe ottime per design moderni e gestione contenuti semplice. Posso anche sviluppare siti completamente da codice per esigenze specifiche, ma questo richiede tempi e costi maggiori."
        }
      ]
    },
    banner: {
      title: "Potenzia la tua presenza online",
      subtitle: "Il tuo business merita una presenza digitale che faccia davvero la differenza. Realizzo siti veloci e moderni per realtà ambiziose come la tua.",
      button: "Inizia ora"
    }
  },
  contact: {
    landing: {
      badge: "Contattami",
      title: "Iniziamo a lavorare insieme",
      subtitle: "Raccontami il tuo progetto e troviamo insieme la soluzione ideale per il tuo business."
    },
    rules: {
      button: "Leggi le condizioni",
      modalTitle: "Regole di collaborazione",
      sections: [
        {
          title: "Comunicazione professionale",
          rules: ["Rispetto reciproco e comunicazione cortese", "Risposta alle email entro 48 ore lavorative", "Briefing dettagliato con obiettivi chiari", "Feedback costruttivo e specifico"]
        },
        {
          title: "Gestione del progetto",
          rules: ["Tempistiche realistiche concordate insieme", "Massimo 3 revisioni per ogni fase del progetto", "Pagamento di un acconto del 50% prima dell'inizio", "Saldo finale prima della consegna"]
        },
        {
          title: "Aspettative allineate",
          rules: ["Budget definito fin dall'inizio", "Modifiche sostanziali comportano costi aggiuntivi", "I contenuti sono responsabilità del cliente", "Il codice sorgente rimane di proprietà del cliente"]
        }
      ],
      checkbox: "Ho letto e accetto le regole di collaborazione",
      continue: "Continua"
    },
    form: {
      introBox: {
        title: "Modulo richiesta progetto",
        description: "Tutte le richieste di progetto devono essere inviate tramite questo modulo. Non accetto progetti tramite email o altri canali per garantire una gestione efficiente e trasparente.",
        important: "Importante:",
        requirements: "È necessario leggere e accettare le condizioni prima di compilare il modulo."
      },
      steps: {
        project: "Progetto",
        details: "Dettagli",
        budget: "Termini",
        contact: "Contatti"
      },
      step1: {
        title: "Che tipo di progetto hai in mente?",
        options: ["Nuovo sito web", "Redesign di un sito esistente", "E-commerce", "Web app", "SEO e ottimizzazione", "Altro"]
      },
      step2: {
        title: "Raccontami di più sul tuo progetto",
        description: {
          label: "Descrizione del progetto",
          placeholder: "Descrivi il tuo progetto, cosa ti aspetti ed eventuali stili di ispirazione..."
        },
        domain: {
          label: "Hai già un dominio?",
          options: ["Sì", "No", "Non so cosa sia"]
        },
        content: {
          label: "Hai già pronti i contenuti (testi, immagini, logo)?",
          options: ["Sì, tutto pronto", "In parte", "No, devo ancora prepararli"]
        }
      },
      step3: {
        title: "Budget e Tempistiche",
        budget: {
          label: "Budget indicativo per il progetto",
          options: ["< 1000€", "1000€ - 2000€", "2000€ - 3000€", "Oltre 3000€"]
        },
        timeline: {
          label: "Tempistiche desiderate",
          options: ["Flessibili", "Urgente (si applicano maggiorazioni)"]
        }
      },
      step4: {
        title: "Contatti",
        name: {
          label: "Nome e Cognome",
          placeholder: "Mario Rossi"
        },
        email: {
          label: "Email di contatto",
          placeholder: "mario@example.com"
        },
        phone: {
          label: "Telefono (facoltativo)",
          placeholder: "+39 123 456 7890"
        },
        notes: {
          label: "Note (facoltativo)",
          placeholder: "Aggiungi eventuali note o richieste specifiche..."
        }
      },
      buttons: {
        next: "Continua",
        previous: "Indietro",
        submit: "Invia richiesta"
      },
      confirmation: {
        title: "Conferma invio richiesta",
        message: "Sei sicuro di voler inviare questa richiesta di progetto? Una volta inviata non sarà più possibile modificarla.",
        confirm: "Sì, invia",
        cancel: "Annulla"
      },
      success: {
        title: "Richiesta inviata con successo!",
        message: "Grazie per aver inviato la tua richiesta di progetto. Se accetterò la proposta, ti contatterò tramite l'email fornita.",
        backButton: "Torna alla home"
      },
      errors: {
        title: "Errore nella compilazione del modulo",
        step1: "Seleziona il tipo di progetto",
        step2: {
          description: "La descrizione del progetto è obbligatoria",
          domain: "Indica se hai già un dominio",
          content: "Indica la disponibilità dei contenuti"
        },
        step3: {
          budget: "Seleziona un budget indicativo",
          timeline: "Indica le tempistiche desiderate"
        },
        step4: {
          name: "Il nome è obbligatorio",
          email: "Inserisci un'email valida",
          phone: "Il numero di telefono non è valido",
          notes: "Le note sono obbligatorie"
        }
      }
    },
    sidebar: {
      progress: "Progresso",
      email: {
        title: "Email",
        subtitle: "Hai dubbi o domande?",
        button: "Scrivimi"
      },
      social: {
        title: "Social",
        subtitle: "Seguimi sui social network"
      },
      aria: {
        email: "Invia email",
        linkedin: "Apri profilo LinkedIn",
        github: "Apri profilo GitHub",
        dribbble: "Apri profilo Dribbble",
        resume: "Vedi CV Online"
      }
    }
  },
  pageNotFound: {
    title: "404",
    description: "La pagina che stai cercando non esiste o si è verificato un altro errore.",
    button: "Torna alla home"
  },
  footer: {
    brand: "davidelamarca",
    page1: "Termini di Servizio",
    page2: "Privacy Policy",
    copyright: "Davide La Marca",
    vat: "P. IVA: 02804090039",
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
