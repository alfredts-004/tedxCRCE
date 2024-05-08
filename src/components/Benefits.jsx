import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";

const Benefits = () => {
  return (
    
    <Section id="speakers" className=""
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
>
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="What is Cracks in the Canvas?"
        />
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            The theme for this year is "Cracks in the Canvas." In a world that
            often values perfection, we tend to overlook the beauty found in our
            imperfections. Similar to the cracks in a painting that add depth
            and character, our flaws define who we are. Instead of chasing after
            unachievable perfection, let's cherish our individuality and the
            unique qualities that make us stand out. Just as a hidden gem can be
            discovered in unexpected places, our true beauty often resides
            within our imperfections. The conference aims to celebrate the
            diversity of human experiences and perspectives, fostering a world
            where flaws are embraced and honored.{" "}
          </p>
        </div>
        <Heading className="md:max-w-md lg:max-w-2xl" title="Our Speakers !!" />

        <div className="flex flex-wrap gap-8 mb-8">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] "
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto rounded-lg">
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Info About Speaker
                  </p>
                </div>
              </div>

              {item.light && <GradientLight />}
            </div>
          ))}
        </div>
      </div>
   <GradientLight />
    </Section>
 );
};

export default Benefits;
