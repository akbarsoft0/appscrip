import Image from "next/image";
import img1 from "@/public/icons/element-4.svg";
import Logo from "@/public/icons/Logo.svg";
import search from "@/public/icons/search-normal.svg";
import heart from "@/public/icons/heart.svg";
import profile from "@/public/icons/profile.svg";
import bag from "@/public/icons/shopping-bag.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="bg-black text-red-600 flex justify-evenly">
        <div className="flex gap-2">
          <Image src={img1} alt="icon" />
          <h6>Lorem ipsum dolor</h6>
        </div>
        <div className="flex gap-2">
          <Image src={img1} alt="icon" />
          <h6>Lorem ipsum dolor</h6>
        </div>
        <div className="flex gap-2">
          <Image src={img1} alt="icon" />
          <h6>Lorem ipsum dolor</h6>
        </div>
      </div>
      <div className="max-w-screen-2xl m-auto py-4 bg-white h-20 flex justify-between items-center">
        <Link href="/">
          <Image src={Logo} alt="Logo" />
        </Link>
        <h1 className="text-[3rem] font-bold uppercase">
          <Link href="/">logo</Link>
        </h1>
        <div className="flex gap-2 p-2">
          <Image src={search} alt="search" />
          <Link href="/favorite">
            <Image src={heart} alt="heart" />
          </Link>
          <Link href="/cart">
            <Image src={bag} alt="bag" />
          </Link>
          <Link href="user">
            <Image src={profile} alt="profile" />
          </Link>
          <select name="lang" id="lang" className="font-semibold uppercase">
            <option value="english">eng</option>
            <option value="hindi">hi</option>
            <option value="urdu">ur</option>
          </select>
        </div>
      </div>
      <nav className="flex justify-center align-baseline gap-14 border-b-2 py-3 font-semibold uppercase">
        <Link href="/">shop</Link>
        <Link href="/skills">skills</Link>
        <Link href="/stories">stories</Link>
        <Link href="/about">about</Link>
        <Link href="/contact">contact us</Link>
      </nav>
    </header>
  );
};

export default Header;
