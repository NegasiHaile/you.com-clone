import { Icon } from "../Utils";
import Link from "next/link";

export interface NavItemProps {
  href: string;
  title: string;
  icon?: string;
  className?: string;
  onClick?: any;
  navItemStyle?: string;
}

const NavItem = ({
  href,
  title,
  icon,
  className,
  onClick,
  navItemStyle,
  ...others
}: NavItemProps) => {
  return (
    <Link href={href} onClick={onClick} className={` ${className}`}>
      <div className={`nav_item nav_text`} {...others}>
        {icon ? <Icon name={icon} /> : ""}
        <span>{title}</span>
      </div>
      <div className={`nav_border`}> </div>
    </Link>
  );
};

export default NavItem;
