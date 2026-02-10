import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import collectionData from "../data/collectionData";

const CollectionPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const collection = collectionData[type];

  if (!collection) return <h2 className="text-center mt-10">Collection Not Found</h2>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{collection.title}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collection.products.map((item) => (
         <div
  key={item.id}
  className="bg-white shadow-md rounded-xl cursor-pointer hover:shadow-xl transition"
  onClick={() => navigate(`/collection/${type}/${item.id}`)}
>
  {/* IMAGE BOX */}
  <div className=" h-[350px] flex items-center justify-center rounded-t-xl p-3">
    <img
      src={item.img}
      alt={item.name}
      className="w-full h-full object-contain"
    />
  </div>

  {/* INFO */}
  <div className="p-4">
    <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
    <p className="text-gray-700 font-medium">{item.price}</p>
  </div>
</div>


        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
