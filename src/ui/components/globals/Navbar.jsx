// Next.js
import NextLink from 'next/link';
import { useRouter } from 'next/router';


export const Navbar = () => {
  const { asPath } = useRouter();

  return (
     <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
      <div className='container'>
        <NextLink
          href='/'
          passHref
          legacyBehavior
        >
          <p className='navbar-brand pointer'>
            DronExperts
          </p>
        </NextLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            { /* List Item */ }
            <li className='nav-item'>
              <NextLink
                href='/'
                passHref
                legacyBehavior
              >
                <span
                  className={ `nav-link ${ asPath === '/' ? 'active' : '' }` }
                >
                  Item
                </span>
              </NextLink>
            </li>
            { /* List Item */ }
            { /* List Item */ }
            <li className='nav-item'>
              <NextLink
                href='/'
                passHref
                legacyBehavior
              >
                <span
                  className={ `nav-link ${ asPath === '/' ? 'active' : '' }` }
                >
                  Item
                </span>
              </NextLink>
            </li>
            { /* List Item */ }
          </ul>
        </div>
      </div>
    </nav>
  );
}
