import img from "../assets/img/ChocoLove-logos_whitee .png";
import img2 from "../assets/img/269dd16fa1f5ff51accd09e7e1602267.png";
import { FaShoppingBag } from "react-icons/fa";
import { CiHeart, CiUser, CiMenuFries } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";

function Header() {
  const icons = [FaShoppingBag, CiHeart, IoMdSearch, CiUser, CiMenuFries];
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Əgər klik menyunun içində deyilsə və açıqdırsa, bağla
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header">
      <figure className="logo">
        <img src={img} alt="Logo" />
      </figure>

      <div className="menu">
        {/* Burger Menu */}
        <figure className="burger" onClick={toggleMenu}>
          <img src={img2} alt="Menu" />
        </figure>

        {/* Menü bölməsi, isOpen-ə görə dəyişir */}
        <div ref={menuRef} className={isOpen ? "show-menu" : "ul"}>
          <p className={isOpen ? "activeP" : "logo"}>ChocoLove</p>
          <Navbar />
          <div className={isOpen ? "activeIcons" : "icons"}>
            {icons.map((Icon, index) => (
              <figure key={index}>
                <Icon />
              </figure>
            ))}
          </div>
        </div>
      </div>

      <nav>
        <Navbar />
      </nav>

      <div className="icons">
        {icons.map((Icon, index) => (
          <figure key={index}>
            <Icon />
          </figure>
        ))}
      </div>
    </div>
  );
}

export default Header;