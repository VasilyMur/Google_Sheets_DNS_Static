import { useState, useEffect } from 'react';
const baseSiteData = {
  cards: [],
  pages: [],
  cardsheader: '',
  domain: '',
  footer: {
    email: '',
    phone: '',
    title: '',
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
  textmain: '',
  frontseo: {},
};
// Site Data Hook
export const useWebsiteData = (data) => {
  const [siteData, setSiteData] = useState(baseSiteData);

  useEffect(() => {
    setSiteData((current) => ({ ...current, ...data }));
  }, [data]);

  return siteData;
};
