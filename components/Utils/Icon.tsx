import { IconProps } from "@/types";

const Icon = ({
  name,
  viewBox,
  strokeWidth,
  outline,
  className,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={outline ? "filled" : "none"}
      viewBox={viewBox ?? "0 0 24 24"}
      strokeWidth={strokeWidth ?? 2.5}
      stroke="currentColor"
      className={` ${className ?? "w-4 h-4"}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={name} />
    </svg>
  );
};

export default Icon;
