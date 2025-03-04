


function PricingCard({ title, price, features }) {
  return (
    <div className="pricing-card p-8 rounded-lg bg-gray-700 shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
      <h3 className="text-2xl font-semibold text-blue-400 mb-4">{title}</h3>
      <p className="text-4xl font-bold my-4 neon-price">{price}</p>
      <ul className="text-gray-300 space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center justify-center space-x-2">
            <span className="text-green-400">✔</span> <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className=" mt-4">Choose Plan</button>
    </div>
  );
}



const Pricing = () => {
    return ( <>
     <section className="text-center py-16 bg-gray-800">
        <h2 className="text-4xl font-semibold neon-text">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
          <PricingCard title="Starter" price="$9.99/month" features={["Basic AI Content", "1 Social Account", "Standard Analytics"]} />
          <PricingCard title="Pro" price="$29.99/month" features={["Advanced AI", "Up to 5 Social Accounts", "AI-Powered Ads"]} />
          <PricingCard title="Enterprise" price="Custom" features={["Unlimited Access", "Full Automation", "Priority Support"]} />
        </div>
      </section>
     </> );
}
 
export default Pricing;


