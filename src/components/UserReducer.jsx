import React from 'react';
import { useReducer } from 'react';

function usersReducer(state, action){
    const tempState = {...state};
    switch (action.type) {
        case 'add':
            return {
                ...tempState, [action.property] : action.value
              
            };

         case 'remove':
         delete tempState[action.key]
         return tempState

          
           /*  case 'edit':
            return state.map((i) => i === action.item ?
            action.newItem : i);  */

            default:
            return tempState;
    }
}


const UserReducer = () => {

    const [user, dispatchUsers] = useReducer(usersReducer, {
        nom : 'john',
        email : 'john@lebocal.academy'
    });

    const addPropoerty = (e) =>{
        e.preventDefault();
        dispatchUsers({
            type : 'add',
            property : e.target.property.value,
            value : e.target.value.value
        })
    }

    const removeProperty = (key) =>{

        dispatchUsers({
            type : 'remove',
            key,
    
        })
    }

    return (
        <div>
            <h1> USER </h1>

            <form onSubmit={addPropoerty}>
                <input type="text" name='property'/>
                <input type="text" name='value'/>
                <button> Valider</button>
            </form>

            {Object.keys(user).map(key => {
                return <p> {key} : {user[key]} <span onClick={() =>removeProperty(key)}>X</span> </p>
            })}
        </div>
    );
};

export default UserReducer;