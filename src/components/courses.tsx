import Corecourse1 from "../../public/image/core-course1.jpg"
import Corecourse2 from "../../public/image/core-course2.jpg"
import Corecourse3 from "../../public/image/core-course3.jpg"
import Advcourse1 from "../../public/image/advance-course1.jpg"
import AdvCourse2 from "../../public/image/advance-course2.jpg"
import AdvCourse3 from "../../public/image/advance-course3.jpg"
import AdvCourse4 from "../../public/image/advance-course4.jpg"
import AdvCourse5 from "../../public/image/advance-course5.jpg"
import AdvCourse6 from "../../public/image/advance-course6.jpg"
import Image from "next/image";


function Courses() {
    return(
        <div className="courses">
            <div className="core-courses">
                <h3 className="course-h3 text-[#044E83] font-sans text-[35px] font-bold mt-[20px] ml-[24px] mb-[40px]">Core Courses Sequence</h3>
                <div className="courses-pic flex gap-[13px]">
                    <div className="font text-center rounded-[8px] font-sans shadow-custom-one text-[#52525B] text-[18px] font-[700] ml-[26px] mb-[58px] overflow-hidden cursor-pointer transition-transform duration-[0.3s] ease-in-out mr-[1] hover:transform hover:scale-105">
                    <Image className="picss" src={Corecourse1} alt="core-course1" width={300} height={200}/>
                    <p className="p-[20px]">Programming Fundamentals</p>
                    </div>
                    <div className="font text-center rounded-[8px] font-sans shadow-custom-one text-[#52525B] text-[18px] font-[700] ml-[26px] mb-[58px] overflow-hidden cursor-pointer transition-transform duration-[0.3s] ease-in-out mr-[1] hover:transform hover:scale-105">
                    <Image className="picss" src={Corecourse2} alt="core-course2" width={300} height={200}/>
                    <p className="p-[20px]">Web2 Using NextJS</p>
                    </div>
                    <div className="font text-center rounded-[8px] font-sans shadow-custom-one text-[#52525B] text-[18px] font-[700] ml-[26px] mb-[58px] overflow-hidden cursor-pointer transition-transform duration-[0.3s] ease-in-out mr-[1] hover:transform hover:scale-105">
                    <Image className="picss" src={Corecourse3} alt="core-course3" width={300} height={200}/>
                    <p className="p-[20px]">Earn as You Learn</p>
                    </div>
                </div>
            </div>
            <div className="advcourse-pic mb-[19px] mr-[23px]">
                <h3 className="course-h3 text-[#044E83] font-bold font-sans text-[35px] mt-[20px] ml-[24px] mb-[40px]">Advanced Courses</h3>
                    <div className="courses-pic flex gap-[13px]">
                    <div className="font text-center rounded-[8px] font-sans shadow-custom-one text-[#52525B] text-[18px] font-[700] ml-[26px] mb-[58px] overflow-hidden cursor-pointer transition-transform duration-[0.3s] ease-in-out mr-[1] hover:transform hover:scale-105">
                    <Image className="picss" src={Advcourse1} alt="advance-course1" width={300} height={200}/>
                    <p className="p-[20px]">Artificial Intelligence</p>
                    </div>
                    <div className="font text-center rounded-[8px] font-sans shadow-custom-one text-[#52525B] text-[18px] font-[700] ml-[26px] mb-[58px] overflow-hidden cursor-pointer transition-transform duration-[0.3s] ease-in-out mr-[1] hover:transform hover:scale-105">
                    <Image className="picss" src={AdvCourse2} alt="advance-course2" width={300} height={200}/>
                    <p className="p-[20px]">Web 3 and Metaverse</p>
                    </div>
                    <div className="font text-center rounded-[8px] font-sans shadow-custom-one text-[#52525B] text-[18px] font-[700] ml-[26px] mb-[58px] overflow-hidden cursor-pointer transition-transform duration-[0.3s] ease-in-out mr-[1] hover:transform hover:scale-105">
                    <Image className="picss" src={AdvCourse3} alt="advance-course3" width={300} height={200}/>
                    <p className="p-[20px]">Cloud-Native Computing</p>
                    </div>
                    <div className="font text-center rounded-[8px] font-sans shadow-custom-one text-[#52525B] text-[18px] font-[700] ml-[26px] mb-[58px] overflow-hidden cursor-pointer transition-transform duration-[0.3s] ease-in-out mr-[1] hover:transform hover:scale-105">
                    <Image className="picss" src={AdvCourse4} alt="advance-course4" width={300} height={200}/>
                    <p className="p-[20px]">Ambient Computing and IoT</p>
                    </div>
                </div>
                <div id="course-tag" className="courses-pic flex gap-[13px] mt-[-16px]">
                <div className="font text-center rounded-[8px] font-sans shadow-custom-one text-[#52525B] text-[18px] font-[700] ml-[26px] mb-[58px] overflow-hidden cursor-pointer transition-transform duration-[0.3s] ease-in-out mr-[1] hover:transform hover:scale-105">
                    <Image className="picss" src={AdvCourse5} alt="advance-course5" width={300} height={200}/>
                    <p className="p-[20px]">Genomics and Bioinformatics</p>
                    </div>
                    <div className="font text-center rounded-[8px] font-sans shadow-custom-one text-[#52525B] text-[18px] font-[700] ml-[26px] mb-[58px] overflow-hidden cursor-pointer transition-transform duration-[0.3s] ease-in-out mr-[1] hover:transform hover:scale-105" id="font-p">
                    <Image className="picss" src={AdvCourse6} alt="advance-course6" width={300} height={200}/>
                    <p className="p-[20px] h-[25px] mt-[-16px] leading-[27px]">Network Programmability and <br/>Automation</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;