import { useState } from 'react'
import './App.css'
import PasswordChecker from './presentation/password-checker'

function App() {
  const [count, setCount] = useState(0)

  return <PasswordChecker/>
}

export default App
