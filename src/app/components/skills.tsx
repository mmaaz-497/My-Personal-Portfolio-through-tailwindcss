import React from 'react'

const Skills = () => {
  return (
    <div className="pt-32 text-center text-[50px]">
    <div>
      <h1 className="text-blue-300">My Skills</h1>
    </div>
     <div className="ml-[150px] pt-32 text-2xl px-10">
       <ul className="list-disc pl-5">
          <li className="pb-4"><strong>Front-End Development</strong> Proficient in <strong>HTML</strong> <strong>CSS</strong> and <strong>JavaScript</strong> with expertise in modern frameworks like <strong>Reactjs</strong> and <strong>Nextjs</strong> to create responsive and userfriendly interfaces</li>
          <li className="pb-4"><strong>Back-End Development</strong> Skilled in building robust server-side applications using Node.js Expressjs and working with APIs and databases like MongoDB and MySQL
          </li>
          <li className="pb-4"><strong>Responsive Design</strong> Strong understanding of creating mobilefirst crossbrowser compatible websites using tools like Bootstrap and Tailwind CSS
          </li>
          <li  className="pb-4"><strong>Version Control</strong> Experienced with Git and GitHub for collaborative development and efficient code management</li>
       
          <li  className="pb-4"><strong>Problem Solving</strong> Adept at troubleshooting debugging and optimizing code for better performance and usability
          </li>
          <li  className="pb-4"><strong>Continuous Learning</strong> Enthusiastic about staying updated with the latest web technologies and best practices to enhance development skills</li>
         </ul>
     </div>
 </div>
  );
}

export default Skills
