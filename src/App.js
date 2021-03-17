import { ThemeProvider } from 'styled-components'

import './App.css'
import theme from './constant/theme'
import Pages from './pages'

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Pages />
      </Provider>
    </ThemeProvider>
  )
}

export default App
