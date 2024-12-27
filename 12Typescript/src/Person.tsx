import { useState } from "react";
// Way to define the shape of an object
interface props{
    name:string;
    email:string;
    post:string;
    age:number;
    isMarried: boolean;
    friends: string[];
    // you can make optional by adding ?
    // course?:string;
    course : Course;

}
// enum allows to have a set of datas
enum Course{
    BIM="BIM",
    BIT="BIT",
    BCA="BCA"
}
// to match the shape of props to person passes props do props:props
function Person(props:props) {
    const [course, setCourse] = useState<string>("")
    // const Author: string = "Binayak";
    // const name : any = "anynametype"
  return (
    <div>
        <h4>Person name is {props.name} and studies {props.course}</h4>
        <h4>{props.name} email is {props.email} and he is {props.post}</h4>
        <h3>His age is {props.age} and {props.isMarried ? "is" :"is Not"} Married and his friends are</h3>
        {props.friends.map((friend : string) => (
            <h5>{friend}</h5>
        ))}
    </div>
  )
}

export { Course, Person }