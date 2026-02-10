import { useNavigate } from "react-router-dom";
import readyToWearData from "../data/readyToWearData";

const ReadyToWearSection = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">READY TO WEAR</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
        {Object.entries(readyToWearData).map(([slug, item]) => (
          <div
            key={slug}
            className="flex flex-col items-center cursor-pointer transition transform hover:scale-105"
            onClick={() => navigate(`/ready-to-wear/${slug}`)}
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg hover:shadow-xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-lg font-semibold text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReadyToWearSection;
