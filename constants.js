export const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api'
    : 'https://gsheets.onrender.com/api';

export const SITE_NAME = 'Diflex';

// API Websites
export const URL_API_GET_WEBSITE = '/getWebsite';

// PAGES
export const URL_PAGES_MAIN_PAGE = '/';
export const URL_PAGE_NOT_FOUND = '/404';
