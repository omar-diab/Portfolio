import Image from "next/image";

const HeroImg = () => {
  return (
    <div className="w-full md:w-[50%] flex justify-center items-center relative overflow-hidden">
      {/* Image Container */}
      <div className="relative w-[300px] h-[500px]">
        <Image
          src={"/assets/photos/myPicture.png"}
          alt="My Picture"
          fill
          className="object-contain"
          priority
          data-aos="fade-down"
          data-aos-duration="1500"
        />
        
        {/* Overlay - Centered on top of image */}
        <div
          className="
            absolute 
            w-[100%]
            h-[20%]
            bottom-[10%]
            left-1/2
            transform -translate-x-1/2
            p-2
            text-white bg-primary 
            flex flex-col justify-center
          "
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">OMAR DIAB</h1>
          <p className="text-[#ccc] ml-1 mt-2 text-sm md:text-base">
            Full Stack Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;