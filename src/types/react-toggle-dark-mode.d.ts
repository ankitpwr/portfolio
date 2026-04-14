declare module "react-toggle-dark-mode" {
  import { FC } from "react";

  interface DarkModeSwitchProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    size?: number;
    sunColor?: string;
    moonColor?: string;
    [key: string]: any;
  }

  export const DarkModeSwitch: FC<DarkModeSwitchProps>;
}
