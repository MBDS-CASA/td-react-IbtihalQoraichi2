import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function Header ( props){
    return(
        <header>
            <img src="https://emsi.ma/wp-content/uploads/2020/07/logo.png" alt=""  title="logo"/>

            <h1> My Header is {props.name}</h1>
            <h3>A la découverte des premières notions de React</h3>
        </header>
    )
}
function MainContent() {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return (
        <main>
            <p>Bonjour, on est le {day} {month} {year} et il est {hours}:{minutes}:{seconds}</p>
        </main>
    )
}
function Footer ( ){
    const date = new Date();
    const year = date.getFullYear();
    return(

        <main>

            <h4> © {year} -Ibtihal Qoraichi Tous droits réservés </h4>

        </main>
    )}
function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
            <Header name="react"/>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
                <MainContent />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
          <Footer/>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
