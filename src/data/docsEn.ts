import { DocItem, SidebarGroup } from './docs';

export const SIDEBAR_NAVIGATION_EN: SidebarGroup[] = [
  {
    id: 'sec-1',
    title: '🚀 I. Getting Started & Foundations',
    isFolder: true,
    children: [
      { slug: 'simple-guide', title: '00. Simple Guide' },
      { slug: 'project-context', title: '01. Project Context & Overview' },
      { slug: 'problem-statement', title: '02. Problem Statement' },
      { slug: 'solution', title: '03. Aegis Solution' },
      { slug: 'positioning', title: '04. Product Positioning' },
      { slug: 'opportunity-gap', title: '05. Ecosystem Opportunity Gap' },
    ],
  },
  {
    id: 'sec-2',
    title: '🧠 II. Core Concepts',
    isFolder: true,
    children: [
      { slug: 'authorization-lifecycle', title: '06. Authorization Lifecycle' },
      { slug: 'policy-model', title: '07. Policy Model' },
      { slug: 'session-model', title: '08. Session Model' },
      { slug: 'intent-policies', title: '09. Intent Policies' },
    ],
  },
  {
    id: 'sec-3',
    title: '🏗️ III. Architecture & Security',
    isFolder: true,
    children: [
      { slug: 'system-architecture', title: '10. High-Level Architecture' },
      { slug: 'product-scope', title: '11. Product Scope & Modules' },
      { slug: 'trust-model', title: '12. Trust Model' },
      { slug: 'storage-model', title: '13. Storage Model' },
      { slug: 'threat-model', title: '14. Threat Model & Security' },
    ],
  },
  {
    id: 'sec-4',
    title: '💻 IV. Developer Integration & Reference',
    isFolder: true,
    children: [
      { slug: 'smart-account-integration', title: '15. Smart Account Integration' },
      { slug: 'security-checklist', title: '16. Security Checklist' },
      { slug: 'glossary', title: '17. Glossary' },
    ],
  },
  {
    id: 'sec-5',
    title: '🗺️ V. Roadmap & Future',
    isFolder: true,
    children: [
      { slug: 'roadmap', title: '18. Product Roadmap' },
      { slug: 'adr', title: '19. Architectural Decision Records (ADR)' },
    ],
  },
];

