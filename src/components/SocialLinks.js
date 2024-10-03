import { socialLinks } from "../data";
import SocialLink from "./SocialLink";
const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return <SocialLink data={{ ...link, itemClass }} key={link.id} />;
      })}
    </ul>
  );
};

export default SocialLinks;
