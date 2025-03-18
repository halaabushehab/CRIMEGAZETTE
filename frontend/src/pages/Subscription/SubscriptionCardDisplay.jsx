// import React from 'react';
// import { useEffect,useState } from 'react';

// const subscriptionPlans = [
//   {
//     id: 1,
//     title: 'Monthly Subscription',
//     description: 'Access to exclusive content and in-depth crime reports.',
//     price: '$9.99',
//     duration: '1 month',
//     features: [
//       'Exclusive content',
//       'Instant alerts',
//       'Ad-free experience',
//     ],
//   },
//   {
//     id: 2,
//     title: 'Annual Subscription',
//     description: 'Best value for annual access with extra features and exclusive reports.',
//     price: '$99.99',
//     duration: '12 months',
//     features: [
//       'Exclusive content',
//       'Instant alerts',
//       'Ad-free experience',
//       'Monthly curated magazine',
//     ],
//   },
// ];

// const SubscriptionCard = ({ plan }) => {
//   return (
//     <div className="bg-black text-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 animate-fadeIn">
//       <div className="p-6 border-b border-red-600">
//         <h3 className="text-2xl font-bold text-red-500">{plan.title}</h3>
//         <p className="mt-2 text-sm">{plan.description}</p>
//       </div>
//       <div className="p-6">
//         <div className="flex justify-between items-center">
//           <span className="text-lg font-semibold text-red-500">{plan.price}</span>
//           <span className="text-sm text-gray-300">{plan.duration}</span>
//         </div>
//         <ul className="mt-4 space-y-2">
//           {plan.features.map((feature, index) => (
//             <li key={index} className="flex items-center">
//               <span className="w-2 h-2 bg-red-500 rounded-full inline-block mr-2"></span>
//               <span>{feature}</span>
//             </li>
//           ))}
//         </ul>
//         <button className="mt-6 w-full py-2 bg-red-500 hover:bg-red-600 transition duration-300 rounded">
//           Subscribe Now
//         </button>
//       </div>
//     </div>
//   );
// };

// const SubscriptionCardDisplay = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center p-4">
//       <h1 className="text-3xl font-bold text-red-500 mb-8 animate-bounce">
//         Exclusive Subscription Plans
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
//         {subscriptionPlans.map((plan) => (
//           <SubscriptionCard key={plan.id} plan={plan} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SubscriptionCardDisplay;




// import React from 'react';

// const subscriptionPlans = [
//   {
//     id: 1,
//     title: 'Monthly Subscription',
//     description: 'Access to exclusive content and in-depth crime reports.',
//     price: '$9.99',
//     duration: '1 month',
//     features: [
//       'Exclusive content',
//       'Instant alerts',
//       'Ad-free experience',
//     ],
//   },
//   {
//     id: 2,
//     title: 'Annual Subscription',
//     description: 'Best value for annual access with extra features and exclusive reports.',
//     price: '$99.99',
//     duration: '12 months',
//     features: [
//       'Exclusive content',
//       'Instant alerts',
//       'Ad-free experience',
//       'Monthly curated magazine',
//     ],
//   },
// ];

// const SubscriptionCard = ({ plan }) => {
//   return (
//     <div className="bg-screen-dark text-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 animate-fadeIn">
//       <div className="p-6 border-b border-screen-red">
//         <h3 className="text-2xl font-bold text-screen-red">{plan.title}</h3>
//         <p className="mt-2 text-sm">{plan.description}</p>
//       </div>
//       <div className="p-6">
//         <div className="flex justify-between items-center">
//           <span className="text-lg font-semibold text-screen-red">{plan.price}</span>
//           <span className="text-sm text-gray-300">{plan.duration}</span>
//         </div>
//         <ul className="mt-4 space-y-2">
//           {plan.features.map((feature, index) => (
//             <li key={index} className="flex items-center">
//               <span className="w-2 h-2 bg-screen-red rounded-full inline-block mr-2"></span>
//               <span>{feature}</span>
//             </li>
//           ))}
//         </ul>
//         <button className="mt-6 w-full py-2 bg-screen-red hover:bg-opacity-80 transition duration-300 rounded">
//           Subscribe Now
//         </button>
//       </div>
//     </div>
//   );
// };

// const SubscriptionCardDisplay = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center p-4">
//       <h1 className="text-3xl font-bold text-screen-red mb-8 animate-bounce">
//         Exclusive Subscription Plans
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
//         {subscriptionPlans.map((plan) => (
//           <SubscriptionCard key={plan.id} plan={plan} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SubscriptionCardDisplay;




