
export const NavbarList = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className='nav-link dropdown-toggle'
        role='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        Item
      </a>

      <ul className='dropdown-menu'>
        <li>
          <NextLink
            href='/dji'
            passHref
            legacyBehavior
          >
            <span className='dropdown-item pointer'>
              SubItem 1
            </span>
          </NextLink>
        </li>
        <li>
          <NextLink
            href='/parrot'
            passHref
            legacyBehavior
          >
            <span className='dropdown-item pointer'>
              SubItem 2
            </span>
          </NextLink>
        </li>
      </ul>
    </li>
  );
}
