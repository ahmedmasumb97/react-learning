import { useState } from 'react'
import './App.css'
import BioDataTwo from './component/biodata2'
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

const handleClick = () => {

  setCount(count+1)
 
}


 

  return (

    

   

      <div>

        <div>
          <h1 style={{ backgroundColor:"red",color:'white',padding:'10px', width:"100px",textAlign:'center',borderRadius:'10px',boxShadow:'2px 3px 2px 2px blue',margin:'10px auto'}}>{count}</h1>
          <button type='button' style={{ padding:'10px',borderRadius:'10px',margin:'10px auto',display:'block' , backgroundColor:'blue',color:'white'}} onClick={handleClick}>Increment</button>
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

        <section>
          <nativeData/>
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
