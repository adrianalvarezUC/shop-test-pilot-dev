import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-muted/40">
    <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:justify-between">
      <p>&copy; {new Date().getFullYear()} Usercentrics Test Store</p>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <Link to="/cart" className="hover:text-foreground">Cart</Link>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </div>
  </footer>
);

export default Footer;
