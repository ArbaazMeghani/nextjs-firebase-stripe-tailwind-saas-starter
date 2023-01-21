import {
  ArrowRightOnRectangleIcon,
  ChartPieIcon,
  CreditCardIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";
import CallToAction from "./call-to-action";
import Logo from "./logo";

const Navigation = () => {
  return (
    <nav className="bg-slate-900 flex justify-start items-center gap-2 py-4 md:text-lg md:font-medium fixed w-full px-8 md:px-16 top-0 left-0">
      <Logo className="flex-grow" />
      <button className="hidden lg:flex py-2 px-4 hover:bg-slate-800 rounded-md justify-center items-center">
        <CreditCardIcon className="h-6 w-6 mr-2" />
        Pricing
      </button>
      <button className="hidden lg:flex py-2 px-4 hover:bg-slate-800 rounded-md justify-center items-center">
        <QueueListIcon className="h-6 w-6 mr-2" />
        Features
      </button>
      <button className="hidden lg:flex py-2 px-4 hover:bg-slate-800 rounded-md justify-center items-center">
        <ChartPieIcon className="h-6 w-6 mr-2" />
        Other
      </button>
      <button className="hidden lg:flex py-2 px-4 hover:bg-slate-800 rounded-md justify-center items-center">
        <ArrowRightOnRectangleIcon className="h-6 w-6 mr-2" />
        Login
      </button>
      <CallToAction />
    </nav>
  );
};

export default Navigation;
