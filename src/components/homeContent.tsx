import card1 from "../../public/image/card 1.jpg"
import card2 from "../../public/image/card 2.jpg"
import card3 from "../../public/image/card 3.jpg"
import Image from "next/image";


function Home_content() {
    return(
        <div className="center-part">
            <div>
            <h3 className="font-sans text-[#044E83] text-[32px] font-[800] text-center mt-[80px] ml-[25px] mb-[45px] leading-[40px] tracking-[-1px]">Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h3>
            <p className="font-sans text-[#303033] text-[21px] ml-[24px] leading-[30px] text-justify mr-[20px]">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.</p>
            </div>
            <div className="cards flex justify-evenly gap-[20px] ml-[25px] mr-[25px] mt-[30px]">
                <Image className="cardone rounded-[8px] shadow-custom-black w-[450] h-[300]" src={card1} alt="card1" />
                <Image className="cardtwo rounded-[8px] shadow-custom-black w-[450] h-[300]" src={card2} alt="card2" />
                <Image className="cardthree rounded-[8px] shadow-custom-black w-[450] h-[300]" src={card3} alt="card3" />
            </div>
        </div>
    );
};

export default Home_content;