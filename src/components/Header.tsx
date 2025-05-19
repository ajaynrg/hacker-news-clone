import { LiaYCombinator } from "react-icons/lia";
import { IoMenu } from "react-icons/io5";
import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
export function Header() {
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setToggle(!toggle);
    }

    return (
        <header className="flex flex-col md:flex-row sticky top-0 w-full bg-gray-100 py-2 mx-auto justify-between">
            <div className="flex justify-between">
                <div className="flex gap-x-1 ml-[1rem] items-center"
                     onClick={()=> {navigate("/")}}>
                    <LiaYCombinator className="w-[2rem] h-[2rem]"/>
                    <span className="text-black font-bold text-xl md:text-lg">
                        Hacker News
                    </span>
                </div>
                <div className="md:hidden mr-[1rem] mt-1">
                    <button onClick={() => {
                        toggleMenu()
                    }}>
                        <IoMenu className="w-8 h-7"/>
                    </button>
                </div>
            </div>
            <nav className={`flex flex-col justify-start md:gap-2 md:mr-[1rem] md:block md:justify-between md:flex-row ${!toggle? 'hidden' : ''}`}>
                <div className="flex flex-col gap-y-2 items-center text-black ml-[2rem] md:flex-row md:gap-x-5">
                    <NavLink to="/new">New</NavLink>
                    <NavLink to="/threads">Threads</NavLink>
                    <NavLink to="/past">Past</NavLink>
                    <NavLink to="/comments">Comments</NavLink>
                    <NavLink to="/ask">Ask</NavLink>
                    <NavLink to="/show">Show</NavLink>
                    <NavLink to="/jobs">Jobs</NavLink>
                    <NavLink to="/submit">Submit</NavLink>
                </div>
            </nav>
        </header>
    )
}