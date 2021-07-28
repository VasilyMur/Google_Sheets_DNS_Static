import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({
  children,
  description,
  title,
  canonical,
  siteDomain,
  siteName,
}) => {
  console.log('children');

  return (
    <Helmet>
      {/* <Helmet titleTemplate={`%s - ${siteName}`}> */}
      <html lang="ru" />
      <title>{title}</title>
      {/* Fav Icons */}
      {/* <link rel="icon" type="image/png" href="/gatsby-icon.png" /> */}
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={description || ''} />
      <meta name="og:title" content={title || ''} />
      <meta name="og:description" content={description || ''} />
      <meta name="google-site-verification" content="11111" />
      <link rel="canonical" href={`https://${siteDomain}/${canonical}`} />
      {children}
    </Helmet>
  );
};

export default SEO;
