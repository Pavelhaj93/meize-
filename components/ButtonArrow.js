import Link from "next/link";
import { useRouter } from "next/router";
import { getLocaleStrings } from "../helpers/languages";
import SvgArrow from "./svg/SvgArrow";

function ButtonArrowBody({ direction, label }) {
  if (direction === "previous") {
    return (
      <>
        <span>
          <SvgArrow direction="left" width={40} />
        </span>
        <span className="text-xl">{label}</span>
      </>
    );
  }

  return (
    <>
      <span className="text-xl">{label}</span>
      <span>
        <SvgArrow direction="right" width={40} />
      </span>
    </>
  );
}

export default function ButtonArrow({
  href,
  direction = "next",
  className = "",
  ...rest
}) {
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
}
