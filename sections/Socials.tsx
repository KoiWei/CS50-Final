import Icons from "../components/Icons";

function Socials() {
  return (
    <div className="mb-[50px] flex items-center gap-12">
      <a href="https://github.com/KoiWei" target="_blank">
        <Icons name={"github"} size={30} />
      </a>
      <a href="https://www.linkedin.com/in/jinlin-wei-koi19/" target="_blank">
        <Icons name={"linkedin"} size={30} />
      </a>
      <a href="mailto:weijinlinkoi@gmail.com" target="_blank">
        <Icons name={"mail"} size={25} />
      </a>
    </div>
  );
}

export default Socials;
