import React from 'react';

function Table(props) {
    console.log(props.activities)
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Activity</th>
                    <th scope="col">Park</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">City</th>
                </tr>
            </thead>
            <tbody>

                {activities.length > 0? activities.employees.map(activity=>{
                    return(
                        <tr>
                    {/* <th scope="row"><img src={activity.picture.thumbnail}/></th> */}
                    <td >{activity.name.first}</td>
                    <td>{activity.name.last}</td>
                    <td>{activity.email}</td>
                    <td>{activity.phone}</td>
                   
                </tr> 
                    )
                }) :(<tr>
                    <th scope="row">1</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                   
                </tr> )  }
               
                
            </tbody>
        </table>
    )

}

export default Table;