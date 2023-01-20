import React, { useState, useReducer} from 'react';

const FormReducer = () => {


   /*  const [user, setUser] = useState({
        property: "",
        email: ""
    }); */

  
 const initialsUsers = [{
    property : '',
    value : '',
   
 }]


 const [users, dispatchUsers] = useReducer(usersReducer,initialsUsers);
 
 function usersReducer (state, action) {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                    [action.field] : action.payload
                }
            ];

            case 'remove':
            return state.filter((i) => i !== action.field);

            case 'edit':
            return state.map((i) => i === action.item ?
            action.newItem : i);
            default:
            return state;
    }
}

const handleTextChange = (e) =>{
    e.preventDefault();
    dispatchUsers({
        type : 'add',
        field : e.target.name,
        payload : e.target.value

    })

}
const handleDelete = () =>{
    dispatchUsers({
        type : 'remove',  
    })
}
const onSubmit = (e) =>{
    e.preventDefault();
    }

    return (
        <div>
            <h1> Le user</h1>
    
             <form action="" onSubmit={onSubmit}>
              
              <input type="text" placeholder='property'  name='property' 
                   value={users.property} 
                   onChange={(e) => handleTextChange(e)}/>
              <input type="text" placeholder='value' name='value'
                   value={users.value} 
                   onChange={(e) => handleTextChange(e)}/>

              <button> valider</button>
            </form> 

            <br />
            <br />


            <div> 
                Property : {users.property} <button onClick={handleDelete}> delete</button>
            </div>
            <br />
            <div> 
                Value : {users.value}<button> delete</button>
            </div>

            {
                
               /*  initialsUsers.map((item) =>{
                    <p> {item.property} : {item.value}</p>
                })  */
            }
           
     
         
        </div>
    );

}
export default FormReducer;