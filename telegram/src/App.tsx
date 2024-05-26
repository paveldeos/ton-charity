import { useState } from 'react'
import reactLogo from './assets/react.svg'
import twaLogo from './assets/tapps.png'
import viteLogo from '/vite.svg'
import './App.css'

import WebApp from '@twa-dev/sdk'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import Header from './components/header/header'
import ProfileStats from './components/profileStats/profileStats'
import SupportList from './components/supportList/supportList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TonConnectUIProvider manifestUrl="https://localhost:5173/tonconnect-manifest.json">
      <Header />
      <ProfileStats />
      <SupportList />
    </TonConnectUIProvider>
  )
}

export default App
