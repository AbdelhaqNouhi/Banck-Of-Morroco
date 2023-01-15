import React from 'react'
import Select from "react-select";
import { Link, NavLink } from "react-router-dom"; 
import { useState, useRef } from "react";

const SignUp = () => {

    // const options = [
    //     { value: 'Agadir', label: 'Agadir' },
    //     { value: 'Casablanca', label: 'Casablanca' },
    //     { value: 'Fes', label: 'Fes' },
    //     { value: 'Marrakech', label: 'Marrakech' },
    //     { value: 'Rabat', label: 'Rabat' },
    //     { value: 'Tanger', label: 'Tanger' },
    //     { value: 'Tetouan', label: 'Tetouan' },
    //     { value: 'Oujda', label: 'Oujda' },
    //     { value: 'Kenitra', label: 'Kenitra' },
    //     { value: 'Safi', label: 'Safi' },
    //     { value: 'Meknes', label: 'Meknes' },
    //     { value: 'El Jadida', label: 'El Jadida' },
    //     { value: 'Nador', label: 'Nador' },
    //     { value: 'Khouribga', label: 'Khouribga' },
    //     { value: 'Taza', label: 'Taza' },
    // ];

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [cin, setCin] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const Register = async (e) => {
        e.preventDefault();
        const register =  { first_name, last_name, cin, phone, email, password };

        await fetch("http://localhost:3000/Api/RegisterUser", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(register)
        })
        .then((res) => res.json())
        .then((data) => {
            if (data) {
                console.log(data);
                // alert("You are registered successfully");
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <div className=" flex justify-center items-center m-">
                <div className="md:w-3/4 w-screen md:px-16 flex rounded-2xl shadow-lg max-w-3/1 items-center p-4">
                    <div className="md:w-4/5 w-screen px-16">
                        <h2 className="font-bold text-2xl text-blue-500">Sign Up!</h2>
                        <p className="text-sm mt-4">
                            if you already a member, easily log in
                        </p>
                        <form onSubmit={ Register } className="flex flex-col gap-2">
                            <div className='flex gap-8 mt-8'>
                                <input 
                                    type="text"
                                    name="first_name"
                                    placeholder="First Name"
                                    className="p-2 rounded-xl border w-1/2"
                                    value={first_name}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <input 
                                    type="text"
                                    name="last_name"
                                    placeholder="Last Name"
                                    className="p-2 rounded-xl border w-1/2"
                                    value={last_name}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className='flex gap-8'>
                                <input
                                    type="text"
                                    name="cin"
                                    placeholder="CIN"
                                    className="p-2 mt-8 rounded-xl border w-1/2"
                                    value={cin}
                                    onChange={(e) => setCin(e.target.value)}
                                />
                                <input
                                    type="phone"
                                    name="phone"
                                    placeholder="Phone"
                                    className="p-2 mt-8 rounded-xl border w-1/2"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="E-mail"
                                    className="w-full p-2 mt-8 rounded-xl border"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="w-full p-2 mt-8 rounded-xl border"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {/* <div className='mt-8 flex flex-col gap-4'>
                                <label htmlFor="">Agency Selection*</label>
                                <Select 
                                    className="w-full rounded-xl"
                                    options={options}
                                    defaultOptions={options}
                                    isClearable={true}
                                    isSearchable={true}
                                    placeholder="Select Agency"
                                />
                            </div> */}

                            <button className="hover:scale-105 duration-300 bg-blue-500 text-white rounded-md py-2 mt-4">
                                Validate
                            </button>
                        </form>
                        <p className="mt-5 text-xs border-b border-gray-400 py-4"></p>
                        <div className="mt-3 text-xs flex justify-between items-center">
                            <p >Go To..</p>
                            <Link to="/SignIn"><button className="hover:scale-105 duration-300 py-2 px-5 bg-white hover:text-black border rounded-xl"> Login </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp