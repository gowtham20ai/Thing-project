import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";



const schema = z.object({
    email: z.email({ message: 'Invalid email address' }),
    password: z.string().min(7, { message: 'Password must be at least 7 characters long And number all so special characters ' }),
});





const FormLogin = () => {
    // const { register, handleSubmit } = useForm(); this is first step
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm
        ({
            resolver: zodResolver(schema),
        });

    const handleSubmits = async (data) => { // anyname for function 
        try {
            console.log("Form submitted");
            console.log("Data:", data);
            reset(); // Reset the form after submission
            navigate("/"); // Navigate to home page after successful login
            console.log("User signed in successfully");
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.log("Error submitting form:", err);
        }
    }







    return (
        <>
            <div className=" cover w-screen h-screen bg-gray-900  absolute top-0 r-0 opacity-80 "  >
                <div className="flex h-screen justify-center items-center">

                    <form className=" w-[70%] h-[60%] flex flex-col bg-white  p-3 gap-2 md:flex md:flex-col md:gap-4 md:w-[50%] md:h-fit  lg:w-[40%] xl:w-[30%] mx-auto mt-10 md:justify-center  md:bg-white md:p-10 lg:rounded-lg md:shadow-2xl"
                        onSubmit={handleSubmit(handleSubmits)}                >
                        <h1 className=" text-lg font-semibold md:font-semibold md:text-xl ">Sign in to your account</h1>

                        <label htmlFor="email" className="text-lg font-semibold opacity-80"> Your Email</label>
                        <input type="email" id="email" className="p-1  border  border-black opacity-85 "{...register("email")} />
                        {errors.email?.message && <p className="text-sm">{errors.email?.message}</p>}

                        <label htmlFor="password" className="">Password</label>
                        <input type="password" id="pass" className="  p-1  border  border-black opacity-85"{...register("password")}

                        />
                        {errors.password?.message && <p className="w-[100%] text-sm" >{errors.password?.message}</p>}


                        {/* <div className="flex gap-2">
                            <input type="checkbox" />
                            <p>Remeber me </p>
                        </div> */}

                        <div className="mt-6 flex justify-center  ">
                            <button className="bg-blue-500 text-white    p-2  rounded-lg   hover:bg-blue-700  w-[90%] md:w-[90%] lg:w-[80%] "
                            >Sign In</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}


export default FormLogin;




