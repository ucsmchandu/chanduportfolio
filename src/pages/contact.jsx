import React, { useState } from 'react'
import linkedin from '../assets/linkedinlogo.png'
import github from '../assets/githublogo.png'
import mail from '../assets/mail.png'
const Contact = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [msg,setMsg]=useState('');
  const [isNameValid,setIsNameValid]=useState(true);
  const [isEmailValid,setIsEmailValid]=useState(true);
  const [isMsgValid,setIsMsgValid]=useState(true);
  const onSubmit = async (event) => {
    event.preventDefault();
    // if(!isNameValid || !isEmailValid ||!isMsgValid){
    //   alert("Enter valid data!");
    //   return;
    // }
    const formData = new FormData(event.target);

    formData.append("access_key", "96a572e0-ee83-4336-98f3-25058c51d2b9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      //console.log("Success", res);
      alert("Details sent successfully!");
      setName("");
      setEmail("");
      setMsg("");
    }
  };
  
  const handleNameChange=(e)=>{
    setName(e.target.value);
    setIsNameValid(e.target.value.trim()!=='');
  };
  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(e.target.value));
  };
  const handleMsg=(e)=>{
    setMsg(e.target.value);
    setIsMsgValid(e.target.value!=='');
  };

  return (
    <form onSubmit={onSubmit} id="contact" className=''>

      <div className='flex justify-center p-6 text-4xl font-extrabold'>CONTACT</div>
     
      <div className='text-blue-500'>
        <div className='flex flex-col items-center space-y-3 p-4 text-3xl font-serif'>
          <h1>contact me</h1>
        </div>
        <div className='flex justify-center p-4 relative -top-3 space-x-6'>
         <a href="mailto:uchandrasaimahesh@gmail.com"> <img src={mail} className='h-10' /></a>
         <a href="https://www.linkedin.com/in/chandrasaimahesh-uppu-8aa3802b7" target="_blank" className='cursor-pointer'> <img src={linkedin} className='h-10'/></a>
          <a href="https://github.com/ucsmchandu" target="_blank" className='cursor-pointer'><img src={github} className='h-10' /></a>
        </div>

        <div className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 space-x-15 gap-8  p-6  '>
          <input name="name" type="text" value={name} onChange={handleNameChange} required placeholder='Name' className='border-b-2 border-blue-600 text-black text-md placeholder:text-gray-400 placeholder:text-lg outline-0  w-full'/>
          <input name="email" type="email" value={email} onChange={handleEmailChange} required placeholder='Email' className='border-b-2 border-blue-600 text-black text-md placeholder:text-gray-400 placeholder:text-lg outline-0 w-full'/>
        </div>
        </div>

        <div className='flex justify-center p-2 h-full'>
        <input name="message" type="text" value={msg} onChange={handleMsg} required placeholder='Message' className='border-b-2 border-blue-600 text-black text-lg placeholder:text-lg  placeholder:text-gray-400 outline-0 pt-10 w-96' />
        </div>

        <div className='flex justify-center p-6'>
          <button
          type="submit"
          className='border p-1 px-6 text-lg rounded-4xl cursor-pointer bg-blue-900 hover:bg-blue-700 text-white'>submit</button>
        </div>
      </div>
      
    </form>
  )
}

export default Contact