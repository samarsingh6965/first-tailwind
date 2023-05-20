import { useState } from 'react';
import './App.css';



function App() {

  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Phone, setPhone] = useState('')
  const [Login, setLogin] = useState(false)
  const [Msg, setMsg] = useState('')
  const [Status, setStatus] = useState()
  const Info = [
    {
      name: Name,
      email: Email,
      phone: Phone
    }
  ]
  const getData = () => {
    if (Name.length === 0) {
      setStatus(200)
      setMsg('Enter Name')
    } else if (Email.length === 0) {
      setStatus(300)
      setMsg('Enter Email')
    } else if (Phone.length === 0) {
      setStatus(400)
      setMsg('Enter Phone')
    } else {
      setStatus(500)
    }
    setLogin(true)
  }

  return (
    <>
      <div className="w-full h-[100vh] border flex items-center flex-col">
        <div className="w-[500px] h-[280px] border flex flex-col items-center py-4 mt-4 relative">
          <input type="text" placeholder='Name' onChange={(n) => { setName(n.target.value) }} className='w-[450px] h-[40px] border outline-none ps-2 my-3' />
          {Login === true && <p className={`${Status === 200 ? "absolute text-[17px] text-red-600 left-6 top-16" : "hidden"}`}> {Msg}</p>}
          <input type="text" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} className='w-[450px] h-[40px] border outline-none ps-2 my-3' />
          {Login === true && <p className={` ${Status === 300 ? "absolute text-[17px] text-red-600 left-6 top-[7.9rem]" : "hidden"}`}> {Msg}</p>}
          <input type="text" placeholder='Phone' onChange={(p) => { setPhone(p.target.value) }} className='w-[450px] h-[40px] border outline-none ps-2 my-3' />
          {Login === true && <p className={` ${Status === 400 ? "absolute text-[17px] text-red-600 left-6 top-[11.6rem]" : "hidden"}`}> {Msg}</p>}
          <button onClick={getData} className='w-[450px] h-[40px] border bg-blue-800 text-white border-l text-lg rounded-md my-3' >Save</button>
        </div>
        {Login === true && <div className='w-[500px] h-[250px] border py-4 mt-4'>
          <p className={`${Status === 500 ? "h-[50px] leading-[50px] text-white text-3xl px-4 font-bold bg-green-600" : "hidden"}`}>Success</p>
          <p className={`${Status === 500 ? "text-2xl px-4 font-bold font mt-10" : "hidden"}`}> Name : {Name}</p>
          <p className={`${Status === 500 ? "text-2xl px-4 font-bold font" : "hidden"}`}> Email : {Email}</p>
          <p className={`${Status === 500 ? "text-2xl px-4 font-bold font" : "hidden"}`}> Phone : {Phone}</p>
        </div>}
      </div>
    </>
  );
};

export default App;
