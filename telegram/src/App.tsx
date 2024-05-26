import './App.css'

import { TonConnectUIProvider } from '@tonconnect/ui-react'
import Header from './components/header/header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './components/mainPage/mainPage'
import DonationPage from './components/donationPage/donationPage'

function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://deos.cc/tonconnect-manifest.json">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/donate" element={<DonationPage />} />
        </Routes>
      </Router>
    </TonConnectUIProvider>
  )
}

export default App
