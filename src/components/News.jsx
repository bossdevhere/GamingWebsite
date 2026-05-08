import AnimatedTitle from "./AnimatedTitle";
import { BentoTilt, BentoCard } from "./Features";
import { TiLocationArrow } from "react-icons/ti";

const News = () => {
  return (
    <section id="news" className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-4 py-32">
          <p className="font-circular-web text-lg text-blue-100 uppercase">
            Latest Updates
          </p>
          <AnimatedTitle
            title="STAY AHE<b>A</b>D WITH <br /> THE L<b>A</b>TEST NE<b>W</b>S"
            containerClass="mt-5 !text-blue-100"
          />
        </div>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
                    
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
             <BentoCard
              src="img/news-1.webp"
              title={<>New Viper-themed Merch Drop</>}
              description="Inject some venom into your life with this new collection. Available now."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="img/news-2.webp"
              title={<>VALORANT Patch Notes 12.08</>}
              description="Introducing Skirmish: Ascension, new map rotation, and the return of Premier."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="img/news-3.webp"
              title={<>Introducing Skirmish: Ascension</>}
              description="Skirmish is getting an update with its own leaderboard and rewards."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
             <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on!
              </h1>
              <TiLocationArrow className="m-5 self-end" />
            </div>
          </BentoTilt>

          
        </div>
      </div>
    </section>
  );
};

export default News;
