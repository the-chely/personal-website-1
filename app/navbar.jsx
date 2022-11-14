"use client";
import Link from "next/link";
("use client");

import { usePathname } from "next/navigation";
import { useNavContext } from "../context/navbar";

export default function Nav() {
  const currentRoute = usePathname();
  const [isNavExpanded, setIsNavExpanded] = useNavContext();

  return (
    <div className={isNavExpanded ? "aside open" : "aside"}>
      <div className="logo">
        <Link
          href="/"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <p className="logo-text">mertushka</p>
        </Link>
      </div>

      <div
        className={isNavExpanded ? "nav-toggler open" : "nav-toggler"}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <span></span>
      </div>

      <ul className={isNavExpanded ? "nav open" : "nav"}>
        <li>
          <Link
            href="/"
            className={currentRoute === "/" ? "active" : ""}
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <svg className="icon icon-home">
              <use xlinkHref="#icon-home"></use>
            </svg>
            &nbsp;Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={currentRoute === "/about" ? "active" : ""}
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <svg className="icon icon-user">
              <use xlinkHref="#icon-user"></use>
            </svg>
            &nbsp;About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={currentRoute === "/contact" ? "active" : ""}
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <svg className="icon icon-bubbles2">
              <use xlinkHref="#icon-bubbles2"></use>
            </svg>
            &nbsp;Contact
          </Link>
        </li>
      </ul>

      <div className="copyright-text">
        &copy; {new Date().getFullYear()} mertushka.codes
      </div>
    </div>
  );
}