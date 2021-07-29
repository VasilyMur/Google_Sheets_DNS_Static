import Link from 'next/link';
import styled from 'styled-components';
import { RiShoppingCartLine } from 'react-icons/ri';
import NavMobileButton from '../components/NavMobileButton';
import CartIconStyles from '../styles/CartIconStyles';
import { uniqueCategoryTitlesFromCards, totalQuantity } from '../helpers';
import { URL_PAGE_CATEGORY, URL_PAGE_CART } from '../../../../constants';

const Nav = ({ cards, products, toggleMenu }) => {
  const categories = uniqueCategoryTitlesFromCards(cards);
  const quantity = totalQuantity(Object.values(products));
  // Some cards dont't have an ID
  const missingId = cards.some((res) => !res.id);
  return (
    <Container data-test="nav">
      <Wrap>
        <StyledNav>
          {Object.keys(categories).map((res, i) => (
            <li key={i}>
              <Link href={`${URL_PAGE_CATEGORY}/${categories[res].slug}`}>
                <a className="header_nav_link">{res}</a>
              </Link>
            </li>
          ))}
        </StyledNav>

        {missingId ? null : (
          <Link href={`${URL_PAGE_CART}`}>
            <CartIconLink>
              <CartIconStyles products={products} color="#fff">
                <RiShoppingCartLine />
                {quantity && <span className="badge">{quantity}</span>}
              </CartIconStyles>
            </CartIconLink>
          </Link>
        )}
        <NavMobileButton toggleMenu={toggleMenu} />
      </Wrap>
    </Container>
  );
};
export default Nav;

const Container = styled.div`
  background: #000;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${(props) => props.theme.maxWidthHeaderFooter};
  margin: 0 auto;
  @media (max-width: 900px) {
    display: block;
    padding: 15px;
  }
`;
const CartIconLink = styled.a`
  @media (max-width: 900px) {
    display: none;
  }
`;

const StyledNav = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex: 1 1 0%;
  font-size: 2rem;
  li {
    list-style: none;
    display: flex;
  }
  .header_nav_link {
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: rgb(255, 255, 255, 0.9);
    @media (max-width: 700px) {
      padding: 10px;
    }
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
