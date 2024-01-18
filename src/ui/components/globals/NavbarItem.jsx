
export const NavbarItem = ({ path, itemName }) => {
  return (
    <li className='nav-item'>
      <NextLink
        href='/'
        passHref
        legacyBehavior
      >
        <span
          className={ `nav-link ${ path === '/' ? 'active' : '' }` }
        >
          { itemName }
        </span>
      </NextLink>
    </li>
  );
}
