function BioDataTwo(obj){


    // controller or logical section for valina js
    console.log(obj)

    const containerStyle = {
        padding: "20px",
        backgroundColor: "#f0f0f0",
    };

    const headerStyle = {
        color: "#333",
        fontSize: "24px",
    };

    const buttonStyle = {
        marginRight: "10px",
        padding: "8px 16px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    };

    return (
        <div>

        <div className="bioDataOne" style={containerStyle}>
          <h1 style={headerStyle}>Name:{obj.name}</h1>
          <p style={headerStyle}>Age:{obj.age}</p>
          <p>City:{obj.city}</p>
          <p>Email:{obj.email}</p>
          <p>Phone:{obj.phone}</p>
          <button style={buttonStyle}>Edit</button>
          <button style={buttonStyle}>Delete</button>
          <button style={buttonStyle}>Send Email</button>
          <button style={buttonStyle}>Call</button>
          <button style={buttonStyle}>Share on Facebook</button>
          <button style={buttonStyle}>Share on Twitter</button>
          <h1>Skills</h1>
          <ul className="skill">
            {obj?.skills?.map( (skill) => {
                return <li key={skill}>{skill}</li>
            })
            }
          </ul>
 
          <h1>Education</h1>
          <ul className="education">
            { obj?.education?.map( (education)=>{
                return <li key={education}>{education}</li>
            })

            }
          </ul>
 
          <br/>
 
          <h1>Projects</h1>
          <ul className="project">
            { obj?.projects?.map( (project) =>{
               return <li key={project}>{project}</li>
            })

            }
          </ul>
 
          <h1>Work Experience</h1>
          <ul className="job">
            {obj?.jobs?.map( (job) =>{
               return <li key={job}>{job}</li>
            })}
          </ul>
 
          <footer className="footer">
            &copy; 2023 My Website. All rights reserved.
            <a href="https://example.com/terms-and-conditions">Terms and Conditions</a>
            <a href="https://example.com/privacy-policy">Privacy Policy</a>
            <a href="https://example.com/cookie-policy">Cookie Policy</a>
            <a href="https://example.com/contact-us">Contact Us</a>
            <a href="https://example.com/faq">FAQ</a>
            <a href="https://example.com/sitemap">Sitemap</a>
            <a href="https://example.com/careers">Careers</a>
             <a href="https://example.com/blog">Blog</a>
            <a href="https://example.com/about-us">About Us</a>
          </footer>
        </div>
       </div>
 
    )
}



export default BioDataTwo