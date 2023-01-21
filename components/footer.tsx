import Link from "next/link";
import Logo from "./logo";

const Footer = () => {
  return (
    <section className="grid md:grid-cols-5 bg-slate-100 text-slate-900 py-12 px-8 md:px-8 lg:p-24 gap-8 md:gap-0 text-center">
      <div className="flex flex-col justify-center items-center md:col-span-2">
        <Logo className="mb-4" />
        <p className="text-lg mb-4 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          convallis, justo eget rhoncus dictum, arcu diam accumsan ante, quis
          volutpat nunc risus sit amet nunc.
        </p>
        <p className="text-lg">
          Made by <Link href={"https://twitter.com/arbzio"}>Arbaaz M</Link>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl mb-4">Navigation</h1>
        <Link href={"#"}>Get Started</Link>
        <Link href={"#"}>Login</Link>
        <Link href={"#"}>Pricing</Link>
        <Link href={"#"}>Other</Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl mb-4">Support</h1>
        <Link href={"#"}>Contact</Link>
        <Link href={"#"}>Features</Link>
        <Link href={"#"}>Documentation</Link>
        <Link href={"#"}>Other</Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl mb-4">Legal</h1>
        <Link href={"#"}>Privacy Policy</Link>
        <Link href={"#"}>Terms of Service</Link>
        <Link href={"#"}>Refund Policy</Link>
        <Link href={"#"}>Other</Link>
      </div>
    </section>
  );
};

export default Footer;
