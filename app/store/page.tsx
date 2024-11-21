import { productsArr } from "@/data/Mangodata";

export default function page() {
  return (
    <div className="grid md:grid-cols-2  items-center gap-3">
      {productsArr.map((items, index) => (
        <div key={index} className=" rounded-md shadow-xl p-2">
          <h1 className="text-center text-xl font-semibold">
            {items.catagory.title}
          </h1>   
          <div
            
            className="grid gap-2 grid-cols-2 md:grid-cols-3  py-3 px-2 "
          >
            {items.catagory.productsData.map((list, i) => (
              <div key={i} className="border p-2 rounded-md shadow-lg">
                <h1 className="text-2xl text-green-500 py-2">{list.name}</h1>
                <h1>{list.desc}</h1>
                <h1 className="text-emerald-500 bg-emerald-100 p-2 rounded-md text-center w-fit mx-auto">
                  {list.price} Taka
                </h1>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
