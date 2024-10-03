const SocialLink = (props) => {
  const { id, href, itemClass, icon } = props.data;
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
