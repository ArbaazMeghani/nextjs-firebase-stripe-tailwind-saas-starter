import Image from "next/image";

const FeaturedReviews = () => {
  return (
    <section className="flex flex-col w-full justify-center items-center px-8 py-12 md:px-8 lg:p-24 gap-8 bg-slate-800">
      <h1 className="text-4xl">Lorem ipsum dolor</h1>
      <h2 className="text-xl text-slate-300">Lorem ipsum dolor sit amet</h2>
      <div className="flex flex-row flex-wrap md:flex-nowrap gap-16 md:gap-8 lg:gap-16 mt-8 w-full text-center md:text-left">
        <div className="flex flex-col justify-center items-center md:justify-evenly md:items-start w-full">
          <div className="w-24 h-24 rounded-full border-2 border-white flex justify-center items-center bg-slate-700"></div>
          <Image
            src="/images/five-stars.png"
            width={100}
            height={100}
            alt="Five Star Rating"
          />
          <p className="text-lg text-slate-300 max-w-md">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            convallis, justo eget rhoncus dictum, arcu diam accumsan ante, quis
            volutpat nunc risus sit amet nunc.
          </p>
          <p className="text-slate-400 italic mt-4">First L.</p>
        </div>
        <div className="flex flex-col justify-center items-center md:justify-evenly md:items-start w-full">
          <div className="w-24 h-24 rounded-full border-2 border-white flex justify-center items-center bg-slate-700"></div>
          <Image
            src="/images/five-stars.png"
            width={100}
            height={100}
            alt="Five Star Rating"
          />
          <p className="text-lg text-slate-300 max-w-md">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            convallis, justo eget rhoncus dictum, arcu diam accumsan ante, quis
            volutpat nunc risus sit amet nunc.
          </p>
          <p className="text-slate-400 italic mt-4">First L.</p>
        </div>
        <div className="flex flex-col justify-center items-center md:justify-evenly md:items-start w-full">
          <div className="w-24 h-24 rounded-full border-2 border-white flex justify-center items-center bg-slate-700"></div>
          <Image
            src="/images/five-stars.png"
            width={100}
            height={100}
            alt="Five Star Rating"
          />
          <p className="text-lg text-slate-300 max-w-md">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            convallis, justo eget rhoncus dictum, arcu diam accumsan ante, quis
            volutpat nunc risus sit amet nunc.
          </p>
          <p className="text-slate-400 italic mt-4">First L.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedReviews;
