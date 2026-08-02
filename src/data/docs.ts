export interface SubHeading {
  id: string;
  title: string;
}

export interface DocItem {
  slug: string;
  title: string;
  category?: string;
  order: string;
  description: string;
  readTime: string;
  subheadings: SubHeading[];
  content: {
    lead: string;
    sections: {
      id: string;
      title: string;
      body: string;
      callout?: {
        type: 'note' | 'tip' | 'warning' | 'important';
        title: string;
        text: string;
      };
      code?: {
        language: string;
        filename?: string;
        code: string;
      };
    }[];
  };
}

export interface SidebarGroup {
  id: string;
  title: string;
  slug?: string;
  isFolder?: boolean;
  children?: {
    slug: string;
    title: string;
  }[];
}

export const SIDEBAR_NAVIGATION: SidebarGroup[] = [
  {
    id: 'sec-1',
    title: '🚀 I. Getting Started & Foundations',
    isFolder: true,
    children: [
      { slug: 'simple-guide', title: '00. Simple Guide (Penjelasan Sederhana)' },
      { slug: 'project-context', title: '01. Konteks & Ikhtisar Proyek' },
      { slug: 'problem-statement', title: '02. Pernyataan Masalah' },
      { slug: 'solution', title: '03. Solusi Aegis' },
      { slug: 'positioning', title: '04. Posisi Produk' },
      { slug: 'opportunity-gap', title: '05. Celah Peluang Ekosistem' },
    ],
  },
  {
    id: 'sec-2',
    title: '🧠 II. Core Concepts',
    isFolder: true,
    children: [
      { slug: 'authorization-lifecycle', title: '06. Siklus Hidup Otorisasi' },
      { slug: 'policy-model', title: '07. Model Kebijakan (Policy)' },
      { slug: 'session-model', title: '08. Model Sesi (Session)' },
      { slug: 'intent-policies', title: '09. Kebijakan Intent' },
    ],
  },
  {
    id: 'sec-3',
    title: '🏗️ III. Architecture & Security',
    isFolder: true,
    children: [
      { slug: 'system-architecture', title: '10. Arsitektur Tingkat Tinggi' },
      { slug: 'product-scope', title: '11. Cakupan & Modul Produk' },
      { slug: 'trust-model', title: '12. Model Kepercayaan (Trust Model)' },
      { slug: 'storage-model', title: '13. Model Penyimpanan (Storage)' },
      { slug: 'threat-model', title: '14. Model Ancaman & Keamanan' },
    ],
  },
  {
    id: 'sec-4',
    title: '💻 IV. Developer Integration & Reference',
    isFolder: true,
    children: [
      { slug: 'smart-account-integration', title: '15. Panduan Integrasi Smart Account' },
      { slug: 'security-checklist', title: '16. Daftar Periksa Keamanan' },
      { slug: 'glossary', title: '17. Glosarium Istilah' },
    ],
  },
  {
    id: 'sec-5',
    title: '🗺️ V. Roadmap & Future',
    isFolder: true,
    children: [
      { slug: 'roadmap', title: '18. Peta Jalan Produk (Roadmap)' },
      { slug: 'adr', title: '19. Catatan Keputusan Arsitektur (ADR)' },
    ],
  },
];

