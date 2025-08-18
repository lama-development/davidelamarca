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
        description: "Sito web moderno per un'agenzia di tour privati a Sorrento, con sistema di prenotazione online integrato tramite FareHarbor.",
        button: "Vedi progetto"
      },
      project2: {
        title: "SkillBridge",
        description: "Web app completa che connette freelancer e aziende: post di lavoro, ricerca avanzata, chat in tempo reale e profili personalizzati.",
        button: "Vedi progetto"
      },
      aria: {
        image1: "Screenshot del sito web Sorrento Boat Trips, mostrando l'homepage con design moderno e sistema di prenotazione",
        image2: "Screenshot della web app SkillBridge, mostrando l'interfaccia per freelancer con ricerca lavori e chat"
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
    meta: {
      title: "Contattami - Davide La Marca",
      description: "Raccontami il tuo progetto e scopri come possiamo lavorare insieme per realizzare il sito che meriti."
    },
    badge: "Contattami",
    title: "Iniziamo il tuo progetto",
    description: "Raccontami la tua idea e scopriamo insieme come realizzare il sito web che meriti. Compilare questo modulo è il primo passo verso il tuo nuovo sito web.",
    form: {
      stepText: "Passo {current} di {total}",
      step1: {
        title: "Step 1: Regole",
        description: "Per una collaborazione trasparente",
        rules: ["Definiamo obiettivi, stile e contenuti all'inizio; modifiche sostanziali vanno concordate a parte.", "I feedback sono benvenuti, ma la direzione creativa e tecnica è mia.", "Testi, immagini e materiali devono essere forniti nei tempi concordati.", "Il pagamento avviene in 2 o 3 tranche, a seconda del progetto.", "Le revisioni sono limitate, non accetto richieste che cambiano completamente la struttura già approvata.", "L'assistenza post-lancio copre solo la risoluzione di errori e ritocchi minimi.", "Mi riservo il diritto di mostrare il lavoro sui miei canali, senza divulgare dati riservati.", "Qualora la collaborazione risulti tossica o poco trasparente, mi riservo il diritto di interromperla."],
        accept: "Ho letto e accetto le regole di collaborazione",
        termsText: "Spuntando la casella, accetti integralmente anche i ",
        termsLink: "Termini di Servizio",
        nextButton: "Continua"
      },
      step2: {
        title: "Step 2: Contatti",
        description: "Inserisci i tuoi dati per essere contattato",
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
      step3: {
        title: "Step 3: Progetto",
        description: "Raccontami di cosa si tratta il progetto",
        projectType: {
          label: "Che tipo di progetto hai in mente?",
          options: ["Nuovo sito web", "Redesign di un sito esistente", "E-commerce", "Web app", "SEO e ottimizzazione", "Altro"]
        },
        budget: {
          label: "Budget indicativo",
          options: ["< 1000€", "1000€ - 2000€", "2000€ - 3000€", "Oltre 3000€"]
        },
        timeline: {
          label: "Tempistiche desiderate",
          options: ["Urgente (si applicano maggiorazioni)", "Flessibiii"]
        }
      },
      step4: {
        title: "Step 4: Dettagli",
        description: "Descrivi meglio il progetto",
        message: {
          label: "Descrivi il progetto nei dettagli",
          placeholder: "Raccontami cosa vorresti ottenere, quale è il tuo settore di business, se hai già un sito esistente, funzionalità specifiche che desideri, ecc."
        },
        inspiration: {
          label: "Siti web che ti ispirano (opzionale)",
          placeholder: "Link a siti o risorse che ti piacciono o che rappresentano lo stile che vorresti"
        },
        hasDesign: {
          label: "Hai già un branding (colori, logo, stile grafico)?",
          options: ["Sì, ho già un branding completo", "In parte, devo definire alcuni elementi", "No, devo crearne uno"]
        }
      },
      navigation: {
        next: "Avanti",
        submit: "Invia"
      },
      validation: {
        required: "Questo campo è obbligatorio",
        email: "Inserisci un indirizzo email valido",
        acceptTerms: "Devi accettare le regole del progetto per continuare"
      },
      success: {
        title: "Richiesta inviata",
        message: "Grazie! La tua richiesta è stata inviata con successo. Se accettata, verrai ricontattato al più presto.",
        backHome: "Torna alla home"
      }
    },
    alternative: {
    }
  },
  pageNotFound: {
    meta: {
      title: "Pagina Non Trovata - Davide La Marca",
      description: "La pagina che stai cercando non esiste o si è verificato un altro errore. Torna alla home per continuare la navigazione."
    },
    title: "404",
    description: "La pagina che stai cercando non esiste o si è verificato un altro errore.",
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
