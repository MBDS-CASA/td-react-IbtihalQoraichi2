import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import DataTable from "../src/component/DataTable.jsx";

function Header(props) {
    return (
        <header>
            <img src="https://emsi.ma/wp-content/uploads/2020/07/logo.png" alt="" title="logo" />
            <h1> My Header is {props.name}</h1>
            <h3>A la découverte des premières notions de React</h3>
        </header>
    );
}

function MainContent() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const day = currentTime.getDate();
    const month = currentTime.toLocaleString('default', { month: 'long' });
    const year = currentTime.getFullYear();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    return (
        <main>
            <p>Bonjour, on est le {day} {month} {year} et il est {hours}:{minutes}:{seconds}</p>
        </main>
    );
}


function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <h4> © {year} - Ibtihal Qoraichi Tous droits réservés </h4>
        </footer>
    );
}

// Composants pour chaque item du menu
function Notes() {
    return <h2>Notes</h2>;
}

function Etudiants() {
    return <h2>Étudiants</h2>;
}

function Matieres() {
    return <h2>Matières</h2>;
}

function APropos() {
    return <h2>À propos</h2>;
}

function App() {
    const [activeItem, setActiveItem] = useState(null);

    const menuItems = [
        { id: 1, text: 'Notes', component: <Notes /> },
        { id: 2, text: 'Étudiants', component: <Etudiants /> },
        { id: 3, text: 'Matières', component: <Matieres /> },
        { id: 4, text: 'À propos', component: <APropos /> },
    ];

    const handleMenuClick = (id) => {
        setActiveItem(id);
    };

    return (
        <div>
            {/* Menu */}
            <nav>
                <ul>
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => handleMenuClick(item.id)}
                            className={activeItem === item.id ? 'active' : ''}
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Contenu dynamique */}
            <div>
                {activeItem
                    ? menuItems.find((item) => item.id === activeItem)?.component
                    : <h1>Veuillez sélectionner un élément du menu.</h1>}
            </div>

            {/* Header et contenu principal */}
            <Header name="React" />
            <MainContent />

            {/* Liens externes */}
            <div>
                <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <DataTable/>
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
