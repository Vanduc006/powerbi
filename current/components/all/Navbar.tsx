import { Button } from "@/components/ui/button"
import { FaBars } from "react-icons/fa6";
import { useState } from 'react'
import { Link } from "react-router-dom";
// import { BellRing, Check } from "lucide-react"
 


const Navbar = () => {
  let [open,setOpen]=useState(false);
return (
  <main className=" text-black">
    <div className="flex justify-between items-center md:p-3 text-xl p-5 bg-white">
      <div>
        <span className="font-bold ml-5">IMASIS</span>
      </div>


        <ul className={`list-none items-center gap-5 md:flex md:static md:z-auto md:pl-0 pl-9 pb-9 pr-9 absolute md:w-auto left-0 w-full md:bg-inherit bg-slate-100 md:p-0 md:m-0 md:border-none ${open ? 'top-20':'hidden'} md:rounded-none rounded-b-xl`}>
          <li className="md:p-0 md:m-0 mt-5 hover:text-slate-500 cursor-pointer">Tạo ảnh</li>
          <li className="md:p-0 md:m-0 mt-5 hover:text-slate-500 cursor-pointer">Khám phá</li>
          <li className="md:p-0 md:m-0 mt-5 hover:text-slate-500 cursor-pointer">Nhiều hơn</li>
          <li className="md:p-0 md:m-0 mt-5 hover:text-slate-500 cursor-pointer">Tài khoản</li>
          <Button variant="outline" className="md:m-0 mt-5 border-black">
            <Link to="sign-in">Đăng nhập</Link>
          </Button>

        </ul>

      <div onClick={()=>setOpen(!open)} className="md:hidden flex ">
        <Button variant="outline"><FaBars/></Button>
      </div>


    </div>


  </main>
    
)
}

export default Navbar