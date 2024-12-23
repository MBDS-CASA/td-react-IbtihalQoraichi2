import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './assets/data.json';

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
function getRandomItem(data) {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];

}
function DisplayItem({ item }) {
    return (
        <div>
            <p>ID unique : {item.unique_id}</p>
            <p>Cours : {item.course}</p>
            <p>Élève : {item.student.firstname} {item.student.lastname} ({item.student.id})</p>
            <p>Date : {item.date}</p>
            <p>Note : {item.grade}</p>
        </div>
    );
}
function App() {
    const [count, setCount] = useState(0)
    const randomCourse = getRandomItem(data);
    const menuItems = [
        { id: 1, text: 'Notes', alertText: 'Vous avez cliqué sur Notes' },
        { id: 2, text: 'Etudiants', alertText: 'Vous avez cliqué sur Etudiants' },
        { id: 3, text: 'Matières', alertText: 'Vous avez cliqué sur Matières' },
        { id: 4, text: 'A propos', alertText: 'Vous avez cliqué sur A propos' }
    ];
    const handleClick = (text) => {
        alert(text);
    };
    return (
        <div>
            <nav>
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.id} onClick={() => handleClick(item.alertText)}>
                            {item.text}
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                <Header name="React" />
                <a href="https://vite.dev/" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev/" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <MainContent />
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
                <DisplayItem item={randomCourse} />
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <Footer />
        </div>
    );
}

export default App
