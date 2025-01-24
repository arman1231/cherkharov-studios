import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "@/components/ui/MagicButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 bottom-0">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full opacity-50 h-2/6"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to us today and let&apos;s discuss how we can help you
          achieve your goals.
        </p>
        <div className="text-center my-5 text-white-200 z-10">
          <p>
            E-mail:{" "}
            <a
              href="mailto:arman1231@yandex.com"
              className="text-purple hover:underline"
            >
              arman@cherkharov.com
            </a>
          </p>
          <p>
            Telegram:{" "}
            <a
              href="https://t.me/armandoChe"
              className="text-purple hover:underline"
            >
              @armandoChe
            </a>
          </p>
          <p>
            USA Phone:{" "}
            <a href="tel:+16063412232" className="text-purple hover:underline">
              +1 606 341 2232
            </a>
          </p>
        </div>
        <a href="mailto:arman1231@yandex.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {currentYear} Cherkharov's Web Studio
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
