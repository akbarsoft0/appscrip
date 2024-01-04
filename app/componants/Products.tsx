import Image from "next/image";
import heart from "@/public/icons/heart.svg";
import arrow from "@/public/icons/arrow-left.svg";

const Products = async () => {
  let url = `https://fakestoreapi.com/products`;
  let res = await fetch(url);
  let data = await res.json();

  //   {
  //   id: 16,
  //   title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
  //   price: 29.95,
  //   description: '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
  //   category: "women's clothing",
  //   image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
  //   rating: { rate: 2.9, count: 340 }
  // },

  console.log(data);

  return (
    <section className="m-auto mt-10 max-w-screen-2xl">
      <div className="border-y my-6 border-gray-300 flex justify-between">
        <div className="flex">
          <h3 className="text-lg font-bold uppercase p-6">
            {data.length} items
          </h3>
          <button className="uppercase underline text-gray-300 p-6 flex align-bottom">
            <span className="flex p-1 rotate-180">
              <Image src={arrow} alt="arrow" className="rotate-90" />
            </span>
            show filter
          </button>
        </div>

        <select
          name="items"
          id="items"
          className="outline-none uppercase font-bold"
        >
          <option value="new">Newest first</option>
          <option value="popular">popular</option>
          <option value="htl">Price : high to low</option>
          <option value="lth">Price : low to high</option>
        </select>
      </div>
      <div className="grid col-span-6 grid-cols-2 md:grid-cols-4 gap-6">
        {data.map((e: any) => (
          <div
            className="bg-gray-300 bg-gradient-to-t from-gray-300 to-white text-black group"
            key={e.id}
          >
            <div className="w-300 h-[350px] grid place-content-center overflow-hidden">
              <Image
                src={e.image}
                alt={e.image}
                width={250}
                height={300}
                className="text mix-blend-multiply scale-75 hover:scale-100 duration-300 cursor-pointer"
              />
            </div>
            <div className="text-left p-4">
              <h2 className="h-7 truncate overflow-hidden">{e.title}</h2>
              <div className="flex gap-2">
                <h6 className="text-white text-sm ">
                  <a href="/" className="underline">
                    Sign in
                  </a>{" "}
                  or{" "}
                  <a href="/" className="underline">
                    Create an account
                  </a>
                  to see pricing
                </h6>{" "}
                <Image
                  src={heart}
                  alt="heart"
                  className="ms-auto hover:scale-110 cursor-pointer active:bg-black"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
