import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { RiShoppingCartLine } from 'react-icons/ri';
import CartIconStyles from '../styles/CartIconStyles';
import { uniqueCategoryTitlesFromCards } from '../helpers';
import { URL_PAGE_CATEGORY } from '../../../../constants';

const NavMobile = ({ cards, siteId, products }) => {
  const categories = uniqueCategoryTitlesFromCards(cards);
  // Some cards dont't have an ID
  const missingId = cards.some((res) => !res.id);
  return (
    <Container>
      <Wrap>
        <MenuList>
          {Object.keys(categories).map((res, i) => (
            <li key={i}>
              <Link href={`${URL_PAGE_CATEGORY}/${categories[res].slug}`}>
                <StyledLink>{res}</StyledLink>
              </Link>
            </li>
          ))}
          {missingId ? null : (
            <li>
              <Link href={`/website/${siteId}/cart`}>
                <a>
                  <CartIconStyles products={products} color="#000">
                    <RiShoppingCartLine />
                  </CartIconStyles>
                </a>
              </Link>
            </li>
          )}
        </MenuList>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  z-index: 999999;
  background: #fff;
  width: 100%;
  padding: 10px 10px 20px;
`;

const Wrap = styled.div``;
const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    border-bottom: 1px solid #ededed;
    line-height: 0;
    a {
      padding: 5px 0;
      line-height: 1.8;
      display: block;
    }
  }
`;
const StyledLink = styled.a`
  cursor: pointer;
`;

export default NavMobile;
