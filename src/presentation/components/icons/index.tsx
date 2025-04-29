import FaFacebook from "./FaFacebook";
import FaTwitter from "./FaTwitter";
import FaInstagram from "./FaInstagram";
import FaLinkedin from "./FaLinkedin";
import { FC } from "react";

type Icons = "facebook" | "twitter" | "instagram" | "linkedin";
export const Icons: FC<{ icon: Icons; className?: string }> = ({
  icon,
  className,
}) => {
  const selectedIcons = {
    facebook: <FaFacebook className={className} />,
    twitter: <FaTwitter className={className} />,
    instagram: <FaInstagram className={className} />,
    linkedin: <FaLinkedin className={className} />,
    default: <div></div>,
  };

  return selectedIcons[icon] || selectedIcons.default;
};
