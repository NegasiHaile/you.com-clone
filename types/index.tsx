export interface DarkModeTypes {
  darkMode?: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SidebarTypes {
  showSidebar?: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IconProps {
  name: string;
  viewBox?: string;
  strokeWidth?: number;
  outline?: boolean;
  className?: string;
}

export interface IconButtonProps {
  iconName: string;
  onClick: () => void;
  className?: string;
  iconStyle?: string;
}

export interface ButtonProps {
  title?: string;
  className?: string;
  onClick: () => void;
}
