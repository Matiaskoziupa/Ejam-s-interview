import { RiCheckFill, RiNumber3, RiNumber4 } from "@remixicon/react";
import { Avatar } from "@mui/material";
import { useMediaQuery } from "@mui/material";

function Steps() {
  const isLargeScreen = useMediaQuery('(min-width: 1026.40px)');

  return (
    <section className="container px-4 grid grid-cols-4 gap-x-12 md:py-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-2">
        <Avatar
          className="w-6 h-6 xl:w-7 xl:h-7 p-1"
          style={{ backgroundColor: '#84cc16' }}
        >
          <RiCheckFill className="text-body" />
        </Avatar>
        {isLargeScreen && <p className="text-center text-nowrap text-[.65rem] md:text-base">Step 1: Cart Review</p>}
        {!isLargeScreen && <p className="text-center text-nowrap text-[.65rem] md:text-sm">Cart Review</p>}
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-2">
        <Avatar
          className="w-6 h-6 xl:w-7 xl:h-7 p-1"
          style={{ backgroundColor: '#84cc16' }}
        >
          <RiCheckFill className="text-body" />
        </Avatar>
        {isLargeScreen && <p className="text-center text-nowrap text-[.65rem] md:text-base">Step 2: Checkout</p>}
        {!isLargeScreen && <p className="text-center text-nowrap text-[.65rem] md:text-sm">Checkout</p>}
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-2">
        <Avatar
          className="w-6 h-6 xl:w-7 xl:h-7 p-1"
          style={{ backgroundColor: '#2196F3' }}
        >
          <RiNumber3 className="text-body" />
        </Avatar>
        {isLargeScreen && <p className="text-center text-nowrap text-[.65rem] md:text-base font-medium">Step 3: Special Offer</p>}
        {!isLargeScreen && <p className="text-center text-nowrap text-[.65rem] md:text-sm font-medium">Special Offer</p>}
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-2">
        <Avatar
          className="w-6 h-6 xl:w-7 xl:h-7 p-1 border border-blue-600"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <RiNumber4 className="text-blue-600" />
        </Avatar>
        {isLargeScreen && <p className="text-center text-[.65rem] md:text-base text-nowrap">Step 4: Confirmation</p>}
        {!isLargeScreen && <p className="text-center text-[.65rem] md:text-sm text-nowrap">Confirmation</p>}
      </div>
    </section>
  );
}

export default Steps;
