// React
import { Fragment, useEffect, useState } from 'react';
// NextJS
import Head from 'next/head';
// Components
import {
  Footer,
  LoadingPage,
  Navbar
} from '@/ui/components';


export const MainLayout = ({
  // HOC Children
  children,
  // Meta Data
  pageTitle='',
  pageDesc='',
  pageKeywords='',
  pageSocialImage= '',
  pageUrl=''
}) => {
  const [ isLoading, setIsLoading ] = useState( true );

  useEffect( () => {
    loadingControl();
  }, [] );

  const loadingControl = () => {
    setTimeout( () => {
      setIsLoading( false );
    }, 500 );
  }

  return (
    <Fragment>
      <Head>
        <title>{ pageTitle }</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={ pageDesc } />
        <meta name='keywords' content={ pageKeywords } />
        <meta name='robots' content='index' />
        <meta name='language' content='es' />

        <meta property='og:title' content={ pageTitle } />
        <meta property='og:description' content={ pageDesc } />
        <meta property='og:image' content={ pageSocialImage } />
        <meta property='og:url' content={ pageUrl } />
      </Head>

      <Navbar /> 

      <main className='container mt-5'>
        {
          isLoading
            ? <LoadingPage />
            : <Fragment>{ children }</Fragment>
        }
      </main>

      <Footer />
    </Fragment>
  );
}
