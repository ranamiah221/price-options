import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {
    const {name,price,featured}=option;
    return (
        <div className="bg-blue-500 text-white p-6 rounded-md flex flex-col">
            <h1 className="text-center mb-3">
                <span className="text-5xl font-extrabold">{price}</span><span>Per/Month</span>
            </h1>
            <h2 className="text-4xl font-medium mb-4 text-center">{name}</h2>
            <div className="flex-grow">
                {
                    featured.map((feature,idx)=><Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className="bg-green-500 p-3 text-xl font-medium w-full rounded-lg mt-6 hover:bg-green-900">Buy Now</button>
        </div>
    );
};

export default PriceOption;