import { useEffect, useRef, useState } from 'react';
import './App.css';
import BioDataTwo from './component/biodata2';
import { moreTask, tasks } from './component/data/task';
import "./index.css"; // Import Tailwind CSS

function App() {

  function Item({name,isPacked}){

    // const isCheckMark = isPacked? 'ok' : null
    // logical or
    const user = name || 'Ahmed Masum'

    // nalish qualicing 

    let use1 = name ?? "Ahmed Masum"

    // both nalish qualicing and logical or use for default value

    return (
    
      // <li>{name} {isPacked? "ok":null}</li>
      // <li>{name} {isCheckMark}</li>
      <li>{name} {isPacked && 'ok'}</li>
    )

  }


  // let content;
  // if(!user) content = 'Guest';
  // if (user && isAdmin) content = 'Admin';


  const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];



  const person = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];

  const chemists = person.filter( (chemist) => chemist.profession === "chemist")



// useState function

const [count,setCount] = useState(0)
const [message,setMessage] = useState('This is default message')

const handleClick = () => {

  setCount((c) => { return c+1})
  setCount((c) => { return c+1})
  setCount((c) => c+1)
 
}

let [todos,setTodos] = useState([])

  const handleTodos = () => {
    setTodos(tasks)
  }

const handleMoreTodos = () => {
  let moreTodos = [...todos, ...moreTask]
  setTodos(moreTodos)
}

let editHandler = (id) => {
   console.log(id)    
   let copyTask = tasks.map(task => {
   let a = ({...task})
   if(a.id === id){
    return a
   }

   })
   console.log(copyTask)
  
  

}

// let [list,setList] = useState([])

// let set = function(){
//   setList(tasks)
// }

// set()


// fetch data

let [post,setPost] = useState([])

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then( (res) => res.json())
// .then( (data) => setPost(data))

// useEffect( () => {
//   const fetchData = async() => {
//     try{

//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await res.json()
//     setPost(data)

//     }
//     catch(error){

//       console.error("Error fetching posts:", error);

//     }
//   }

//   fetchData()
// },[])


useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
 .then( (res) => res.json())
 .then( (data) => setPost(data))
 .catch( (error) =>{console.log(error.message)})
 console.log('this is done')

},[])


let [add,addSet] = useState(0)

const addNumber = () => {
  addSet(add+1)
}

useEffect( () => {
  console.log('I am inside useEffect')

},[add])


const [plusBtn,plusSet] = useState(0)

const addPlus = () => {
  plusSet(plusBtn+1)
}
const ref = useRef(0)

const adRef = () => {
  ref.current += 1
  console.log(ref.current)
}

console.log('is calling')

const inputRef = useRef(null)
console.log(inputRef)
const [plus,setPlus1] = useState(0)
const addPlus1 = ()=> {
  setPlus1((value) => {return value+1;})
  if(inputRef.current){
    inputRef.current.style.width = '200px';
    inputRef.current.style.height = '35px';
    if(plus === 10){
      inputRef.current.style.backgroundColor ='red';
      inputRef.current.style.color = 'white';
      inputRef.current.style.cursor = 'pointer';
      inputRef.current.style.borderRadius = '5px';
      inputRef.current.style.fontSize = '18px';
    }
    inputRef.current.focus()
  }
}
useEffect( () => {
  inputRef.current.style.width = '200px';
  inputRef.current.style.height = '35px';
  inputRef.current.focus()
},[])
  return (


   

      <div>

    <h3>{plus}</h3>
    <input type="search" ref={inputRef} value={plus} placeholder='Enter value' />
    <button type='button' onClick={addPlus1}>click</button>

    <h2>use refecence</h2>
    <h3>Ref value: {ref.current}</h3>
    <h3>State value: {plusBtn}</h3>
    <button type='button' onClick={adRef}>Increase ref</button>
    <button type='button' onClick={addPlus}>Increase</button>

      <h1>add</h1>
      <h3>{add}</h3>
      <button type='button' onClick={addNumber}>Add</button>


        <div>
              <h1>Post Data</h1>
              <div className="cards-container">
             
               {post.map((post) => (

                  <div className="card" key={post.id}>
                   <div className="card-body">
                     <h3 className="card-title">{post.title}</h3>
                     <p className="card-text">{post.body}</p>
                     <a href="#" className="btn btn-primary">Go somewhere</a>
                   </div>
                    
                  </div>

                ))}
              
              </div>
            </div>
  
        

        <div>
          <h1 style={{ backgroundColor:"red",color:'white',padding:'10px', width:"100px",textAlign:'center',borderRadius:'10px',boxShadow:'2px 3px 2px 2px blue',margin:'10px auto'}}>{count}</h1>
          <button type='button' style={{ padding:'10px',borderRadius:'10px',margin:'10px auto',display:'block' , backgroundColor:'blue',color:'white'}} onClick={handleClick}>Increment</button>
        </div>

        <div>
          <h1>{message}</h1>
          <button type='button' onClick={() => setMessage('This is new message')}>Change Message</button>
        </div>

        <div>
         <ul>

         {todos.map( (todo) =>{
           return <li key={todo.id}>{todo?.title} {todo?.description} {todo?.status}
           
           
         <button type='button' onClick={() => 
          editHandler(todo.id)
         }>Edit</button>
           
           </li>
           
 
         })}

        
         </ul>
        <button type='button' onClick={handleTodos}>Load..</button>
        <button type='button' onClick={handleMoreTodos}>Load more...</button>
        
        </div>

        <div>
          <h1>List of people</h1>
          <ul>
            { people.map( (person,index) => {
             return <li key={index}>{person}</li>
            })}
          </ul>
        </div>
        


      <div>
        <h1>Person about</h1>
          <ul>
            { 
               person.map( (person) => {
                return <li key={person.id}>{person.name}</li>
               })
            }
          </ul>

          <h1>Chemist name</h1>
          <ul>
            {
              chemists.map( (chemist) => {
                return <li key={chemist.id}>{chemist.name}</li>
              })
            }
          </ul>
      </div>

        <section>
          <h1>Bio Data</h1>
          < ul>
          {/* function calling with giving agrument */}
            <Item isPacked={true} name='Space suit' />
            <Item isPacked={true} name='Hello I am ' />
            <Item isPacked={true} name='I donot wanna live' />
            <Item isPacked={false} name='kill myself quickly' />
          </ul>
        </section>

      
      
       <BioDataTwo
       
       name="Mohmmd Masum"
       age = {27}
       city="New York"
       email="johndoe@example.com"
       phone="123-456-7890"
       skills={["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"]}
       education={["Bachelor of Science in Computer Science", "University of Example", "2018"]}
       projects={["Project 1", "Project 2", "Project 3"]}
       jobs={["Job 1", "Job 2", "Job 3"]}

       
       />

       

      <br/>

      <BioDataTwo
       
       name="Hasan Embedded"
       age = {21}
       city="New York"
       email="johndoe@example.com"
       phone="123-456-7890"
       skills={["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"]}
       education={["Bachelor of Science in Computer Science", "University of Example", "2018"]}
       projects={["Project 1", "Project 2", "Project 3"]}
       jobs={["Job 1", "Job 2", "Job 3"]}

       
       />
      </div>



 

      


  )
}

export default App
