import {
  EnvelopeSimpleIcon,
  FileArrowDownIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import ContactBox from "./contact-box";

export default function Contacts() {
  return (
    <div className="  mt-12 flex flex-col gap-4 ">
      <h1 className="text-xl">Contacts</h1>
      <div className=" flex  gap-3 ">
        <ContactBox title="Twitter" link="//https://x.com/ankit_pam">
          {" "}
          <XLogoIcon size={20} />
        </ContactBox>
        <ContactBox title="Github" link="//https://x.com/ankit_pam">
          {" "}
          <GithubLogoIcon size={20} />
        </ContactBox>

        <ContactBox title="Email" link="//https://x.com/ankit_pam">
          {" "}
          <EnvelopeSimpleIcon size={20} />
        </ContactBox>

        <ContactBox title="Linkedin" link="//https://x.com/ankit_pam">
          {" "}
          <LinkedinLogoIcon size={20} />
        </ContactBox>

        <ContactBox title="Resume" link="//https://x.com/ankit_pam">
          {" "}
          <FileArrowDownIcon size={20} />
        </ContactBox>
      </div>
    </div>
  );
}
