import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}-Mulik-Shrikant-Dattatray</p>
    </footer>
  );
}

export default Footer;