import {Header} from "../components/Header.tsx";
import {Outlet} from "react-router-dom";

export default function Root(){
    return (
        <div>
            <Header />
            <div className="mx-[1rem]">
                <Outlet/>
            </div>
        </div>
    )
}