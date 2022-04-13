import React from 'react';
import './SearchInfo.css';

const SearchInfo = ({text, cnt}) => {
    return (
        text && <div className="searchInfo">
            По запросу <strong>{text}</strong> найдено {cnt} товаров
        </div>
    )
}

export default SearchInfo;