export const DOCS_DATA_EN: Record<string, DocItem> = {
  'simple-guide': {
    slug: 'simple-guide',
    title: '00. Simple Guide',
    category: 'Getting Started & Foundations',
    order: '00',
    description: 'An overview of Stellar Aegis without complex technical jargon, using simple English and real-world analogies.',
    readTime: '3 min read',
    subheadings: [
      { id: 'apa-itu-aegis', title: 'What is Stellar Aegis?' },
      { id: 'analogi-perusahaan', title: 'Simple Analogy: CEO vs HR & Security Team' },
      { id: 'masalah-utama', title: 'Primary Problem Solved' },
      { id: '3-fitur-utama-awam', title: '3 Key Features in Plain English' },
      { id: 'apa-yang-bukan-aegis', title: 'What Aegis is NOT' },
    ],
    content: {
      lead: 'This page is specially created to give you a clear overview of Stellar Aegis without complicated technical jargon. If you are new to blockchain or want to understand the big idea quickly, this is the best place to start.',
      sections: [
        {
          id: 'apa-itu-aegis',
          title: 'What is Stellar Aegis?',
          body: 'Stellar Aegis is an "Operational Control Console" (Authorization Control Plane) for Smart Accounts on the Stellar blockchain network.\n\nAegis does not store your funds or secret keys. The main job of Aegis is to help application developers create, configure, monitor, and revoke user access permissions safely and automatically.',
          callout: {
            type: 'tip',
            title: 'Core Concept',
            text: 'The Smart Account (on-chain) executes and enforces absolute security. Aegis (off-chain) manages all operational permissions surrounding it.'
          }
        },
        {
          id: 'analogi-perusahaan',
          title: 'Simple Analogy: CEO vs HR & Security Team',
          body: 'Imagine a large enterprise corporation:\n\n1. Chief Executive Officer (CEO) = Smart Account on Blockchain\nThe CEO is the only party holding the official seal and has final approval over major financial transactions. The CEO decision is absolute.\n\n2. HR, IT & Security Team = Stellar Aegis\nHR manages employee ID cards. IT issues temporary 2-hour passwords for interns. Security revokes access cards if an employee loses their device.\n\nAegis never replaces the CEO. Aegis is the operational team that helps the CEO manage all employee permissions so the company runs smoothly and securely.',
          code: {
            language: 'text',
            filename: 'aegis_analogy.txt',
            code: `+-------------------------------------------------------------+
|                        CEO (Smart Account)                  |
|               Executes and decides "YES" or "NO"            |
+------------------------------+------------------------------+
                               ^
                               | (Managed & Assisted By)
+------------------------------+------------------------------+
|                    STELLAR AEGIS CONTROL PLANE              |
|   - HR Team (Session Management)                            |
|   - IT Team (Spending Limits & Rules)                       |
|   - Security Guard (Emergency Revocation)                   |
|   - CCTV Inspector (Monitoring & Event Logs)                |
+-------------------------------------------------------------+`
          }
        },
        {
          id: 'masalah-utama',
          title: 'Primary Problem Solved',
          body: 'Currently, using crypto applications is often frustrating:\n• Users must type passwords or scan fingerprints repeatedly for every minor action.\n• New users must buy XLM tokens first just to pay confusing transaction fees.\n• If a phone is stolen, revoking temporary access immediately is extremely difficult.\n\nWithout Aegis, every developer has to build this security and permission infrastructure from scratch. Aegis provides a ready-to-use foundation shared across all developers.'
        },
        {
          id: '3-fitur-utama-awam',
          title: '3 Key Features in Plain English',
          body: '1. Hotel Room Keycard (Session Key)\nUsers scan FaceID once at sign-in. The app receives a "Temporary Keycard" valid for 2 hours. For 2 hours, you can play games or shop without annoying pop-up confirmations.\n\n2. Corporate Toll Pass (Gas Sponsorship)\nThe app can pay user transaction fees automatically under safe rules: "Max 5 sponsored transactions per day per user".\n\n3. Emergency Fire Button (Emergency Revocation)\nIf a phone is stolen, temporary access can be killed instantly with one click without endangering main account balances.'
        },
        {
          id: 'apa-yang-bukan-aegis',
          title: 'What Aegis is NOT',
          body: 'To prevent any misunderstanding:\n❌ Aegis is NOT a digital wallet app.\n❌ Aegis is NOT a new Smart Account implementation.\n❌ Aegis is NOT a centralized server holding your money.\n\nEven if Aegis servers go down, user accounts and assets on the Stellar blockchain remain 100% safe and unaffected.'
        }
      ]
    }
  },

  'project-context': {
    slug: 'project-context',
    title: '01. Project Context & Overview',
    category: 'Getting Started & Foundations',
    order: '01',
    description: 'Overview of Stellar Aegis as the Authorization Control Plane for Stellar Smart Accounts.',
    readTime: '5 min read',
    subheadings: [
      { id: 'apa-itu-aegis', title: 'What is Aegis?' },
      { id: 'gagasan-inti', title: 'Core Thesis' },
      { id: 'analogi-perusahaan', title: 'Simple Analogy' },
      { id: 'filosofi-proyek', title: 'Architectural Philosophy' },
      { id: 'apa-yang-bukan-aegis', title: 'What Aegis is NOT' },
    ],
    content: {
      lead: 'Aegis is the Authorization Control Plane for Stellar Smart Accounts. Aegis sits above Smart Accounts and provides an operational layer for managing authorizations across their full lifecycle.',
      sections: [
        {
          id: 'apa-itu-aegis',
          title: 'What is Aegis?',
          body: 'Aegis is not a new wallet app. Aegis is not a new Smart Account implementation. Aegis is not merely a Passkey SDK.\n\nInstead, Aegis sits above Stellar Smart Accounts and provides the operational layer required to manage authorization throughout its lifecycle. Think of Aegis as an operational console that helps developers create, manage, monitor, and operate Smart Account permissions safely.\n\nThe Smart Account remains responsible for enforcing authorization on-chain. Aegis is responsible for managing all surrounding operations.'
        },
        {
          id: 'gagasan-inti',
          title: 'Core Thesis',
          body: 'Most dApps adopting Smart Accounts eventually encounter the exact same operational challenges:\n• Creating temporary delegated sessions\n• Crafting authorization policies\n• Revoking compromised sessions\n• Orchestrating sponsored transactions\n• Monitoring authorization telemetry\n• Debugging failed authorizations in production\n\nToday, every team builds these features independently from scratch. Aegis provides reusable infrastructure so developers can focus on building their core product.'
        },
        {
          id: 'analogi-perusahaan',
          title: 'Simple Analogy',
          body: 'Imagine an enterprise:\n• The CEO holds the official seal -> Represents the Smart Account.\n• HR manages employee permissions, IT provisions temporary access, Security revokes access cards -> Represents Aegis.\n\nThe CEO retains final authority. Aegis manages the operational lifecycle surrounding authorization.'
        },
        {
          id: 'filosofi-proyek',
          title: 'Architectural Philosophy',
          body: 'The single most important architectural principle of Aegis is:\n\n> Smart Accounts hold security enforcement.\n> Aegis holds lifecycle management.\n\nAbsolute authorization decisions must be enforced by the Smart Account\'s check_auth host vector on-chain. Aegis never replaces on-chain authorization; Aegis simplifies operations around it.',
          callout: {
            type: 'important',
            title: 'Core Security Guarantee',
            text: 'Critical authorization remains on-chain. If Aegis middleware is completely offline, Smart Accounts continue to function securely.'
          }
        },
        {
          id: 'apa-yang-bukan-aegis',
          title: 'What Aegis is NOT',
          body: 'Aegis is NOT:\n• a new wallet\n• a wallet SDK\n• an authentication SDK\n• a new Smart Account contract implementation\n• a Passkey toolkit\n\nInstead, Aegis is an operational layer built on top of existing Stellar Smart Account capabilities.'
        }
      ]
    }
  },

  'problem-statement': {
    slug: 'problem-statement',
    title: '02. Problem Statement',
    category: 'Getting Started & Foundations',
    order: '02',
    description: 'Analyzing operational friction and infrastructure duplication in Stellar Smart Account dApp development.',
    readTime: '4 min read',
    subheadings: [
      { id: 'situasi-saat-ini', title: 'Current Landscape' },
      { id: 'biaya-tersembunyi', title: 'Hidden Engineering Costs' },
      { id: 'masalah-sebenarnya', title: 'The Real Problem' },
      { id: 'apa-yang-hilang', title: 'What is Missing?' },
    ],
    content: {
      lead: 'Stellar provides powerful building blocks like Contract Accounts, check_auth, Passkeys, and sponsored transactions. However, building production applications requires far more than raw primitives.',
      sections: [
        {
          id: 'situasi-saat-ini',
          title: 'Current Landscape',
          body: 'Today, developers building Soroban Smart Account apps must independently implement:\n• Session & expiration management\n• Delegated signer management\n• Authorization policy rules & updates\n• Session revocation & emergency lockouts\n• Gas sponsorship budget management\n• Telemetry, monitoring & debugging tools'
        },
        {
          id: 'biaya-tersembunyi',
          title: 'Hidden Engineering Costs',
          body: 'Every team wastes valuable engineering hours rebuilding infrastructure instead of focusing on their core product:\n• App A builds a custom session system.\n• App B builds another session system.\n• App C builds custom emergency revocation.\n\nThis leads to duplicated engineering effort and a fragmented developer experience across the Stellar ecosystem.'
        },
        {
          id: 'masalah-sebenarnya',
          title: 'The Real Problem',
          body: 'Smart Accounts answer: "Is this transaction authorized?"\n\nApplications still must answer operational questions:\n• Who is permitted to issue a delegated session?\n• How are authorization policies updated safely?\n• How do we instantly revoke compromised sessions?\n• How do we monitor and diagnose authorization failures in production?'
        },
        {
          id: 'apa-yang-hilang',
          title: 'What is Missing?',
          body: 'There is no standardized ecosystem control plane dedicated to authorization lifecycles, policy management, revocation workflows, and authorization visibility. This is the gap filled by Aegis.'
        }
      ]
    }
  },

  'solution': {
    slug: 'solution',
    title: '03. Aegis Solution',
    category: 'Getting Started & Foundations',
    order: '03',
    description: 'How Aegis provides an Authorization Control Plane for Smart Accounts without altering native Stellar trust models.',
    readTime: '4 min read',
    subheadings: [
      { id: 'prinsip-inti', title: 'Core Principle' },
      { id: 'apa-yang-dilakukan-aegis', title: 'Aegis Responsibilities' },
      { id: '5-prinsip-desain', title: '5 Core Design Principles' },
    ],
    content: {
      lead: 'Aegis is engineered as the operational layer for Stellar Smart Accounts, helping developers manage authorization across its full lifecycle while preserving native Stellar security.',
      sections: [
        {
          id: 'prinsip-inti',
          title: 'Core Principle',
          body: 'Smart Accounts hold security enforcement. Aegis holds lifecycle management.\n\nThe Smart Account contract remains the final authority for deciding whether an action is permitted. Aegis never overrides or bypasses on-chain decisions.'
        },
        {
          id: 'apa-yang-dilakukan-aegis',
          title: 'Aegis Responsibilities',
          body: 'Aegis acts as the Authorization Control Plane providing:\n• Session Lifecycle Management\n• Authorization Policy Management\n• Delegated Signers Management\n• Sponsored Transaction Orchestration\n• Emergency Revocation Workflows\n• Telemetry, Analytics & Explainability'
        },
        {
          id: '5-prinsip-desain',
          title: '5 Core Design Principles',
          body: '1. Native First: Never replace Stellar primitives. Extend them.\n2. Security First: Authorization decisions must remain on-chain.\n3. Developer First: Eliminate duplicated engineering effort.\n4. Operational Simplicity: Managing authorization should be simpler than implementing it.\n5. Composability: Apps adopt only the modules they require.'
        }
      ]
    }
  },

  'positioning': {
    slug: 'positioning',
    title: '04. Product Positioning',
    category: 'Getting Started & Foundations',
    order: '04',
    description: 'Deep dive into Aegis product positioning as an Authorization Control Plane.',
    readTime: '4 min read',
    subheadings: [
      { id: 'analogi-control-plane', title: 'Understanding Control Plane vs Data Plane' },
      { id: 'analogi-menara-pengawas', title: 'Airport Control Tower Analogy' },
      { id: 'identitas-produk', title: 'Product Identity Statement' },
    ],
    content: {
      lead: 'Product positioning is vital. Aegis is firmly positioned as the Authorization Control Plane for Stellar Smart Accounts.',
      sections: [
        {
          id: 'analogi-control-plane',
          title: 'Understanding Control Plane vs Data Plane',
          body: 'In cloud infrastructure:\n• Data Plane: Executes direct work (EC2 processing requests).\n• Control Plane: Manages system operations (IAM, permission config, monitoring).\n\nAegis is the Control Plane for Smart Accounts. Smart Accounts execute authorization; Aegis manages how authorization is configured, operated, and monitored.'
        },
        {
          id: 'analogi-menara-pengawas',
          title: 'Airport Control Tower Analogy',
          body: 'Airplanes represent Smart Accounts (performing flights). The control tower represents Aegis (coordinating flight permits, routes, and emergency responses). Without the control tower, planes can still fly, but operating an airport safely and efficiently becomes nearly impossible.'
        },
        {
          id: 'identitas-produk',
          title: 'Product Identity Statement',
          body: '> Aegis is the Authorization Control Plane that helps developers build, manage, monitor, and operate Stellar Smart Account authorizations safely without replacing Stellar native security models.'
        }
      ]
    }
  },

  'opportunity-gap': {
    slug: 'opportunity-gap',
    title: '05. Ecosystem Opportunity Gap',
    category: 'Getting Started & Foundations',
    order: '05',
    description: 'Why Aegis is needed alongside Smart Account Kit and Passkey Kit.',
    readTime: '4 min read',
    subheadings: [
      { id: 'blok-bangunan-vs-ops', title: 'Building Blocks vs Operations' },
      { id: 'analogi-aws-terraform', title: 'AWS vs Terraform Analogy' },
      { id: 'Kesesuaian-ekosistem', title: 'Ecosystem Fit' },
    ],
    content: {
      lead: 'Existing ecosystem projects provide outstanding building blocks. Aegis focuses on operating those building blocks at production scale.',
      sections: [
        {
          id: 'blok-bangunan-vs-ops',
          title: 'Building Blocks vs Operations',
          body: 'Smart Account Kit and Passkey Kit provide WebAuthn signing and contract deployment primitives. Aegis provides the operational layer necessary to manage those primitives over time.'
        },
        {
          id: 'analogi-aws-terraform',
          title: 'AWS vs Terraform Analogy',
          body: 'AWS provides EC2, IAM, and VPC. Yet companies rely on Terraform, Datadog, and PagerDuty. Those tools don\'t replace AWS; they make AWS manageable. Aegis follows the same philosophy for Soroban Smart Accounts.'
        },
        {
          id: 'Kesesuaian-ekosistem',
          title: 'Ecosystem Fit',
          body: 'Smart Accounts solve programmable authorization. Aegis solves programmable authorization operations.'
        }
      ]
    }
  },

  'authorization-lifecycle': {
    slug: 'authorization-lifecycle',
    title: '06. Authorization Lifecycle',
    category: 'Core Concepts',
    order: '06',
    description: 'Detailed walkthrough of the 8 operational stages in the authorization lifecycle.',
    readTime: '5 min read',
    subheadings: [
      { id: '8-tahapan-siklus', title: '8 Lifecycle Stages' },
      { id: 'batas-kepercayaan-siklus', title: 'Trust Boundaries & Responsibilities' },
    ],
    content: {
      lead: 'Authorization is not a single point-in-time transaction. Authorization is a continuous operational lifecycle.',
      sections: [
        {
          id: '8-tahapan-siklus',
          title: '8 Lifecycle Stages',
          body: '1. Create: Identity initialized.\n2. Configure: Authorization policies & bounds defined.\n3. Delegate: Limited-scope session grant issued.\n4. Authorize: On-chain check_auth execution.\n5. Observe: Real-time telemetry & monitoring.\n6. Update: Policy evolution & limit adjustment.\n7. Revoke: Instant emergency access revocation.\n8. Expire: Automatic TTL decay.',
          code: {
            language: 'text',
            filename: 'lifecycle_flow.txt',
            code: `Create ──> Configure ──> Delegate ──> Authorize ──> Observe ──> Update ──> Revoke ──> Expire`
          }
        },
        {
          id: 'batas-kepercayaan-siklus',
          title: 'Trust Boundaries & Responsibilities',
          body: 'Smart Accounts hold signature verification, policy enforcement, session validity, and check_auth. Aegis holds policy authoring, session issuance, monitoring, dashboarding, and revocation workflows.'
        }
      ]
    }
  },

  'policy-model': {
    slug: 'policy-model',
    title: '07. Policy Model',
    category: 'Core Concepts',
    order: '07',
    description: 'Human-readable policy formats, Policy Compiler, and deterministic on-chain evaluation.',
    readTime: '5 min read',
    subheadings: [
      { id: 'format-yaml-manusia', title: 'Human-Readable Policy Format' },
      { id: 'policy-compiler', title: 'Policy Compiler Responsibilities' },
      { id: 'penegakan-deterministik', title: 'Deterministic On-Chain Enforcement' },
    ],
    content: {
      lead: 'Policies are authored off-chain in human-readable syntax, compiled into compact binary structures, and enforced deterministically on-chain.',
      sections: [
        {
          id: 'format-yaml-manusia',
          title: 'Human-Readable Policy Format',
          body: 'Developers define authorization rules using YAML syntax (e.g. max 100 XLM, allowed contracts: payment, expiration: 24h).'
        },
        {
          id: 'policy-compiler',
          title: 'Policy Compiler Responsibilities',
          body: 'The Policy Compiler validates syntax, checks for rule conflicts, and serializes policies into compact binary data structures for Soroban.'
        },
        {
          id: 'penegakan-deterministik',
          title: 'Deterministic On-Chain Enforcement',
          body: 'Policies evaluate deterministic data only (timestamps, contract addresses, function selectors, transaction amounts). Non-deterministic attributes (IP addresses, AI risk scores) must not be conditions for on-chain authorization.'
        }
      ]
    }
  },

  'session-model': {
    slug: 'session-model',
    title: '08. Session Model',
    category: 'Core Concepts',
    order: '08',
    description: 'Temporary delegated authorization capabilities, bounded scopes, state machine, and revocation.',
    readTime: '5 min read',
    subheadings: [
      { id: 'filosofi-sesi', title: 'Principle of Least Privilege' },
      { id: 'state-machine-sesi', title: 'Session State Machine' },
      { id: 'validasi-sesi-onchain', title: 'On-Chain Session Validation' },
    ],
    content: {
      lead: 'A session is not an account owner. A session is a temporary delegated authorization capability granted by a Smart Account under strict policy bounds.',
      sections: [
        {
          id: 'filosofi-sesi',
          title: 'Principle of Least Privilege',
          body: 'Sessions represent scoped delegated authority with explicit expiration timestamps, allowed target contracts, and spending caps.'
        },
        {
          id: 'state-machine-sesi',
          title: 'Session State Machine',
          body: 'Sessions transition through deterministic states: Pending -> Active -> Suspended / Revoked / Expired.'
        },
        {
          id: 'validasi-sesi-onchain',
          title: 'On-Chain Session Validation',
          body: 'Inside check_auth, Smart Accounts verify signer matching, expiration timestamps, revocation flags, and spending limits before authorizing transactions.'
        }
      ]
    }
  },

  'intent-policies': {
    slug: 'intent-policies',
    title: '09. Intent Policies',
    category: 'Core Concepts',
    order: '09',
    description: 'Authorizing complete transaction workflows and multi-operation shape validation.',
    readTime: '5 min read',
    subheadings: [
      { id: 'otorisasi-hasil', title: 'Outcome Authorization vs Isolated Calls' },
      { id: 'validasi-multi-op', title: 'Multi-Operation Transaction Shape Validation' },
      { id: 'simulasi-explainability', title: 'Simulation & Explainability' },
    ],
    content: {
      lead: 'Intent Policies extend session authorization by evaluating complete multi-operation transaction workflows rather than validating isolated contract functions.',
      sections: [
        {
          id: 'otorisasi-hasil',
          title: 'Outcome Authorization vs Isolated Calls',
          body: 'Instead of asking "Is session allowed to call function X?", Intent Policies verify whether the entire transaction sequence satisfies defined security bounds.'
        },
        {
          id: 'validasi-multi-op',
          title: 'Multi-Operation Transaction Shape Validation',
          body: 'Validating operation ordering, permitted target contracts, prohibited calls, and sponsorship eligibility in a single atomic Stellar transaction.'
        },
        {
          id: 'simulasi-explainability',
          title: 'Simulation & Explainability',
          body: 'Simulating transaction execution off-chain to provide human-readable explanations whenever an intent fails compliance rules.'
        }
      ]
    }
  },

  'system-architecture': {
    slug: 'system-architecture',
    title: '10. High-Level Architecture',
    category: 'Architecture & Security',
    order: '10',
    description: 'Hybrid architecture model, on-chain execution vs off-chain control plane.',
    readTime: '5 min read',
    subheadings: [
      { id: 'model-hibrida', title: 'Hybrid Architecture Model' },
      { id: 'alasan-luar-auth-path', title: 'Why Aegis Lives Outside the Auth Path' },
      { id: 'model-kegagalan', title: 'Resilience & Failure Recovery Model' },
    ],
    content: {
      lead: 'Aegis is architected outside the direct authorization execution path to preserve native security and eliminate middleware downtime risks.',
      sections: [
        {
          id: 'model-hibrida',
          title: 'Hybrid Architecture Model',
          body: 'On-chain Smart Accounts hold trusted security enforcement. Off-chain Aegis Control Plane holds operational workflows (dashboard, policy authoring, session generator, analytics).'
        },
        {
          id: 'alasan-luar-auth-path',
          title: 'Why Aegis Lives Outside the Auth Path',
          body: 'Placing middleware directly in the execution path introduces single points of failure and additional trust assumptions. Aegis prepares authorization prior to execution and observes telemetry post-execution.'
        },
        {
          id: 'model-kegagalan',
          title: 'Resilience & Failure Recovery Model',
          body: 'If Aegis middleware goes offline, deployed Smart Accounts and on-chain policies continue operating uninterrupted.'
        }
      ]
    }
  },

  'product-scope': {
    slug: 'product-scope',
    title: '11. Product Scope & Modules',
    category: 'Architecture & Security',
    order: '11',
    description: 'Core product modules: Session Manager, Policy Manager, Delegation, Sponsorship, and Monitoring.',
    readTime: '4 min read',
    subheadings: [
      { id: 'modul-utama', title: 'Core Product Modules' },
      { id: 'batasan-produk', title: 'Product Boundaries' },
    ],
    content: {
      lead: 'Aegis consists of modular operational services working alongside Stellar Smart Accounts.',
      sections: [
        {
          id: 'modul-utama',
          title: 'Core Product Modules',
          body: '• Session Manager: Session creation, renewal, rotation, & revocation.\n• Policy Manager: Policy authoring & binary compilation.\n• Delegation Manager: Registering & tracking delegated signers.\n• Sponsorship Manager: Budgeting & sponsorship rate limits.\n• Monitoring & Analytics: Event indexing, alerts, & explainability.'
        },
        {
          id: 'batasan-produk',
          title: 'Product Boundaries',
          body: 'Aegis does NOT build wallet UIs, DEX logic, or custom application business rules. Aegis focuses strictly on authorization operations.'
        }
      ]
    }
  },

  'trust-model': {
    slug: 'trust-model',
    title: '12. Trust Model',
    category: 'Architecture & Security',
    order: '12',
    description: 'Trusted domain boundaries on-chain vs operational domain off-chain.',
    readTime: '5 min read',
    subheadings: [
      { id: 'domain-kepercayaan', title: 'Trusted Domain vs Operational Domain' },
      { id: 'tabel-sumber-kebenaran', title: 'Source of Truth Matrix' },
      { id: 'analisis-kegagalan', title: 'Failure Scenario Analysis' },
    ],
    content: {
      lead: 'Aegis is engineered to be trust-minimized. The blockchain remains the absolute source of truth for all authorization decisions.',
      sections: [
        {
          id: 'domain-kepercayaan',
          title: 'Trusted Domain vs Operational Domain',
          body: '• Trusted Domain (On-chain): Smart Account, check_auth, signers, session state, spending caps, revocation flags.\n• Operational Domain (Off-chain): Dashboard, SDK, policy editor, monitoring, analytics, indexers.'
        },
        {
          id: 'tabel-sumber-kebenaran',
          title: 'Source of Truth Matrix',
          body: 'Authorization Decisions -> Smart Account (On-chain)\nPolicy Enforcement -> check_auth (On-chain)\nRevocation Status -> Smart Account (On-chain)\nAnalytics & Dashboard -> Aegis (Off-chain)'
        },
        {
          id: 'analisis-kegagalan',
          title: 'Failure Scenario Analysis',
          body: 'If Aegis is compromised or offline, an attacker CANNOT drain user assets because check_auth validates all signatures and policies independently on-chain.'
        }
      ]
    }
  },

  'storage-model': {
    slug: 'storage-model',
    title: '13. Storage Model',
    category: 'Architecture & Security',
    order: '13',
    description: 'On-chain storage minimization vs off-chain operational data.',
    readTime: '4 min read',
    subheadings: [
      { id: 'layer-1-onchain', title: 'Layer 1 — On-Chain Storage' },
      { id: 'layer-2-offchain', title: 'Layer 2 — Off-Chain Storage' },
      { id: 'sinkronisasi-event', title: 'Event-Driven Synchronization' },
    ],
    content: {
      lead: 'Store only data required for deterministic authorization on-chain. Remaining data belongs to the control plane.',
      sections: [
        {
          id: 'layer-1-onchain',
          title: 'Layer 1 — On-Chain Storage',
          body: 'Minimal state stored in Smart Account: Owner, delegated signers, active session reference, compact policy digest, revocation flag, spending caps.'
        },
        {
          id: 'layer-2-offchain',
          title: 'Layer 2 — Off-Chain Storage',
          body: 'Operational data stored off-chain: Developer metadata, YAML policy source documents, audit logs, analytics, notification settings.'
        },
        {
          id: 'sinkronisasi-event',
          title: 'Event-Driven Synchronization',
          body: 'Middleware indexes Soroban Events (SessionCreated, SessionRevoked, PolicyUpdated) to maintain dashboard consistency. Synchronization is strictly uni-directional.'
        }
      ]
    }
  },

  'threat-model': {
    slug: 'threat-model',
    title: '14. Threat Model & Security',
    category: 'Architecture & Security',
    order: '14',
    description: 'Security assumptions, threat vectors, mitigations, and defense-in-depth strategy.',
    readTime: '5 min read',
    subheadings: [
      { id: 'vektor-ancaman', title: 'Threat Vectors & Mitigations' },
      { id: 'asumsi-keamanan', title: 'Core Security Assumptions' },
      { id: 'defense-in-depth', title: 'Defense-in-Depth Strategy' },
    ],
    content: {
      lead: 'Aegis is designed so that critical authorization remains enforceable on-chain even in the event of a middleware breach.',
      sections: [
        {
          id: 'vektor-ancaman',
          title: 'Threat Vectors & Mitigations',
          body: '• Middleware Compromise: Attacker gains control of Aegis backend. Mitigation: Middleware cannot sign transactions; check_auth rejects unauthorized invocations.\n• Session Key Theft: Session key stolen. Mitigation: Bounded by spending caps, TTL expiration, and instant emergency revocation.\n• Replay Attacks: Mitigated via nonces, TTL decay, and invocation uniqueness.'
        },
        {
          id: 'asumsi-keamanan',
          title: 'Core Security Assumptions',
          body: 'Assumes Smart Account contract logic has been audited and check_auth is implemented correctly. Aegis cannot compensate for contract-level bugs.'
        },
        {
          id: 'defense-in-depth',
          title: 'Defense-in-Depth Strategy',
          body: 'Layer 1: Signer verification -> Layer 2: Session validation -> Layer 3: Policy enforcement -> Layer 4: Revocation check -> Layer 5: Spending cap evaluation.'
        }
      ]
    }
  },

  'smart-account-integration': {
    slug: 'smart-account-integration',
    title: '15. Smart Account Integration',
    category: 'Developer Integration & Reference',
    order: '15',
    description: 'Technical integration guide and Soroban code examples for linking with Aegis.',
    readTime: '6 min read',
    subheadings: [
      { id: 'persyaratan-integrasi', title: 'Integration Requirements' },
      { id: 'impl-check-auth', title: 'Implementing check_auth' },
      { id: 'contoh-kode-soroban', title: 'Soroban Rust Code Example' },
    ],
    content: {
      lead: 'Guide for developers connecting Soroban Smart Accounts to the Aegis Control Plane.',
      sections: [
        {
          id: 'persyaratan-integrasi',
          title: 'Integration Requirements',
          body: 'Smart Accounts must implement the Soroban CustomAccount trait and validate authorization payloads sent by the Aegis SDK.'
        },
        {
          id: 'impl-check-auth',
          title: 'Implementing check_auth',
          body: 'The check_auth host vector receives signature payload and verifies whether signature originates from master key (Passkey) or a valid session key.',
          code: {
            language: 'rust',
            filename: 'aegis_integration.rs',
            code: `#[contractimpl]
impl CustomAccount for AegisSmartAccount {
    fn check_auth(
        env: Env,
        signature_payload: Hash<32>,
        signature: RawVal,
        auth_context: Vec<Context>,
    ) -> Result<(), AccountError> {
        let auth: AegisAuthPayload = signature.try_into_val(&env)?;
        match auth.mode {
            AuthMode::Passkey => PasskeyVerifier::verify(&env, &signature_payload, &auth.sig)?,
            AuthMode::SessionKey => SessionManager::verify(&env, &signature_payload, &auth.session_id, &auth_context)?,
        }
        Ok(())
    }
}`
          }
        }
      ]
    }
  },

  'security-checklist': {
    slug: 'security-checklist',
    title: '16. Security Checklist',
    category: 'Developer Integration & Reference',
    order: '16',
    description: 'Mandatory security checklist for engineers prior to deploying Smart Accounts & Aegis to production.',
    readTime: '4 min read',
    subheadings: [
      { id: 'onchain-checklist', title: 'On-Chain Checklist' },
      { id: 'offchain-checklist', title: 'Off-Chain Checklist' },
    ],
    content: {
      lead: 'Essential security checklist for engineers to ensure zero authorization vulnerabilities at deployment.',
      sections: [
        {
          id: 'onchain-checklist',
          title: 'On-Chain Checklist',
          body: '✔ Verify check_auth rejects invalid signatures.\n✔ Ensure session storage TTL is renewed properly.\n✔ Test emergency revocation function to kill sessions immediately.\n✔ Confirm spending caps are calculated strictly on-chain.'
        },
        {
          id: 'offchain-checklist',
          title: 'Off-Chain Checklist',
          body: '✔ Ensure Aegis SDK never stores master private keys in browser.\n✔ Verify relayer validates intents prior to submitting Fee-Bumps.\n✔ Confirm event indexers are configured with error alerts.'
        }
      ]
    }
  },

  'glossary': {
    slug: 'glossary',
    title: '17. Glossary',
    category: 'Developer Integration & Reference',
    order: '17',
    description: 'Definitions of key technical terms and concepts across the Stellar Aegis ecosystem.',
    readTime: '3 min read',
    subheadings: [
      { id: 'istilah-inti', title: 'Core Aegis Terminology' },
    ],
    content: {
      lead: 'Official terms and definitions referenced throughout Stellar Aegis documentation.',
      sections: [
        {
          id: 'istilah-inti',
          title: 'Core Aegis Terminology',
          body: '• Control Plane: Off-chain operational management layer.\n• Data Plane / Enforcement: On-chain absolute security enforcement layer.\n• check_auth: Native Soroban host vector for custom authorization verification.\n• Session Grant: Time-bound delegated permission token.\n• Policy Compiler: Module compiling YAML rules into Soroban binaries.'
        }
      ]
    }
  },

  'roadmap': {
    slug: 'roadmap',
    title: '18. Product Roadmap',
    category: 'Roadmap & Future',
    order: '18',
    description: 'Phased release roadmap from Phase 1 Foundation to Phase 4 Shared Ecosystem Infrastructure.',
    readTime: '4 min read',
    subheadings: [
      { id: 'fase-1-foundation', title: 'Phase 1 — Foundation (Developer Library)' },
      { id: 'fase-2-toolkit', title: 'Phase 2 — Developer Toolkit' },
      { id: 'fase-3-control-plane', title: 'Phase 3 — Operational Control Plane' },
      { id: 'fase-4-ecosystem', title: 'Phase 4 — Shared Ecosystem Infrastructure' },
    ],
    content: {
      lead: 'Aegis follows a phased release roadmap prioritizing developer value, ecosystem adoption, and trust minimization.',
      sections: [
        {
          id: 'fase-1-foundation',
          title: 'Phase 1 — Foundation (Developer Library)',
          body: 'Focus: Reference Smart Account integration, Policy SDK, Session SDK, documentation, and example apps.'
        },
        {
          id: 'fase-2-toolkit',
          title: 'Phase 2 — Developer Toolkit',
          body: 'Focus: Developer Dashboard, Policy Builder, Session Inspector, Transaction Simulator, and Event Explorer.'
        },
        {
          id: 'fase-3-control-plane',
          title: 'Phase 3 — Operational Control Plane',
          body: 'Focus: Production monitoring, alerts, emergency revocation console, sponsorship management, and operational APIs.'
        },
        {
          id: 'fase-4-ecosystem',
          title: 'Phase 4 — Shared Ecosystem Infrastructure',
          body: 'Focus (Optional): Shared sponsorship coordination, portable policies, and revocation propagation network.'
        }
      ]
    }
  },

  'adr': {
    slug: 'adr',
    title: '19. Architectural Decision Records (ADR)',
    category: 'Roadmap & Future',
    order: '19',
    description: 'Summary of key architectural decisions governing the creation of Stellar Aegis.',
    readTime: '3 min read',
    subheadings: [
      { id: 'adr-001', title: 'ADR-001: Separation of Enforcement and Lifecycle' },
      { id: 'adr-002', title: 'ADR-002: Placing Middleware Outside the Execution Path' },
    ],
    content: {
      lead: 'Architectural Decision Records (ADR) document key architectural decisions and their underlying rationale.',
      sections: [
        {
          id: 'adr-001',
          title: 'ADR-001: Separation of Enforcement and Lifecycle',
          body: 'Decision: Authorization security enforcement must be 100% on-chain (Smart Account check_auth), while lifecycle management is off-chain (Aegis Control Plane).\nRationale: Prevents introducing new trust assumptions and ensures user accounts remain safe even if Aegis servers are offline.'
        },
        {
          id: 'adr-002',
          title: 'ADR-002: Placing Middleware Outside the Execution Path',
          body: 'Decision: Aegis middleware must not be placed directly in the execution path of transactions.\nRationale: Avoids introducing latency overhead, single points of failure, and centralized dependencies.'
        }
      ]
    }
  }
};
