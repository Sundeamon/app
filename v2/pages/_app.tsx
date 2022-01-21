import type { AppProps } from 'next/app'
import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet'
import { ToastContainer } from 'react-toastify'
// without it fontawesome doesnt work
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/globals.scss'

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Helmet>
      <title>Decensored</title>
      <meta name='description' content='Decensored' />
      <link rel='icon' href='/favicon/favicon.ico' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicon/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon/favicon-16x16.png'
      />
      <link rel='manifest' href='/favicon/site.webmanifest' />
      <link
        rel='mask-icon'
        href='/favicon/safari-pinned-tab.svg'
        color='#5bbad5'
      />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff' />
      <body
        className='font-sans bg-slate-100 dark:bg-black
        text-gray-900 dark:text-gray-500'
      />
    </Helmet>
    <Component {...pageProps} />
    <ToastContainer />
  </>
)

export default MyApp
