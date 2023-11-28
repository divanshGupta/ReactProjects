import "../style/MyHeading.css"
// import {Link} from "react-router-dom"

//component 1
function MyHeading(props) {
    // let random = 50
    
    const character = {
        name: "Aman Mashqoor",
        age: "24",
        course: "MCA",
        university: "BHU"
    }

    const userInput=()=>{
        let name = document.querySelector(".user_name").value
        let age = document.querySelector(".user_age").value
        let course = document.querySelector(".user_course").value
        let university = document.querySelector(".user_university").value

        document.querySelector(".pfordata").innerHTML = `My name is ${(name==="")?name="Aman Mashqoor":name}. My age is ${(age==="")?age="24":age}. I am currently studying ${(course==="")?course="MCA":course} in ${(university==="")?university="BHU":university}.`
        return {name, age, course, university}
    }
    
    return (
        <>
            <div className="myheading">
                <b><p className="pfordata">My name is {character.name}. My age is {character.age}. I am currently studying {character.course} in {character.university}.</p></b>
                <br></br>
                <br></br>

                <input className="user_name" type="text" style={{width: '2cm', marginLeft:1}} onChange={userInput} placeholder="Name"></input>
                <input className="user_age" type="number" style={{width: '2cm', marginLeft:1}} onChange={userInput} placeholder="Age"></input>
                <input className="user_course" type="text" style={{width: '2cm', marginLeft:1}} onChange={userInput} placeholder="Course"></input>
                <input className="user_university" type="text" style={{width: '2cm', marginLeft:1}} onChange={userInput} placeholder="University"></input>
                {/* <button onClick={userInput}>submit</button> */}
            </div>
        </>
    )
}

/* function charac(props){
    const character = {
        name: props.name,
        age: props.age,
        course: "MCA",
        university: "BHU"
    }

    return character
} */

const Card = (props) => {
    return (
        <>
            <div className="card mx-2 my-2" style={{width: '18rem'}}>
                {/* <img src='.//public/logo192.png' className="card-img-top" alt="..."/> */}
                    <div className="card-body">
                        <h5 className="card-title">{`${props.header}`}</h5>
                        <p className="card-text">{`${props.para}`}</p>
                        <Link to={`${props.link}`} className="btn btn-primary">{`${props.buttonTitle}`}</Link>
                    </div>
            </div>

            {/* <div className="card mx-2 my-2" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Route to Contact</h5>
                        <p className="card-text">Alternative route to Contact page.</p>
                        <Link to="/contact" className="btn btn-primary">Go to Contact</Link>
                    </div>
            </div> */}
        </>
    )
}


const MyHeadingSmall = () => <h1>MyHeadingSmall - 1</h1> //component 2
const MyHeadingSmall2 = () => <h1>MyHeadingSmall - 2</h1> //component 3
const MyHeadingSmall3 = () => <h1>MyHeadingSmall - 3</h1> //component 4

export default MyHeading

export {MyHeadingSmall, MyHeadingSmall2, MyHeadingSmall3, Card}