import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";


const SubscriptionCard = ({ plan }) => {
  return (
    <div className="bg-screen-dark text-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 animate-fadeIn">
      <div className="p-6 border-b border-screen-red">
        <h3 className="text-2xl font-bold text-screen-red">{plan.title}</h3>
        <p className="mt-2 text-sm">{plan.description}</p>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-screen-red">{plan.price}</span>
          <span className="text-sm text-gray-300">{plan.duration}</span>
        </div>
        <ul className="mt-4 space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-screen-red rounded-full inline-block mr-2"></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button className="mt-6 w-full py-2 bg-screen-red hover:bg-opacity-80 transition duration-300 rounded">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

const SubscriptionCardDisplay = () => {
  const { t } = useTranslation();
  const [subscriptionCards, setSubscriptionCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    fetch("http://localhost:5000/api/subscription")
      .then((res) => res.json())
      .then((data) => {
        setSubscriptionCards(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching subscription cards:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="min-h-screen flex justify-center items-center">{t("Loading...")}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-screen-red mb-8 animate-bounce">
        {t("exclusivePlans")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {subscriptionCards.map((card) => (
          <SubscriptionCard key={card._id} plan={card} />
        ))}
      </div>
    </div>
  );
};

export default SubscriptionCardDisplay;










// import React, { useState } from 'react';

// const AdminSubscriptionCreationForm = () => {
//   const [planTitle, setPlanTitle] = useState('');
//   const [planDescription, setPlanDescription] = useState('');
//   const [planPrice, setPlanPrice] = useState('');
//   const [planDuration, setPlanDuration] = useState('');
//   const [planFeatures, setPlanFeatures] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const subscriptionPlan = {
//       title: planTitle,
//       description: planDescription,
//       price: planPrice,
//       duration: planDuration,
//       features: planFeatures.split('\n').filter(feature => feature.trim() !== ''),
//     };

//     console.log('Subscription Plan:', subscriptionPlan);
//     // Here you can send the data to an API using fetch or axios
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
//       <h2 className="text-2xl font-bold mb-6 text-center">Create New Subscription Plan</h2>
//       <form onSubmit={handleSubmit} className="space-y-5">
//         {/* Plan Title */}
//         <div>
//           <label htmlFor="planTitle" className="block mb-2 text-sm font-medium text-gray-700">
//             Plan Title:
//           </label>
//           <input
//             type="text"
//             id="planTitle"
//             name="planTitle"
//             value={planTitle}
//             onChange={(e) => setPlanTitle(e.target.value)}
//             required
//             placeholder="Enter plan title"
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//           />
//         </div>

//         {/* Plan Description */}
//         <div>
//           <label htmlFor="planDescription" className="block mb-2 text-sm font-medium text-gray-700">
//             Plan Description:
//           </label>
//           <textarea
//             id="planDescription"
//             name="planDescription"
//             value={planDescription}
//             onChange={(e) => setPlanDescription(e.target.value)}
//             required
//             placeholder="Enter plan description"
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//           ></textarea>
//         </div>

//         {/* Plan Price */}
//         <div>
//           <label htmlFor="planPrice" className="block mb-2 text-sm font-medium text-gray-700">
//             Price (in USD):
//           </label>
//           <input
//             type="number"
//             id="planPrice"
//             name="planPrice"
//             value={planPrice}
//             onChange={(e) => setPlanPrice(e.target.value)}
//             required
//             placeholder="Enter plan price"
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//           />
//         </div>

//         {/* Plan Duration */}
//         <div>
//           <label htmlFor="planDuration" className="block mb-2 text-sm font-medium text-gray-700">
//             Duration (in months):
//           </label>
//           <input
//             type="number"
//             id="planDuration"
//             name="planDuration"
//             value={planDuration}
//             onChange={(e) => setPlanDuration(e.target.value)}
//             required
//             placeholder="Enter duration of subscription"
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//           />
//         </div>

//         {/* Plan Features */}
//         <div>
//           <label htmlFor="planFeatures" className="block mb-2 text-sm font-medium text-gray-700">
//             Features:
//           </label>
//           <textarea
//             id="planFeatures"
//             name="planFeatures"
//             value={planFeatures}
//             onChange={(e) => setPlanFeatures(e.target.value)}
//             placeholder="Enter features (each feature on a new line)"
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//           ></textarea>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-300"
//         >
//           Create Plan
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminSubscriptionCreationForm;
