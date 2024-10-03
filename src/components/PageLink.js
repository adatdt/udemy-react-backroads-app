const PageLink = (props) => {
  const link = props.data;
  return (
    <li>
      <a href={link.href} className={link.itemClass}>
        {link.text}
      </a>
    </li>
  );
};

export default PageLink;
