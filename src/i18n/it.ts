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
        button: "Vai al sito",
        image: "sorrento-boat-trips.png",
        technologies: ["Squarespace", "SEO", "Fareharbor"],
        link: "https://sorrentoboattrips.com",
        ariaLabel: "Pagina web con contatti di Sorrento Boat Trips e foto di due persone sorridenti in barca al sole."
      },
      {
        id: "skillbridge",
        title: "SkillBridge",
        description: "Web app completa che connette freelancer e aziende: post di lavoro, ricerca avanzata, chat in tempo reale e profili personalizzati.",
        button: "Vai al progetto",
        image: "skillbridge.png",
        technologies: ["HTML", "CSS", "Javascript", "SQLite"],
        link: "https://github.com/lama-development/skillbridge",
        ariaLabel: "Schermata digitale di smartphone con app per cercare lavoro, profili e opportunità."
      },
      {
        id: "caprice-bleu",
        title: "Caprice Bleu",
        description: "Sito web elegante per un'agenzia che offre esperienze e tour privati in barca di lusso, con design raffinato e ottimizzazione SEO.",
        button: "Vai al sito",
        image: "caprice-bleu.png",
        technologies: ["Squarespace", "SEO"],
        link: "https://capricebleu.com",
        ariaLabel: "Pagina web con tre donne su una barca, l'isola di Capri sullo sfondo, che promuove tour esclusivi."
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
      badge: "Testimonial",
      title: "Non lo dico io, lo dicono loro",
      subtitle: "La voce dei clienti che hanno già lavorato con me.",
      testimonialsList: [
        {
          id: "sorrento-boat-trips-testimonial",
          quote: "Lavorare con te è stata un'esperienza molto positiva. Ho apprezzato la tua disponibilità, la professionalità e soprattutto la pazienza nel seguire ogni dettaglio. Mi è piaciuto il fatto che hai saputo ascoltare le mie esigenze e trasformarle in una pagina web funzionale ed esteticamente curata. Un aspetto che mi ha colpito particolarmente è stata la tua capacità di proporre soluzioni creative e pratiche che hanno reso il risultato finale ancora migliore di quanto immaginassi.",
          author: "Amy e Antonio",
          company: "Sorrento Boat Trips",
          website: "https://sorrentoboattrips.com",
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
      title: "Il tuo prossimo progetto inizia qui",
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
        rulesList: ["Gli obiettivi, lo stile e i contenuti si definiscono all'inizio; modifiche sostanziali richiedono accordi extra.", "I feedback sono fondamentali, ma la coerenza tecnica e creativa del progetto resta sotto la mia responsabilità.", "Testi, immagini e materiali vanno forniti nei tempi concordati.", "Il pagamento avviene in 2 o 3 tranche, a seconda del progetto.", "Le revisioni sono limitate e non includono cambiamenti radicali alla struttura approvata.", "Mi riservo il diritto di mostrare il lavoro sui miei canali, senza divulgare dati riservati."],
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
        acceptTerms: "Devi accettare le condizioni per continuare",
        submitError: "Si è verificato un errore durante l'invio del modulo. Riprova."
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
  termsOfService: {
    meta: {
      title: "Termini di Servizio - Davide La Marca",
      description: "Termini e condizioni di servizio per i progetti di sviluppo web e collaborazioni."
    },
    header: {
      badge: "Legale",
      title: "Termini di Servizio",
      subtitle: "Ultimo aggiornamento: <code>2025-09-09</code>"
    },
    sections: [
      {
        title: "Introduzione",
        content : [
          {
            type: "paragraph",
            text: "Con “Fornitore” si intende LA MARCA DAVIDE (ditta individuale, P.IVA 02804090039). Con “Cliente” si intende la persona fisica o giuridica che inoltra richiesta tramite il form presente nella <a href='/contact' class='text-sky-500 hover:underline'>pagina di contatto</a> o accetta per iscritto l'offerta. I presenti Termini disciplinano la fornitura di servizi di progettazione, realizzazione, ottimizzazione e manutenzione di siti web e servizi connessi (i “Servizi”). L'invio del form o l'utilizzo continuato del sito <a href='https://davidelamarca.com' class='text-sky-500 hover:underline'>davidelamarca.com</a> costituiscono accettazione integrale dei presenti Termini. Il Fornitore si riserva il diritto di modificare i presenti Termini in qualsiasi momento; le modifiche entreranno in vigore dalla data di pubblicazione sul sito. L'uso continuato del sito o l'esecuzione di nuovi ordini successivi alla pubblicazione delle modifiche costituiscono accettazione tacita delle stesse. La data dell'ultima versione è riportata in testa al presente documento e viene aggiornata al momento della pubblicazione delle modifiche."
          }
        ]
      },
      {
        title: "1. Ambito del servizio e modalità operative ",
        content: [
          {
            type: "paragraph",
            text: "I Servizi sono eseguiti secondo il brief e le specifiche concordate. Di norma i siti vengono realizzati su piattaforme SaaS come <a href='https://squarespace.com' aria-label='Apri sito Squarespace' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline '>Squarespace</a> o <a href='https://framer.com' aria-label='Apri sito Framer' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline '>Framer</a>; lo sviluppo in codice è possibile esclusivamente per esigenze complesse e sarà specificato nell'offerta."
          },
          {
            type: "paragraph",
            text: "La progettazione grafica, strutturale e funzionale del sito è affidata all'esperienza e alla competenza professionale del Fornitore: il Cliente può esprimere preferenze, indicazioni e vincoli di contenuto, ma non ha facoltà di imporre soluzioni tecniche o grafiche in contrasto con la visione, lo stile o gli standard professionali del Fornitore. Le modifiche sostanziali rispetto al brief iniziale (scope change) richiedono accordo scritto e possono comportare variazioni di tempi e costi."
          }
        ]
      },
      {
        title: "2. Obblighi del Cliente, materiali forniti e responsabilità sui contenuti",
        content: [
          {
            type: "paragraph", 
            text: "Il Cliente si impegna a fornire in tempi utili e nei formati richiesti testi, immagini, loghi, video, licenze e ogni altro materiale necessario alla realizzazione del sito. Il Cliente garantisce di essere titolare dei diritti o di avere il diritto di utilizzo del materiale fornito e manleva il Fornitore da qualsiasi pretesa, costo o responsabilità derivante da violazioni di copyright, marchi o altri diritti di terzi connesse al materiale fornito. Il Fornitore non è responsabile per usi impropri o illeciti di materiale fornito dal Cliente. Qualsiasi materiale fornito oltre i termini concordati che comporti ritardi non rende il Fornitore responsabile per lo slittamento delle milestone."
          }
        ]
      },
      {
        title: "3. Accessi, hosting, terze parti e link esterni",
        content: [
          {
            type: "paragraph",
            text: "Il Cliente fornisce accessi necessari (account, hosting, DNS, API) nei tempi richiesti; la gestione operativa dell'hosting, del dominio e dei servizi terzi rimane a carico del Cliente. L'utilizzo di componenti di terze parti (plugin, template, font, API) sarà effettuato nel rispetto delle relative licenze: eventuali costi di licenza/abbonamento ricadranno sul Cliente. Per i siti realizzati su piattaforme SaaS, la completa esportabilità o portabilità dei contenuti può essere limitata dalle funzionalità della piattaforma stessa; ogni esigenza di migrazione o esportazione dovrà essere definita e concordata in fase contrattuale. Eventuali link a risorse esterne sono forniti a solo scopo informativo: il Fornitore non controlla né è responsabile dei contenuti esterni."
          }
        ]
      },
      {
        title: "4. Tempistiche, consegna, hosting e domini",
        content: [
          {
            type: "paragraph",
            text: "Per i progetti realizzati su piattaforme SaaS (es. <a href='https://squarespace.com' aria-label='Apri sito Squarespace' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline'>Squarespace</a>, <a href='https://framer.com' aria-label='Apri sito Framer' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline '>Framer</a> o simili) il Cliente è tenuto ad acquistare autonomamente il piano/abbonamento necessario sulla piattaforma scelta e a concedere al Fornitore accesso al progetto con privilegi appropriati (es. ruolo di collaboratore, accesso a workspace o credenziali tecniche) in modo da permettere lo svolgimento delle attività. Parte dei contenuti o delle funzionalità del progetto potrà rimanere bloccata o non visibile fino al saldo; tale limitazione è finalizzata a tutelare la titolarità degli elaborati e a garantire l'adempimento degli obblighi contrattuali, e non può essere interpretata come inadempimento, difetto o motivo di reclamo nei confronti del Fornitore."
          },
          {
            type: "paragraph",
            text: "La registrazione del dominio è a carico del Cliente: il Cliente provvede ad acquistare il dominio presso il registrar di sua scelta e resta responsabile del pagamento delle relative tariffe e rinnovi. Una volta acquistato, il Cliente fornisce al Fornitore gli accessi necessari (account presso il registrar, credenziali amministrative, codice di autorizzazione/EPP se previsto) o concede una delega di gestione in modo che il Fornitore possa procedere con la configurazione tecnica, l'aggiunta o il trasferimento del dominio sul progetto. Il Fornitore si occuperà delle operazioni tecniche di trasferimento o configurazione previa ricezione di tutte le autorizzazioni dal Cliente; eventuali costi di trasferimento imposti dal registrar sono a carico del Cliente. I tempi tecnici per la propagazione DNS, il completamento del trasferimento tra registrar o l'attivazione di certificati SSL dipendono dai registrar e dai provider coinvolti e non sono imputabili al Fornitore."
          }
        ]
      },
      {
        title: "5. Compenso, fatturazione, IVA e modalità di pagamento",
        content: [
          {
            type: "paragraph",
            text: "Le modalità di pagamento dipendono dal tipo di progetto e dall'importo totale: la soluzione definitiva sarà indicata nell'offerta che accompagnerà il preventivo. I compensi sono quelli indicati nell'offerta e sono IVA esclusa. Il pagamento avviene esclusivamente tramite bonifico bancario alle coordinate comunicate dal Fornitore. Modalità di pagamento tipiche:"
          },
          {
            type: "list", 
            items: [
              "Opzione A (3 tranche): acconto 40% all'avvio, tranche intermedia 40%, saldo 20% alla consegna;",
              "Opzione B (2 tranche): acconto 50% all'avvio e saldo 50% alla consegna.",
            ]
          },
          {
            type: "paragraph",
            text: "Le fatture saranno emesse con l'IVA applicabile e secondo la normativa vigente. In caso di ritardo nel pagamento il Fornitore si riserva il diritto di sospendere i lavori e l'accesso ai materiali fino al saldo; saranno applicati interessi di mora ed eventuali costi di sollecito conformi alla legge. L'acconto è generalmente non rimborsabile salvo diverso accordo scritto."
          }
        ]
      },
      {
        title: "6. Revisioni, change request e garanzia tecnica",
        content: [
          {
            type: "paragraph",
            text: "L'offerta include di norma 2 round di revisione; tali revisioni sono finalizzate esclusivamente alla correzione, al perfezionamento e all'adattamento dei contenuti e non comprendono cambiamenti strutturali o ridefinizione del concept del progetto. Le richieste che comportano modifiche significative alla struttura, all'architettura o al concept del sito saranno considerate change request e verranno fatturate separatamente alla tariffa oraria concordata (tariffa oraria: €25/ora)."
          },
          {
            type: "paragraph",
            text: "La consegna del sito non include assistenza tecnica continuativa, aggiornamenti futuri o interventi successivi, che sono considerati servizi extra a pagamento da concordare separatamente (manutenzione, assistenza, aggiornamenti, interventi urgenti). È incluso, di norma, un periodo di garanzia tecnica di 7 giorni dalla pubblicazione per la correzione di bug direttamente imputabili allo sviluppo; gli interventi richiesti oltre tale termine rientrano in un eventuale contratto di manutenzione o saranno fatturati a parte."
          }
        ]
      },
      {
        title: "7. Proprietà intellettuale e uso promozionale",
        content: [
          {
            type: "paragraph",
            text: "I diritti d'autore e i diritti di utilizzazione economica sugli elaborati realizzati (grafica, layout, strutture, codice ove fornito) sono ceduti al Cliente solo dopo il pagamento integrale del corrispettivo pattuito. Fino al saldo completo il codice, il design e le soluzioni tecniche sviluppate restano di proprietà del Fornitore e il Fornitore può trattenere i sorgenti o limitare la consegna."
          },
          {
            type: "paragraph",
            text: "Il Fornitore si riserva il diritto di inserire riferimenti discreti alla propria attività professionale, ad esempio mediante la dicitura “Designed by Davide La Marca” nel footer o in altra posizione non invasiva, e di utilizzare immagini, screenshot e descrizioni del progetto per il proprio portfolio e canali promozionali. Eventuali richieste di embargo, anonimizzazione o NDA devono essere concordate prima dell’avvio del progetto."
          }
        ]
      },
      {
        title: "8. Interruzione della collaborazione, recesso e forza maggiore",
        content: [
          {
            type: "paragraph",
            text: "Il Fornitore si riserva il diritto di interrompere unilateralmente la collaborazione e recedere dal contratto in caso di:"
          },
          {
            type: "list", 
            items: [
              "Mancato rispetto delle condizioni economiche o contrattuali da parte del Cliente;",
              "Comportamenti del Cliente lesivi della professionalità o dignità del Fornitore;",
              "Comunicazioni o condotte del Cliente manifestamente inappropriate, moleste, aggressive, manipolative o offensivi nei confronti del Fornitore.",
            ]
          },
          {
            type: "paragraph",
            text: "In caso di interruzione per i motivi su indicati il Fornitore tratterrà l'acconto e/o quanto maturato fino a quel momento in proporzione al lavoro svolto."
          },
          {
            type: "paragraph",
            text: "Gli eventi di forza maggiore (calamità, guerre, attacchi informatici su larga scala, interruzioni di infrastrutture o servizi terzi) sospendono le obbligazioni delle parti per la durata dell'evento; le parti si adopereranno per riprendere le prestazioni non appena possibile."
          }
        ]
      },
      {
        title: "9. Garanzie, limitazione di responsabilità, indennizzo e legge applicabile",
        content: [
          {
            type: "paragraph",
            text: "Il Fornitore svolge le prestazioni con diligenza professionale ma non garantisce risultati economici, posizionamenti SEO o performance non direttamente controllabili dall'attività tecnica. La responsabilità complessiva del Fornitore è limitata all'importo complessivamente corrisposto dal Cliente per il progetto oggetto della controversia. Il Cliente manleva e tiene indenne il Fornitore da qualsiasi richiesta o pretesa di terzi derivante da materiale fornito dal Cliente che violi diritti di terzi o norme di legge. I presenti Termini sono regolati dalla legge italiana."
          }
        ]
      },
      {
        title: "Informazioni di contatto",
        content: [
          {
            type: "list", 
            items: [
              "LA MARCA DAVIDE",
              "P.IVA: 02804090039",
              "Sito web: <a href='https://davidelamarca.com' aria-label='Vai al sito web' class='text-sky-500 hover:underline'>davidelamarca.com</a>",
              "Email: <a href='mailto:info@davidelamarca.com' aria-label='Invia email' class='text-sky-500 hover:underline'>info@davidelamarca.com</a>",
              "PEC: <a href='mailto:davidelamarca@legalmail.it' aria-label='Invia email' class='text-sky-500 hover:underline'>davidelamarca@legalmail.it</a>",
            ]
          },
        ]
      },
    ],
    questions: {
      title: "Domande?",
      description: "Per qualsiasi domanda riguardo ai termini di servizio, puoi contattarmi all'indirizzo ",
      ariaLabel: "Invia email"
    }
  },
  privacyPolicy: {
    meta: {
      title: "Privacy Policy - Davide La Marca",
      description: "Termini e condizioni di servizio per i progetti di sviluppo web e collaborazioni."
    },
    header: {
      badge: "Legale",
      title: "Privacy Policy",
      subtitle: "Ultimo aggiornamento: <code>2025-09-08</code>"
    },
    sections: [
      {
        title: "Premessa",
        content : [
          {
            type: "paragraph",
            text: "La presente Informativa descrive le modalità di raccolta, trattamento, conservazione e protezione dei dati personali effettuati da LA MARCA DAVIDE (di seguito, il “Titolare” o “noi”) tramite il sito web <a href='https://davidelamarca.com' aria-label='Vai al sito web' class='text-sky-500 hover:underline'>davidelamarca.com</a>  (di seguito, il “Sito”) in conformità al Regolamento (UE) 2016/679 (di seguito, “GDPR”) e alla normativa nazionale applicabile. L'utilizzo del Sito comporta l'accettazione delle modalità indicate nella presente Informativa. In mancanza di accettazione, si invita a non utilizzare il Sito."
          }
        ]
      },
      {
        title: "1. Titolare del trattamento dei dati",
        content: [
          {
            type: "list", 
            items: [
              "LA MARCA DAVIDE",
              "P.IVA: 02804090039",
              "Sito web: <a href='https://davidelamarca.com' aria-label='Vai al sito web' class='text-sky-500 hover:underline'>davidelamarca.com</a>",
              "Email: <a href='mailto:info@davidelamarca.com' aria-label='Invia email' class='text-sky-500 hover:underline'>info@davidelamarca.com</a>",
              "PEC: <a href='mailto:davidelamarca@legalmail.it' aria-label='Invia email' class='text-sky-500 hover:underline'>davidelamarca@legalmail.it</a>"
            ]
          },
          {
            type: "paragraph",
            text: "Per richieste di progetto deve essere utilizzato esclusivamente il form dedicato disponibile nella pagina <a href='https://davidelamarca.com/contact' aria-label='Vai alla pagina contatti' class='text-sky-500 hover:underline'>davidelamarca.com/contact</a>. Per qualsiasi questione relativa alla presente Informativa o all'esercizio dei diritti spettanti, contattare i riferimenti sopra indicati. Non è stato nominato un Data Protection Officer (DPO)."
          }
        ]
      },
      {
        title: "2. Definizioni",
        content: [
          {
            type: "paragraph",
            text: "Ai fini della presente Informativa si intendono per:"
          },
          {
            type: "list", 
            items: [
              "Dati personali: qualsiasi informazione riguardante una persona fisica identificata o identificabile;",
              "Interessato/Utente: la persona fisica cui si riferiscono i Dati personali;",
              "Trattamento: qualsiasi operazione o complesso di operazioni effettuate sui Dati personali;",
              "Titolare del trattamento: la persona fisica o giuridica che determina le finalità e i mezzi del trattamento;",
              "Responsabile del trattamento: la persona fisica o giuridica che tratta i dati per conto del Titolare;",
              "Tracker/Cookie/localStorage: strumenti che consentono la memorizzazione di informazioni sul dispositivo dell'Utente."
            ]
          }
        ]
      },
      {
        title: "3. Tipologie di dati trattati",
        content: [
          {
            type: "list", 
            items: [
              "Dati forniti volontariamente dall'Utente (tramite form): nome e cognome (obbligatori); indirizzo email (obbligatorio); nome azienda (opzionale); numero di telefono (opzionale); informazioni e specifiche del progetto (es. budget, tipologia, link di riferimento).",
              "Dati raccolti automaticamente (Usage Data): dati tecnici di navigazione e di comunicazione (indirizzo IP, tipo di dispositivo e browser, pagine visitate, URI richieste, tempi di risposta, codice di stato HTTP, ecc.); log di sistema e diagnostica.",
            ]
          },
          {
            type: "paragraph",
            text: "Nessuna categoria speciale di dati (dati sensibili) è raccolta tramite il Sito."
          }
        ]
      },
      {
        title: "4. Finalità del trattamento e basi giuridiche",
        content: [
          {
            type: "paragraph",
            text: "I Dati personali sono trattati per le seguenti finalità e con le corrispondenti basi giuridiche:"
          },
          {
            type: "list", 
            items: [
              "Gestione delle richieste pervenute tramite il form di contatto - finalità: valutazione ed eventuale risposta a richieste di preventivo o informazione; base giuridica: misure precontrattuali richieste dall'Interessato (art. 6, par. 1, lett. b GDPR) e, ove applicabile, legittimo interesse ad entrare in contatto per opportunità di collaborazione (art. 6, par. 1, lett. f GDPR).",
              "Esecuzione e gestione del rapporto contrattuale - finalità: esecuzione del contratto e adempimenti connessi; base giuridica: esecuzione del contratto (art. 6, par. 1, lett. b GDPR).",
              "Conservazione a fini contabili e fiscali - finalità: ottemperanza a obblighi di legge; base giuridica: adempimento di obblighi legali (art. 6, par. 1, lett. c GDPR).",
              "Garanzia della sicurezza e prevenzione di abusi - finalità: protezione del Sito e degli interessi del Titolare; base giuridica: interesse legittimo del Titolare (art. 6, par. 1, lett. f GDPR).",
              "Analisi statistica aggregata del traffico - finalità: analisi dell'uso del Sito in forma anonima e non invasiva; base giuridica: interesse legittimo del Titolare (art. 6, par. 1, lett. f GDPR)."
            ]
          },
          {
            type: "paragraph",
            text: "I Dati non saranno oggetto di profilazione automatica né venduti o comunicati a terzi per finalità commerciali."
          },
        ]
      },
      {
        title: "5. Modalità di trattamento",
        content: [
          {
            type: "paragraph",
            text: "I trattamenti sono effettuati con strumenti manuali, informatici e telematici, con logiche strettamente correlate alle finalità indicate e con misure tecniche e organizzative idonee a garantire la sicurezza, la riservatezza e l'integrità dei Dati. L'accesso ai Dati è limitato a personale autorizzato e a eventuali Responsabili esterni nominati dal Titolare. I dati sono trattati in conformità ai principi di minimizzazione, limitazione della finalità e conservazione limitata nel tempo."
          }
        ]
      },
      {
        title: "6. Responsabili esterni e fornitori",
        content: [
          {
            type: "paragraph",
            text: "Per lo svolgimento delle attività connesse alle finalità sopra descritte, il Titolare si avvale dei seguenti fornitori e servizi terzi (con indicazione sintetica del ruolo):"
          },
          {
            type: "list", 
            items: [
              "<a href='https://web3forms.com' aria-label='Apri sito Web3Forms' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline '>Web3Forms</a>: gestione tecnica del form di contatto; le submission vengono inoltrate via email al Titolare; Web3Forms dichiara di non conservare permanentemente le submission e di cancellare i log periodicamente. Consultare la <a href='https://web3forms.com/privacy' aria-label='Apri privacy policy di Web3Forms' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline '>Privacy Policy</a> di Web3Forms.",
              "<a href='https://cloudflare.com' aria-label='Apri sito Cloudflare' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline '>Cloudflare</a>: servizi di protezione (WAF), CDN, hosting parziale e analisi aggregata del traffico tramite <a href='https://cloudflare.com/web-analytics' aria-label='Apri sito Cloudflare Web Analytics' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline '>Cloudflare Web Analytics</a>, impiegato in modalità che non utilizza cookie identificativi personali. Consultare la <a href='https://cloudflare.com/privacypolicy' aria-label='Apri privacy policy di Cloudflare' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline '>Privacy Policy</a> di Cloudflare.",
              "<a href='https://zoho.com' aria-label='Apri sito Zoho' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline '>Zoho</a>: gestione della casella email professionale dove vengono recapitate le submission. Consultare la <a href='https://zoho.com/privacy' aria-label='Apri privacy policy di Zoho' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline '>Privacy Policy</a> di Zoho."
            ]
          }
        ]
      },
      {
        title: "7. Trasferimenti internazionali",
        content: [
          {
            type: "paragraph",
            text: "I servizi indicati nel presente documento possono comportare trasferimenti di Dati verso Paesi terzi. Qualora si verifichino trasferimenti di Dati al di fuori dell'Unione Europea, il Titolare adotta adeguate garanzie (quali clausole contrattuali standard approvate dalla Commissione europea, SCC, o altre garanzie riconosciute) per assicurare un livello di protezione sostanzialmente equivalente a quello garantito dal GDPR. Su richiesta è possibile ottenere copia delle garanzie adottate."
          },
        ]
      },
      {
        title: "8. Periodi di conservazione",
        content: [
          {
            type: "paragraph",
            text: "I Dati personali saranno conservati per il tempo necessario a conseguire le finalità per le quali sono stati raccolti e, in ogni caso, nei limiti e per i termini previsti dalla normativa applicabile:"
          },
          {
            type: "list", 
            items: [
              "Dati inviati tramite form (lead non convertiti): conservazione per finalità di gestione della richiesta e follow-up per un periodo non superiore a 12 mesi dall'ultima interazione, salvo consenso dell'Interessato a una durata maggiore o obblighi legali contrastanti.",
              "Dati relativi a contratti/progetti: conservazione per tutta la durata del rapporto contrattuale e successivamente per il periodo necessario all'adempimento di obblighi legali e fiscali.",
              "Log di sistema e dati per sicurezza: conservazione per un periodo necessario alla finalità di sicurezza e diagnostica, di norma non superiore a 12 mesi, salvo esigenze investigative o obblighi di legge.",
              "Dati statistici anonimizzati: conservati in forma aggregata e non identificativa per periodi indefiniti."
            ]
          },
          {
            type: "paragraph",
            text: "Decorso il periodo di conservazione i Dati saranno cancellati o resi anonimi in modo irreversibile."
          },
        ]
      },
      {
        title: "9. Cookies, tracker e localStorage",
        content: [
          {
            type: "paragraph",
            text: "Il Sito impiega esclusivamente:"
          },
          {
            type: "list",
            items: [
              "<a href='https://cloudflare.com/web-analytics' aria-label='Apri sito Cloudflare Web Analytics' target='_blank' rel='noopener noreferrer' class='text-sky-500 hover:underline '>Cloudflare Web Analytics</a>, sistema di analisi del traffico che non utilizza cookie di tracciamento personale e restituisce dati aggregati e non identificativi;",
              "localStorage del browser per la sola memorizzazione della preferenza relativa al tema grafico (chiaro/scuro)."
            ]
          },
          {
            type: "paragraph",
            text: "Non sono utilizzati altri strumenti di profilazione o monitoraggio di terze parti. Qualora in futuro venissero introdotti cookie o tracker aggiuntivi, sarà fornita specifica informativa e, ove previsto dalla normativa, il consenso sarà richiesto prima dell'attivazione."
          },
        ]
      },
      {
        title: "10. Sicurezza dei dati e data breach",
        content: [
          {
            type: "paragraph",
            text: "Il Titolare adotta misure tecniche e organizzative adeguate per tutelare i Dati personali contro distruzione, perdita, modifica, divulgazione non autorizzata o accesso non autorizzato. Tra le misure: uso di protocolli sicuri (HTTPS), firewall e protezioni fornite da Cloudflare, controllo degli accessi e backup. In caso di violazione di sicurezza che possa comportare un rischio per i diritti e le libertà degli Interessati, il Titolare adotterà le misure di notifica previste dal GDPR, compresa, ove dovuto, la comunicazione all'Autorità di controllo e, se necessario, agli Interessati."
          },
        ]
      },
      {
        title: "11. Comunicazione e diffusione dei dati",
        content: [
          {
            type: "paragraph",
            text: "I Dati possono essere comunicati esclusivamente ai soggetti necessari per le finalità sopra indicate (fornitori di servizi, consulenti, autorità competenti ove richiesto dalla legge). I Dati non sono oggetto di diffusione né di cessione a terzi per finalità commerciali."
          },
        ]
      },
      {
        title: "12. Diritti dell'Interessato",
        content: [
          {
            type: "paragraph",
            text: "L'Interessato può esercitare in qualsiasi momento i diritti previsti dagli articoli 15-22 del GDPR, tra cui: accesso, rettifica, cancellazione (diritto all'oblio), limitazione del trattamento, opposizione, portabilità dei dati e revoca del consenso (nei casi in cui il trattamento sia basato sul consenso)."
          },
          {
            type: "paragraph",
            text: "L'esercizio di tali diritti può essere effettuato mediante richiesta scritta indirizzata a <a href='mailto:info@davidelamarca.com' aria-label='Invia email' class='text-sky-500 hover:underline'>info@davidelamarca.com</a> o PEC <a href='mailto:davidelamarca@legalmail.it' aria-label='Invia email' class='text-sky-500 hover:underline'>davidelamarca@legalmail.it</a>. Le richieste saranno evase nei termini e secondo le modalità previste dal GDPR. Il Titolare potrà richiedere informazioni ragionevoli per verificare l'identità dell'Interessato qualora ciò sia necessario per tutelare i diritti e la sicurezza; salvo casi eccezionali, non è richiesto l'invio di documenti di identità per le richieste ordinarie."
          },
          {
            type: "paragraph",
            text: "In caso di contestazione relativa al trattamento dei propri Dati, l'Interessato ha altresì il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali."
          },
        ]
      },
      {
        title: "13. Modalità di esercizio dei diritti e informazioni aggiuntive",
        content: [
          {
            type: "paragraph",
            text: "Le richieste inerenti i diritti possono essere formulate gratuitamente. Qualora la richiesta sia manifestamente infondata o eccessiva, il Titolare potrà addebitare un contributo spese ragionevole o rifiutare di agire, conformemente al GDPR. Successivamente all'esercizio dei diritti, il Titolare informerà gli eventuali destinatari cui i Dati sono stati comunicati qualora ciò sia necessario e non comporti sforzi sproporzionati."
          },
        ]
      },
      {
        title: "14. Finalità legali, giudiziarie e tutela dei minori",
        content: [
          {
            type: "paragraph",
            text: "I Dati personali potranno essere utilizzati per l'istituzione, l'esercizio o la difesa di un diritto in sede giudiziaria o amministrativa e per l'ottemperanza ad obblighi di legge."
          },
          {
            type: "paragraph",
            text: "Il Sito non è rivolto a minori e non raccogliamo consapevolmente dati personali di minori di 16 anni. Qualora venissimo a conoscenza di dati di un minore di 16 anni senza il consenso dei genitori o del tutore, adotteremo misure per cancellare tali dati. Gli interessati o i loro genitori/tutori possono richiedere la cancellazione dei dati contattando <a href='mailto:info@davidelamarca.com' aria-label='Invia email' class='text-sky-500 hover:underline'>info@davidelamarca.com</a>."
          }
        ]
      },
      {
        title: "15. Aggiornamenti della presente informativa",
        content: [
          {
            type: "paragraph",
            text: "Il Titolare si riserva il diritto di modificare o aggiornare la presente Informativa. Eventuali variazioni sostanziali saranno rese note mediante pubblicazione della nuova versione su questa pagina con l'indicazione della data di aggiornamento. Si consiglia agli utenti di consultare periodicamente la presente pagina per verificare eventuali modifiche."
          },
        ]
      }   
    ],
    questions: {
      title: "Domande?",
      description: "Per qualsiasi domanda riguardo ai termini di servizio, puoi contattarmi all'indirizzo ",
      ariaLabel: "Invia email"
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
