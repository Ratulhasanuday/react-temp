import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    
        const priceOptions= [
          {
            "id": 1,
            "name": "Basic Membership",
            "features": [
              "Access to cardio area",
              "Access to weightlifting area",
              "Access to locker rooms",
              "Free Wi-Fi",
              "Limited access to group fitness classes",
              "10% discount on gym merchandise",
              "Access to online workout tracking app"
            ],
            "price": "$29.99/month"
          },
          {
            "id": 2,
            "name": "Standard Membership",
            "features": [
              "Access to all basic membership features",
              "Access to group fitness classes",
              "Access to sauna",
              "Discounts on personal training sessions",
              "Access to swimming pool",
              "Access to basketball court",
              "Access to racquetball courts"
            ],
            "price": "$49.99/month"
          },
          {
            "id": 3,
            "name": "Premium Membership",
            "features": [
              "Access to all standard membership features",
              "24/7 gym access",
              "Free towel service",
              "Discounts on merchandise",
              "Access to exclusive VIP lounge",
              "Complimentary personal training session per month",
              "Free access to gym-sponsored events and workshops"
            ],
            "price": "$69.99/month"
          }
        ]
            
    return (
        <div className="m-12">
          <h1 className="text-5xl">Best Prices In The Town</h1>      
          <div className="grid md:grid-cols-3 gap-6 my-6">
          {
            priceOptions.map(option=><PriceOption key={option.id} option={option} ></PriceOption>)
          }
          </div>
        </div>
    );
};

export default PriceOptions;