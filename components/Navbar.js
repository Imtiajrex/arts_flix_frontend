import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { RiAuctionLine, RiCompassDiscoverLine } from "react-icons/ri";
import { BiPaint } from "react-icons/bi";
import { FiSunset } from "react-icons/fi";
import { FaUserAstronaut } from "react-icons/fa";

export default function Navbar({ id }) {
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="brand">
          <FiSunset />
        </div>
        <div className="menu">
          <Link href="/">
            <div className={`item ${id == 1 ? "active" : ""}`}>
              {/* <AiOutlineHome /> */}
              <small>home</small>
            </div>
          </Link>
          <Link href="/discover">
            <div className={`item ${id == 2 ? "active" : ""}`}>
              {/* <RiCompassDiscoverLine /> */}
              <small>discover</small>
            </div>
          </Link>
          <Link href="/auction">
            <div className={`item ${id == 3 ? "active" : ""}`}>
              {/* <RiAuctionLine /> */}
              <small>auction</small>
            </div>
          </Link>
          <Link href="/paint">
            <div className={`item ${id == 4 ? "active" : ""}`}>
              {/* <BiPaint /> */}
              <small>paint</small>
            </div>
          </Link>
          <Link href="/user">
            <div className={`item ${id == 5 ? "active" : ""}`}>
              {/* <FaUserAstronaut /> */}
              <small>profile</small>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
