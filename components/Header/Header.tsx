import React, { FunctionComponent, useState } from 'react'
import Link from 'next/link'
import shallow from 'zustand/shallow'
import useStore from 'lib/store'
import { nodeIsUpAndRunning } from 'lib/storeUtils'
import SVGIcon from 'components/Icon/SVGIcon'
import UserPopover from 'components/Popover/UserPopover'
// import QueueControl from 'components/QueueControl/QueueControl'
import SettingsDialog from 'components/Dialog/SettingsDialog'
import { style } from 'styles/style'
import useTimeout from 'hooks/useTimeout.js'

const GRACEPERIOD = 1000 // time until showing an error message

const Header: FunctionComponent = () => {
  const [contract] = useStore((state) => [state.contract], shallow)

  const [openSettingsDialog, setOpenSettingsDialog] = useState(false)

  const [gracePeriodDone, setGracePeriodDone] = useState(false)
  useTimeout(() => setGracePeriodDone(true), GRACEPERIOD)

  // const setIsSignedUpWithToast = (): void => {
  //   setIsSignedUp(false)
  //   // https://fkhadra.github.io/react-toastify/introduction/
  //   toast.warning(isSignedUp ? 'Signing out...' : 'Signing in...', {})
  // }

  return (
    <div className={style.headerWrapper}>
      {/* <QueueControl /> */}

      {!nodeIsUpAndRunning(contract) && gracePeriodDone && (
        <>
          <button
            type='button'
            onClick={() => setOpenSettingsDialog(true)}
            className='absolute right-4 -bottom-1 translate-y-full'
          >
            <SVGIcon
              icon='faExclamationTriangle'
              className='animate-pulse text-red-500'
            />
          </button>
          <SettingsDialog
            showDialog={openSettingsDialog}
            onClose={() => setOpenSettingsDialog(false)}
          />
        </>
      )}

      <div className={style.headerInner}>
        <div id='logo'>
          <Link href='/' passHref>
            <div className='flex gap-2 items-center'>
              <img
                alt='Decensored Logo'
                src='/logo/signet.svg'
                className='h-[30px] -mt-1 xs:hidden'
              />
              <img
                alt='Decensored Logo'
                src='/logo/logotype_invert.svg'
                className='h-[20px] hidden xs:block'
              />
            </div>
          </Link>
        </div>
        <div id='header_nav_items' className='flex items-center'>
          <UserPopover />
        </div>
      </div>
    </div>
  )
}

export default Header
