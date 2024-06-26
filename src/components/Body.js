import { RiArrowRightLine, RiCheckLine, RiLockLine, RiPercentLine } from "@remixicon/react";
import Rating from '@mui/material/Rating';
import { Avatar } from "@mui/material";
import BottomActionsCard from "./Card";

function Body() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:mt-8 md:mb-16 gap-2 md:gap-4 bg-zinc-100 p-2 mb-4">
      <div className="left-side flex flex-col gap-4 items-center justify-between">
        <img className="w-full flex-grow" src="/images/wallpaper-img.jpg" width={272} height={272} style={{ objectFit: 'cover' }} alt="Wallpaper" />
        <BottomActionsCard />
      </div>
      <div className="right-side">
        <section className="text-wrap py-2 space-y-2">
          <h2 className="text-xl lg:text-3xl font-normal text-center md:text-start">
            <span className="text-blue-600">ONE TIME ONLY</span> Special Price For 6 Extra Clarifion For Only <span className="text-blue-600">$14 Each </span>(84.00 Total!)
          </h2>
        </section>
        <section className="py-2">
          <div className="grid grid-cols-3 gap-x-3 gap-y-3">
            <img className="col-span- lg:row-span-2 lg:w-40 xl:w-52 py-2 bg-blue-600 rounded-xl" src='/images/main-image.png' width={100} height={100} alt="Clarifion" />
            <div className="col-span-2 py-2 lg:py-0 lg:gap-2 xl:gap-3 flex flex-col items-start justify-between">
              <div className="w-full flex justify-between items-center lg:text-2xl xlg:font-medium">
                <div className="-tracking-wide">Clarifion Air lonizer</div>
                <div className="text-zinc-600 space-x-1">
                  <span className=" text-xs xl:text-base">$180</span><span className="text-blue-600 text-sm xl:text-2xl font-medium">$84</span>
                </div>
              </div>
              <Rating name="size-small" defaultValue={5} size="small" className="xl:text-xl" />
              <span className="text-zinc-500 flex items-center justify-start gap-4"><Avatar className="h-4 xl:w-5 w-4 xl:h-5 border-4 xl:border-5 border-blue-200" style={{ backgroundColor: '#2196F3' }}>{` `}</Avatar> <span className="-tracking-wide xl:text-base">12 left in Stock</span></span>
            </div>
            <div className="py-2 lg:py-0 col-span-3 lg:col-span-2 lg:col-start-2 lg:self-end">
              <p className="text-xs lg:text-sm xl:text-base text-center text-zinc-500 -tracking-wide lg:text-start">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
            </div>
          </div>
        </section>
        <section className="py-2 space-y-2">
          <div className="flex items-center justify-start gap-1"><RiCheckLine className="w-5 h-5 xl:h-6 xl:w-6 font-semibold text-blue-500" /><p className="text-xs lg:text-sm xl:text-base text-start text-zinc-500 -tracking-wide">Next ion Technology may <b>help with allergens</b></p></div>
          <div className="flex items-center justify-start gap-1"><RiCheckLine className="w-5 h-5 xl:h-6 xl:w-6 font-semibold text-blue-500" /><p className="text-xs lg:text-sm xl:text-base text-start text-zinc-500 -tracking-wide">Designed for <b>air rejuvenation</b></p></div>
          <div className="flex items-center justify-start gap-1"><RiCheckLine className="w-5 h-5 xl:h-6 xl:w-6 font-semibold text-blue-500" /><p className="text-xs lg:text-sm xl:text-base text-start text-zinc-500 -tracking-wide"><b>Perfect for every room</b> in all types of places.</p></div>
        </section>
        <section className="py-2">
          <div className="w-full flex items-center justify-start p-3 rounded-md bg-blue-200 gap-2">
            <Avatar className="w-6 h-6 p-1" style={{ backgroundColor: '#2196F3' }}><RiPercentLine className=" text-body" /></Avatar>
            <p className="text-sm -tracking-wide">Save <span className="text-blue-500">53%</span> and get <span className="text-blue-500">6 extra Clarifion</span> for only <span className="text-blue-500">$14 Each.</span></p>
          </div>
        </section>

        <section className="py-2">
          <div className="text-body text-nowrap bg-lime-600 rounded-full w-full p-3 flex items-center justify-center gap-2">
            YES - CLAIM MY DISCOUNT <RiArrowRightLine />
          </div>
        </section>

        <section>
          <div className="p-2 border border-zinc-300 rounded-md space-y-1 xl:flex xl:items-center xl:justify-center xl:gap-2 text-nowrap text-xs">
            <div className="flex items-center justify-center gap-2 text-nowrap text-xs">
              <span className="-tracking-wider">Free Shipping</span>
              <span className="after:content-[''] after:h-1 after:border border-zinc-300"></span>
              <span className="flex items-center gap-2 justify-start">
                <RiLockLine className="w-4 h-4" />
                <span className="-tracking-wider">Secure 256-Bit SSL Encryption</span>
              </span>
            </div>
            <hr className="border border-zinc-300 xl:hidden" />
            <span className="xl:after:content-[''] xl:after:h-1 xl:after:border xl:border-zinc-300"></span>
            <div className="flex items-center justify-center">
              <div className="w-8 h-4 flex items-center overflow-hidden">
                <img src='/images/visa.png' width={25} height={25} alt="visa logo" />
              </div>
              <div className="w-8 h-4 flex items-center justify-center overflow-hidden">
                <img src='/images/opay.png' width={25} height={25} alt="opay logo" />
              </div>
              <div className="w-8 h-4 flex items-center overflow-hidden">
                <img src='/images/paypal.png' width={25} height={25} alt="paypal logo" />
              </div>
              <div className="w-8 h-4 flex items-center overflow-hidden">
                <img src='/images/mastercard.png' width={25} height={25} alt="mastercard logo" />
              </div>
              <div className="w-8 h-4 flex items-center overflow-hidden">
                <img src='/images/gpay.png' width={25} height={25} alt="gpay logo" />
              </div>
              <div className="w-8 h-4 flex items-center overflow-hidden">
                <img src='/images/applepay.png' width={25} height={25} alt="applepay logo" />
              </div>
              <div className="w-8 h-8 flex items-center overflow-hidden">
                <img src='/images/amex.png' width={25} height={25} alt="amex logo" className="object-cover w-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-2 w-full text-center">
          <u className="text-red-600">{`NO THANKS, I DON'T WANT THIS.`}</u>
        </section>
        <section className="pt-4 pb-8">
          <div className="w-full flex items-center justify-start gap-2">
            <img className="md:w-20 md:h-20" src="/images/guarantee.png" width={50} height={50} alt="guarantee logo" />
            <p className="text-sm -tracking-wider text-justify">If you're completely thrilled with your Clarifion - We have a <b>30 day satisfaction guarantee</b>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
          </div>
        </section>
      </div>
    </div>
  )
}
export default Body