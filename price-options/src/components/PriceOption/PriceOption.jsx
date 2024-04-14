import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-blue-500 rounded-md p-4 flex flex-col text-white">
            <h1 className="text-center">
                <span className="text-3xl font-extrabold">{price}</span>
            </h1>
            <h4 className="text-2xl text-center my-3">{name}</h4>
            <div className="pl-6 flex-grow">
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className="mt-12 bg-green-700 w-full  py-4 text-xl font-bold rounded-md hover:bg-green-900">Buy Now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;