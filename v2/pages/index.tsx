import type { NextPage } from 'next'
import React from 'react'
import { classNamesLib } from 'components/ClassNames/ClassNames'
import { MobileView } from 'react-device-detect'
import Header from 'components/Header/Header'
import Feed from 'components/Feed/Feed'
import AsideNavigation from 'components/Navigation/AsideNavigation'
import BottomNavigation from 'components/Navigation/BottomNavigation'

const Home: NextPage = () => (
  <>
    <Header />
    <div className={classNamesLib.bodyContainer}>
      <div className={classNamesLib.bodyContainerCol2}>
        <Feed />
      </div>
      <div className={classNamesLib.bodyContainerCol1}>
        <AsideNavigation />
      </div>
      <MobileView>
        <BottomNavigation />
      </MobileView>
    </div>
  </>
)

export default Home
