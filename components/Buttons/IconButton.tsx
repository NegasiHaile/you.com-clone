// Types
import { IconButtonProps } from "@/types";

import { Icon } from "../Utils";

const IconButton = ({
  iconName,
  onClick,
  className,
  iconStyle,
}: IconButtonProps) => {
  return (
    <button className={`icon__button ${className}`} onClick={onClick}>
      <Icon name={iconName} className={iconStyle ?? "w-6 h-6"} />
    </button>
  );
};

export default IconButton;
