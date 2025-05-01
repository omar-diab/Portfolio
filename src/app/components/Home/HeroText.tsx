import Link from "next/link";
import { socialLinks } from "@/app";
import { DownloadButton } from "../Ui";

const HeroText = () => {
  return (
    <div
      data-aos="fade-right"
      className="flex flex-col text-start w-full md:w-[50%] px-4 md:px-8"
    >
      <div className="text-white mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
          WELCOME <br />
          <span className="text-2xl md:text-3xl lg:text-4xl text-primary">
            LADIES & GENTLEMEN
          </span>
        </h1>
      </div>

      <div className="flex flex-col gap-4 md:gap-6">
        <h2 className="text-lg md:text-xl lg:text-2xl text-white font-semibold">
          FIND ME ON:
        </h2>

        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full
                  bg-gray-800 hover:bg-white transition-all duration-300
                  text-white hover:text-gray-900
                  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900
                "
                aria-label={`My ${link.label} profile`}
              >
                <Icon className="text-lg md:text-xl" />
              </Link>
            );
          })}
        </div>

        <div className="mt-2 md:mt-4">
          <DownloadButton
            fileUrl="/assets/documents/OMARDIAB-CV.pdf"
            fileName="OMARDIAB-CV.pdf"
            label="Download CV"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroText;