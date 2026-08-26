import type { Icon } from "@phosphor-icons/react";
import {
  EnvelopeSimpleIcon,
  FileArrowDownIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";

export interface ContactData {
  title: string;
  link: string;
  icon: Icon;
}

export const Github: ContactData = {
  title: "Github",
  link: "https://github.com/ankitpwr",
  icon: GithubLogoIcon,
};

export const LinkedIn: ContactData = {
  title: "LinkedIn",
  link: "https://www.linkedin.com/in/ankit-panwar-30a997342/",
  icon: LinkedinLogoIcon,
};

export const Twitter: ContactData = {
  title: "Twitter",
  link: "https://x.com/ankit_pam",
  icon: XLogoIcon,
};

export const Email: ContactData = {
  title: "Email",
  link: "mailto:ankitpam321@gmail.com",
  icon: EnvelopeSimpleIcon,
};

export const Resume: ContactData = {
  title: "Resume",
  link: "https://drive.google.com/file/d/1bOBhZKAuGwKw4LohT-f8wBDefZjarzCh/view?usp=sharing",
  icon: FileArrowDownIcon,
};
