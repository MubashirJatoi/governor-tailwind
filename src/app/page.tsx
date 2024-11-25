import Image from "next/image";
import pic from "../../public/image/governor pic.png";
import Home_content from "../components/homeContent";
import Slider from "@/components/slider";
import Courses from "@/components/courses";

export default function Home() {
  return(
    <div>
    <div className="main relative h-[705px] mt-[82px] overflow-hidden">
  <div className="content">
    <h1 className="text-[#044E83] text-[60px] mt-[92px] ml-[24px] tracking-[2px] mb-[0] font-sans font-[1000]">Governor Sindh</h1>
    <h2 className="text-[#044E83] font-sans tracking-[4px] mt-[-16px] ml-[24px] text-[40px] font-[100]">Kamran Khan Tessori</h2>
    <h3 className="text-[#2EB6E8] font-sans text-[40px] mt-[11px] ml-[24px] font-extrabold leading-[48px]">
      Certified Cloud <br />
      Applied Generative AI <br />
      Engineer (GenEng)
    </h3>
    <p className="text-[#044E83] text-[23px] ml-[24px] mt-[20px] font-[1000] font-sans mb-[23px]">Earn up to $5,000 / month</p>
    <p className="text-[#044E83] text-[24px] ml-[24px] mt-[-7px] w-[370px] leading-8 font-[1000] font-sans">Now admissions are open in Hyderabad</p>
    <div className="flex ml-[24px] mt-[20px]">
      <button className="bg-[#044E83] text-[white] font-sans w-[210px] h-[60px] text-[15px] font-[800] rounded-[8px] mt-[20px] cursor-pointer transition-custom duration-300 ease-in-out hover:mt-[25px] hover:mb-[-5px] hover:text-[15px] hover:pt-[3px]">
        APPLY NOW
      </button>
      <div className="ml-[55px] mt-[12px] leading-[8px]">
        <p className="text-center text-[#044E83] tracking-[2px] text-[30px] ml-[24px] mt-[20px] font-[1000] font-sans">
          562,143
        </p>
        <p className="text-[#044E83] text-[14px] tracking-[2px] ml-[24px] mt-[20px] font-[500] font-sans">
          Accepted Applications
        </p>
      </div>
    </div>
  </div>
  <div className="ride-side flex justify-end mt-[-690px] mr-[-260px]">
    <Image className="mt-[96px]" src={pic} alt="pic" width={900} height={680} />
  </div>
</div>
    <Home_content/>
    <Slider/>
    <Courses/>
    </div>
  );
};