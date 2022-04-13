import React from 'react';
import './Footer.css'
import Logo from '../Logo'
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='container'>
            <div className="column">
                <Logo />
                <div>Copy</div>
            </div>

            <ul className="column">
                <li>
                    <Link to='/catalog'>Каталог</Link>
                </li>
                <li>
                    <Link to='/product'>Товары</Link>
                </li>
                <li>
                    <Link to='/contacts'>Контакты</Link>
                </li>
            </ul>

            <ul className="column">
                <li>Оплата и доставка</li>
                <li>Часто спрашивают</li>
                <li>Обратная связь</li>
                
            </ul>

            <div className="column">
                <div>Мы на связи</div>
                <div>dogfood.ru@gmail.com</div>
                <div>8 (999) 000-00-00</div>
                <ul className='soc'>
                    <li>soc</li>
                    <li>soc</li>
                    <li>soc</li>
                    <li>soc</li>
                    <li>soc</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
