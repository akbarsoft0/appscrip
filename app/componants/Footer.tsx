import Image from "next/image";
import us from "@/public/icons/United States of America (US).svg";
import instagram from "@/public/foot/Frame.svg";
import fram from "@/public/foot/Frame 136278.svg";
import linkdn from "@/public/foot/mdi_linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-[4rem]">
      <div className="max-w-screen-2xl m-auto md:flex justify-between">
        <div>
          <h4 className="uppercase font-semibold text-lg">
            Be the first to know
          </h4>
          <p className="font-mono text-gray-300 py-2">
            Sign up for updates from mettā muse.
          </p>
          <input type="email" className="w-[25rem] p-2 me-2 my-8 text-black" />
          <button className="border border-gray-300 rounded-sm p-2 px-20 uppercase ">
            subscribe
          </button>
        </div>
        <div>
          <h4 className="uppercase font-semibold text-lg">contact us</h4>
          <p className="py-2 text-gray-300">+44 221 133 5360</p>
          <a href="mail:customercare@mettamuse.com" className="text-gray-300">
            customercare@mettamuse.com
          </a>
          <h4 className="uppercase font-semibold text-lg py-2">Currency</h4>
          <div className="flex align-bottom gap-2 my-2">
            <Image src={us} alt="us" className="w-8 h-8 rounded" />
            <span>*</span>
            <h3 className="text-xl uppercase">usd</h3>
          </div>
          <p className="font-mono text-gray-300">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <div className="max-w-screen-2xl m-auto my-4 py-10 border-t border-t-1 border-gray-300 md:flex justify-between">
        <div>
          <h3 className="font-semibold text-xl mb-4">mettā muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Follow Us</h3>
          <div className="flex gap-2 my-2 mb-4">
            <Image
              src={linkdn}
              alt="linkdn"
              className="border w-8 h-8 p-1 rounded-full"
            />
            <Image
              src={instagram}
              alt="instagram"
              className="border w-8 h-8 p-1 rounded-full"
            />
          </div>
          <h3 className="font-semibold text-xl mb-4">mettā muse Accepts</h3>
          <Image src={fram} alt="linkdn" />
        </div>
      </div>
      <h6 className="text-center">
        Copyright © 2023 mettamuse. All rights reserved.
      </h6>
    </footer>
  );
};

export default Footer;
