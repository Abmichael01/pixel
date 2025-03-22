import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./ui/button";
import { CameraIcon } from "lucide-react";

const polaroids = [
  {
    title: "New York",
    imgUrl: "/hero1.jpeg",
    className: "rotate-[10deg]",
  },
  {
    title: "London",
    imgUrl: "/hero2.jpeg",
    className: "rotate-[-10deg]",
  },
  {
    title: "Paris",
    imgUrl: "/hero3.jpeg",
    className: "mt-[-125px] ml-[-10px] rotate-[5deg]",
  },
  {
    title: "Tokyo",
    imgUrl: "/hero4.jpeg",
    className: " mt-[-100px] translate-x-[-30px] rotate-[-10deg]",
  },
];

const Hero: React.FC = () => {
  return (
    <div className="lg:px-20 md:px-10 sm:px-8 px-5 gap-10 lg:gap-20 flex flex-col lg:flex-row  items-center justify-between py-10  lg:py-20">
      <div className="space-y-5 text-center lg:text-start w-full lg:w-1/2">
        <h1 className="font-bold text-5xl md:text-6xl font-hero">
          Turn Moments into <br />{" "}
          <span className="text-[#dcaeb0]">Memories</span>{" "}
        </h1>
        <p className="text-white/60 w-full lg:w-[70%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur
          quam expedita quos nostrum quae, quidem est
        </p>
        <Button className="bg-white text-foreground py-6 px-12 hover:bg-white/60">
          <div className="flex gap-1 items-center">
            <CameraIcon />
            Create a Polaroid
          </div>
        </Button>
      </div>
      <div>
        <div className="grid grid-cols-2 relative max-[600px]:scale-[0.95] max-[550px]:scale-[0.9] max-[500px]:scale-[0.85] max-[450px]:scale-[0.7] max-[400px]:scale-[0.65]">
            <div className="w-[150px] h-[40px] bg-[#dcaeb0] absolute top-[-25px] left-[-38px] rotate-[-35deg] z-[1]"></div>
            <div className="w-[150px] h-[40px] bg-[#dcaeb0] absolute bottom-[20px] right-[-55px] rotate-[-65deg] z-[1]"></div>
          {polaroids.map((polaroid, index) => (
            <div>
              <div
                key={index}
                className={cn("bg-white p-2", polaroid.className)}
              >
                <img
                  className="object-cover w-[200px] h-[200px]"
                  src={polaroid.imgUrl}
                  alt={polaroid.title}
                />
                <div className=" w-full h-full p-1 text-center text-neutral-950 font-logo font-bold text-xl">
                  {polaroid.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
