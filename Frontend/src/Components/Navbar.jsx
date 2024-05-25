import { Link } from "react-router-dom";

const links = [
  {
    to: "/",
    label: "HOME",
  },
  {
    to: "/about",
    label: "ABOUT",
  },
  {
    to: "/login",
    label: "LOGIN",
  },
  {
    to: "/contact",
    label: "CONTACT",
  },
];

const Navbar = () => {
  return (
    <>
      {links.map((link) => (
        <Link key={link.to} to={link.to}>
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
