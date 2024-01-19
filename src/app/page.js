import NavBar from "./NavBar";
import Components from "./components";
export default function Home() {
  return (
    <main className="lg:px-32 px-5 py-10">
      <div className="">
        <NavBar />
        <div className="flex md:flex-row flex-col items-start md:space-x-7">
          <div className="md:w-[70%]">
            <img
              src="/image-web-3-desktop.jpg"
              alt=""
              className="h-60 w-full object-cover"
            />
            <div className="flex md:flex-row flex-col justify-between items-center mt-5">
              <h1 className="lg:text-6xl md:text-4xl text-3xl md:my-0 my-5 font-extrabold md:w-[40%] w-full">
                The Bright Future of Web 3.0?
              </h1>
              <div className="md:w-[50%]">
                <p>
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button
                  type="button"
                  className="text-white hover:bg-hslBlue cursor-pointer bg-softRed py-3 px-4 mt-5 md:w-[50%] w-3/5"
                >
                  Read more{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="bg-hslBlue p-7 text-white md:mt-0 mt-10 w-full md:w-[30%]">
            <h1 className="text-softOrange font-semibold text-3xl mb-5">New</h1>
            <div>
              <h2 className="hover:text-softOrange cursor-pointer">
                Hydrogen VS Electric Cars
              </h2>
              <p className="text-GrayishBlue text-xs mt-4">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
              <div className="bg-Darkgrayishblue h-[1px] my-6 w-full"></div>
            </div>
            <div>
              <h2 className="hover:text-softOrange cursor-pointer">
                The Downsides of AI Artistry
              </h2>
              <p className="text-GrayishBlue text-xs mt-4">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
              <div className="bg-Darkgrayishblue h-[1px] my-6 w-full"></div>
            </div>
            <div className="mb-2">
              <h2 className="hover:text-softOrange cursor-pointer">
                Is VC Funding Drying Up?
              </h2>
              <p className="text-GrayishBlue text-xs mt-4">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Components />
    </main>
  );
}
