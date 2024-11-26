
const StatisticCard = ({ title, amount, img }) => {
    return (
      <div className="card-item bg-gray-800 p-4 rounded-md">
        <div className="flex gap-x-2">
          <div className="rounded-full bg-white w-12 h-12 p-2">
            <img src={img} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="text-white">
            <p className="mb-1 text-sm font-medium text-gray-400">{title}</p>
            <p className="text-lg font-semibold text-gray-200">{amount}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default StatisticCard;