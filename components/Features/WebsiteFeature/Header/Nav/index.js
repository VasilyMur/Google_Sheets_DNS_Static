import Link from 'next/link';
import NavStyles from '../../../../styles/NavStyles';

const Nav = () => (
  <NavStyles data-test="nav">
    <li>
      <Link href="/">
        <a className="city-main">Item 1</a>
      </Link>
    </li>
    <li>
      <Link href="/">
        <a className="city-main">Item 2</a>
      </Link>
    </li>
  </NavStyles>
);
export default Nav;
