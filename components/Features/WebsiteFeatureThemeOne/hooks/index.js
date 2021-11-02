import { useState, useEffect } from 'react';
const baseSiteData = {
  cards: [],
  categories: [],
  pages: [],
  domain: '',
  _id: '',
  footer: {
    title: '',
    email: '',
    phone: '',
    address: '',
  },
  header: {
    image: '',
    title: '',
  },
  hero: {
    button: '',
    image: '',
    subtitle: '',
    title: '',
  },
  social: {
    fb: '',
    instagram: '',
    twitter: '',
  },
  layout: {
    header: '',
    navbar: '',
    hero: '',
    textblock: '',
    cardsheader: '',
    cards: '',
    footer: '',
  },
  sitesettings: {
    title: '',
    description: '',
    canonical: '',
    pagination: '',
    ganalyticsid: '',
    gtagid: '',
    amazonid: '',
    favicon: '',
  },
  crispId: '',
  stripe: {
    keyPublish: '',
    currency: '',
  },
};
// Site Data Hook
export const useWebsiteData = (data) => {
  const [siteData, setSiteData] = useState(baseSiteData);

  useEffect(() => {
    setSiteData((current) => ({ ...current, ...data }));
  }, [data]);

  return siteData;
};
