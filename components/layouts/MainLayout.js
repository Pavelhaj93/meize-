import Head from "next/head";
import { useRouter } from "next/router";
import { getLocaleStrings } from "../../helpers/languages";
import { generateTitle } from "../../helpers/meta";
import Nav from "../Nav";

export default function MainLayout({
  children,
  title,
  description,
  theme = "black",
  className = "",
  paddingTop = true,
  ...rest
}) {
  const lang = getLocaleStrings(useRouter().locale, "og");

  return (
    <>
      <Head>
        <title>{generateTitle(title, lang.title)}</title>
      </Head>
      <div
        className={`min-h-screen flex flex-col ${
          paddingTop ? "pt-[105px] sm:pt-[115px]" : ""
        } ${className}`}
        {...rest}
      >
        <Nav theme={theme} />
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
}
