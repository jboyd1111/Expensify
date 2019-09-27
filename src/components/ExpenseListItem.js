// Export a statelwess functional component
// description, amount, createdAt

import React from 'react';
import { Link  } from 'react-router-dom';

const RemoveButton = ({id} = {}) =>{
console.log("I am in RemoveButton "+ {id});
};

const ExpenseListItem = ({ id, description,amount,createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3> {description}</h3>
        </Link>
        <p>{id}</p>
        <p>{amount} - {createdAt}</p>
               
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters:state.filters
    };
};

// export default ExpenseListItem; // Original
export default ExpenseListItem;