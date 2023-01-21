type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return <h1 className={`text-xl md:text-3xl font-bold ${className}`}>Logo</h1>;
};

export default Logo;
