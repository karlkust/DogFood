import React from 'react';
import Cards from '../components/Cards/Cards.jsx';
import SearchInfo from '../components/SearchInfo/SearchInfo.jsx';

const Page = (props) => {
    return(
        <div>
            <h2>
                {props.name}
            </h2>
            <SearchInfo text={props.searchText} cnt={props.cnt} />
            <Cards goods={props.goods} />
        </div>
    )
}

export default Page;
