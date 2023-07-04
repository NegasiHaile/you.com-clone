import { Box, Icon } from "../Utils";
import Link from "next/link";

export interface NavItemProps {
  href: string;
  title: string;
  icon?: string;
  className?: string;
  onClick?: any;
}

const NavItem = ({
  href,
  title,
  icon,
  className,
  onClick,
  ...others
}: NavItemProps) => {
  return (
    <Link href={href} onClick={onClick}>
      <Box
        className={`flex items-center text-sm space-x-1 font-semibold hover:text-blue-500 pb-1 ${className}`}
        {...others}
      >
        {icon ? <Icon name={icon} /> : ""}
        <span>{title}</span>
      </Box>
    </Link>
  );
};

export default NavItem;
