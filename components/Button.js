import Link from "next/link";

export default function Button({
  href,
  children,
  theme = "ghost",
  size = "custom",
  textSize = "small",
  className = "",
  padding = "custom",
  ...rest
}) {
  const buttonClasses = [
    "inline-flex border w-full items-center justify-center transition-colors duration-300",
  ];

  switch (theme) {
    case "primary":
      buttonClasses.push(
        "bg-primary border-2 border-primary text-white mouse-hover:bg-transparent mouse-hover:text-primary"
      );
      break;
    case "secondary":
      buttonClasses.push(
        "bg-black border-black text-white mouse-hover:bg-primary mouse-hover:border-primary"
      );
      break;
    case "ghost":
    default:
      buttonClasses.push(
        "bg-transparent border-black mouse-hover:bg-black mouse-hover:text-white"
      );
      break;
  }

  switch (size) {
    case "big":
      buttonClasses.push("max-w-[300px]");
      break;
    case "small":
      buttonClasses.push("max-w-[150px]");
      break;
    default:
      buttonClasses.push("max-w-none");
      break;
  }

  switch (textSize) {
    case "big":
      buttonClasses.push(
        "font-sans-alt text-xl leading-none font-bold uppercase tracking-tight"
      );
      break;
    case "tiny":
      buttonClasses.push("text-sm leading-none");
      break;
    case "small":
    default:
      buttonClasses.push("text-base leading-none");
      break;
  }

  switch (padding) {
    case "none":
      buttonClasses.push("p-0");
      break;
    case "small":
      buttonClasses.push("p-2");
      break;
    case "big":
      buttonClasses.push("p-4");
      break;
    default:
      break;
  }

  buttonClasses.push(className);

  if (href) {
    return (
      <Link href={href}>
        <a className={buttonClasses.join(" ")} {...rest}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button className={buttonClasses.join(" ")} {...rest}>
      {children}
    </button>
  );
}
