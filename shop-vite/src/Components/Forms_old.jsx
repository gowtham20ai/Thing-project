import { Form } from "react-router-dom";
import { useState } from "react";

const Forms_old = () => {

 const [email,setemail] = useState("");
 const [password,setpassword] = useState("");
  
    
       const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form submitted");
        console.log("Email:", email);
        console.log("Password:", password);
       };

        

    return (
        <>
            <div className="  w-full h-screen bg-gray-200  absolute top-0 opacity-85 "  >
                <div className="flex h-screen justify-center items-center">

                    <form className="flex flex-col gap-4 w-[30%] h-fit  mx-auto mt-10 justify-center   bg-white p-10 rounded-lg shadow-2xl">
                        <h1 className="font-semibold text-xl">Sign in to your account</h1>
                        <label htmlFor="email"> Your Email</label>
                        <input type="email" id="email" className="p-1  border  border-black opacity-85 "
                        onChange={(e) =>{
                            // console.log(e.target.value) 
                            setemail(e.target.value) //re-rendering the component with new value
                         }}
                         />
                        <p className="text-red-700 text-[16px] ">error message </p> 


                        <label htmlFor="password">Password</label>
                        <input type="password"  id="pass" className="p-1  border  border-black opacity-85"
                        onChange={(e) =>{
                            // console.log(e.target.value)
                         setpassword(e.target.value) //re-rendering the component with new value
                        }} />
                        <p className="text-red-700">error message </p> 

                        <div className="flex gap-2">
                            <input type="checkbox" />
                            <p>Remeber me </p>
                        </div>


                        <button className="bg-blue-500 text-white w-2xl h-fit p-2  rounded-lg"
                        onClick={handleSubmit}>Sign In</button>


                    </form>
                </div>
            </div>

        </>
    )

}







export default Forms_old;