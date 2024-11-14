import './App.css'
import BioDataTwo from './component/biodata2'
function App() {

  function Item({name,isPacked}){

    const isCheckMark = isPacked? 'ok' : null

    return (
      // <li>{name} {isPacked? "ok":null}</li>
      <li>{name} {isCheckMark}</li>
    )

  }

 

  return (
   

      <div>

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
