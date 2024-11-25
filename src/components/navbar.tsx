import Link from "next/link";
import logo from "../../public/image/governor logo.png";
import Image from "next/image";

function Navbar() {
    return(
        <div className="flex justify-between bg-[#044E83] h-[80px] font-sans mt-[0px] fixed top-0 w-[100%] z-[1000]">
            <div className="pl-[25px] mt-[23px] cursor-pointer">
                <Link href="/"><Image src={logo} alt="logo" width={90} height={115}/></Link>
            </div>
            <h3 className="text text-[#B9D8F3] flex items-center font-bold text-[23px] mr-[-80px] ml-[-15px] w-[670px]">Tuition Free Education Program on Latest Technologies</h3>
            <div className="flex gap-[40px] justify-end items-center mr-[48px] text-[16px] font-sans">
                <Link href={"/"} className="no-underline decoration-[none] text-[#F6F6F7]">Home</Link>
                <Link href={"/apply"} className="no-underline decoration-[none] text-[#F6F6F7]">Apply</Link>
                <Link href={"/jobs"} className="no-underline decoration-[none] text-[#F6F6F7]">Jobs</Link>
                <Link href={"/result"} className="no-underline decoration-[none] text-[#F6F6F7]">Result</Link>
                <Link href={"/courses"} className="no-underline decoration-[none] text-[#F6F6F7]">Courses</Link>
            </div>
        </div>
    );
};

export default Navbar;