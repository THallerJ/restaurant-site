import { instagram, facebook, twitter } from "../assets";

type SocialMediaIconsProps = {
  styles?: string;
  iconStyles?: string;
};

const SocialMediaIcons = ({ styles, iconStyles }: SocialMediaIconsProps) => {
  return (
    <div className={styles}>
      <a href="https://instagram.com" target="_blank" rel="noreferrer noopener">
        <img src={instagram} className={iconStyles} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer noopener">
        <img src={facebook} className={iconStyles} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer noopener">
        <img src={twitter} className={iconStyles} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
