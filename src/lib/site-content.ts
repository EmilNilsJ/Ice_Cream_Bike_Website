import type { Locale } from "@/lib/locale";

const siteContent = {
  nl: {
    brand: {
      name: "The Ice Cream Bike",
      tagline: "Elke dag iets zoets"
    },
    meta: {
      title: "The Ice Cream Bike | Ambachtelijke ijskar voor events",
      description:
        "Boek The Ice Cream Bike voor bedrijfsfeesten, bruiloften, verjaardagen en buurtfeesten met een warme, klassieke uitstraling."
    },
    navigation: [
      { href: "/", label: "Home" },
      { href: "/about", label: "Over ons" },
      { href: "/ice-cream", label: "IJs" },
      { href: "/booking", label: "Boeken" },
      { href: "/reviews", label: "Reviews" },
      { href: "/work-events", label: "Zakelijke events" },
      { href: "/hiring", label: "Vacatures" },
      { href: "/contact", label: "Contact" }
    ],
    ui: {
      languageLabel: "Taal",
      dutch: "NL",
      english: "EN",
      contactCta: "Neem contact op",
      bookingCta: "Beschikbaarheid aanvragen"
    },
    hero: {
      eyebrow: "The Ice Cream Bike",
      title: "Ambachtelijk ijs vanuit een klassieke fiets die direct sfeer brengt op elk evenement.",
      description:
        "Van bruiloften en verjaardagen tot kantoorfeesten en buurtactiviteiten: wij serveren schepijs met een gastvrije uitstraling, een nette presentatie en persoonlijk contact van begin tot eind.",
      primaryCta: "Beschikbaarheid aanvragen",
      secondaryCta: "Lees ons verhaal",
      featuredLabel: "Uitgelicht",
      featuredTitle: "Klassieke uitstraling, warme service en een setup die gasten meteen onthouden.",
      metrics: [
        { label: "Evenementen verzorgd", value: "450+" },
        { label: "Werkgebied", value: "Skane en omgeving Kopenhagen" },
        { label: "Reactietijd", value: "Binnen 1 werkdag" }
      ]
    },
    home: {
      quickRoutes: [
        {
          title: "Wintereditie",
          text: "Een sfeervolle opstelling voor wintermarkten, kantoorvieringen en koude dagen waarop iets warms en feestelijks welkom is.",
          href: "/work-events",
          cta: "Meer bekijken"
        },
        {
          title: "Boek de fiets",
          text: "Voor verjaardagen, schoolbezoeken, bedrijfsmiddagen en lokale evenementen waar een opvallend middelpunt gewenst is.",
          href: "/booking",
          cta: "Plan je aanvraag"
        },
        {
          title: "Contact",
          text: "Vragen over beschikbaarheid, locaties of maatwerk? We reageren snel en bespreken alles graag persoonlijk.",
          href: "/contact",
          cta: "Stuur een bericht"
        }
      ],
      chips: [
        "Vers geschept ijs",
        "Klassieke fiets-uitstraling",
        "Bedrijfsfeesten en familie-events",
        "Seizoensconcepten",
        "Snelle persoonlijke reactie"
      ],
      story: {
        eyebrow: "Ons verhaal",
        title: "Een gastvrije ijservaring met een klassieke fiets, warme uitstraling en persoonlijke service.",
        description:
          "The Ice Cream Bike combineert de charme van een traditionele ijskar met een verzorgde service voor moderne evenementen. Daardoor past de fiets net zo goed op een bedrijfsplein als op een verjaardag of schoolfeest.",
        founderLabel: "Oprichtsterswoord",
        founderQuote:
          "De fiets moet al bijzonder aanvoelen voordat iemand een eerste bolletje bestelt. Daarom letten we op presentatie, duidelijke communicatie en een ontspannen service."
      },
      values: [
        {
          title: "Missie",
          text: "Hoogwaardig schepijs serveren met een opstelling die klassiek, uitnodigend en eenvoudig te boeken voelt."
        },
        {
          title: "Visie",
          text: "Verder groeien als herkenbare naam voor feestelijke events, zakelijke activaties en seizoensmomenten."
        },
        {
          title: "Waarom het werkt",
          text: "De fiets trekt direct aandacht en brengt beleving, foto's en gezelligheid samen in een enkele blikvanger."
        }
      ],
      trusted: {
        eyebrow: "Geschikt voor",
        title: "Professioneel genoeg voor bedrijven, charmant genoeg voor familiefeesten.",
        description:
          "Sommige boekingen vragen om een nette zakelijke uitstraling, andere juist om iets vrolijks en ontspannen. De fiets voelt geloofwaardig in beide situaties.",
        items: ["Kantoorevents", "Schoolfeesten", "Productlanceringen", "Buurtfeesten"]
      },
      cta: {
        eyebrow: "Boek de fiets",
        title:
          "Breng The Ice Cream Bike naar je feest, kantoor, lancering of buurtactiviteit en geef gasten iets om direct over te praten.",
        description:
          "Van eerste contact tot aankomst op locatie houden we het proces helder, persoonlijk en passend bij jouw evenement.",
        primary: "Beschikbaarheid aanvragen",
        secondary: "Contact opnemen"
      },
      faqSection: {
        eyebrow: "Veelgestelde vragen",
        title: "Praktische vragen vooraf helder beantwoord.",
        description:
          "De website blijft warm en eenvoudig, maar bezoekers moeten wel snel kunnen zien hoe we werken, wat we nodig hebben en hoe het contact verloopt."
      },
      faqs: [
        {
          category: "Boeking",
          question: "Hoe ver van tevoren is boeken verstandig?",
          answer:
            "Voor zomerweekenden en populaire bedrijfsdagen is 4 tot 8 weken vooraf slim. Kleinere privéfeesten kunnen soms sneller worden ingepland."
        },
        {
          category: "Op locatie",
          question: "Kunnen jullie ook binnen serveren?",
          answer:
            "Ja, zolang toegang, ondergrond en eventuele stroomvoorziening vooraf samen worden afgestemd."
        },
        {
          category: "Dieetwensen",
          question: "Kunnen allergenen duidelijk worden aangegeven?",
          answer:
            "Ja. We bespreken allergenen en dieetwensen vooraf zodat de service op locatie duidelijk en passend voorbereid is."
        }
      ],
      faqCta: "Praat met ons"
    },
    about: {
      eyebrow: "Over ons",
      title: "Speelse uitstraling, serieuze service.",
      description:
        "Deze pagina draait om vertrouwen: het verhaal achter de fiets, onze manier van werken en waarom deze vorm van catering langer bij gasten blijft hangen.",
      cards: [
        "De fiets staat centraal omdat aankomst net zo belangrijk is als het serveren zelf.",
        "Geschikt voor scholen, verjaardagen, kantoren, beurzen en wintermarkten.",
        "Gebouwd rondom persoonlijk contact, nette presentatie en een ontspannen gastvrije sfeer."
      ]
    },
    iceCream: {
      eyebrow: "IJs",
      title: "Smaken die passen bij feestelijke, gastvrije momenten.",
      description:
        "Verken onze smaken, seizoensfavorieten en allergeneninformatie. De selectie is bedoeld om snel gevoel te krijgen bij wat er op jouw evenement zou passen."
    },
    flavors: {
      filters: [
        { label: "Alles", value: "all" },
        { label: "Voor bedrijven", value: "company" },
        { label: "Voor families", value: "family" }
      ],
      audiences: {
        company: "bedrijven",
        family: "families"
      },
      seasonal: "wintereditie",
      items: [
        {
          name: "Cloudberry Vanilla",
          description: "Romige vanille met heldere cloudberry-tonen, geliefd op bruiloften en verfijnde recepties.",
          allergens: ["Melk"],
          image: "/IceCreamLogo.png",
          audience: ["company", "family"]
        },
        {
          name: "Bubblegum Swirl",
          description: "Een kleurrijke favoriet die kinderen meteen aanwijzen zodra ze de menukaart zien.",
          allergens: ["Melk"],
          image: "/IceCreamLogo.png",
          audience: ["family"]
        },
        {
          name: "Salted Caramel Pretzel",
          description: "Zoet, vol en licht crunchy; een sterke keuze voor bedrijfslanceringen en avondfeesten.",
          allergens: ["Melk", "Gluten"],
          image: "/IceCreamLogo.png",
          audience: ["company"]
        },
        {
          name: "Winter Cinnamon Cookie",
          description: "Een warme wintersmaak voor kerstmarkten, decemberfeesten en seizoenspop-ups.",
          allergens: ["Melk", "Gluten"],
          image: "/IceCreamLogo.png",
          audience: ["company", "family"],
          seasonal: true
        }
      ]
    },
    booking: {
      eyebrow: "Boeken",
      title: "Beschikbaarheid, wensen en eventdetails eerst. Prijzen bespreken we daarna persoonlijk.",
      description:
        "Laat ons weten wat voor evenement je organiseert, hoeveel gasten je verwacht en welke sfeer je zoekt. Daarna nemen we direct contact op om de mogelijkheden en prijs samen te bespreken.",
      detailsEyebrow: "Aanvraag",
      detailsTitle: "Vertel ons meer over jouw evenement.",
      detailsDescription:
        "Deze aanvraag stuurt je informatie rechtstreeks naar ons team zodat we gericht kunnen reageren op locatie, datum en wensen."
    },
    packages: [
      {
        id: "quick-stop",
        name: "Korte stop",
        audience: "family",
        description: "Een compacte opstelling voor verjaardagen, schoolpleinen en buurtmomenten.",
        durationMinutes: 60,
        guestRange: [30, 70],
        perks: ["2 smaken", "Aangeklede fiets", "Feestelijke aankomst"]
      },
      {
        id: "brand-moment",
        name: "Merkmoment",
        audience: "company",
        description: "Een verzorgde setup voor lanceringen, kantooractivaties en hospitality-momenten.",
        durationMinutes: 120,
        guestRange: [60, 180],
        perks: ["3 smaken", "Toppingstation", "Representatieve service"]
      },
      {
        id: "festival-flow",
        name: "Festival flow",
        audience: "company",
        description: "Voor grotere publieksstromen, beurzen en zomercampagnes met hoge doorloop.",
        durationMinutes: 240,
        guestRange: [150, 400],
        perks: ["4 smaken", "Queue signage", "Ruime servicecapaciteit"]
      }
    ],
    addOns: [
      {
        id: "dry-ice",
        name: "Dry ice moment",
        description: "Een theatrale start met lichte rook en extra beleving bij opening."
      },
      {
        id: "sprinkle-bar",
        name: "Toppingbar",
        description: "Een zelfbedieningshoek met toppings en duidelijke allergeneninformatie."
      },
      {
        id: "custom-cups",
        name: "Gepersonaliseerde bekers",
        description: "Bekers in thema of met branding voor foto's, weggevertjes en herkenbaarheid."
      }
    ],
    packagePlanner: {
      packageLabel: "Kies een richting",
      guestsLabel: "Aantal gasten",
      durationLabel: "Duur",
      postalCodeLabel: "Postcode",
      addOnsLabel: "Extra opties",
      guestsSuffix: "gasten",
      durationSuffix: "minuten",
      summaryEyebrow: "Wat we met je bespreken",
      summaryTitle: "Persoonlijke offerte na contact",
      summaryDescription:
        "We tonen hier geen vaste prijzen. Op basis van je datum, locatie, aantal gasten en wensen maken we een passend voorstel na persoonlijk contact.",
      summaryLabels: {
        package: "Geselecteerde opstelling",
        guests: "Verwacht aantal gasten",
        duration: "Gewenste duur",
        area: "Werkgebied",
        extras: "Gekozen extra's"
      },
      extrasFallback: "Geen extra's gekozen",
      areaFallback: "We bespreken locatie en bereikbaarheid persoonlijk",
      cta: "Ga naar aanvraag"
    },
    quoteForm: {
      customerType: "Type klant",
      customerTypes: {
        company: "Bedrijf / organisator",
        family: "Particulier / familiefeest"
      },
      package: "Opstelling",
      fields: {
        name: "Naam",
        company: "Bedrijf",
        email: "E-mailadres",
        phone: "Telefoon",
        eventDate: "Datum evenement",
        location: "Locatie",
        postalCode: "Postcode",
        guests: "Aantal gasten",
        durationMinutes: "Duur in minuten",
        message: "Bericht"
      },
      addOns: "Extra opties",
      submit: "Aanvraag versturen",
      submitting: "Versturen...",
      success:
        "Bedankt. Je aanvraag is goed ontvangen. We nemen snel contact op om beschikbaarheid, wensen en prijs persoonlijk te bespreken.",
      error: "Het versturen van de aanvraag is niet gelukt."
    },
    contact: {
      eyebrow: "Contact",
      title: "Snelle contactroute voor vragen en beschikbaarheid.",
      description:
        "Heb je een korte vraag of wil je eerst even overleggen? Stuur ons een bericht en we reageren zo snel mogelijk.",
      form: {
        fields: {
          name: "Naam",
          email: "E-mailadres",
          phone: "Telefoon",
          company: "Bedrijf",
          message: "Bericht"
        },
        submit: "Bericht versturen",
        submitting: "Versturen...",
        fallbackError: "Het versturen van je bericht is niet gelukt."
      }
    },
    reviews: {
      eyebrow: "Reviews",
      title: "Ervaringen van organisatoren, bedrijven en families.",
      description:
        "De reacties laten zien waarom The Ice Cream Bike zowel professioneel als feestelijk aanvoelt op locatie.",
      proofLabel: "Ervaringen",
      carouselLabel: "Toon review"
    },
    testimonials: [
      {
        author: "Nora Lindgren",
        role: "HR Lead, Bright Harbor",
        quote:
          "The Ice Cream Bike maakte van onze zomeraftrap een echt moment waar collega's nog weken over spraken."
      },
      {
        author: "Matteo & Elin",
        role: "Gastheer en gastvrouw",
        quote:
          "Voor de kinderen voelde de aankomst als een parade en voor volwassenen was het precies charmant genoeg zonder gedoe."
      },
      {
        author: "Sofia Persson",
        role: "Event Manager, Northline",
        quote:
          "Opbouw, communicatie en service waren helder en rustig. Speels voor gasten, professioneel voor ons team."
      }
    ],
    workEvents: {
      eyebrow: "Zakelijke events",
      title: "Een gastvrije ijsservice voor kantoren, lanceringen en merkactivaties.",
      description:
        "Voor bedrijven draait het om uitstraling, doorloop en betrouwbaarheid. Daarom bespreken we timing, setup en wensen direct met je team.",
      items: [
        "Zomerborrels, teamdagen en employee appreciation moments.",
        "Beurzen, conferenties en hospitality-opstellingen.",
        "Retail-openingen, samplingmomenten en branded events.",
        "Winterse kantoorvieringen en decembermarkten."
      ],
      cta: "Plan een zakelijke aanvraag"
    },
    hiring: {
      eyebrow: "Vacatures",
      title: "Seizoenswerk voor zelfverzekerde hosts met gevoel voor service.",
      description:
        "We zoeken mensen die houden van gastvrijheid, rust op locatie en een nette uitstraling tijdens drukke eventdagen.",
      roleTitle: "Huidige rol: Event Host / Bike Operator",
      roleDescription:
        "Je verzorgt opbouw, contact met gasten en een soepele uitvoering tijdens familiefeesten en zakelijke events. Rijbewijs en sterke sociale vaardigheden zijn een plus."
    },
    footer: {
      explore: "Ontdek",
      information: "Informatie",
      description:
        "Boekbare ijsbelevingen vanuit een klassieke fiets voor bedrijfsfeesten, familievieringen, lanceringen en winteredities.",
      serviceArea: "Actief in Malmo, Lund, Helsingborg en geselecteerde events in Kopenhagen."
    },
    cookie: {
      message:
        "We houden deze website eenvoudig en privacyvriendelijk. Niet-essentiële analytics blijven uit totdat je daar toestemming voor geeft.",
      necessary: "Alleen noodzakelijk",
      accept: "Analytics toestaan"
    }
  },
  en: {
    brand: {
      name: "The Ice Cream Bike",
      tagline: "A little sweet every day"
    },
    meta: {
      title: "The Ice Cream Bike | Classic ice cream bike for events",
      description:
        "Book The Ice Cream Bike for company events, weddings, birthdays, and neighborhood celebrations with a warm, classic presentation."
    },
    navigation: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/ice-cream", label: "Ice Cream" },
      { href: "/booking", label: "Booking" },
      { href: "/reviews", label: "Reviews" },
      { href: "/work-events", label: "Work Events" },
      { href: "/hiring", label: "Hiring" },
      { href: "/contact", label: "Contact" }
    ],
    ui: {
      languageLabel: "Language",
      dutch: "NL",
      english: "EN",
      contactCta: "Contact us",
      bookingCta: "Check availability"
    },
    hero: {
      eyebrow: "The Ice Cream Bike",
      title: "Handcrafted ice cream from a classic bike that brings atmosphere to every event.",
      description:
        "From weddings and birthdays to office parties and neighborhood gatherings, we serve scooped ice cream with warm hospitality, clean presentation, and direct personal contact from start to finish.",
      primaryCta: "Check availability",
      secondaryCta: "Read our story",
      featuredLabel: "Featured setup",
      featuredTitle: "Classic styling, warm service, and a setup guests remember right away.",
      metrics: [
        { label: "Events served", value: "450+" },
        { label: "Coverage", value: "Skane and Greater Copenhagen" },
        { label: "Reply speed", value: "Within 1 business day" }
      ]
    },
    home: {
      quickRoutes: [
        {
          title: "Winter edition",
          text: "A welcoming setup for winter markets, office celebrations, and colder days that need something festive and warm.",
          href: "/work-events",
          cta: "Explore more"
        },
        {
          title: "Book the bike",
          text: "For birthdays, school visits, company afternoons, and local events that need a memorable focal point.",
          href: "/booking",
          cta: "Plan your request"
        },
        {
          title: "Contact",
          text: "Questions about availability, location, or custom ideas? We reply quickly and prefer to discuss the details directly.",
          href: "/contact",
          cta: "Send a message"
        }
      ],
      chips: [
        "Freshly scooped ice cream",
        "Classic bike styling",
        "Company and family events",
        "Seasonal concepts",
        "Fast personal response"
      ],
      story: {
        eyebrow: "Our story",
        title: "A welcoming ice cream experience built around a classic bike and personal service.",
        description:
          "The Ice Cream Bike combines the charm of a traditional cart with a polished service style for modern events. That makes it feel right at home in a company courtyard, at a birthday, or on a school grounds.",
        founderLabel: "Founder note",
        founderQuote:
          "The bike should feel special before anyone orders the first scoop. That is why we focus on presentation, clear communication, and relaxed service."
      },
      values: [
        {
          title: "Mission",
          text: "Serve high-quality scooped ice cream with a setup that feels classic, welcoming, and easy to book."
        },
        {
          title: "Vision",
          text: "Keep growing as a recognizable local name for celebrations, company activations, and seasonal moments."
        },
        {
          title: "Why it works",
          text: "The bike creates attention immediately and combines atmosphere, photos, and hospitality in one visual centerpiece."
        }
      ],
      trusted: {
        eyebrow: "Built for",
        title: "Professional enough for companies, charming enough for family celebrations.",
        description:
          "Some bookings need a polished business presence, others need something cheerful and relaxed. The bike feels credible in both settings.",
        items: ["Office Events", "School Festivals", "Product Launches", "Neighborhood Parties"]
      },
      cta: {
        eyebrow: "Book the bike",
        title:
          "Bring The Ice Cream Bike to your party, office, launch, or community event and give guests something to talk about right away.",
        description:
          "From the first message to arrival on site, we keep the process personal, clear, and well matched to your event.",
        primary: "Check availability",
        secondary: "Contact us"
      },
      faqSection: {
        eyebrow: "FAQ",
        title: "Practical booking questions, answered clearly.",
        description:
          "The website stays warm and simple, but visitors should still be able to understand how we work, what we need, and how contact usually happens."
      },
      faqs: [
        {
          category: "Booking",
          question: "How far in advance should we book?",
          answer:
            "For summer weekends and popular company dates, 4 to 8 weeks ahead is wise. Smaller private events can sometimes be arranged faster."
        },
        {
          category: "On site",
          question: "Can you also serve indoors?",
          answer:
            "Yes, as long as access, flooring, and any power requirements are discussed together beforehand."
        },
        {
          category: "Dietary needs",
          question: "Can allergens be communicated clearly?",
          answer:
            "Yes. We discuss allergens and dietary preferences in advance so the service on site is prepared clearly and appropriately."
        }
      ],
      faqCta: "Talk to us"
    },
    about: {
      eyebrow: "About",
      title: "Playful presentation, serious service.",
      description:
        "This page is built around trust: the story behind the bike, the way we work, and why this format stays with guests longer than standard catering.",
      cards: [
        "The bike is central because arrival matters just as much as the serving itself.",
        "Suitable for schools, birthdays, offices, trade fairs, and winter markets.",
        "Built around personal contact, clean presentation, and a calm hospitality-first atmosphere."
      ]
    },
    iceCream: {
      eyebrow: "Ice Cream",
      title: "Flavors that suit festive, welcoming moments.",
      description:
        "Browse our flavors, seasonal favorites, and allergen details. The selection is there to help you imagine what would fit your event best."
    },
    flavors: {
      filters: [
        { label: "All", value: "all" },
        { label: "For companies", value: "company" },
        { label: "For families", value: "family" }
      ],
      audiences: {
        company: "companies",
        family: "families"
      },
      seasonal: "winter edition",
      items: [
        {
          name: "Cloudberry Vanilla",
          description: "Creamy vanilla with bright cloudberry notes, popular for weddings and refined receptions.",
          allergens: ["Milk"],
          image: "/IceCreamLogo.png",
          audience: ["company", "family"]
        },
        {
          name: "Bubblegum Swirl",
          description: "A colorful favorite that children point to as soon as they spot the menu.",
          allergens: ["Milk"],
          image: "/IceCreamLogo.png",
          audience: ["family"]
        },
        {
          name: "Salted Caramel Pretzel",
          description: "Sweet, rich, and lightly crunchy; a strong fit for launches and evening events.",
          allergens: ["Milk", "Gluten"],
          image: "/IceCreamLogo.png",
          audience: ["company"]
        },
        {
          name: "Winter Cinnamon Cookie",
          description: "A warmer seasonal flavor for Christmas markets, December parties, and winter pop-ups.",
          allergens: ["Milk", "Gluten"],
          image: "/IceCreamLogo.png",
          audience: ["company", "family"],
          seasonal: true
        }
      ]
    },
    booking: {
      eyebrow: "Booking",
      title: "Availability, preferences, and event details first. Pricing is discussed personally afterwards.",
      description:
        "Tell us what kind of event you are planning, how many guests you expect, and the atmosphere you want. We then follow up directly to discuss options and pricing with you.",
      detailsEyebrow: "Request",
      detailsTitle: "Tell us more about your event.",
      detailsDescription:
        "This request sends your details directly to our team so we can reply with relevant guidance on location, date, and setup."
    },
    packages: [
      {
        id: "quick-stop",
        name: "Quick Stop",
        audience: "family",
        description: "A compact setup for birthdays, schoolyards, and neighborhood gatherings.",
        durationMinutes: 60,
        guestRange: [30, 70],
        perks: ["2 flavors", "Decorated bike", "Festive arrival"]
      },
      {
        id: "brand-moment",
        name: "Brand Moment",
        audience: "company",
        description: "A polished setup for launches, office activations, and hospitality moments.",
        durationMinutes: 120,
        guestRange: [60, 180],
        perks: ["3 flavors", "Topping station", "Presentable service"]
      },
      {
        id: "festival-flow",
        name: "Festival Flow",
        audience: "company",
        description: "For larger crowds, fairs, and summer campaigns with high throughput.",
        durationMinutes: 240,
        guestRange: [150, 400],
        perks: ["4 flavors", "Queue signage", "Expanded service capacity"]
      }
    ],
    addOns: [
      {
        id: "dry-ice",
        name: "Dry ice moment",
        description: "A theatrical opening with light vapor and extra atmosphere."
      },
      {
        id: "sprinkle-bar",
        name: "Topping bar",
        description: "A self-serve station with toppings and clear allergen information."
      },
      {
        id: "custom-cups",
        name: "Custom cups",
        description: "Theme-based or branded cups for photos, giveaways, and stronger recognition."
      }
    ],
    packagePlanner: {
      packageLabel: "Choose a direction",
      guestsLabel: "Guest count",
      durationLabel: "Duration",
      postalCodeLabel: "Postal code",
      addOnsLabel: "Extra options",
      guestsSuffix: "guests",
      durationSuffix: "minutes",
      summaryEyebrow: "What we discuss with you",
      summaryTitle: "Personal quote after contact",
      summaryDescription:
        "We do not show fixed prices here. Once we know your date, location, guest count, and preferences, we prepare a suitable proposal after direct contact.",
      summaryLabels: {
        package: "Selected setup",
        guests: "Expected guest count",
        duration: "Preferred duration",
        area: "Service area",
        extras: "Chosen extras"
      },
      extrasFallback: "No extras selected",
      areaFallback: "We will discuss location and access directly with you",
      cta: "Continue to request"
    },
    quoteForm: {
      customerType: "Customer type",
      customerTypes: {
        company: "Company / planner",
        family: "Private / family event"
      },
      package: "Setup",
      fields: {
        name: "Name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        eventDate: "Event date",
        location: "Location",
        postalCode: "Postal code",
        guests: "Guests",
        durationMinutes: "Duration in minutes",
        message: "Message"
      },
      addOns: "Extra options",
      submit: "Send request",
      submitting: "Sending...",
      success:
        "Thank you. Your request has been received. We will contact you shortly to discuss availability, preferences, and pricing directly.",
      error: "Unable to submit your request."
    },
    contact: {
      eyebrow: "Contact",
      title: "A quick route for questions and availability checks.",
      description:
        "If you have a short question or want to talk first, send us a message and we will reply as soon as possible.",
      form: {
        fields: {
          name: "Name",
          email: "Email",
          phone: "Phone",
          company: "Company",
          message: "Message"
        },
        submit: "Send message",
        submitting: "Sending...",
        fallbackError: "Unable to send your message."
      }
    },
    reviews: {
      eyebrow: "Reviews",
      title: "Feedback from organizers, companies, and families.",
      description:
        "These reactions show why The Ice Cream Bike feels both professional and festive on site.",
      proofLabel: "Proof",
      carouselLabel: "Show review"
    },
    testimonials: [
      {
        author: "Nora Lindgren",
        role: "HR Lead, Bright Harbor",
        quote:
          "The Ice Cream Bike turned our summer kickoff into a real moment people kept talking about for weeks."
      },
      {
        author: "Matteo & Elin",
        role: "Hosts",
        quote:
          "For the children the arrival felt like a parade, and for adults it was charming without becoming complicated."
      },
      {
        author: "Sofia Persson",
        role: "Event Manager, Northline",
        quote:
          "Setup, communication, and service were clear and calm. Playful for guests, professional for our team."
      }
    ],
    workEvents: {
      eyebrow: "Work Events",
      title: "A welcoming ice cream service for offices, launches, and brand activations.",
      description:
        "For companies, the key is presence, throughput, and reliability. That is why we discuss timing, setup, and requirements directly with your team.",
      items: [
        "Summer kickoffs, team days, and employee appreciation events.",
        "Trade fairs, conferences, and hospitality setups.",
        "Retail openings, sampling moments, and branded events.",
        "Winter office celebrations and December markets."
      ],
      cta: "Plan a company request"
    },
    hiring: {
      eyebrow: "Hiring",
      title: "Seasonal work for confident hosts with a feel for service.",
      description:
        "We look for people who value hospitality, calm execution on site, and a polished presence during busy event days.",
      roleTitle: "Current role: Event Host / Bike Operator",
      roleDescription:
        "You handle setup, guest interaction, and smooth execution during family events and company activations. A driver's license and strong people skills are a plus."
    },
    footer: {
      explore: "Explore",
      information: "Information",
      description:
        "Bookable ice cream experiences from a classic bike for company events, family celebrations, launches, and winter editions.",
      serviceArea: "Serving Malmo, Lund, Helsingborg, and selected events in Copenhagen."
    },
    cookie: {
      message:
        "We keep this website simple and privacy-friendly. Non-essential analytics stay off until you explicitly allow them.",
      necessary: "Only necessary",
      accept: "Allow analytics"
    }
  }
} as const;

export function getSiteContent(locale: Locale) {
  return siteContent[locale];
}
