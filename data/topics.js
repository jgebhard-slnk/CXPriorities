// CX priority review topics. This file is the shared record.
// Edit it in GitHub (pencil icon), or use "Copy for GitHub" on the page and paste over this file.
//   bucket:  "now" | "next" | "later" | "park" | "unsorted"
//   order:   position inside its bucket (0 = top)
//   pillar:  "cx" | "edu" | "svc" | "people" | "tools"
//   details: one line per note; type is "Fact", "To verify", "Idea" or "Target"
// Keep the quotes and commas. One { } block per topic.
window.TOPICS = [
  {
    "code": "P01",
    "bucket": "unsorted",
    "order": 0,
    "owner": "",
    "notes": "",
    "title": "Onboarding beyond the welcome letter",
    "pillar": "cx",
    "urgent": false,
    "isNew": false,
    "plan": "Days 61–90",
    "summary": "The welcome letter is clicked and mailed by hand once the PO is processed. Target: a digital welcome kit and an onboarding journey for resellers and end customers, including at renewal.",
    "details": [
      {
        "type": "Fact",
        "text": "The welcome letter is sent once the PO is processed and sent to the reseller. It also applies when a customer renews."
      },
      {
        "type": "Fact",
        "text": "It is generated from the Salesforce opportunity for the PO. Someone clicks the welcome letter and mails it out."
      },
      {
        "type": "Fact",
        "text": "Each opportunity offers four documents: sales quote, Spectralink booking package for maintenance, Spectralink welcome letter for maintenance, sales quote with no prices."
      },
      {
        "type": "Fact",
        "text": "Quotes go out in MSRP, net, or as the welcome letter."
      },
      {
        "type": "Fact",
        "text": "The letter confirms the PO was processed, the end user, the term, and the maintenance type purchased."
      },
      {
        "type": "Fact",
        "text": "Oracle holds the PO, contracts, entitlement and order management. Data flows from Oracle to Salesforce."
      },
      {
        "type": "Fact",
        "text": "Jessica leads order management, the first point of contact."
      },
      {
        "type": "To verify",
        "text": "Can Salesforce send the welcome letter automatically? Who receives it: the reseller only, or the end user too?"
      },
      {
        "type": "To verify",
        "text": "What happens after the letter today?"
      },
      {
        "type": "To verify",
        "text": "What does 'Oracle outsourced' mean?"
      },
      {
        "type": "Idea",
        "text": "Digital welcome kit: portal access, how to open a ticket, where to find answers. Entitlement created automatically from the Oracle contract. (Claude)"
      }
    ]
  },
  {
    "code": "P02",
    "bucket": "unsorted",
    "order": 1,
    "owner": "",
    "notes": "",
    "title": "AI & digital transformation",
    "pillar": "cx",
    "urgent": false,
    "isNew": false,
    "plan": "Days 31–60",
    "summary": "AI built into our tools and processes. Today only a Zendesk chatbot and knowledge articles for EMEA managed services. Training people to use AI is P17.",
    "details": [
      {
        "type": "Fact",
        "text": "Zendesk (EMEA managed services only) has a chatbot and knowledge articles."
      },
      {
        "type": "Fact",
        "text": "Most support runs through email; welcome letters and renewals are manual steps."
      },
      {
        "type": "Idea",
        "text": "AI uses kept on the list: ticket intake and routing, agent assist, knowledge creation from resolved tickets, self-service deflection, translation, education (AI video, quizzes)."
      },
      {
        "type": "To verify",
        "text": "Which AI tools has IT approved? Who owns the budget for new tools? Which processes are the most manual?"
      }
    ]
  },
  {
    "code": "P03",
    "bucket": "unsorted",
    "order": 2,
    "owner": "",
    "notes": "",
    "title": "Redo support operating model",
    "pillar": "cx",
    "urgent": false,
    "isNew": false,
    "plan": "Days 0–90",
    "summary": "Support runs mainly on email; regional addresses route to one shared inbox. Target: one global front door with queues by skill, regardless of region. The platform choice is P03b.",
    "details": [
      {
        "type": "Fact",
        "text": "Set as the September focus, including the ticket system. Ticketing 'is a mess'."
      },
      {
        "type": "Fact",
        "text": "Three support levels: Software Assurance, SpectraCare and SpectraCare+."
      },
      {
        "type": "Fact",
        "text": "Each regional team has its own email address, but all route to the same shared inbox."
      },
      {
        "type": "Target",
        "text": "Queues: order management, L1, RMA, Wi-Fi L2/L3, DECT L2/L3. Team members join queues regardless of region."
      },
      {
        "type": "Fact",
        "text": "Costa Rica L1 is under Rick: Axius, 3 people doing order management and L1. The order management person works EMEA hours, so they offer L1 then too."
      },
      {
        "type": "To verify",
        "text": "Confirm Axius details with Rick."
      },
      {
        "type": "Fact",
        "text": "In Europe, resellers do L1 and L2 because of localization and language."
      },
      {
        "type": "To verify",
        "text": "Entitlement to submit a ticket appears to be a manual check. How does it work today?"
      },
      {
        "type": "Fact",
        "text": "After hours is covered separately (see T07)."
      },
      {
        "type": "Fact",
        "text": "CX does not own RMA; Jami does (see T08)."
      }
    ]
  },
  {
    "code": "P03b",
    "bucket": "unsorted",
    "order": 3,
    "owner": "",
    "notes": "",
    "title": "One support platform: portal, cases and knowledge",
    "pillar": "cx",
    "urgent": false,
    "isNew": true,
    "plan": "Days 61–90",
    "summary": "Cases are spread across the Salesforce portal, Zoho (North America L1/L2), Zendesk (EMEA managed services) and a shared email inbox. Target: one platform and one global portal. To decide: which platform, and the migration order.",
    "details": [
      {
        "type": "Fact",
        "text": "The support portal is hosted in Salesforce."
      },
      {
        "type": "Fact",
        "text": "The North America leader says emails come in as tickets in Zoho."
      },
      {
        "type": "Fact",
        "text": "Zendesk is used in EMEA only for co-managed accounts, such as Nestlé, which get more attention and detail."
      },
      {
        "type": "Target",
        "text": "One global portal, one entry system."
      },
      {
        "type": "Target",
        "text": "Every ticket captures: entitlement and support level; point of sale (reseller); distributor or reseller; region (North America or EMEA) and where they contact us from; product (Wi-Fi, DECT, software); end customer when known; CSAT on close."
      },
      {
        "type": "Target",
        "text": "One survey process matched to the agent, inside the tool (see T06)."
      }
    ]
  },
  {
    "code": "P04",
    "bucket": "unsorted",
    "order": 4,
    "owner": "",
    "notes": "",
    "title": "Authorized to Fix, authorized partners",
    "pillar": "edu",
    "urgent": false,
    "isNew": false,
    "plan": "Days 31–60",
    "summary": "Contracts require partners to be trained, not certified, so there's no advantage to certifying. Proposed: Authorized to Sell, Deploy and Fix, tied to the channel program.",
    "details": [
      {
        "type": "Fact",
        "text": "Certification has become less important over the last few years. The contract says partners should be at least trained; it doesn't specify certification."
      },
      {
        "type": "Fact",
        "text": "Legacy partners can deploy. Many new ones have no idea, so they ask us to do the services."
      },
      {
        "type": "Fact",
        "text": "We no longer have official education on whether partners are certified to install."
      },
      {
        "type": "Idea",
        "text": "Train partners on site surveys and products, and on how to fix our products: 'authorized to fix' and 'authorized to sell'."
      },
      {
        "type": "Idea",
        "text": "Middle tier 'Authorized to Deploy' (site surveys, installation). (Claude)"
      },
      {
        "type": "Idea",
        "text": "Tie authorization to the channel program, as the July 1 update did with end-customer data."
      },
      {
        "type": "To verify",
        "text": "In EMEA, contracts are with the 28 distributors, not resellers. How would authorization be enforced?"
      }
    ]
  },
  {
    "code": "P05",
    "bucket": "unsorted",
    "order": 5,
    "owner": "",
    "notes": "",
    "title": "Implement auto-renewal",
    "pillar": "cx",
    "urgent": true,
    "isNew": false,
    "plan": "Days 31–60",
    "summary": "No auto-renewal today. Target: auto-renewal as the default term, reminders to partners before the end date, one renewal forecast across regions.",
    "details": [
      {
        "type": "Fact",
        "text": "Flagged urgent ('!!!')."
      },
      {
        "type": "Fact",
        "text": "In EMEA our contracts are with the 28 distributors, not the resellers, so contract terms there decide what is possible."
      },
      {
        "type": "Fact",
        "text": "Oracle holds contracts and entitlement; Salesforce holds opportunities."
      },
      {
        "type": "To verify",
        "text": "What is our renewal rate today?"
      },
      {
        "type": "To verify",
        "text": "Do distributor and reseller contracts allow auto-renewal? Which system triggers it: Oracle or Salesforce? What do Legal and Finance need to sign off?"
      }
    ]
  },
  {
    "code": "P06",
    "bucket": "unsorted",
    "order": 6,
    "owner": "",
    "notes": "",
    "title": "Education program, all audiences",
    "pillar": "edu",
    "urgent": false,
    "isNew": false,
    "plan": "Days 31–60",
    "summary": "Education today is a few videos and an LMS. Target: role-based paths for end users, super users, partners and employees, built with learning design, plus an AI video tool. Partner strategy decision needed.",
    "details": [
      {
        "type": "Fact",
        "text": "Big problem: there are 4 videos in total, dating back to 2013. Each section is 20+ minutes of talking over a PowerPoint. No learning theory or strategy has been applied."
      },
      {
        "type": "Fact",
        "text": "Bus (North America technical trainer, on the team) makes videos, all published in the LMS. There is a YouTube channel, but it isn't Bus's."
      },
      {
        "type": "Fact",
        "text": "Partner technical training 'lost its fizzle' before COVID. There's no benefit or reason for partners to train, so new partners are less capable and ask us to do the services."
      },
      {
        "type": "Fact",
        "text": "Past curriculum: sales overview, an SE-type session, full technical training (Wi-Fi, by Bus), whole-picture deployment, and EMM."
      },
      {
        "type": "Fact",
        "text": "Partners say training costs too much time and money, and the product is too complicated (Versity on Android especially)."
      },
      {
        "type": "Fact",
        "text": "North America: we do all EMM provisioning and aren't open to training partners on it; it locks the phone and prevents customers adding anything. We do the AMIE setup; partners scan QR codes to activate."
      },
      {
        "type": "Fact",
        "text": "Bus recommends focusing on end users and their workflows. End users need to learn the product; super users need to add and remove phones."
      },
      {
        "type": "Fact",
        "text": "We partner with ProMix, clinical consultants. Bus suggests CHS as the pilot."
      },
      {
        "type": "Idea",
        "text": "QR code for end users, or a video pushed into the Android app. Ask David H. how heavy a lift that is."
      },
      {
        "type": "Idea",
        "text": "We definitely need an AI video tool."
      },
      {
        "type": "Idea",
        "text": "Make product guides (e.g. 84-Series) useful beyond large PDFs."
      },
      {
        "type": "To verify",
        "text": "Strategy: do the services for partners, or enable them? If we enable them, how do we enforce it? Why is it 'too cumbersome to maintain' if we have a good system?"
      },
      {
        "type": "To verify",
        "text": "Why is end-user and super-user training the only focus in North America? What does EMEA train today?"
      },
      {
        "type": "To verify",
        "text": "Do we have authoring software like Articulate? Ask IT. Which LMS is it, and who can access it?"
      }
    ]
  },
  {
    "code": "P07",
    "bucket": "unsorted",
    "order": 7,
    "owner": "",
    "notes": "",
    "title": "Proof of concept program revamp",
    "pillar": "svc",
    "urgent": false,
    "isNew": false,
    "plan": "",
    "summary": "The current program 'sucks' and needs a revamp. Target: entry criteria, fixed duration, success measures agreed up front, a path to purchase, one owner.",
    "details": [
      {
        "type": "To verify",
        "text": "How many PoCs ran last year, and how many converted? Who owns PoCs: Sales, Professional Services or CX? What goes wrong most often?"
      }
    ]
  },
  {
    "code": "P08",
    "bucket": "unsorted",
    "order": 8,
    "owner": "",
    "notes": "",
    "title": "Clean up SKUs",
    "pillar": "svc",
    "urgent": false,
    "isNew": false,
    "plan": "Days 61–90",
    "summary": "538 service SKUs, many duplicated: the same SKU, for Europe. Target: global SKUs where possible, retire SKUs with no sales, one naming standard.",
    "details": [
      {
        "type": "Fact",
        "text": "Opportunity to move to global SKUs."
      },
      {
        "type": "To verify",
        "text": "How is each SKU actually used? Analysis done in the Service SKU review deck (internal)."
      },
      {
        "type": "To verify",
        "text": "Who approves SKU changes: Finance, Product or Sales Ops?"
      }
    ]
  },
  {
    "code": "P09",
    "bucket": "unsorted",
    "order": 9,
    "owner": "",
    "notes": "",
    "title": "CX homepage",
    "pillar": "cx",
    "urgent": false,
    "isNew": false,
    "plan": "Days 31–60",
    "summary": "One home on SharePoint for the global CX team: processes, org chart, contacts, links to every CX tool and the service catalog.",
    "details": [
      {
        "type": "Fact",
        "text": "Planned on SharePoint (the intranet item on the tool list)."
      },
      {
        "type": "To verify",
        "text": "Who is it for: CX only, or Sales too? What content exists to move in? Who maintains it?"
      }
    ]
  },
  {
    "code": "P10",
    "bucket": "unsorted",
    "order": 10,
    "owner": "",
    "notes": "",
    "title": "Service catalog & sales enablement",
    "pillar": "svc",
    "urgent": false,
    "isNew": false,
    "plan": "Days 31–60",
    "summary": "No catalog in one place. Target: what each service includes, who delivers it, price, and a clear split between Spectralink and partners, plus a home for global SKUs and quoting.",
    "details": [
      {
        "type": "Fact",
        "text": "Simon covers RMA, orders and managed services."
      },
      {
        "type": "Fact",
        "text": "Managed services: basic support 8 to 5, firmware updates, QBRs, management reviews, customer projects, site surveys, cabling, bills of material (sent to the partner)."
      },
      {
        "type": "Fact",
        "text": "Partners should be doing this, but we do it for some big accounts."
      },
      {
        "type": "Fact",
        "text": "Tool list item: service catalog and quoting (likely Salesforce)."
      },
      {
        "type": "To verify",
        "text": "How do Simon's and Jami's RMA roles split? Which services sell most? Who owns service pricing?"
      }
    ]
  },
  {
    "code": "P11",
    "bucket": "unsorted",
    "order": 11,
    "owner": "",
    "notes": "",
    "title": "NST discount process",
    "pillar": "cx",
    "urgent": false,
    "isNew": false,
    "plan": "Days 31–60",
    "summary": "NST is the discount process; Aarthie handles all incoming POs and NST discounts. Target: one documented process with approval levels, tracked in Salesforce, the same in every region.",
    "details": [
      {
        "type": "Fact",
        "text": "Aarthie (Europe): contract services, forecasting, pipeline management, professional services, incoming POs, NST discounts."
      },
      {
        "type": "To verify",
        "text": "How many NST requests a month? Who approves, and how long does it take? Does North America run the same process?"
      }
    ]
  },
  {
    "code": "P12",
    "bucket": "unsorted",
    "order": 12,
    "owner": "",
    "notes": "",
    "title": "Data & metrics",
    "pillar": "cx",
    "urgent": false,
    "isNew": false,
    "plan": "Days 0–30",
    "summary": "No baseline for tickets, CSAT, renewals or deployments. Target: first KPIs baselined consistently across regions.",
    "details": [
      {
        "type": "Fact",
        "text": "We can't see where our deployments are. We don't know in EMEA."
      },
      {
        "type": "Idea",
        "text": "First KPIs: ticket volume, time to resolve, CSAT, renewal rate, service attach rate, certified partners. (Claude)"
      },
      {
        "type": "To verify",
        "text": "Has professional services volume gone up? Ticket volumes by queue, product and partner?"
      }
    ]
  },
  {
    "code": "P13",
    "bucket": "unsorted",
    "order": 13,
    "owner": "",
    "notes": "",
    "title": "Set up ClickUp for the CHS project",
    "pillar": "cx",
    "urgent": true,
    "isNew": false,
    "plan": "Days 0–30",
    "summary": "ClickUp is the chosen project tool; pilot it with the CHS project, but get ClickUp going. Target: CHS fully tracked, a standard CX project template, then all priorities in ClickUp.",
    "details": [
      {
        "type": "Fact",
        "text": "Flagged urgent ('!!')."
      },
      {
        "type": "To verify",
        "text": "Who is on the CHS project team? How many licences, and who pays? When does the pilot end, and how do we judge it?"
      }
    ]
  },
  {
    "code": "P14",
    "bucket": "unsorted",
    "order": 14,
    "owner": "",
    "notes": "",
    "title": "Forecasting: does it stay with Kieron?",
    "pillar": "cx",
    "urgent": false,
    "isNew": false,
    "plan": "",
    "summary": "Open question from the handwritten list. Aarthie also covers forecasting and pipeline for contract services in Europe. Target: one owner per forecast and one method.",
    "details": [
      {
        "type": "To verify",
        "text": "What does Kieron forecast today? Where does it overlap with Aarthie? Where should it sit once auto-renewal is live?"
      }
    ]
  },
  {
    "code": "P15",
    "bucket": "unsorted",
    "order": 15,
    "owner": "",
    "notes": "",
    "title": "Employee development",
    "pillar": "people",
    "urgent": false,
    "isNew": false,
    "plan": "Days 0–30",
    "summary": "Starting with a development plan with Annie. Target: a plan for every team member and a skills map against the new operating model.",
    "details": [
      {
        "type": "To verify",
        "text": "Which roles change with the new operating model? Is there budget for training and certification?"
      }
    ]
  },
  {
    "code": "P16",
    "bucket": "unsorted",
    "order": 16,
    "owner": "",
    "notes": "",
    "title": "SharePoint cleanup and redesign",
    "pillar": "cx",
    "urgent": false,
    "isNew": false,
    "plan": "",
    "summary": "SharePoint needs a cleanup and redesign ('yay!'), before the CX homepage goes live.",
    "details": [
      {
        "type": "To verify",
        "text": "How many CX sites and libraries exist? What can we delete, and who signs off? What are IT's rules?"
      }
    ]
  },
  {
    "code": "P17",
    "bucket": "unsorted",
    "order": 17,
    "owner": "",
    "notes": "",
    "title": "AI training and promotion",
    "pillar": "edu",
    "urgent": false,
    "isNew": false,
    "plan": "",
    "summary": "Helping people use AI well, and want to. Under 40% of employees ever logged in to LinkedIn Learning, so access alone doesn't drive use.",
    "details": [
      {
        "type": "Idea",
        "text": "Role-based training on real tasks, a prompt library, AI champions per team, tracking usage and time saved. (Claude)"
      },
      {
        "type": "To verify",
        "text": "Who is it for: CX, all employees, or partners too? Who owns AI policy?"
      }
    ]
  },
  {
    "code": "P18",
    "bucket": "unsorted",
    "order": 18,
    "owner": "",
    "notes": "",
    "title": "On-site and travel visibility",
    "pillar": "svc",
    "urgent": false,
    "isNew": true,
    "plan": "",
    "summary": "We need clarity on who is on site and when, for services project management: visibility of who is traveling, and when.",
    "details": [
      {
        "type": "Target",
        "text": "One shared view of on-site visits and travel per services project, linked to ClickUp."
      },
      {
        "type": "To verify",
        "text": "Where is travel booked and approved today? Who needs to see it?"
      }
    ]
  },
  {
    "code": "N19",
    "bucket": "unsorted",
    "order": 19,
    "owner": "",
    "notes": "",
    "title": "Define education needs by audience",
    "pillar": "edu",
    "urgent": false,
    "isNew": true,
    "plan": "",
    "summary": "Unclear what partners and employees need. Customers split into IT admins, super users and end users, with clinical workflow as the healthcare lens.",
    "details": [
      {
        "type": "To verify",
        "text": "Is clinical workflow consulting ours to sell, or ProMix's?"
      },
      {
        "type": "To verify",
        "text": "Which employee roles get a learning path first?"
      }
    ]
  },
  {
    "code": "N20",
    "bucket": "unsorted",
    "order": 20,
    "owner": "",
    "notes": "",
    "title": "Renewals",
    "pillar": "cx",
    "urgent": false,
    "isNew": true,
    "plan": "",
    "summary": "On the spoken key-topics list. Contract services, forecasting and pipeline sit with Aarthie in Europe; Salesforce holds the renewal opportunities and Oracle the contracts.",
    "details": [
      {
        "type": "Fact",
        "text": "Oracle: PO, contracts, entitlement, order management. Salesforce: opportunities. Data flows Oracle to Salesforce."
      },
      {
        "type": "Fact",
        "text": "Tool list item: renewals and customer success (reminders, auto-renewal, QBRs, account health)."
      },
      {
        "type": "To verify",
        "text": "'We have way more information we need to gather.' Renewal analysis is in the Service SKU review deck (internal)."
      }
    ]
  },
  {
    "code": "N21",
    "bucket": "unsorted",
    "order": 21,
    "owner": "",
    "notes": "",
    "title": "Channel model and end-customer visibility",
    "pillar": "cx",
    "urgent": false,
    "isNew": true,
    "plan": "",
    "summary": "We never sell direct and don't install: partners do. In EMEA we don't know our end users or deployments. Target: a plan to know end users in Europe.",
    "details": [
      {
        "type": "Fact",
        "text": "We sell to distributors or resellers. Partners install."
      },
      {
        "type": "Fact",
        "text": "EMEA has 28 distributors (USA: 2 or 3). In EMEA, contracts are with distributors only. 800+ resellers, treated as our customers."
      },
      {
        "type": "Fact",
        "text": "In the USA we know who bought phones from distributors and resellers. The CSM works with partners everywhere."
      },
      {
        "type": "Fact",
        "text": "July 1 channel program update: 40% partner discount, plus 8% if partners share end-customer information."
      },
      {
        "type": "To verify",
        "text": "'It's going to be a plan.' What should partners sell (the revamp)?"
      }
    ]
  },
  {
    "code": "T01",
    "bucket": "unsorted",
    "order": 22,
    "owner": "",
    "notes": "",
    "title": "Connect the tool stack to Salesforce or Oracle data",
    "pillar": "tools",
    "urgent": false,
    "isNew": false,
    "plan": "",
    "summary": "Connect the dots across project management, ticketing and the rest. Every tool reads customer, contract and entitlement data from Salesforce or Oracle, depending on the tool and what we've purchased or are entitled to use.",
    "details": [
      {
        "type": "To verify",
        "text": "Which Salesforce and Oracle licences and modules do we own? Who owns integrations: IT or CX?"
      }
    ]
  },
  {
    "code": "T02",
    "bucket": "unsorted",
    "order": 23,
    "owner": "",
    "notes": "",
    "title": "Clean up the 2 TB data migration",
    "pillar": "tools",
    "urgent": false,
    "isNew": false,
    "plan": "",
    "summary": "Rick had us migrate 2 TB of data and IT wants it cleaned up. Rick isn't doing the cleanup (a miscommunication). Anything older than 10 years can be deleted; Mark from IT will delete it.",
    "details": [
      {
        "type": "To verify",
        "text": "Where does the 2 TB live? Who decides what under 10 years old to keep? Any retention rules? When will Mark finish?"
      }
    ]
  },
  {
    "code": "T03",
    "bucket": "unsorted",
    "order": 24,
    "owner": "",
    "notes": "",
    "title": "Single sign-on",
    "pillar": "tools",
    "urgent": false,
    "isNew": false,
    "plan": "",
    "summary": "One login for the portal, knowledge, LMS and partner portal.",
    "details": []
  },
  {
    "code": "T04",
    "bucket": "unsorted",
    "order": 25,
    "owner": "",
    "notes": "",
    "title": "Install base and entitlement",
    "pillar": "tools",
    "urgent": false,
    "isNew": false,
    "plan": "",
    "summary": "Which end customer has which devices and contracts. Need to figure out if it lives in Salesforce or Oracle; ticketing needs it to check entitlement.",
    "details": []
  },
  {
    "code": "T05",
    "bucket": "unsorted",
    "order": 26,
    "owner": "",
    "notes": "",
    "title": "Partner portal",
    "pillar": "tools",
    "urgent": false,
    "isNew": false,
    "plan": "",
    "summary": "Partner Universe overlaps with the support portal. Decide whether to merge or connect.",
    "details": [
      {
        "type": "Fact",
        "text": "Correction: there is one partner portal, Partner Universe. 'Partner Access portal' in the 2020 brand book may be the same site."
      }
    ]
  },
  {
    "code": "T06",
    "bucket": "unsorted",
    "order": 27,
    "owner": "",
    "notes": "",
    "title": "CSAT and surveys",
    "pillar": "tools",
    "urgent": false,
    "isNew": false,
    "plan": "",
    "summary": "Surveys are set up per agent in SurveyMonkey, which makes analytics very hard. Target: one smooth process that runs the survey and matches it to the agent.",
    "details": []
  },
  {
    "code": "T07",
    "bucket": "unsorted",
    "order": 28,
    "owner": "",
    "notes": "",
    "title": "After-hours and on-call model",
    "pillar": "tools",
    "urgent": false,
    "isNew": false,
    "plan": "",
    "summary": "After hours is MoneyPenny, for all priorities: they call people until someone answers. 'A mess' that 'doesn't really make sense'. Target: priority-based paging tied to tickets.",
    "details": []
  },
  {
    "code": "T08",
    "bucket": "unsorted",
    "order": 29,
    "owner": "",
    "notes": "",
    "title": "RMA requests: agree the process with Jami",
    "pillar": "cx",
    "urgent": false,
    "isNew": false,
    "plan": "",
    "summary": "Big note: we don't own the RMA process; Jami does. Work with Jami on how CX requests RMA support.",
    "details": [
      {
        "type": "To verify",
        "text": "How do Simon's and Jami's roles split?"
      }
    ]
  },
  {
    "code": "T09",
    "bucket": "unsorted",
    "order": 30,
    "owner": "",
    "notes": "",
    "title": "Localization and translation",
    "pillar": "tools",
    "urgent": false,
    "isNew": false,
    "plan": "",
    "summary": "Knowledge and training in EMEA partners' languages.",
    "details": []
  },
  {
    "code": "T10",
    "bucket": "unsorted",
    "order": 31,
    "owner": "",
    "notes": "",
    "title": "Knowledge and self-service",
    "pillar": "tools",
    "urgent": false,
    "isNew": true,
    "plan": "",
    "summary": "Knowledge is PDFs on the Salesforce portal (not searchable), Zendesk articles, Partner Universe, spectralink.com and the support website. Target: technical bulletins, guides and self-service knowledge in one searchable place.",
    "details": [
      {
        "type": "To verify",
        "text": "Guides may be shared on several different pages. Where are they published?"
      }
    ]
  },
  {
    "code": "T11",
    "bucket": "unsorted",
    "order": 32,
    "owner": "",
    "notes": "",
    "title": "LMS, authoring and AI video tool",
    "pillar": "tools",
    "urgent": false,
    "isNew": true,
    "plan": "",
    "summary": "Education in the LMS plus quick learning outside it. Content is video-focused; no learning software like Articulate as far as we know. We need an AI video tool.",
    "details": [
      {
        "type": "To verify",
        "text": "Confirm authoring tools with IT. Which AI video tool?"
      }
    ]
  },
  {
    "code": "T12",
    "bucket": "unsorted",
    "order": 33,
    "owner": "",
    "notes": "",
    "title": "Reporting and dashboards",
    "pillar": "tools",
    "urgent": false,
    "isNew": true,
    "plan": "",
    "summary": "One KPI layer across Oracle, Salesforce and ticketing, so metrics don't stay regional.",
    "details": []
  },
  {
    "code": "T13",
    "bucket": "unsorted",
    "order": 34,
    "owner": "",
    "notes": "",
    "title": "Support contact directory",
    "pillar": "cx",
    "urgent": false,
    "isNew": true,
    "plan": "",
    "summary": "Different support emails and phone numbers by region and team. A placeholder directory exists; fill in each email, number, hours and owner.",
    "details": [
      {
        "type": "To verify",
        "text": "Fill in: NA and EMEA support emails, shared inbox, portal, Zendesk (co-managed), after-hours line, order management (Jessica), Costa Rica L1 (Rick), RMA (Jami), L2/L3 Wi-Fi and DECT."
      }
    ]
  },
  {
    "code": "T14",
    "bucket": "unsorted",
    "order": 35,
    "owner": "",
    "notes": "",
    "title": "AMIE: learn the platform",
    "pillar": "tools",
    "urgent": false,
    "isNew": true,
    "plan": "",
    "summary": "AMIE is our software cloud and gives us remote access. Need to learn more about it.",
    "details": []
  }
];
