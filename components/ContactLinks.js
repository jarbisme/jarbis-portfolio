/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
function ContactLinks() {
  return (
    <div className="links">
      <a
        href="mailto:joseangelb2371@gmail.com?subject=Hi, i'm coming from your website"
        target="_blank"
      >
        Email
      </a>
      <a href="https://dribbble.com/jarb314" target="_blank">
        Dribble
      </a>
      <a href="https://codepen.io/jarb314" target="_blank">
        Codepen
      </a>
      <a
        href="https://www.linkedin.com/in/jos%C3%A9-angel-bautista-r-0304501ab"
        target="_blank"
      >
        LinkedIn
      </a>
      <a
        id="profile-link"
        className="navbar-link"
        href="https://github.com/jarb314"
        target="_blank"
      >
        GitHub
      </a>
    </div>
  );
}

export default ContactLinks;
