import React from "react";

function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 p-4 text-base-content">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          <a
            className="btn-link ml-2"
            href="https://github.com/mirzoulugbek9008"
            target="_blank"
          >
            Mirzo Ulugbek Khudoyberdiyev
          </a>
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
