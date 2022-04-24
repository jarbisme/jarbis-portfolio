import ContactLinks from "./ContactLinks";

function Footer() {
  return (
    <footer id="footer">
      <h2>Do you have a project or a job offer?</h2>
      <p>
        Contact me through email, telegram, whatsapp or give me a phone call.
      </p>
      <ContactLinks />
      <p id="copyright">Copyright © 2022 JArBis</p>
    </footer>
  );
}

export default Footer;
