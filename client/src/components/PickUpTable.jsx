import React from 'react';

function Search(props){
  console.log(props.keyWord)
    return(

      <div>
       Activity Search   <input name='search'   onChange={props.handleInputChange} value={props.keyWord} />
      </div>

      
    )
}

export default Search;