import React from 'react'
import PropTypes from "prop-types"

function Person(props) {
  return (
    <div>
        <h4>Person name is {props.name}</h4>
        <h4>{props.name} email is {props.email}</h4>
        <h3>His age is {props.age} and {props.isMarried ? "is" :"is Not"} Married and his friends are</h3>
        {props.friends.map((friend) => (
            <h5>{friend}</h5>
        ))}
    </div>
  )
}

// dont need to use Proptypes cause we will use TypeScript
// Person.PropTypes = {
//     name: PropTypes.string,
//     email: PropTypes.string,
//     age: PropTypes.number,
//     isMarried: PropTypes.bool,
//     friends: PropTypes.arrayOf(PropTypes.string)
// };
export default Person