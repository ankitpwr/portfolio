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
    <div className="mt-4 px-2 sm:px-4 flex flex-wrap gap-3">
      {availableContacts.map((contact) => {
        const IconComponent = contact.icon;

        return (
          <ContactBox
            key={contact.title}
            title={contact.title}
            link={contact.link}
          >
            <IconComponent
              size={18}
              className="transition-colors duration-300"
            />
          </ContactBox>
        );
      })}
    </div>
  );
}
