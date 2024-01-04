import Heading from "@/app/componants/Heading";
import Image from "next/image";
import Products from "./componants/Products";

export default function Home() {
  return (
    <main className="py-10 text-center">
      <Heading />
      <Products />
    </main>
  );
}
