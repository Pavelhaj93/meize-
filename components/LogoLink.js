import Link from "next/link";
import SvgLogo from "./svg/SvgLogo";

export default function LogoLink({ logoColor, className = "", ...rest }) {
  return (
    <Link
      href="/"
      className={`inline-flex font-sans font-extrabold uppercase tracking-tighter text-4xl mouse-hover:text-primary transition-colors duration-200 ${className}`}
      {...rest}
    >
      <SvgLogo />
    </Link>
  );
}
