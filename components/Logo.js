const Logo = ({ href }) => {
  if (href) {
    return (
      <Link href={href}>
        <a className={buttonClasses}>
          <ButtonArrowBody direction={direction} label={lang[direction]} />
        </a>
      </Link>
    );
  }
};
