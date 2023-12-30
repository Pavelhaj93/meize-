import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LogoLink({ logoColor, className = "", ...rest }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="/">
      <a
        className={`inline-flex font-sans font-extrabold uppercase tracking-tighter text-4xl  ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...rest}
      >
        {/* <Image
          src={`/logos/meize-logo-${isHovered ? "orange" : logoColor}.svg`}
          width={150}
          height={100}
        /> */}
      </a>
    </Link>
  );
}
