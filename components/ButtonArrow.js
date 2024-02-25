import Link from "next/link";
import { useRouter } from "next/router";
import { getLocaleStrings } from "../helpers/languages";
import SvgArrow from "./svg/SvgArrow";

function ButtonArrowBody({ direction, label }) {
  if (direction === "previous") {
    return (
      <>
        <span className="sm:hidden">
          <SvgArrow direction="left" size="small" />
        </span>
        <span className="hidden md:block">
          <SvgArrow direction="left" size="large" />
        </span>
        <span className="text-xl">{label}</span>
      </>
    );
  }

  return (
    <>
      <span className="text-xl">{label}</span>
      <span className="sm:hidden">
        <SvgArrow direction="right" size="small" />
      </span>
      <span className="hidden md:block">
        <SvgArrow direction="right" size="large" />
      </span>
    </>
  );
}

const ButtonArrow = ({ href, direction = "next", className = "", ...rest }) => {
  // const { isMobile } = useViewportWidth();
  const lang = getLocaleStrings(useRouter().locale, "common");
  const buttonClasses = `uppercase font-bold inline-flex items-center gap-4 mouse-hover:text-primary mouse-hover:gap-2 transition-all duration-300 rounded-none ${
    direction === "next"
      ? "mouse-hover:translate-x-2"
      : "mouse-hover:-translate-x-2"
  } ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <a className={buttonClasses}>
          <ButtonArrowBody direction={direction} label={lang[direction]} />
        </a>
      </Link>
    );
  }

  return (
    <button {...rest} className={buttonClasses}>
      <ButtonArrowBody direction={direction} />
    </button>
  );
};

export default ButtonArrow;
