import React from 'react'
import footer from "../../asset/footer.svg";

function Footer() {
  const footerYear = new Date().getFullYear()
  console.log(footerYear)
  return (
    <footer className="footer p-5 bg-gray-20 text-primary-content footer-center border-t-2">
      <div className="flex gap-2 text-gray-800 ">
        <img src={footer} alt="harsh" className="animate-pulse" />
        <p>copyright &copy; {footerYear} All right Reserved</p>
      </div>
    </footer>
  );
}

export default Footer
