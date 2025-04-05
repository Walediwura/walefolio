import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";

function About() {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About me</h2>

      <div className="flex h-full w-full flex-col items-center lg:flex-row lg:items-start gap-20 my-20">
        <section className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image_sub}
            alt="user"
            className="w-full rounded-3xl shadow-[4px_4px_0px_black]  "
          />
        </section>

        <section className="flex-1">
          <p className="mb-10 max-w-2xl font-ovo">
            Results-driven Software Engineer with a proven track record of
            building and scaling enterprise-grade applications. With a specialty
            in crafting clean, maintainable architectures and delivering
            high-performance, mission-critical solutions that prioritize code
            quality, system reliability, and seamless user experience.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl overflow-x-hidden">
            {infoList?.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0px_black]"
                key={index}
              >
                <Image src={icon} alt={title} />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-ovo">Tools I use</h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData?.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
