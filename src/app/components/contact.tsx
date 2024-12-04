
import React from "react"

const Contact = () => {
    return(
      <div className="pt-32 text-center ">
          <div>
            <h1 className="text-blue-300 text-[50px]">Contact Us</h1>
          </div>
          <div className="ml-[150px] pt-16 text-2xl px-10">
            <p>Id love to hear from you Whether you are interested in working together, asking questions or just saying hello feel free to reach out. I will get back to you as soon as possible</p>
          </div>
          <div className="flex justify-evenly pt-4">
          <h1><strong>Email:</strong>  mmaazjatt497@gmail.com</h1>
          <h1><strong>Phone:</strong>  0348-8859462</h1>
          </div>
          <div className="flex flex-col gap-1 ml-52 mt-5">
            <label className="text-left" htmlFor="name">Name</label>
            <input type="text" className="h-[40px] w-[500px] bg-transparent border border-blue-500" id="name"/>
          </div>
          <div className="flex flex-col gap-1 ml-52 mt-5">
            <label className="text-left" htmlFor="email">Email</label>
            <input type="text" className="h-[40px] w-[500px] bg-transparent border border-blue-500" id="email"/>
          </div>
          <div className="flex flex-col gap-1 ml-52 mt-5">
            <label className="text-left" htmlFor="message">Message</label>
            <input type="text" className="h-[100px] w-[500px] bg-transparent border border-blue-500" id="message"/>
          </div>
          <button className="flex flex-col items-center gap-1 ml-52 mt-5 w-[100px] h-[30px] border rounded-lg font-bold bg-blue-500 ">Send</button> 
      </div>
    );
}
export default Contact