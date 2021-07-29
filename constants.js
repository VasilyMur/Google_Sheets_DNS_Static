export const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api'
    : 'https://google-sheets-dns.onrender.com/api';
// 'http://google-sheets-dns:10000/api';

export const SITE_NAME = 'Diflex';

// API Websites
export const URL_API_GET_WEBSITE = '/getWebsite';

// PAGES
export const URL_PAGES_MAIN_PAGE = '/';
export const URL_PAGE_NOT_FOUND = '/404';
export const URL_PAGE_CART = '/cart';
export const URL_PAGE_SINGLE_ITEM = '/item';
export const URL_PAGE_CATEGORY = '/category';
