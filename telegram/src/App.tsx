import './App.css'

import WebApp from '@twa-dev/sdk'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import Header from './components/header/header'
import ProfileStats from './components/profileStats/profileStats'
import SupportList from './components/supportList/supportList'
import About from './components/about/about'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './components/mainPage/mainPage'

function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://localhost:5173/tonconnect-manifest.json">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/donate" element={<ProfileStats />} />
        </Routes>
      </Router>
    </TonConnectUIProvider>
  )
}

export default App
