import { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Nav from '../Nav';
import NavMobile from '../NavMobile';

const Layout = ({
  children,
  siteId,
  cards,
  header,
  footer,
  pages,
  products,
}) => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <Header siteId={siteId} header={header} />
      {cards && cards.length && (
        <>
          <Nav
            cards={cards}
            siteId={siteId}
            products={products}
            toggleMenu={toggleMenu}
          />
          {open ? (
            <NavMobile cards={cards} siteId={siteId} products={products} />
          ) : null}
        </>
      )}
      {children}
      <Footer data={footer} siteId={siteId} pages={pages} />
    </>
  );
};

export default Layout;
