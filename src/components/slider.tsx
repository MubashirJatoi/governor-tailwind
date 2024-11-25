"use client"
// slider.tsx
import { useEffect, useState } from "react";
import Image from "next/image";
import Pic1 from "../../public/image/pic1.jpg";
import Pic2 from "../../public/image/pic2.jpg";
import Pic3 from "../../public/image/pic3.jpg";
import Pic4 from "../../public/image/pic4.jpg";
import Pic5 from "../../public/image/pic5.jpg";
import Pic6 from "../../public/image/pic6.jpg";
import Pic7 from "../../public/image/pic7.jpg";
import Pic8 from "../../public/image/pic8.jpg";

const images = [
    [Pic1, Pic2],
    [Pic3, Pic4],
    [Pic5, Pic6],
    [Pic7, Pic8],
];

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Automatically cycle through slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 4000); // Slide interval in milliseconds (4 seconds)

        return () => clearInterval(interval);
    }, []);

    // Manual navigation handler
    const handleNavigationClick = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative overflow-hidden w-[100%] max-w-[1290px] h-[700px] m-auto mt-[40px]">
    <div
        className="flex transition-transform duration-500 ease-in-out w-[400%]"
        style={{ transform: `translateX(-${currentSlide * 25}%)` }}
    >
        {images.map((pair, index) => (
            <div className="w-[100%] flex gap-[8px]" key={index}>
                <Image className="w-[50%] h-[100%] object-cover rounded-[6px]" src={pair[0]} alt={`pic${index * 2 + 1}`} width={1000} height={1000}/>
                <Image className="w-[50%] h-[100%] object-cover rounded-[6px]" src={pair[1]} alt={`pic${index * 2 + 2}`} width={1000} height={1000}/>
            </div>
        ))}
    </div>

    {/* Navigation Dots */}
    <div className="absolute bottom-[20px] w-[100%] flex justify-center gap-[10px]">
        {images.map((_, index) => (
            <div
                key={index}
                className={`w-[70px] h-[4px] cursor-pointer transition-colors duration-300 mt-[-30px] rounded-tr-[3px] rounded-tl-[3px] rounded-bl-[2px] rounded-br-[2px] ${currentSlide === index ? "bg-black" : "bg-[#c7c6c6] hover:bg-[#DCDCDC]"}`} onClick={() => handleNavigationClick(index)}>    
            </div>
        ))}
    </div>
    <hr className="mt-[75px] h-[0] border border-solid border-[#D4D4D8]" />
</div>
    );
}

export default Slider;
