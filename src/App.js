import React from "react"
import { Provider } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { CheckoutPage } from "./pages/checkout-page/CheckoutPage"
import { NavigationOutlet } from "./components/navigation-outlet/NavigationOutlet"
import { store } from "./store/store"
import { NoMatchPage } from "./pages/no-match-page/NoMatchPage"
import { LandingPage } from "./pages/landing-page/LandingPage"

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Routes>
          <Route element={<NavigationOutlet />} path='/'>
            <Route index element={<LandingPage />} />
            <Route element={<CheckoutPage />} path='checkout' />
            <Route element={<NoMatchPage />} path='*' />
          </Route>
        </Routes>
      </div>
    </Provider>
  )
}

export default App
