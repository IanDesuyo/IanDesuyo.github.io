import { Wrap, Button, Icon, Link } from "@chakra-ui/react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { SiAnilist } from "react-icons/si";
import { BsDiscord } from "react-icons/bs";

const LinkButton = ({ icon, url, text }) => {
  return (
    <Link
      href={url}
      sx={{
        ":hover": { textDecoration: "none" },
      }}
    >
      <Button leftIcon={icon} w="100px">
        {text}
      </Button>
    </Link>
  );
};

const SocialMedia = () => {
  return (
    <Wrap spacing={3}>
      <LinkButton
        icon={<Icon as={AiFillGithub} />}
        url="https://github.com/IanDesuyo"
        text="Github"
      />
      <LinkButton icon={<Icon as={AiOutlineMail} />} url="mailto:ian@randosoru.me" text="Email" />
      <Button leftIcon={<Icon as={BsDiscord} />} w="100px" onClick={() => alert("Ian#5898")}>
        Discord
      </Button>
      <LinkButton
        icon={<Icon as={SiAnilist} />}
        url="https://anilist.co/user/IanDesuyo"
        text="AniList"
      />
    </Wrap>
  );
};

export default SocialMedia;