export const DOCS_DATA: Record<string, DocItem> = {
  'simple-guide': {
    slug: 'simple-guide',
    title: '00. Simple Guide (Penjelasan Sederhana)',
    category: 'Getting Started & Foundations',
    order: '00',
    description: 'Panduan garis besar tentang Stellar Aegis tanpa istilah teknis rumit, menggunakan bahasa Indonesia dan analogi kehidupan sehari-hari.',
    readTime: '3 min read',
    subheadings: [
      { id: 'apa-itu-aegis', title: 'Apa Itu Stellar Aegis?' },
      { id: 'analogi-perusahaan', title: 'Analogi Sederhana: Direktur vs Tim HR & Security' },
      { id: 'masalah-utama', title: 'Masalah Utama yang Diselesaikan' },
      { id: '3-fitur-utama-awam', title: '3 Fitur Utama dalam Bahasa Awam' },
      { id: 'apa-yang-bukan-aegis', title: 'Apa yang BUKAN Aegis?' },
    ],
    content: {
      lead: 'Halaman ini dibuat khusus untuk memberikan gambaran umum mengenai Stellar Aegis tanpa istilah teknis yang rumit. Jika Anda baru mengenal blockchain atau ingin memahami ide besarnya secara cepat, halaman ini adalah tempat terbaik untuk memulai.',
      sections: [
        {
          id: 'apa-itu-aegis',
          title: 'Apa Itu Stellar Aegis?',
          body: 'Stellar Aegis adalah sebuah "Konsol Pengendali Operasional" (Authorization Control Plane) untuk akun pintar (Smart Account) di jaringan blockchain Stellar.\n\nAegis tidak bertugas menyimpan uang atau kunci rahasia Anda. Tugas utama Aegis adalah membantu pengembang aplikasi membuat, mengatur, memantau, dan mematikan izin akses pengguna secara aman dan otomatis.',
          callout: {
            type: 'tip',
            title: 'Inti Gagasan',
            text: 'Smart Account (di blockchain) bertugas mengeksekusi dan memutuskan keamanan secara mutlak. Aegis (di luar blockchain) bertugas mengelola seluruh operasional izin di sekelilingnya.'
          }
        },
        {
          id: 'analogi-perusahaan',
          title: 'Analogi Sederhana: Direktur vs Tim HR & Security',
          body: 'Bayangkan sebuah perusahaan besar:\n\n1. Direktur Utama (CEO) = Smart Account di Blockchain\nDirektur adalah satu-satunya pihak yang memegang cap stempel resmi dan berhak menyetujui transaksi keuangan besar. Keputusan Direktur bersifat mutlak.\n\n2. Tim HR, IT, & Satpam Security = Stellar Aegis\nTim HR mengatur kartu id-card karyawan. Tim IT memberikan password sementara selama 2 jam untuk karyawan magang. Satpam Security bertugas mencabut kartu akses jika ada HP karyawan yang hilang.\n\nAegis tidak pernah menggantikan Direktur. Aegis adalah tim operasional yang membantu Direktur mengatur semua izin karyawan agar perusahaan berjalan lancar dan aman.',
          code: {
            language: 'text',
            filename: 'analogi_aegis.txt',
            code: `+-------------------------------------------------------------+
|                      DIREKTUR (Smart Account)               |
|            Mengeksekusi dan Menyebut "YA" atau "TIDAK"      |
+------------------------------+------------------------------+
                               ^
                               | (Diatur dan Dibantu Oleh)
+------------------------------+------------------------------+
|                     STELLAR AEGIS CONTROL PLANE             |
|   - Tim HR (Manajemen Sesi)                                 |
|   - Tim IT (Aturan & Limit Belanja)                         |
|   - Satpam (Pencabutan Akses Darurat / Revocation)          |
|   - Pengawas Kamera CCTV (Monitoring & Log)                 |
+-------------------------------------------------------------+`
          }
        },
        {
          id: 'masalah-utama',
          title: 'Masalah Utama yang Diselesaikan',
          body: 'Saat ini, menggunakan aplikasi crypto sering kali merepotkan:\n• Pengguna harus mengetik kata sandi / scan sidik jari berulang kali untuk setiap klik kecil.\n• Pengguna baru wajib membeli koin XLM terlebih dahulu hanya untuk bayar biaya transaksi yang membingungkan.\n• Jika perangkat HP hilang, mencabut akses sementara sangat sulit dilakukan.\n\nTanpa Aegis, setiap pembuat aplikasi harus membuat sistem keamanan dan izin ini sendiri dari nol. Aegis menyediakan fondasi siap pakai yang bisa dipakai bersama oleh semua pengembang.'
        },
        {
          id: '3-fitur-utama-awam',
          title: '3 Fitur Utama dalam Bahasa Awam',
          body: '1. Kartu Pass Hotel (Session Key)\nPengguna cukup scan FaceID sekali di awal. Aplikasi memberikan "Kartu Pass Sementara" berlaku 2 jam. Selama 2 jam, Anda bisa main game atau belanja di aplikasi tanpa terganggu pop-up konfirmasi terus-menerus.\n\n2. Kartu E-Toll Perusahaan (Gas Sponsorship)\nAplikasi dapat membayar biaya transaksi penggunanya secara otomatis, namun dengan aturan aman: "Maksimal dibayarkan 5 kali sehari per pengguna".\n\n3. Tombol Pemadam Kebakaran (Emergency Revocation)\nJika HP pengguna hilang atau tercuri, akses sementara bisa dimatikan seketika dengan satu klik tanpa membahayakan saldo utama.'
        },
        {
          id: 'apa-yang-bukan-aegis',
          title: 'Apa yang BUKAN Aegis?',
          body: 'Untuk menghindari salah paham:\n❌ Aegis BUKAN aplikasi dompet digital (Wallet).\n❌ Aegis BUKAN Smart Account baru.\n❌ Aegis BUKAN server terpusat yang memegang uang Anda.\n\nJika server Aegis mati sekalipun, akun dan aset pengguna di blockchain Stellar tetap 100% aman dan tidak terganggu.'
        }
      ]
    }
  },

  'project-context': {
    slug: 'project-context',
    title: '01. Konteks & Ikhtisar Proyek',
    category: 'Getting Started & Foundations',
    order: '01',
    description: 'Gambaran umum Stellar Aegis sebagai Konsol Pengendali Otorisasi (Authorization Control Plane) untuk Stellar Smart Accounts.',
    readTime: '5 min read',
    subheadings: [
      { id: 'apa-itu-aegis', title: 'Apa itu Aegis?' },
      { id: 'gagasan-inti', title: 'Gagasan Inti' },
      { id: 'analogi-perusahaan', title: 'Analogi Sederhana' },
      { id: 'filosofi-proyek', title: 'Filosofi Arsitektur' },
      { id: 'apa-yang-bukan-aegis', title: 'Apa yang BUKAN Aegis?' },
    ],
    content: {
      lead: 'Aegis adalah Authorization Control Plane untuk Stellar Smart Accounts. Aegis berdiri di atas Smart Account dan menyediakan lapisan operasional untuk mengelola otorisasi di sepanjang siklus hidupnya.',
      sections: [
        {
          id: 'apa-itu-aegis',
          title: 'Apa itu Aegis?',
          body: 'Aegis bukan aplikasi wallet baru. Aegis bukan implementasi Smart Account baru. Aegis bukan sekadar Passkey SDK.\n\nSebaliknya, Aegis berada di atas Stellar Smart Accounts dan menyediakan lapisan operasional yang diperlukan untuk mengelola otorisasi sepanjang siklus hidupnya. Bayangkan Aegis sebagai konsol operasional yang membantu developer membuat, mengelola, memantau, dan mengoperasikan otorisasi Smart Account secara aman.\n\nSmart Account tetap bertanggung jawab menegakkan otorisasi di on-chain. Aegis bertanggung jawab mengelola seluruh operasional di sekitarnya.'
        },
        {
          id: 'gagasan-inti',
          title: 'Gagasan Inti',
          body: 'Sebagian besar aplikasi yang mengadopsi Smart Account pada akhirnya harus menyelesaikan masalah operasional yang sama:\n• Membuat delegated session sementara\n• Menyusun kebijakan otorisasi (policies)\n• Mencabut akses sesi yang terkompromi (revocation)\n• Mengorkestrasi transaksi bersponsor (sponsorship)\n• Memantau aktivitas otorisasi (monitoring)\n• Mendiagnosis otorisasi yang gagal (debugging)\n\nHari ini, setiap tim aplikasi membangun fitur-fitur ini secara mandiri. Aegis menyediakan infrastruktur yang dapat digunakan kembali agar developer dapat fokus membangun produk.'
        },
        {
          id: 'analogi-perusahaan',
          title: 'Analogi Sederhana',
          body: 'Bayangkan sebuah perusahaan:\n• Direktur Utama memegang cap stempel resmi -> Mempresentasikan Smart Account.\n• Tim HR mengelola izin karyawan, Tim IT membuat akses sementara, Tim Security mencabut kartu akses -> Mempresentasikan Aegis.\n\nDirektur Utama tetap memegang otoritas akhir. Aegis mengelola seluruh siklus hidup operasional otorisasi.'
        },
        {
          id: 'filosofi-proyek',
          title: 'Filosofi Arsitektur',
          body: 'Prinsip arsitektur paling penting di Aegis adalah:\n\n> Smart Account memegang penegakan keamanan (enforcement).\n> Aegis memegang manajemen siklus hidup (lifecycle management).\n\nKeputusan otorisasi mutlak harus ditegakkan oleh host vector check_auth milik Smart Account. Aegis tidak pernah menggantikan otorisasi on-chain; Aegis menyederhanakan operasional di sekelilingnya.',
          callout: {
            type: 'important',
            title: 'Jaminan Utama Keamanan',
            text: 'Otorisasi kritis tetap berada di on-chain. Jika middleware Aegis tidak tersedia, Smart Account tetap berfungsi dengan aman.'
          }
        },
        {
          id: 'apa-yang-bukan-aegis',
          title: 'Apa yang BUKAN Aegis?',
          body: 'Aegis BUKAN:\n• wallet baru\n• wallet SDK baru\n• authentication SDK baru\n• implementasi Smart Account baru\n• toolkit Passkey baru\n\nSebaliknya, Aegis adalah lapisan operasional yang dibangun di atas kapabilitas Smart Account yang sudah ada di Stellar.'
        }
      ]
    }
  },

  'problem-statement': {
    slug: 'problem-statement',
    title: '02. Pernyataan Masalah',
    category: 'Getting Started & Foundations',
    order: '02',
    description: 'Menganalisis friksi operasional dan duplikasi infrastruktur dalam pengembangan dApp Stellar Smart Account.',
    readTime: '4 min read',
    subheadings: [
      { id: 'situasi-saat-ini', title: 'Situasi Saat Ini' },
      { id: 'biaya-tersembunyi', title: 'Biaya Tersembunyi (Hidden Cost)' },
      { id: 'masalah-sebenarnya', title: 'Masalah Sebenarnya' },
      { id: 'apa-yang-hilang', title: 'Apa yang Masih Hilang?' },
    ],
    content: {
      lead: 'Stellar menyediakan blok bangunan yang kuat seperti Contract Accounts, check_auth, Passkeys, dan sponsored transactions. Namun, membangun aplikasi produksi membutuhkan jauh lebih banyak daripada sekadar fungsi dasar.',
      sections: [
        {
          id: 'situasi-saat-ini',
          title: 'Situasi Saat Ini',
          body: 'Saat ini, developer yang ingin membangun aplikasi Soroban Smart Account harus mengimplementasikan sendiri secara mandiri:\n• Manajemen sesi & kadaluarsa\n• Manajemen penandatangan terdelegasi (delegated signers)\n• Aturan kebijakan otorisasi & pembaruan\n• Pencabutan sesi & penguncian darurat (emergency revoke)\n• Pengelolaan anggaran transaksi bersponsor\n• Alat pemantauan, analisis, & debugging otorisasi'
        },
        {
          id: 'biaya-tersembunyi',
          title: 'Biaya Tersembunyi (Hidden Cost)',
          body: 'Setiap proyek menghabiskan waktu rekayasa untuk membangun kembali infrastruktur alih-alih fokus pada produk utama:\n• Aplikasi A membangun sistem sesinya sendiri.\n• Aplikasi B membangun sistem sesi yang lain.\n• Aplikasi C membuat mekanisme pencabutan akses sendiri.\n\nHal ini menyebabkan duplikasi kerja rekayasa dan pengalaman developer yang terfragmentasi di ekosistem Stellar.'
        },
        {
          id: 'masalah-sebenarnya',
          title: 'Masalah Sebenarnya',
          body: 'Smart Account menjawab: "Apakah transaksi ini boleh diotorisasi?"\n\nAplikasi masih harus menjawab pertanyaan operasional:\n• Siapa yang berhak membuat sesi terdelegasi?\n• Bagaimana cara memperbarui kebijakan otorisasi?\n• Bagaimana cara mencabut sesi yang terkompromi dengan cepat?\n• Bagaimana cara memantau dan mendiagnosis kegagalan otorisasi di produksi?'
        },
        {
          id: 'apa-yang-hilang',
          title: 'Apa yang Masih Hilang?',
          body: 'Belum ada control plane standar di seluruh ekosistem yang didedikasikan untuk siklus hidup otorisasi, manajemen kebijakan, alur kerja pencabutan akses, dan visibilitas otorisasi. Inilah celah yang diisi oleh Aegis.'
        }
      ]
    }
  },

  'solution': {
    slug: 'solution',
    title: '03. Solusi Aegis',
    category: 'Getting Started & Foundations',
    order: '03',
    description: 'Bagaimana Aegis menyediakan Authorization Control Plane untuk Smart Account tanpa mengubah model kepercayaan native Stellar.',
    readTime: '4 min read',
    subheadings: [
      { id: 'prinsip-inti', title: 'Prinsip Inti' },
      { id: 'apa-yang-dilakukan-aegis', title: 'Tanggung Jawab Nyata Aegis' },
      { id: '5-prinsip-desain', title: '5 Prinsip Desain Utama' },
    ],
    content: {
      lead: 'Aegis dirancang menjadi lapisan operasional untuk Stellar Smart Accounts, membantu developer mengelola otorisasi sepanjang siklus hidupnya sambil mempertahankan keamanan native Stellar.',
      sections: [
        {
          id: 'prinsip-inti',
          title: 'Prinsip Inti',
          body: 'Smart Account memegang penegakan keamanan (enforcement). Aegis memegang manajemen siklus hidup (lifecycle management).\n\nKontrak Smart Account tetap menjadi otoritas final untuk memutuskan apakah suatu tindakan diizinkan. Aegis tidak pernah mengesampingkan atau melompati keputusan tersebut.'
        },
        {
          id: 'apa-yang-dilakukan-aegis',
          title: 'Tanggung Jawab Nyata Aegis',
          body: 'Aegis bertindak sebagai Authorization Control Plane yang menyediakan:\n• Manajemen siklus hidup sesi (Session Lifecycle)\n• Manajemen kebijakan otorisasi (Policy Management)\n• Manajemen penandatangan terdelegasi (Delegated Signers)\n• Orkestrasi transaksi bersponsor (Sponsorship)\n• Alur kerja pencabutan akses darurat (Revocation)\n• Pemantauan, analisis, & kejelasan penjelasan (Explainability)'
        },
        {
          id: '5-prinsip-desain',
          title: '5 Prinsip Desain Utama',
          body: '1. Native First: Jangan pernah menggantikan primitives Stellar. Perluas mereka.\n2. Security First: Keputusan otorisasi harus tetap berada di on-chain.\n3. Developer First: Kurangi duplikasi kerja rekayasa.\n4. Operational Simplicity: Mengelola otorisasi harus lebih mudah daripada mengimplementasikannya.\n5. Composability: Aplikasi hanya mengadopsi komponen yang dibutuhkan.'
        }
      ]
    }
  },

  'positioning': {
    slug: 'positioning',
    title: '04. Posisi Produk',
    category: 'Getting Started & Foundations',
    order: '04',
    description: 'Penjelasan mendalam posisi produk Aegis sebagai Authorization Control Plane.',
    readTime: '4 min read',
    subheadings: [
      { id: 'analogi-control-plane', title: 'Memahami Control Plane vs Data Plane' },
      { id: 'analogi-menara-pengawas', title: 'Analogi Menara Pengawas Bandara' },
      { id: 'identitas-produk', title: 'Pernyataan Identitas Produk' },
    ],
    content: {
      lead: 'Posisi produk sangat penting. Aegis diposisikan secara tegas sebagai Authorization Control Plane untuk Stellar Smart Accounts.',
      sections: [
        {
          id: 'analogi-control-plane',
          title: 'Memahami Control Plane vs Data Plane',
          body: 'Dalam infrastruktur cloud:\n• Data Plane: Melakukan pekerjaan langsung (EC2, mengeksekusi permintaan).\n• Control Plane: Mengelola cara kerja sistem (IAM, konfigurasi izin, pemantauan).\n\nAegis adalah Control Plane untuk Smart Accounts. Smart Account mengeksekusi otorisasi; Aegis mengelola bagaimana otorisasi dikonfigurasi, dioperasikan, dan dipantau.'
        },
        {
          id: 'analogi-menara-pengawas',
          title: 'Analogi Menara Pengawas Bandara',
          body: 'Pesawat terbang merepresentasikan Smart Account (yang benar-benar melakukan penerbangan). Menara pengawas merepresentasikan Aegis (mengkoordinasikan izin terbang, rute, dan penanganan darurat). Tanpa menara pengawas, pesawat tetap bisa terbang, namun mengoperasikan bandara secara aman dan efisien menjadi sangat sulit.'
        },
        {
          id: 'identitas-produk',
          title: 'Pernyataan Identitas Produk',
          body: '> Aegis adalah Authorization Control Plane yang membantu developer membangun, mengelola, memantau, dan mengoperasikan otorisasi Stellar Smart Account secara aman tanpa menggantikan model keamanan native Stellar.'
        }
      ]
    }
  },

  'opportunity-gap': {
    slug: 'opportunity-gap',
    title: '05. Celah Peluang Ekosistem',
    category: 'Getting Started & Foundations',
    order: '05',
    description: 'Mengapa Aegis dibutuhkan berdampingan dengan Smart Account Kit dan Passkey Kit.',
    readTime: '4 min read',
    subheadings: [
      { id: 'blok-bangunan-vs-ops', title: 'Blok Bangunan vs. Operasional' },
      { id: 'analogi-aws-terraform', title: 'Analogi AWS vs Terraform' },
      { id: 'Kesesuaian-ekosistem', title: 'Kesesuaian Ekosistem' },
    ],
    content: {
      lead: 'Proyek ekosistem yang sudah ada menyediakan blok bangunan yang luar biasa. Aegis berfokus mengoperasikan blok bangunan tersebut dalam skala produksi.',
      sections: [
        {
          id: 'blok-bangunan-vs-ops',
          title: 'Blok Bangunan vs. Operasional',
          body: 'Smart Account Kit dan Passkey Kit menyediakan primitives untuk penandatanganan WebAuthn dan deployment kontrak. Aegis menyediakan lapisan operasional yang diperlukan untuk mengelola primitives tersebut dari waktu ke waktu.'
        },
        {
          id: 'analogi-aws-terraform',
          title: 'Analogi AWS vs Terraform',
          body: 'AWS menyediakan EC2, IAM, dan VPC. Namun perusahaan tetap menggunakan Terraform, Datadog, dan PagerDuty. Alat-alat tersebut tidak menggantikan AWS; mereka membuat AWS dapat dikelola. Aegis mengikuti filosofi yang sama untuk Soroban Smart Accounts.'
        },
        {
          id: 'Kesesuaian-ekosistem',
          title: 'Kesesuaian Ekosistem',
          body: 'Smart Accounts menyelesaikan otorisasi terprogram. Aegis menyelesaikan operasional otorisasi terprogram.'
        }
      ]
    }
  },

  'authorization-lifecycle': {
    slug: 'authorization-lifecycle',
    title: '06. Siklus Hidup Otorisasi',
    category: 'Core Concepts',
    order: '06',
    description: 'Penjelasan 8 tahapan operasional dalam siklus hidup otorisasi.',
    readTime: '5 min read',
    subheadings: [
      { id: '8-tahapan-siklus', title: '8 Tahapan Siklus Hidup' },
      { id: 'batas-kepercayaan-siklus', title: 'Batas Kepercayaan & Tanggung Jawab' },
    ],
    content: {
      lead: 'Otorisasi bukanlah transaksi tunggal. Otorisasi adalah siklus hidup operasional yang berkelanjutan.',
      sections: [
        {
          id: '8-tahapan-siklus',
          title: '8 Tahapan Siklus Hidup',
          body: '1. Create: Identitas dibuat.\n2. Configure: Kebijakan & batas otorisasi didefinisikan.\n3. Delegate: Sesi terdelegasi berlingkup terbatas diterbitkan.\n4. Authorize: Eksekusi check_auth di on-chain.\n5. Observe: Telemetri & pemantauan real-time.\n6. Update: Evolusi kebijakan & penyesuaian limit.\n7. Revoke: Pencabutan akses darurat seketika.\n8. Expire: Peluruhan TTL otomatis.',
          code: {
            language: 'text',
            filename: 'lifecycle_flow.txt',
            code: `Create ──> Configure ──> Delegate ──> Authorize ──> Observe ──> Update ──> Revoke ──> Expire`
          }
        },
        {
          id: 'batas-kepercayaan-siklus',
          title: 'Batas Kepercayaan & Tanggung Jawab',
          body: 'Smart Account memegang verifikasi tanda tangan, penegakan kebijakan, validitas sesi, dan check_auth. Aegis memegang penyusunan kebijakan, penerbitan sesi, pemantauan, dashboard, dan alur kerja pencabutan akses.'
        }
      ]
    }
  },

  'policy-model': {
    slug: 'policy-model',
    title: '07. Model Kebijakan (Policy)',
    category: 'Core Concepts',
    order: '07',
    description: 'Format kebijakan yang mudah dibaca manusia, Policy Compiler, dan evaluasi deterministik di on-chain.',
    readTime: '5 min read',
    subheadings: [
      { id: 'format-yaml-manusia', title: 'Format Kebijakan Mudah Dibaca' },
      { id: 'policy-compiler', title: 'Tugas Policy Compiler' },
      { id: 'penegakan-deterministik', title: 'Penegakan Deterministik di On-Chain' },
    ],
    content: {
      lead: 'Kebijakan dibuat di off-chain dengan sintaks yang mudah dipahami manusia, dikompilasi menjadi struktur biner ringkas, dan ditegakkan secara deterministik di on-chain.',
      sections: [
        {
          id: 'format-yaml-manusia',
          title: 'Format Kebijakan Mudah Dibaca',
          body: 'Developer mendefinisikan aturan menggunakan sintaks YAML (misal: maks 100 XLM, kontrak yang diizinkan: payment, kadaluarsa: 24 jam).'
        },
        {
          id: 'policy-compiler',
          title: 'Tugas Policy Compiler',
          body: 'Policy Compiler memvalidasi sintaks, memeriksa konflik aturan, dan men-serialisasi kebijakan menjadi struktur data biner ringkas untuk Soroban.'
        },
        {
          id: 'penegakan-deterministik',
          title: 'Penegakan Deterministik di On-Chain',
          body: 'Kebijakan hanya mengevaluasi data deterministik (timestamp, alamat kontrak, function selector, jumlah transaksi). Atribut non-deterministik (IP address, skor risiko AI) tidak boleh menjadi syarat otorisasi di on-chain.'
        }
      ]
    }
  },

  'session-model': {
    slug: 'session-model',
    title: '08. Model Sesi (Session)',
    category: 'Core Concepts',
    order: '08',
    description: 'Kapabilitas otorisasi terdelegasi sementara, lingkup batas, state machine, dan pencabutan akses.',
    readTime: '5 min read',
    subheadings: [
      { id: 'filosofi-sesi', title: 'Prinsip Hak Akses Minimal (Least Privilege)' },
      { id: 'state-machine-sesi', title: 'State Machine Sesi' },
      { id: 'validasi-sesi-onchain', title: 'Validasi Sesi di On-Chain' },
    ],
    content: {
      lead: 'Sesi bukan pemilik akun. Sesi adalah kapabilitas otorisasi sementara yang diberikan oleh Smart Account di bawah batasan kebijakan yang telah ditentukan.',
      sections: [
        {
          id: 'filosofi-sesi',
          title: 'Prinsip Hak Akses Minimal (Least Privilege)',
          body: 'Sesi merepresentasikan otoritas terdelegasi berlingkup terbatas dengan waktu kadaluarsa eksplisit, kontrak yang diizinkan, dan batas belanja.'
        },
        {
          id: 'state-machine-sesi',
          title: 'State Machine Sesi',
          body: 'Sesi bertransisi melalui status deterministik: Pending -> Active -> Suspended / Revoked / Expired.'
        },
        {
          id: 'validasi-sesi-onchain',
          title: 'Validasi Sesi di On-Chain',
          body: 'Di dalam check_auth, Smart Account memverifikasi kecocokan penandatangan, timestamp kadaluarsa, status pencabutan akses, dan limit belanja sebelum mengizinkan transaksi.'
        }
      ]
    }
  },

  'intent-policies': {
    slug: 'intent-policies',
    title: '09. Kebijakan Intent',
    category: 'Core Concepts',
    order: '09',
    description: 'Mengotorisasi alur kerja transaksi lengkap dan validasi multi-operasi.',
    readTime: '5 min read',
    subheadings: [
      { id: 'otorisasi-hasil', title: 'Otorisasi Hasil, Bukan Pemanggilan Tunggal' },
      { id: 'validasi-multi-op', title: 'Validasi Bentuk Transaksi Multi-Op' },
      { id: 'simulasi-explainability', title: 'Simulasi & Kejelasan Penjelasan' },
    ],
    content: {
      lead: 'Intent Policies memperluas otorisasi sesi dengan mengevaluasi seluruh alur kerja transaksi multi-operasi, bukan sekadar memverifikasi satu fungsi kontrak terisolasi.',
      sections: [
        {
          id: 'otorisasi-hasil',
          title: 'Otorisasi Hasil, Bukan Pemanggilan Tunggal',
          body: 'Alih-alih bertanya "Bolehkah sesi memanggil fungsi X?", Intent Policies memverifikasi apakah seluruh urutan operasi memenuhi batasan keamanan yang ditentukan.'
        },
        {
          id: 'validasi-multi-op',
          title: 'Validasi Bentuk Transaksi Multi-Op',
          body: 'Memvalidasi urutan operasi, kontrak yang diizinkan, pemanggilan dilarang, dan kelayakan sponsor dalam satu transaksi atomic Stellar.'
        },
        {
          id: 'simulasi-explainability',
          title: 'Simulasi & Kejelasan Penjelasan',
          body: 'Mensimulasikan eksekusi transaksi di off-chain untuk memberikan penjelasan dalam bahasa manusia jika ada intent yang gagal mematuhi aturan.'
        }
      ]
    }
  },

  'system-architecture': {
    slug: 'system-architecture',
    title: '10. Arsitektur Tingkat Tinggi',
    category: 'Architecture & Security',
    order: '10',
    description: 'Model arsitektur hibrida, eksekusi on-chain vs off-chain control plane.',
    readTime: '5 min read',
    subheadings: [
      { id: 'model-hibrida', title: 'Model Arsitektur Hibrida' },
      { id: 'alasan-luar-auth-path', title: 'Mengapa Aegis Berada di Luar Auth Path' },
      { id: 'model-kegagalan', title: 'Model Ketahanan & Penanganan Kegagalan' },
    ],
    content: {
      lead: 'Aegis dirancang di luar jalur otorisasi langsung untuk mempertahankan keamanan native dan menghilangkan risiko downtime middleware.',
      sections: [
        {
          id: 'model-hibrida',
          title: 'Model Arsitektur Hibrida',
          body: 'Smart Account di on-chain memegang penegakan keamanan tepercaya. Aegis Control Plane di off-chain memegang alur kerja operasional (dashboard, penyusunan kebijakan, pembuat sesi, analytics).'
        },
        {
          id: 'alasan-luar-auth-path',
          title: 'Mengapa Aegis Berada di Luar Auth Path',
          body: 'Meletakkan middleware langsung di jalur eksekusi akan menimbulkan single point of failure dan asumsi kepercayaan tambahan. Aegis menyiapkan otorisasi sebelum eksekusi dan memantaunya setelah eksekusi.'
        },
        {
          id: 'model-kegagalan',
          title: 'Model Ketahanan & Penanganan Kegagalan',
          body: 'Jika middleware Aegis offline, Smart Account yang sudah terdeploy dan kebijakan on-chain tetap berfungsi tanpa gangguan.'
        }
      ]
    }
  },

  'product-scope': {
    slug: 'product-scope',
    title: '11. Cakupan & Modul Produk',
    category: 'Architecture & Security',
    order: '11',
    description: 'Modul produk utama: Session Manager, Policy Manager, Delegation, Sponsorship, dan Monitoring.',
    readTime: '4 min read',
    subheadings: [
      { id: 'modul-utama', title: 'Modul Produk Utama' },
      { id: 'batasan-produk', title: 'Batasan Produk' },
    ],
    content: {
      lead: 'Aegis terdiri dari layanan operasional modular yang bekerja berdampingan dengan Stellar Smart Accounts.',
      sections: [
        {
          id: 'modul-utama',
          title: 'Modul Produk Utama',
          body: '• Session Manager: Pembuatan sesi, pembaruan, rotasi, & pencabutan akses.\n• Policy Manager: Penyusunan kebijakan & kompilasi biner.\n• Delegation Manager: Mendaftarkan & melacak penandatangan terdelegasi.\n• Sponsorship Manager: Pengelolaan anggaran & limit rate sponsor.\n• Monitoring & Analytics: Pemetaan event, alert, & explainability.'
        },
        {
          id: 'batasan-produk',
          title: 'Batasan Produk',
          body: 'Aegis TIDAK membangun UI wallet, logika DEX, atau aturan bisnis aplikasi kustom. Aegis berfokus khusus pada operasional otorisasi.'
        }
      ]
    }
  },

  'trust-model': {
    slug: 'trust-model',
    title: '12. Model Kepercayaan (Trust Model)',
    category: 'Architecture & Security',
    order: '12',
    description: 'Batas domain tepercaya di on-chain vs domain operasional di off-chain.',
    readTime: '5 min read',
    subheadings: [
      { id: 'domain-kepercayaan', title: 'Domain Tepercaya vs. Domain Operasional' },
      { id: 'tabel-sumber-kebenaran', title: 'Tabel Sumber Kebenaran (Source of Truth)' },
      { id: 'analisis-kegagalan', title: 'Analisis Skenario Kegagalan' },
    ],
    content: {
      lead: 'Aegis dirancang trust-minimized. Blockchain tetap menjadi sumber kebenaran mutlak untuk semua keputusan otorisasi.',
      sections: [
        {
          id: 'domain-kepercayaan',
          title: 'Domain Tepercaya vs. Domain Operasional',
          body: '• Trusted Domain (On-chain): Smart Account, check_auth, signers, state sesi, limit belanja, status pencabutan akses.\n• Operational Domain (Off-chain): Dashboard, SDK, policy editor, monitoring, analytics, indexers.'
        },
        {
          id: 'tabel-sumber-kebenaran',
          title: 'Tabel Sumber Kebenaran (Source of Truth)',
          body: 'Keputusan Otorisasi -> Smart Account (On-chain)\nPenegakan Kebijakan -> check_auth (On-chain)\nStatus Pencabutan Akses -> Smart Account (On-chain)\nAnalytics & Dashboard -> Aegis (Off-chain)'
        },
        {
          id: 'analisis-kegagalan',
          title: 'Analisis Skenario Kegagalan',
          body: 'Jika Aegis terkompromi atau offline, penyerang TIDAK BISA menguras aset pengguna karena check_auth memvalidasi semua tanda tangan dan kebijakan secara mandiri di on-chain.'
        }
      ]
    }
  },

  'storage-model': {
    slug: 'storage-model',
    title: '13. Model Penyimpanan (Storage)',
    category: 'Architecture & Security',
    order: '13',
    description: 'Minimisasi penyimpanan di on-chain vs data operasional di off-chain.',
    readTime: '4 min read',
    subheadings: [
      { id: 'layer-1-onchain', title: 'Layer 1 — Penyimpanan On-chain' },
      { id: 'layer-2-offchain', title: 'Layer 2 — Penyimpanan Off-chain' },
      { id: 'sinkronisasi-event', title: 'Sinkronisasi Berbasis Event' },
    ],
    content: {
      lead: 'Hanya simpan data yang diperlukan untuk otorisasi deterministik di on-chain. Data sisanya milik control plane.',
      sections: [
        {
          id: 'layer-1-onchain',
          title: 'Layer 1 — Penyimpanan On-chain',
          body: 'Menyimpan state minimal di Smart Account: Pemilik, penandatangan terdelegasi, referensi sesi aktif, aturan kebijakan ringkas, flag pencabutan akses, limit belanja.'
        },
        {
          id: 'layer-2-offchain',
          title: 'Layer 2 — Penyimpanan Off-chain',
          body: 'Menyimpan data operasional: Metadata developer, dokumen kebijakan YAML, riwayat aktivitas, analytics, laporan audit, pengaturan notifikasi.'
        },
        {
          id: 'sinkronisasi-event',
          title: 'Sinkronisasi Berbasis Event',
          body: 'Middleware mengindeks Soroban Events (SessionCreated, SessionRevoked, PolicyUpdated) untuk menjaga keselarasan dashboard. Sinkronisasi bersifat satu arah.'
        }
      ]
    }
  },

  'threat-model': {
    slug: 'threat-model',
    title: '14. Model Ancaman & Keamanan',
    category: 'Architecture & Security',
    order: '14',
    description: 'Asumsi keamanan, vektor ancaman, mitigasi, dan strategi defense-in-depth.',
    readTime: '5 min read',
    subheadings: [
      { id: 'vektor-ancaman', title: 'Vektor Ancaman & Mitigasi' },
      { id: 'asumsi-keamanan', title: 'Asumsi Keamanan Utama' },
      { id: 'defense-in-depth', title: 'Strategi Defense-in-Depth' },
    ],
    content: {
      lead: 'Aegis dirancang agar otorisasi kritis tetap dapat ditegakkan di on-chain meskipun terjadi kebocoran pada middleware.',
      sections: [
        {
          id: 'vektor-ancaman',
          title: 'Vektor Ancaman & Mitigasi',
          body: '• Kebocoran Middleware: Penyerang menguasai backend Aegis. Mitigasi: Middleware tidak bisa menandatangani transaksi; check_auth menolak pemanggilan tanpa izin.\n• Kebocoran Session Key: Kunci sesi tercuri. Mitigasi: Dibatasi oleh limit belanja, TTL kadaluarsa, dan pencabutan akses seketika.\n• Serangan Replay: Dibatasi via nonce, TTL kadaluarsa, dan keunikan pemanggilan.'
        },
        {
          id: 'asumsi-keamanan',
          title: 'Asumsi Keamanan Utama',
          body: 'Mengasumsikan logika kontrak Smart Account telah diaudit dan check_auth diimplementasikan dengan benar. Aegis tidak dapat mengompensasi bug pada kontrak.'
        },
        {
          id: 'defense-in-depth',
          title: 'Strategi Defense-in-Depth',
          body: 'Layer 1: Verifikasi penandatangan -> Layer 2: Validasi sesi -> Layer 3: Penegakan kebijakan -> Layer 4: Cek pencabutan akses -> Layer 5: Limit belanja.'
        }
      ]
    }
  },

  'smart-account-integration': {
    slug: 'smart-account-integration',
    title: '15. Panduan Integrasi Smart Account',
    category: 'Developer Integration & Reference',
    order: '15',
    description: 'Panduan teknis dan contoh kode integrasi Smart Account Soroban dengan Aegis.',
    readTime: '6 min read',
    subheadings: [
      { id: 'persyaratan-integrasi', title: 'Persyaratan Integrasi' },
      { id: 'impl-check-auth', title: 'Implementasi check_auth' },
      { id: 'contoh-kode-soroban', title: 'Contoh Kode Rust Soroban' },
    ],
    content: {
      lead: 'Panduan bagi developer untuk menghubungkan Smart Account Soroban dengan Aegis Control Plane.',
      sections: [
        {
          id: 'persyaratan-integrasi',
          title: 'Persyaratan Integrasi',
          body: 'Smart Account harus mengimplementasikan trait CustomAccount Soroban dan memvalidasi payload otorisasi yang dikirimkan oleh Aegis SDK.'
        },
        {
          id: 'impl-check-auth',
          title: 'Implementasi check_auth',
          body: 'Host vector check_auth menerima signature payload dan memverifikasi apakah tanda tangan berasal dari kunci master (Passkey) atau kunci sesi yang sah.',
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
    title: '16. Daftar Periksa Keamanan',
    category: 'Developer Integration & Reference',
    order: '16',
    description: 'Checklist keamanan bagi engineer sebelum merilis Smart Account dan Aegis ke produksi.',
    readTime: '4 min read',
    subheadings: [
      { id: 'onchain-checklist', title: 'Daftar Periksa On-Chain' },
      { id: 'offchain-checklist', title: 'Daftar Periksa Off-Chain' },
    ],
    content: {
      lead: 'Daftar periksa keamanan wajib bagi engineer untuk memastikan tidak ada celah otorisasi saat deployment.',
      sections: [
        {
          id: 'onchain-checklist',
          title: 'Daftar Periksa On-Chain',
          body: '✔ Verifikasi bahwa check_auth menolak tanda tangan yang tidak valid.\n✔ Pastikan TTL storage sesi diperbarui secara benar.\n✔ Uji fungsi pencabutan akses (revocation) untuk mematikan sesi seketika.\n✔ Pastikan limit belanja dihitung secara mutlak di on-chain.'
        },
        {
          id: 'offchain-checklist',
          title: 'Daftar Periksa Off-Chain',
          body: '✔ Pastikan Aegis SDK tidak pernah menyimpan private key master di browser.\n✔ Verifikasi bahwa relayer memvalidasi intent sebelum Fee-Bump disubmit.\n✔ Pastikan indexer event dikonfigurasi dengan alarm kegagalan.'
        }
      ]
    }
  },

  'glossary': {
    slug: 'glossary',
    title: '17. Glosarium Istilah',
    category: 'Developer Integration & Reference',
    order: '17',
    description: 'Kamus definisi istilah teknis dan konsep utama dalam ekosistem Stellar Aegis.',
    readTime: '3 min read',
    subheadings: [
      { id: 'istilah-inti', title: 'Istilah Inti Aegis' },
    ],
    content: {
      lead: 'Referensi istilah dan definisi resmi yang digunakan di seluruh dokumentasi Stellar Aegis.',
      sections: [
        {
          id: 'istilah-inti',
          title: 'Istilah Inti Aegis',
          body: '• Control Plane: Lapisan pengelola operasional off-chain.\n• Data Plane / Enforcement: Lapisan penegak keamanan mutlak di on-chain.\n• check_auth: Host vector native Soroban untuk verifikasi otorisasi kustom.\n• Session Grant: Token izin terdelegasi berwaktu terbatas.\n• Policy Compiler: Modul pengubah aturan YAML menjadi biner Soroban.'
        }
      ]
    }
  },

  'roadmap': {
    slug: 'roadmap',
    title: '18. Peta Jalan Produk (Roadmap)',
    category: 'Roadmap & Future',
    order: '18',
    description: 'Tahapan rilis bertahap dari Fase 1 Foundation hingga Fase 4 Shared Ecosystem Infrastructure.',
    readTime: '4 min read',
    subheadings: [
      { id: 'fase-1-foundation', title: 'Fase 1 — Foundation (Library Developer)' },
      { id: 'fase-2-toolkit', title: 'Fase 2 — Developer Toolkit' },
      { id: 'fase-3-control-plane', title: 'Fase 3 — Operational Control Plane' },
      { id: 'fase-4-ecosystem', title: 'Fase 4 — Infrastruktur Ekosistem Bersama' },
    ],
    content: {
      lead: 'Aegis mengikuti peta jalan rilis bertahap yang memprioritaskan nilai developer, adopsi ekosistem, dan minimisasi asumsi kepercayaan.',
      sections: [
        {
          id: 'fase-1-foundation',
          title: 'Fase 1 — Foundation (Library Developer)',
          body: 'Fokus: Integrasi acuan Smart Account, SDK Kebijakan, SDK Sesi, dokumentasi, dan aplikasi contoh.'
        },
        {
          id: 'fase-2-toolkit',
          title: 'Fase 2 — Developer Toolkit',
          body: 'Fokus: Dashboard Developer, Policy Builder, Inspector Sesi, Simulator Transaksi, dan Explorer Event.'
        },
        {
          id: 'fase-3-control-plane',
          title: 'Fase 3 — Operational Control Plane',
          body: 'Fokus: Pemantauan produksi, alarm, konsol pencabutan akses, manajemen sponsorship, dan API operasional.'
        },
        {
          id: 'fase-4-ecosystem',
          title: 'Fase 4 — Infrastruktur Ekosistem Bersama',
          body: 'Fokus (Opsional): Koordinasi sponsorship bersama, kebijakan portabel, dan jaringan propagasi pencabutan akses.'
        }
      ]
    }
  },

  'adr': {
    slug: 'adr',
    title: '19. Catatan Keputusan Arsitektur (ADR)',
    category: 'Roadmap & Future',
    order: '19',
    description: 'Ringkasan keputusan arsitektural utama yang menjadi acuan pembuatan Stellar Aegis.',
    readTime: '3 min read',
    subheadings: [
      { id: 'adr-001', title: 'ADR-001: Pemisahan Enforcement dan Lifecycle' },
      { id: 'adr-002', title: 'ADR-002: Penempatan Middleware di Luar Execution Path' },
    ],
    content: {
      lead: 'Architecture Decision Records (ADR) mencatat keputusan arsitektural penting beserta alasan di baliknya.',
      sections: [
        {
          id: 'adr-001',
          title: 'ADR-001: Pemisahan Enforcement dan Lifecycle',
          body: 'Keputusan: Penegakan keamanan otorisasi harus 100% berada di on-chain (Smart Account check_auth), sementara manajemen siklus hidup berada di off-chain (Aegis Control Plane).\nAlasan: Mencegah penambahan trust assumption dan menjamin akun pengguna tetap aman jika server Aegis offline.'
        },
        {
          id: 'adr-002',
          title: 'ADR-002: Penempatan Middleware di Luar Execution Path',
          body: 'Keputusan: Middleware Aegis tidak boleh ditempatkan langsung di dalam jalur eksekusi transaksi.\nAlasan: Menghindari latency tambahan, single point of failure, dan ketergantungan terpusat.'
        }
      ]
    }
  }
};
