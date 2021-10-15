import React from 'react'
import './Links.css'
const Links = () => {
    return (
    <>
       <div className="c">
           <div className="left_Side">
               <div className="profileText">
                   <div className="imgBx">
                   
                    </div>
                       <h2>Kamal Malik<br></br><span>Web Developer</span></h2>
                       
                 </div>
                 <div className="contactInfo">
                     <h3 className="title">Contact Info</h3>
                     <ul>
                        <li>
                           <span className="icon"><i class="fa fa-phone" aria-hidden="true"></i></span>
                           <span className="text">8570942082</span>
                        </li>
                        <li>
                           <span className="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                           <span className="text">malik.kamal1631@gmail.co</span>
                       </li>
                       <li>
                           <span className="icon"><i class="fa fa-globe" aria-hidden="true"></i></span>
                           <span className="text">www.mywebsite.com</span>
                       </li>
                        <li>
                           <span className="icon"><i class="fa fa-linkedin" aria-hidden="true"></i></span>
                           <span className="text">www.linkedin.com/me</span>
                        </li>
                        <li>
                            <span className="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                            <span className="text">Haryana, Sonipat, India</span>
                        </li>
                     </ul>
                    </div>
                    <div class="contactInfo education">
                <h3 class="title">Education</h3>
                <ul>
                    <li>
                        <h5>2019 - 2023</h5>
                        <h4>Bachelor Degree in Computer Science</h4>
                        <h4>Kurukshetra University</h4>
                    </li>
                    <li>
                        <h5>2016 - 2017</h5>
                        <h4>Matriculation</h4>
                        <h4>Rishikul Vidhyapeeth</h4>
                    </li>
                    </ul>
            </div>
            <div class="contactInfo language">
                <h3 class="title">Languages</h3>
                <ul>
                    <li>
                        <span class="text">English </span>
                        <span class="percent">
                            - 85%
                        </span>
                    </li>
                    <li>
                        <span class="text">Haryanvi </span>
                        <span class="percent">
                             - 90%
                        </span>
                    </li>
                    <li>
                        <span class="text">Hindi </span>
                        <span class="percent">
                            - 75%
                         </span>
                    </li>
                    </ul>
                    </div>
             </div>
             <div class="right_Side">
            <div class="about">
            <img src="asset/img.jpg"></img>
                <h2 class="title2">Profile</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore facere, error modi rerum vero tempore voluptatem fugit reprehenderit similique quaerat officiis, culpa laboriosam suscipit repudiandae necessitatibus. Assumenda suscipit distinctio incidunt.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus, molestiae cumque voluptatem officia id at illum, error impedit molestias necessitatibus quis eaque reprehenderit? Ducimus odit quaerat sapiente eum corrupti veniam consequatur vel. Recusandae.</p>
            </div>
            <div class="about">
                <h2 class="title2">Experience</h2>
                <div class="box">
                    <div class="year_company">
                        <h5>2026 - Present</h5>
                        <h5>XYZ</h5>
                    </div>
                    <div class="text">
                        <h4>Senior Frontend Developer</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio adipisci, at alias a, maiores esse cumque obcaecati cupiditate repellat tempore architecto eaque aliquam nam? Pariatur numquam fugit a provident adipisci.</p>
                    </div>
                </div>
                <div class="box">
                    <div class="year_company">
                        <h5>2024 - 2025</h5>
                        <h5>XYZ</h5>
                    </div>
                    <div class="text">
                        <h4>Frontend Developer</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio adipisci, at alias a, maiores esse cumque obcaecati cupiditate repellat tempore architecto eaque aliquam nam? Pariatur numquam fugit a provident adipisci.</p>
                    </div>
                </div>
                <div class="box">
                    <div class="year_company">
                        <h5>2023 - 2024</h5>
                        <h5>XYZ</h5>
                    </div>
                    <div class="text">
                        <h4>junior Frontend Developer</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio adipisci, at alias a, maiores esse cumque obcaecati cupiditate repellat tempore architecto eaque aliquam nam? Pariatur numquam fugit a provident adipisci.</p>
                    </div>
                </div>
            </div>
            <div class="about skills">
              <h2 class="title2">Professional skills</h2>
              <div class="box">
                  <h4>Html</h4>
                  <div class="percent">
                      <div className="d">
                      </div>
                  </div>
                  </div>
              <div class="box">
                <h4>CSS</h4>
                <div class="percent">
                    <div className="s">
                    </div>
                </div>
            </div>
            <div class="box">
                <h4>Python</h4>
                <div class="percent">
                    <div className="f">
                    </div>
                </div>
            </div>
            <div class="box">
                <h4>Java</h4>
                <div class="percent">
                    <div className="j"></div>
                </div>
            </div>
            </div>
        </div>
        </div>
      </> 

    )
}

export default Links
