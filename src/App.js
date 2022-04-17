import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import api from './Api.js';
// import data from './data.json';
import Cart from './pages/Cart.jsx'
import Catalog from './pages/Catalog.jsx'
import Contacts from './pages/Contacts.jsx'
import Favorites from './pages/Favorites.jsx'
import Main from './pages/Main.jsx'
import Product from './pages/Product.jsx'
import Profile from './pages/Profile.jsx'
import {Routes, Route} from 'react-router-dom';
// import Button from './components/Button/Button.jsx';
// import FormInput from './components/FormInput/FormInput.jsx';
import Modal from './components/Modal/Modal.jsx';

function App () {

        const [store, updateStore] = useState([]);
        const [searchText, setSearch] = useState('');
        const [data, setData] = useState([]);
        const [goods, setGoods] = useState(data);
        const [cnt, setSearchCnt] = useState(0);
        const [modalActivity, setModalActivity] = useState(false);

        const search = val => {
            console.log('App', val);
            setSearch(val);
            const newCards = data.filter(el => el.name.toLowerCase().includes(val.toLowerCase()));
            setGoods(newCards);
            setSearchCnt(newCards.length);
        }

        useEffect(() => {
            api.getProductList().then(ans => {
                console.log(ans[0]);
                setData(ans.products);
                setGoods(ans.products);
            });
        }, []);

    return (
        <>
            <Header searchText={searchText} 
            appHandler={search}
            modalActivity={modalActivity}
            setModalActivity={setModalActivity}
            store={store}
            />
                <main>
                    <Routes>
                        <Route path='/cart' element={<Cart name='Корзина' />} />
                            
                        <Route path='/catalog' element={<Catalog name='Каталог' searchText={searchText} cnt={cnt} goods={goods} />} />
                            
                        <Route path='/contacts' element={<Contacts name='Контакты' />} />
                            
                        <Route path='/favorites' element={<Favorites name='Избранное' />} />
                            
                        <Route path='/main' element={<Main name='Главная' />} />
                            
                        <Route path='/product/:id' element={<Product store={store} updateStore={updateStore} />} />
                            
                        <Route path='/profile' element={<Profile name='Личный кабинет' />} />
                    </Routes>
                </main>
            <Footer />
            <Modal 
            active={modalActivity} 
            changeActive={setModalActivity} />
        </>
    )
}

export default App;
