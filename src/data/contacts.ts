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
  link: "https://github.com/ankit_pam",
  icon: GithubLogoIcon,
};

export const LinkedIn: ContactData = {
  title: "LinkedIn",
  link: "https://linkedin.com/in/ankit_pam",
  icon: LinkedinLogoIcon,
};

export const Twitter: ContactData = {
  title: "Twitter",
  link: "https://x.com/ankit_pam",
  icon: XLogoIcon,
};

export const Email: ContactData = {
  title: "Email",
  link: "mailto:ankit@example.com",
  icon: EnvelopeSimpleIcon,
};

export const Resume: ContactData = {
  title: "Resume",
  link: "https://example.com/resume.pdf",
  icon: FileArrowDownIcon,
};
