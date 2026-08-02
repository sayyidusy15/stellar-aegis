export type Language = 'en' | 'id';

export const i18n: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.docs': 'Docs',
    'nav.architecture': 'Architecture',
    'nav.developer_guide': 'Developer Guide',
    'nav.security': 'Security',
    'nav.back_home': '← Back to Home',
    'nav.search_placeholder': 'Search docs...',
    'nav.github': 'GitHub',

    // Sidebar
    'sidebar.root_label': 'Stellar-Aegis',
    'sidebar.version': 'v1.0.0',
    'sidebar.footer_title': 'Soroban Smart Contracts',
    'sidebar.footer_subtitle': 'Built for Protocol 15 & Soroban',

    // Search
    'search.placeholder': 'Search Stellar-Aegis documentation...',
    'search.empty_hint': 'Type to search components, features, SDK methods, and security specs...',
    'search.no_results': 'No documentation matches found for',
    'search.navigate': 'Navigate',
    'search.select': 'Select',
    'search.close': 'Close',

    // Breadcrumbs
    'breadcrumbs.docs': 'Docs',

    // TOC
    'toc.on_this_page': 'On This Page',

    // Pagination
    'pagination.previous': 'Previous',
    'pagination.next': 'Next',

    // CodeBlock
    'code.copy': 'Copy',
    'code.copied': 'Copied!',

    // Page header
    'page.read_time': 'read time',
  },
  id: {
    // Navbar
    'nav.docs': 'Dokumentasi',
    'nav.architecture': 'Arsitektur',
    'nav.developer_guide': 'Panduan Developer',
    'nav.security': 'Keamanan',
    'nav.back_home': '← Kembali ke Beranda',
    'nav.search_placeholder': 'Cari dokumentasi...',
    'nav.github': 'GitHub',

    // Sidebar
    'sidebar.root_label': 'Stellar-Aegis',
    'sidebar.version': 'v1.0.0',
    'sidebar.footer_title': 'Smart Contract Soroban',
    'sidebar.footer_subtitle': 'Dibangun untuk Protocol 15 & Soroban',

    // Search
    'search.placeholder': 'Cari dokumentasi Stellar-Aegis...',
    'search.empty_hint': 'Ketik untuk mencari komponen, fitur, metode SDK, dan spesifikasi keamanan...',
    'search.no_results': 'Tidak ada dokumentasi yang cocok untuk',
    'search.navigate': 'Navigasi',
    'search.select': 'Pilih',
    'search.close': 'Tutup',

    // Breadcrumbs
    'breadcrumbs.docs': 'Dokumentasi',

    // TOC
    'toc.on_this_page': 'Di Halaman Ini',

    // Pagination
    'pagination.previous': 'Sebelumnya',
    'pagination.next': 'Berikutnya',

    // CodeBlock
    'code.copy': 'Salin',
    'code.copied': 'Tersalin!',

    // Page header
    'page.read_time': 'waktu baca',
  },
};

export function t(lang: Language, key: string): string {
  return i18n[lang]?.[key] ?? i18n['en'][key] ?? key;
}
