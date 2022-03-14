import { Fragment } from 'react';
import Header from 'components/Header';
import "assets/styles/styles.scss";
import useTheme from 'hooks/useTheme';
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {

  const [darkTheme, setDarkTheme] = useTheme("dark-theme", "dark-theme")

  return ( 
    <Fragment>
      <Header darkTheme={darkTheme} toggleTheme={setDarkTheme}/>
      <Component {...pageProps} />
    </Fragment>
  )
}
