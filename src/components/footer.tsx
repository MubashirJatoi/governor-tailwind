import Image from "next/image";
import Facebook from "../../public/image/facebook-logo.webp"
import Youtube from "../../public/image/youtube-logo.png"
import Twitter from "../../public/image/twitter-logo.webp"
import Instagram from "../../public/image/instagram-logo.png"
import Tiktok from "../../public/image/tiktok-logo.png"
import Email from "../../public/image/email-logo.png"
import Link from "next/link";


function Footer() {
    return(
        <div className="footer-f flex justify-between bg-[#F4F4F5] h-[412px] font-sans pt-[82px] pb-[22px]">
            <div className="first">
                <h3 className="ml-[25px] text-[19px] text-[#27272A] font-bold mb-[20px]">Core Courses</h3>
                <p className="text-[#27272A] cursor-pointer mb-[8px] ml-[25px] leading-[28px] text-[17px]">Programming Fundamentals</p>
                <p className="text-[#27272A] cursor-pointer mb-[8px] ml-[25px] leading-[28px] text-[17px]">Web2 Using NextJS</p>
                <p className="text-[#27272A] cursor-pointer mb-[8px] ml-[25px] leading-[28px] text-[17px]">Earn as You Learn</p>
            </div>
            <div className="second mr-[-165px]">
                <h3 className="mr-[50px] text-[19px] text-[#27272A] font-bold mb-[20px]">Advanced Courses</h3>
                <p className="text-[#27272A] cursor-pointer mb-[8px] mr-[50px] leading-[28px] text-[17px]">Web 3 and Metaverse</p>
                <p className="text-[#27272A] cursor-pointer mb-[8px] mr-[50px] leading-[28px] text-[17px]">Cloud-Native Computing</p>
                <p className="text-[#27272A] cursor-pointer mb-[8px] mr-[50px] leading-[28px] text-[17px]">Artificial Intelligence (AI) and Deep Learning</p>
                <p className="text-[#27272A] cursor-pointer mb-[8px] mr-[50px] leading-[28px] text-[17px]">Ambient Computing and IoT</p>
                <p className="text-[#27272A] cursor-pointer mb-[8px] mr-[50px] leading-[28px] text-[17px]">Genomics and Bioinformatics</p>
                <p className="text-[#27272A] cursor-pointer mb-[8px] mr-[50px] leading-[28px] text-[17px]">Network Programmablility and Automation</p>
            </div>
            <div className="third mr-[163px]">
                <h3 className="text-[#27272A] mb-[20px] font-bold text-[19px]">Social Links</h3>
                <div className="logos flex gap-[10px] ml-[0px] mb-[25px]">
                    <Link target="_blank" href="https://www.facebook.com/TeamKTessori"><Image src={Facebook} alt="facebook" width={33} height={33}/></Link>
                    <Link target="_blank" href="https://www.youtube.com/@KamranTessorikk"><Image src={Youtube} alt="youtube" width={33} height={33}/></Link>
                    <Link target="_blank" href="https://twitter.com/KamranTessoriPk"><Image src={Twitter} alt="twitter" width={33} height={33}/></Link>
                    <Link target="_blank" href="https://www.instagram.com/KamranTessoriPk/"><Image src={Instagram} alt="instagram" width={33} height={33}/></Link>
                    <Link target="_blank" href="https://www.instagram.com/KamranTessoriPk/"><Image src={Tiktok} alt="tiktok" width={33} height={33}/></Link>
                </div>
                <div className="email-section flex gap-[13px]">
                <a className="etxt text-[#044E83] text-[17px]" target="_blank" href="mailto:education@governorsindh.com?subject=Subject%20Here&body=Hello,%20this%20is%20a%20pre-filled%20email%20body."><Image className="email-logo mt-[4px]" src={Email} alt="email" width={20} height={17}/></a>
                <a className="etxt text-[#044E83] text-[17px]" target="_blank" href="mailto:education@governorsindh.com?subject=Subject%20Here&body=Hello,%20this%20is%20a%20pre-filled%20email%20body.">education@governorsindh.com</a>
                </div>
            </div>
        </div>
    );
  };
  
export default Footer;