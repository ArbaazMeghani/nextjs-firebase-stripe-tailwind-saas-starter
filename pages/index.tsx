import type { NextPage } from "next";
import { CheckIcon, TvIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import ImageText from "../components/image-text";
import Footer from "../components/footer";
import CallToAction from "../components/call-to-action";
import Navigation from "../components/navigation";
import Features from "../components/features";
import FeaturedReviews from "../components/featured-reviews";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-900 text-white ">
      <section className="flex flex-col justify-center items-center w-full pt-36 px-8 md:px-24">
        <Navigation />
        <h1 className="text-5xl lg:text-6xl xl:text-8xl font-medium max-w-5xl text-center">
          Landing Page
        </h1>
        <h1 className="text-5xl lg:text-6xl xl:text-8xl font-medium max-w-5xl text-center">
          for saas developers.
        </h1>
        <h2 className="text-2xl text-slate-300 pt-16 pb-8 text-center">
          The most flexible landing page to help you launch your saas.
        </h2>
        <div className="hidden md:flex justify-center items-center">
          <div className="rounded-full h-8 w-8 border border-white bg-slate-700"></div>
          <div className="rounded-full h-8 w-8 border border-white bg-slate-700 -ml-3"></div>
          <div className="rounded-full h-8 w-8 border border-white bg-slate-700 -ml-3"></div>
          <div className="rounded-full h-8 w-8 border border-white bg-slate-700 -ml-3"></div>
          <div className="rounded-full h-8 w-8 border border-white bg-slate-700 -ml-3"></div>
          <div className="rounded-full h-8 w-8 border border-white bg-slate-700 -ml-3"></div>
          <div className="rounded-full h-8 w-8 border border-white bg-slate-700 -ml-3"></div>
          <div className="rounded-full h-8 w-8 border border-white bg-slate-700 -ml-3"></div>
          <h3 className="text-slate-300 p-8 text-lg">
            Join 1000+ people using this template
          </h3>
        </div>
        <CallToAction />
        <div className="mt-8">
          <Image
            className="rounded-md shadow-2xl shadow-black"
            src="/images/hero.png"
            width={3000}
            height={3000}
            alt="hero image"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 w-full mt-8">
          <h3 className="inline-flex text-lg justify-center items-center">
            <CheckIcon className="w-6 h-6 mr-2" />A
          </h3>
          <h3 className="inline-flex text-lg justify-center items-center">
            <CheckIcon className="w-6 h-6 mr-2" />B
          </h3>
          <h3 className="inline-flex text-lg justify-center items-center">
            <CheckIcon className="w-6 h-6 mr-2" />C
          </h3>
        </div>
      </section>
      <Features />
      <section className="flex flex-col w-full justify-start items-start mt-8 py-12 px-8 md:px-8 lg:p-24 gap-8 md:gap-0">
        <h3 className="text-lg px-4 py-2 bg-slate-800 rounded-md text-slate-300">
          Lorem ipsum dolor
        </h3>
        <h1 className="text-4xl mt-8">
          Lorem ipsum dolor.
          <br />
          Lorem ipsum dolor.
        </h1>
        <h2 className="text-xl text-slate-300 mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          convallis, justo eget rhoncus dictum, arcu diam accumsan ante
        </h2>
        <div className="mt-8 md:px-12">
          <Image
            className="rounded-md shadow-2xl shadow-black"
            src="/images/hero.png"
            width={3000}
            height={3000}
            alt="hero image"
          />
        </div>
      </section>
      <section className="flex flex-col w-full justify-start items-start mt-8 py-12 px-8 md:px-8 lg:p-24 gap-8 md:gap-0">
        <ImageText
          imageSrc="/images/hero.png"
          width={3000}
          height={3000}
          heading="Lorem isum dolor"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              convallis, justo eget rhoncus dictum, arcu diam accumsan ante,
              quis volutpat nunc risus sit amet nunc."
        />
        <ImageText
          imageSrc="/images/hero.png"
          width={3000}
          height={3000}
          heading="Lorem isum dolor"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              convallis, justo eget rhoncus dictum, arcu diam accumsan ante,
              quis volutpat nunc risus sit amet nunc."
          className="flex-row-reverse mt-16"
        />
      </section>
      <section className="flex flex-col w-full justify-start items-start mt-8 py-12 px-8 md:px-8 lg:p-24 gap-8 md:gap-0">
        <h3 className="text-lg px-4 py-2 bg-slate-800 rounded-md text-slate-300">
          Lorem ipsum dolor
        </h3>
        <h1 className="text-4xl mt-8">
          Lorem ipsum dolor.
          <br />
          Lorem ipsum dolor.
        </h1>
        <h2 className="text-xl text-slate-300 mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          convallis, justo eget rhoncus dictum, arcu diam accumsan ante
        </h2>
        <div className="mt-8 md:px-12">
          <Image
            className="rounded-md shadow-2xl shadow-black"
            src="/images/hero.png"
            width={3000}
            height={3000}
            alt="hero image"
          />
        </div>
      </section>
      <section className="flex flex-col w-full justify-start items-start mt-8 py-12 px-8 md:px-8 lg:p-24 gap-8 md:gap-0">
        <ImageText
          imageSrc="/images/hero.png"
          width={3000}
          height={3000}
          heading="Lorem isum dolor"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              convallis, justo eget rhoncus dictum, arcu diam accumsan ante,
              quis volutpat nunc risus sit amet nunc."
        />
        <ImageText
          imageSrc="/images/hero.png"
          width={3000}
          height={3000}
          heading="Lorem isum dolor"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              convallis, justo eget rhoncus dictum, arcu diam accumsan ante,
              quis volutpat nunc risus sit amet nunc."
          className="flex-row-reverse mt-16"
        />
        <ImageText
          imageSrc="/images/hero.png"
          width={3000}
          height={3000}
          heading="Lorem isum dolor"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              convallis, justo eget rhoncus dictum, arcu diam accumsan ante,
              quis volutpat nunc risus sit amet nunc."
          className="mt-16"
        />
      </section>
      <FeaturedReviews />
      <section className="flex flex-col w-full justify-center items-center mt-8 py-12 px-8 md:px-8 lg:p-24 gap-8 text-center">
        <h1 className="text-4xl">Lorem ipsum dolor</h1>
        <h2 className="text-xl text-slate-300">Lorem ipsum dolor sit amet</h2>
        <CallToAction />
        <div className="grid grid-cols-3 w-full">
          <h3 className="inline-flex text-lg justify-center items-center">
            <CheckIcon className="w-6 h-6 mr-2" />A
          </h3>
          <h3 className="inline-flex text-lg justify-center items-center">
            <CheckIcon className="w-6 h-6 mr-2" />B
          </h3>
          <h3 className="inline-flex text-lg justify-center items-center">
            <CheckIcon className="w-6 h-6 mr-2" />C
          </h3>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
