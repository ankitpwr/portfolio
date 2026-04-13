import {
  EnvelopeSimpleIcon,
  FileArrowDownIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import ContactBox from "./contact-box";
import {
  Email,
  Github,
  LinkedIn,
  Resume,
  Twitter,
  type ContactData,
} from "@/data/contacts";

export default function Contacts() {
  const availableContacts: ContactData[] = [
    Github,
    Twitter,
    LinkedIn,
    Email,
    Resume,
  ];
  return (
    <div className=" mt-4 flex  gap-3">
      {availableContacts.map((contact) => {
        const IconComponent = contact.icon;

        return (
          <ContactBox title={contact.title} link={contact.link}>
            {" "}
            <IconComponent size={18} />
          </ContactBox>
        );
      })}
    </div>
  );
}
