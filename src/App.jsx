import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './index.css'


// import UseLocalStorage from './components/useLocalStorage'
import Tictactoe from './components/tictactoe/App'
import Context from './components/context/App'
import { ThemeContextProvider} from  './components/context/ThemeContextProvider'



function App() {

  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Tictactoe />
   {/*   <ThemeContextProvider>
        <Context />
      </ThemeContextProvider>*/}
    </div>
  )
}

export default App
