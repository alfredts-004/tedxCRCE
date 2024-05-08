import Section from "./Section";
import Heading from "./Heading";
import { placeholder } from "../assets";

const Services = () => {
  return (
    <Section id="partners" crosses crossesOffset="lg:translate-y-[5.25rem]">
      <div className="container">
        <Heading title="Our Sponsors" />

        <div className="relative">
          <div className="relative z-1 flex items-center md:align-middle md:justify-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="w-full h-full pointer-events-none   xl:w-auto">
              <img
                className="w-full p-6 h-full object-cover "
                width={900}
                alt="Sponsor Photo"
                height={730}
                src={placeholder}
              />
              <p>Sponsors Image</p>
            </div>
          </div>
        </div>
      </div>

    </Section>
  );
};

export default Services;
