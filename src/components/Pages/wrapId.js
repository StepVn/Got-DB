import React from 'react';
import {useParams} from "react-router-dom";

import BooksItem from './booksItem';

const GetId = () => {
    

const { id } = useParams();
 
return (
    <div>
        <BooksItem bookId={id} />
    </div>
);
}

export default GetId;