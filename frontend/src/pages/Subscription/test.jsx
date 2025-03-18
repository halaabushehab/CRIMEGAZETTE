// // // // import React, { useState } from "react";
// // // // import axios from "axios";

// // // // const SubscriptionCardForm = () => {
// // // //   const [title, setTitle] = useState("");
// // // //   const [description, setDescription] = useState("");
// // // //   const [price, setPrice] = useState("");
// // // //   const [duration, setDuration] = useState("");
// // // //   const [features, setFeatures] = useState("");
// // // //   const [message, setMessage] = useState("");

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();


// // // //     const featuresArray = features.split(",").map((feature) => feature.trim());

// // // //     const newCard = {
// // // //       title,
// // // //       description,
// // // //       price,
// // // //       duration,
// // // //       features: featuresArray,
// // // //     };

// // // //     try {
// // // //       const res = await axios.post("http://localhost:5000/api/subscription", newCard);
// // // //       if (res.status === 201) {
// // // //         setMessage("Subscription card created successfully!");
// // // //         setTitle("");
// // // //         setDescription("");
// // // //         setPrice("");
// // // //         setDuration("");
// // // //         setFeatures("");
// // // //       } else {
// // // //         setMessage("Error creating subscription card.");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Error creating subscription card:", error);
// // // //       setMessage("Error creating subscription card.");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
// // // //       <h2 className="text-2xl font-bold mb-4 text-screen-red">Add Subscription Card</h2>
// // // //       {message && <p className="mb-4 text-center">{message}</p>}
// // // //       <form onSubmit={handleSubmit}>
// // // //         <div className="mb-4">
// // // //           <label className="block font-semibold mb-1">Title</label>
// // // //           <input
// // // //             type="text"
// // // //             className="w-full border rounded px-3 py-2"
// // // //             value={title}
// // // //             onChange={(e) => setTitle(e.target.value)}
// // // //             required
// // // //           />
// // // //         </div>

// // // //         <div className="mb-4">
// // // //           <label className="block font-semibold mb-1">Description</label>
// // // //           <textarea
// // // //             className="w-full border rounded px-3 py-2"
// // // //             value={description}
// // // //             onChange={(e) => setDescription(e.target.value)}
// // // //             required
// // // //           ></textarea>
// // // //         </div>

// // // //         <div className="mb-4">
// // // //           <label className="block font-semibold mb-1">Price</label>
// // // //           <input
// // // //             type="text"
// // // //             className="w-full border rounded px-3 py-2"
// // // //             value={price}
// // // //             onChange={(e) => setPrice(e.target.value)}
// // // //             required
// // // //           />
// // // //         </div>

// // // //         <div className="mb-4">
// // // //           <label className="block font-semibold mb-1">Duration</label>
// // // //           <input
// // // //             type="text"
// // // //             className="w-full border rounded px-3 py-2"
// // // //             value={duration}
// // // //             onChange={(e) => setDuration(e.target.value)}
// // // //             required
// // // //           />
// // // //         </div>

// // // //         <div className="mb-4">
// // // //           <label className="block font-semibold mb-1">
// // // //             Features <span className="text-sm">(comma separated)</span>
// // // //           </label>
// // // //           <input
// // // //             type="text"
// // // //             className="w-full border rounded px-3 py-2"
// // // //             value={features}
// // // //             onChange={(e) => setFeatures(e.target.value)}
// // // //             required
// // // //           />
// // // //         </div>

// // // //         <button
        
// // // //           type="submit"
// // // //           className="w-full bg-screen-red text-white py-2 rounded hover:bg-opacity-80 transition duration-300"
// // // //         >
// // // //           Add Subscription
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SubscriptionCardForm;
// // // // SubscriptionDashboard.js
// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";

// // // // Form component used for both creating and editing a subscription card.
// // // const SubscriptionCardForm = ({ onSubmit, initialData, onCancel }) => {
// // //   const [title, setTitle] = useState(initialData ? initialData.title : "");
// // //   const [description, setDescription] = useState(initialData ? initialData.description : "");
// // //   const [price, setPrice] = useState(initialData ? initialData.price : "");
// // //   const [duration, setDuration] = useState(initialData ? initialData.duration : "");
// // //   const [features, setFeatures] = useState(initialData ? initialData.features.join(", ") : "");

// // //   useEffect(() => {
// // //     if (initialData) {
// // //       setTitle(initialData.title);
// // //       setDescription(initialData.description);
// // //       setPrice(initialData.price);
// // //       setDuration(initialData.duration);
// // //       setFeatures(initialData.features.join(", "));
// // //     } else {
// // //       setTitle("");
// // //       setDescription("");
// // //       setPrice("");
// // //       setDuration("");
// // //       setFeatures("");
// // //     }
// // //   }, [initialData]);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     const featuresArray = features.split(",").map((feature) => feature.trim());
// // //     onSubmit({ title, description, price, duration, features: featuresArray });
// // //   };

// // //   return (
// // //     <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md my-4">
// // //       <h2 className="text-2xl font-bold mb-4">
// // //         {initialData ? "Edit Subscription Card" : "Add Subscription Card"}
// // //       </h2>
// // //       <form onSubmit={handleSubmit}>
// // //         <div className="mb-4">
// // //           <label className="block font-semibold mb-1">Title</label>
// // //           <input
// // //             type="text"
// // //             className="w-full border rounded px-3 py-2"
// // //             value={title}
// // //             onChange={(e) => setTitle(e.target.value)}
// // //             required
// // //           />
// // //         </div>
// // //         <div className="mb-4">
// // //           <label className="block font-semibold mb-1">Description</label>
// // //           <textarea
// // //             className="w-full border rounded px-3 py-2"
// // //             value={description}
// // //             onChange={(e) => setDescription(e.target.value)}
// // //             required
// // //           ></textarea>
// // //         </div>
// // //         <div className="mb-4">
// // //           <label className="block font-semibold mb-1">Price</label>
// // //           <input
// // //             type="text"
// // //             className="w-full border rounded px-3 py-2"
// // //             value={price}
// // //             onChange={(e) => setPrice(e.target.value)}
// // //             required
// // //           />
// // //         </div>
// // //         <div className="mb-4">
// // //           <label className="block font-semibold mb-1">Duration</label>
// // //           <input
// // //             type="text"
// // //             className="w-full border rounded px-3 py-2"
// // //             value={duration}
// // //             onChange={(e) => setDuration(e.target.value)}
// // //             required
// // //           />
// // //         </div>
// // //         <div className="mb-4">
// // //           <label className="block font-semibold mb-1">
// // //             Features <span className="text-sm">(comma separated)</span>
// // //           </label>
// // //           <input
// // //             type="text"
// // //             className="w-full border rounded px-3 py-2"
// // //             value={features}
// // //             onChange={(e) => setFeatures(e.target.value)}
// // //             required
// // //           />
// // //         </div>
// // //         <div className="flex gap-4">
// // //           <button
// // //             type="submit"
// // //             className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-opacity-80 transition duration-300"
// // //           >
// // //             {initialData ? "Update Subscription" : "Add Subscription"}
// // //           </button>
// // //           <button
// // //             type="button"
// // //             onClick={onCancel}
// // //             className="flex-1 bg-gray-400 text-white py-2 rounded hover:bg-opacity-80 transition duration-300"
// // //           >
// // //             Cancel
// // //           </button>
// // //         </div>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // const SubscriptionDashboard = () => {
// // //   const [cards, setCards] = useState([]);
// // //   const [showForm, setShowForm] = useState(false);
// // //   const [editingCard, setEditingCard] = useState(null);
// // //   const [message, setMessage] = useState("");

// // //   // Fetch subscription cards (ignoring soft-deleted items)
// // //   const fetchCards = async () => {
// // //     try {
// // //       const res = await axios.get("http://localhost:5000/api/subscription");
// // //       setCards(res.data);
// // //     } catch (error) {
// // //       console.error("Error fetching subscription cards:", error);
// // //       setMessage("Error fetching subscription cards.");
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchCards();
// // //   }, []);

// // //   // Handle create or update submission from the form
// // //   const handleFormSubmit = async (data) => {
// // //     if (editingCard) {
// // //       // Update existing card
// // //       try {
// // //         await axios.put(`http://localhost:5000/api/subscription/${editingCard._id}`, data);
// // //         setMessage("Subscription card updated successfully!");
// // //         setEditingCard(null);
// // //         setShowForm(false);
// // //         fetchCards();
// // //       } catch (error) {
// // //         console.error("Error updating subscription card:", error);
// // //         setMessage("Error updating subscription card.");
// // //       }
// // //     } else {
// // //       // Create new card
// // //       try {
// // //         await axios.post("http://localhost:5000/api/subscription", data);
// // //         setMessage("Subscription card created successfully!");
// // //         setShowForm(false);
// // //         fetchCards();
// // //       } catch (error) {
// // //         console.error("Error creating subscription card:", error);
// // //         setMessage("Error creating subscription card.");
// // //       }
// // //     }
// // //   };

// // //   // Soft delete a subscription card
// // //   const handleDelete = async (id) => {
// // //     try {
// // //       await axios.delete(`http://localhost:5000/api/subscription/${id}`);
// // //       setMessage("Subscription card deleted successfully!");
// // //       fetchCards();
// // //     } catch (error) {
// // //       console.error("Error deleting subscription card:", error);
// // //       setMessage("Error deleting subscription card.");
// // //     }
// // //   };

// // //   // Set editing card and show the form for editing
// // //   const handleEdit = (card) => {
// // //     setEditingCard(card);
// // //     setShowForm(true);
// // //   };

// // //   // Cancel add/edit form
// // //   const handleCancelForm = () => {
// // //     setEditingCard(null);
// // //     setShowForm(false);
// // //   };

// // //   return (
// // //     <div className="container mx-auto p-8">
// // //       <h1 className="text-3xl font-bold mb-6 text-center">Subscription Dashboard</h1>
// // //       <div className="mb-4 text-center">
// // //         <button
// // //           onClick={() => {
// // //             setShowForm(true);
// // //             setEditingCard(null);
// // //           }}
// // //           className="bg-red-600 text-white py-2 px-4 rounded hover:bg-opacity-80 transition duration-300"
// // //         >
// // //           Add Subscription
// // //         </button>
// // //       </div>

// // //       {showForm && (
// // //         <SubscriptionCardForm
// // //           onSubmit={handleFormSubmit}
// // //           initialData={editingCard}
// // //           onCancel={handleCancelForm}
// // //         />
// // //       )}

// // //       <h2 className="text-2xl font-bold mt-8 mb-4">Plans</h2>
// // //       {cards.length === 0 && <p>No subscription cards available.</p>}
// // //       {cards.map((card) => (
// // //         <div key={card._id} className="border p-4 rounded mb-4 shadow-sm">
// // //           <h3 className="text-xl font-semibold">{card.title}</h3>
// // //           <p>{card.description}</p>
// // //           <p>
// // //             <strong>Price:</strong> {card.price}
// // //           </p>
// // //           <p>
// // //             <strong>Duration:</strong> {card.duration}
// // //           </p>
// // //           <p>
// // //             <strong>Features:</strong> {card.features.join(", ")}
// // //           </p>
// // //           <div className="mt-2 flex gap-4">
// // //             <button
// // //               onClick={() => handleEdit(card)}
// // //               className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-opacity-80 transition duration-300"
// // //             >
// // //               Edit
// // //             </button>
// // //             <button
// // //               onClick={() => handleDelete(card._id)}
// // //               className="bg-red-500 text-white py-1 px-3 rounded hover:bg-opacity-80 transition duration-300"
// // //             >
// // //               Delete
// // //             </button>
// // //           </div>
// // //         </div>
// // //       ))}

// // //       {message && <p className="mt-4 text-center">{message}</p>}
// // //     </div>
// // //   );
// // // };

// // // export default SubscriptionDashboard;
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // // Form component used for both creating and editing a subscription card.
// // const SubscriptionCardForm = ({ onSubmit, initialData, onCancel }) => {
// //   const [title, setTitle] = useState(initialData ? initialData.title : "");
// //   const [description, setDescription] = useState(initialData ? initialData.description : "");
// //   const [price, setPrice] = useState(initialData ? initialData.price : "");
// //   const [duration, setDuration] = useState(initialData ? initialData.duration : "");
// //   const [features, setFeatures] = useState(initialData ? initialData.features.join(", ") : "");

// //   useEffect(() => {
// //     if (initialData) {
// //       setTitle(initialData.title);
// //       setDescription(initialData.description);
// //       setPrice(initialData.price);
// //       setDuration(initialData.duration);
// //       setFeatures(initialData.features.join(", "));
// //     } else {
// //       setTitle("");
// //       setDescription("");
// //       setPrice("");
// //       setDuration("");
// //       setFeatures("");
// //     }
// //   }, [initialData]);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const featuresArray = features.split(",").map((feature) => feature.trim());
// //     onSubmit({ title, description, price, duration, features: featuresArray });
// //   };

// //   return (
// //     <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg my-6 border border-gray-100">
// //       <h2 className="text-2xl font-bold mb-6 text-red-600 text-center">
// //         {initialData ? "Edit Subscription Plan" : "Add New Subscription Plan"}
// //       </h2>
// //       <form onSubmit={handleSubmit}>
// //         <div className="mb-5">
// //           <label className="block font-semibold mb-2 text-gray-700">Title</label>
// //           <input
// //             type="text"
// //             className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
// //             value={title}
// //             onChange={(e) => setTitle(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className="mb-5">
// //           <label className="block font-semibold mb-2 text-gray-700">Description</label>
// //           <textarea
// //             className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent min-h-24"
// //             value={description}
// //             onChange={(e) => setDescription(e.target.value)}
// //             required
// //           ></textarea>
// //         </div>
// //         <div className="mb-5">
// //           <label className="block font-semibold mb-2 text-gray-700">Price</label>
// //           <input
// //             type="text"
// //             className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
// //             value={price}
// //             onChange={(e) => setPrice(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className="mb-5">
// //           <label className="block font-semibold mb-2 text-gray-700">Duration</label>
// //           <input
// //             type="text"
// //             className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
// //             value={duration}
// //             onChange={(e) => setDuration(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className="mb-6">
// //           <label className="block font-semibold mb-2 text-gray-700">
// //             Features <span className="text-sm font-normal">(comma separated)</span>
// //           </label>
// //           <input
// //             type="text"
// //             className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
// //             value={features}
// //             onChange={(e) => setFeatures(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className="flex gap-4">
// //           <button
// //             type="submit"
// //             className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition duration-300 font-medium"
// //           >
// //             {initialData ? "Update Plan" : "Add Plan"}
// //           </button>
// //           <button
// //             type="button"
// //             onClick={onCancel}
// //             className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition duration-300 font-medium"
// //           >
// //             Cancel
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // const SubscriptionDashboard = () => {
// //   const [cards, setCards] = useState([]);
// //   const [showForm, setShowForm] = useState(false);
// //   const [editingCard, setEditingCard] = useState(null);
// //   const [message, setMessage] = useState("");

// //   // Fetch subscription cards (ignoring soft-deleted items)
// //   const fetchCards = async () => {
// //     try {
// //       const res = await axios.get("http://localhost:5000/api/subscription");
// //       setCards(res.data);
// //     } catch (error) {
// //       console.error("Error fetching subscription cards:", error);
// //       setMessage("Error fetching subscription cards");
// //     }
// //   };

// //   useEffect(() => {
// //     fetchCards();
// //   }, []);

// //   // Handle create or update submission from the form
// //   const handleFormSubmit = async (data) => {
// //     if (editingCard) {
// //       // Update existing card
// //       try {
// //         await axios.put(`http://localhost:5000/api/subscription/${editingCard._id}`, data);
// //         setMessage("Subscription plan updated successfully!");
// //         setEditingCard(null);
// //         setShowForm(false);
// //         fetchCards();
// //       } catch (error) {
// //         console.error("Error updating subscription card:", error);
// //         setMessage("Error updating subscription plan");
// //       }
// //     } else {
// //       // Create new card
// //       try {
// //         await axios.post("http://localhost:5000/api/subscription", data);
// //         setMessage("Subscription plan created successfully!");
// //         setShowForm(false);
// //         fetchCards();
// //       } catch (error) {
// //         console.error("Error creating subscription card:", error);
// //         setMessage("Error creating subscription plan");
// //       }
// //     }
// //   };

// //   // Soft delete a subscription card
// //   const handleDelete = async (id) => {
// //     try {
// //       await axios.delete(`http://localhost:5000/api/subscription/${id}`);
// //       setMessage("Subscription plan deleted successfully!");
// //       fetchCards();
// //     } catch (error) {
// //       console.error("Error deleting subscription card:", error);
// //       setMessage("Error deleting subscription plan");
// //     }
// //   };

// //   // Set editing card and show the form for editing
// //   const handleEdit = (card) => {
// //     setEditingCard(card);
// //     setShowForm(true);
// //   };

// //   // Cancel add/edit form
// //   const handleCancelForm = () => {
// //     setEditingCard(null);
// //     setShowForm(false);
// //   };

// //   // Show message for 3 seconds then hide it
// //   useEffect(() => {
// //     if (message) {
// //       const timer = setTimeout(() => {
// //         setMessage("");
// //       }, 3000);
// //       return () => clearTimeout(timer);
// //     }
// //   }, [message]);

// //   return (
// //     <div className="container mx-auto p-8 bg-gray-50 min-h-screen">
// //       <h1 className="text-4xl font-bold mb-8 text-center text-red-600">Subscription Dashboard</h1>
      
// //       {message && (
// //         <div className="mb-6 py-3 px-4 bg-green-100 text-green-800 rounded-lg text-center font-medium">
// //           {message}
// //         </div>
// //       )}
      
// //       <div className="mb-6 text-center">
// //         {!showForm ? (
// //           <button
// //             onClick={() => {
// //               setShowForm(true);
// //               setEditingCard(null);
// //             }}
// //             className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300 font-medium"
// //           >
// //             Add New Subscription Plan
// //           </button>
// //         ) : null}
// //       </div>

// //       {showForm && (
// //         <SubscriptionCardForm
// //           onSubmit={handleFormSubmit}
// //           initialData={editingCard}
// //           onCancel={handleCancelForm}
// //         />
// //       )}

// //       <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-800">Available Plans</h2>
      
// //       {cards.length === 0 && (
// //         <div className="text-center p-8 bg-white rounded-xl shadow-md">
// //           <p className="text-gray-500">No subscription plans available</p>
// //         </div>
// //       )}
      
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {cards.map((card) => (
// //           <div 
// //             key={card._id} 
// //             className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
// //           >
// //             <div className="flex justify-between items-start mb-4">
// //               <h3 className="text-xl font-bold text-red-600">{card.title}</h3>
// //               <div className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-semibold">
// //                 {card.price}
// //               </div>
// //             </div>
            
// //             <p className="text-gray-600 mb-4">{card.description}</p>
            
// //             <div className="mb-2">
// //               <span className="text-gray-800 font-medium">Duration: </span>
// //               <span className="text-gray-700">{card.duration}</span>
// //             </div>
            
// //             <div className="mb-4">
// //               <h4 className="text-gray-800 font-medium mb-2">Features:</h4>
// //               <ul className="list-disc list-inside space-y-1">
// //                 {card.features.map((feature, index) => (
// //                   <li key={index} className="text-gray-600">{feature}</li>
// //                 ))}
// //               </ul>
// //             </div>
            
// //             <div className="mt-4 flex gap-3">
// //               <button
// //                 onClick={() => handleEdit(card)}
// //                 className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
// //               >
// //                 Edit
// //               </button>
// //               <button
// //                 onClick={() => handleDelete(card._id)}
// //                 className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SubscriptionDashboard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // Form component used for both creating and editing a subscription card.
// const SubscriptionCardForm = ({ onSubmit, initialData, onCancel }) => {
//   const [title, setTitle] = useState(initialData ? initialData.title : "");
//   const [description, setDescription] = useState(initialData ? initialData.description : "");
//   const [price, setPrice] = useState(initialData ? initialData.price : "");
//   const [duration, setDuration] = useState(initialData ? initialData.duration : "");
//   const [features, setFeatures] = useState(initialData ? initialData.features.join(", ") : "");

//   useEffect(() => {
//     if (initialData) {
//       setTitle(initialData.title);
//       setDescription(initialData.description);
//       setPrice(initialData.price);
//       setDuration(initialData.duration);
//       setFeatures(initialData.features.join(", "));
//     } else {
//       setTitle("");
//       setDescription("");
//       setPrice("");
//       setDuration("");
//       setFeatures("");
//     }
//   }, [initialData]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const featuresArray = features.split(",").map((feature) => feature.trim());
//     onSubmit({ title, description, price, duration, features: featuresArray });
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-md my-6 border border-gray-100">
//       <h2 className="text-xl font-bold mb-5 text-red-600 pb-2 border-b border-gray-200">
//         {initialData ? "Edit Subscription Plan" : "Add New Subscription Plan"}
//       </h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block font-medium mb-1 text-gray-700">Title</label>
//           <input
//             type="text"
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block font-medium mb-1 text-gray-700">Description</label>
//           <textarea
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//             rows="3"
//           ></textarea>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="block font-medium mb-1 text-gray-700">Price</label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-medium mb-1 text-gray-700">Duration</label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//               value={duration}
//               onChange={(e) => setDuration(e.target.value)}
//               required
//             />
//           </div>
//         </div>
//         <div className="mb-5">
//           <label className="block font-medium mb-1 text-gray-700">
//             Features <span className="text-sm font-normal">(comma separated)</span>
//           </label>
//           <input
//             type="text"
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//             value={features}
//             onChange={(e) => setFeatures(e.target.value)}
//             required
//           />
//         </div>
//         <div className="flex gap-3">
//           <button
//             type="submit"
//             className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300 font-medium"
//           >
//             {initialData ? "Update" : "Add"}
//           </button>
//           <button
//             type="button"
//             onClick={onCancel}
//             className="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition duration-300 font-medium"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// const SubscriptionDashboard = () => {
//   const [cards, setCards] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [editingCard, setEditingCard] = useState(null);
//   const [message, setMessage] = useState("");

//   // Fetch subscription cards (ignoring soft-deleted items)
//   const fetchCards = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/subscription");
//       setCards(res.data);
//     } catch (error) {
//       console.error("Error fetching subscription cards:", error);
//       setMessage("Error fetching subscription cards");
//     }
//   };

//   useEffect(() => {
//     fetchCards();
//   }, []);

//   // Handle create or update submission from the form
//   const handleFormSubmit = async (data) => {
//     if (editingCard) {
//       // Update existing card
//       try {
//         await axios.put(`http://localhost:5000/api/subscription/${editingCard._id}`, data);
//         setMessage("Subscription plan updated successfully!");
//         setEditingCard(null);
//         setShowForm(false);
//         fetchCards();
//       } catch (error) {
//         console.error("Error updating subscription card:", error);
//         setMessage("Error updating subscription plan");
//       }
//     } else {
//       // Create new card
//       try {
//         await axios.post("http://localhost:5000/api/subscription", data);
//         setMessage("Subscription plan created successfully!");
//         setShowForm(false);
//         fetchCards();
//       } catch (error) {
//         console.error("Error creating subscription card:", error);
//         setMessage("Error creating subscription plan");
//       }
//     }
//   };

//   // Soft delete a subscription card
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/subscription/${id}`);
//       setMessage("Subscription plan deleted successfully!");
//       fetchCards();
//     } catch (error) {
//       console.error("Error deleting subscription card:", error);
//       setMessage("Error deleting subscription plan");
//     }
//   };

//   // Set editing card and show the form for editing
//   const handleEdit = (card) => {
//     setEditingCard(card);
//     setShowForm(true);
//   };

//   // Cancel add/edit form
//   const handleCancelForm = () => {
//     setEditingCard(null);
//     setShowForm(false);
//   };

//   // Show message for 3 seconds then hide it
//   useEffect(() => {
//     if (message) {
//       const timer = setTimeout(() => {
//         setMessage("");
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [message]);

//   return (
//     <div className="h-screen overflow-y-auto bg-gray-50 px-6 py-6 w-full pl-[300px]">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Subscription Plans</h1>
//         {!showForm && (
//           <button
//             onClick={() => {
//               setShowForm(true);
//               setEditingCard(null);
//             }}
//             className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300 text-sm font-medium flex items-center"
//           >
//             <span className="mr-1">+</span> Add Plan
//           </button>
//         )}
//       </div>
      
//       {message && (
//         <div className="mb-6 py-2 px-4 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
//           {message}
//         </div>
//       )}
      
//       {showForm && (
//         <SubscriptionCardForm
//           onSubmit={handleFormSubmit}
//           initialData={editingCard}
//           onCancel={handleCancelForm}
//         />
//       )}

//       {cards.length === 0 ? (
//         <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
//           <p className="text-gray-500">No subscription plans available</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {cards.map((card) => (
//             <div 
//               key={card._id} 
//               className="bg-white flex flex-col justify-between p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
//             >
//               <div className="flex justify-between items-start mb-3">
//                 <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
//                 <div className="px-2.5 py-0.5 bg-red-100 text-red-700 rounded-full text-sm font-medium">
//                   {card.price}
//                 </div>
//               </div>
              
//               <p className="text-gray-600 text-sm mb-3 line-clamp-2">{card.description}</p>
              
//               <div className="text-sm mb-2">
//                 <span className="text-gray-700 font-medium">Duration: </span>
//                 <span className="text-gray-600">{card.duration}</span>
//               </div>
              
//               <div className="mb-3">
//                 <h4 className="text-sm text-gray-700 font-medium mb-1">Features:</h4>
//                 <ul className="list-disc list-inside space-y-0.5 text-sm">
//                   {card.features.map((feature, index) => (
//                     <li key={index} className="text-gray-600">{feature}</li>
//                   ))}
//                 </ul>
//               </div>
              
//               <div className="flex gap-2 mt-3 pt-2 border-t border-gray-100">
//                 <button
//                   onClick={() => handleEdit(card)}
//                   className="flex-1 bg-blue-500 text-white py-1.5 px-3 rounded-md text-sm hover:bg-blue-600 transition duration-300"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(card._id)}
//                   className="flex-1 bg-red-500 text-white py-1.5 px-3 rounded-md text-sm hover:bg-red-600 transition duration-300"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SubscriptionDashboard;
import React, { useState, useEffect } from "react";
import axios from "axios";

// Form component used for both creating and editing a subscription card.
const SubscriptionCardForm = ({ onSubmit, initialData, onCancel }) => {
  const [title, setTitle] = useState(initialData ? initialData.title : "");
  const [description, setDescription] = useState(initialData ? initialData.description : "");
  const [price, setPrice] = useState(initialData ? initialData.price : "");
  const [duration, setDuration] = useState(initialData ? initialData.duration : "");
  const [features, setFeatures] = useState(initialData ? initialData.features.join(", ") : "");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setPrice(initialData.price);
      setDuration(initialData.duration);
      setFeatures(initialData.features.join(", "));
    } else {
      setTitle("");
      setDescription("");
      setPrice("");
      setDuration("");
      setFeatures("");
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const featuresArray = features.split(",").map((feature) => feature.trim());
    onSubmit({ title, description, price, duration, features: featuresArray });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md my-6 border border-gray-100">
      <h2 className="text-xl font-bold mb-5 text-[#61090b] pb-2 border-b border-gray-200">
        {initialData ? "Edit Subscription Plan" : "Add New Subscription Plan"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-1 text-gray-700">Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#61090b] focus:border-transparent"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1 text-gray-700">Description</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#61090b] focus:border-transparent"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="3"
          ></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-medium mb-1 text-gray-700">Price</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#61090b] focus:border-transparent"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-gray-700">Duration</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#61090b] focus:border-transparent"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-5">
          <label className="block font-medium mb-1 text-gray-700">
            Features <span className="text-sm font-normal">(comma separated)</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#61090b] focus:border-transparent"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            required
          />
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 bg-[#61090b] text-white py-2 rounded-lg hover:bg-[#8b0d11] transition duration-300 font-medium"
          >
            {initialData ? "Update" : "Add"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition duration-300 font-medium"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const SubscriptionDashboard = () => {
  const [cards, setCards] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [message, setMessage] = useState("");

  // Fetch subscription cards (ignoring soft-deleted items)
  const fetchCards = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/subscription");
      setCards(res.data);
    } catch (error) {
      console.error("Error fetching subscription cards:", error);
      setMessage("Error fetching subscription cards");
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  // Handle create or update submission from the form
  const handleFormSubmit = async (data) => {
    if (editingCard) {
      // Update existing card
      try {
        await axios.put(`http://localhost:5000/api/subscription/${editingCard._id}`, data);
        setMessage("Subscription plan updated successfully!");
        setEditingCard(null);
        setShowForm(false);
        fetchCards();
      } catch (error) {
        console.error("Error updating subscription card:", error);
        setMessage("Error updating subscription plan");
      }
    } else {
      // Create new card
      try {
        await axios.post("http://localhost:5000/api/subscription", data);
        setMessage("Subscription plan created successfully!");
        setShowForm(false);
        fetchCards();
      } catch (error) {
        console.error("Error creating subscription card:", error);
        setMessage("Error creating subscription plan");
      }
    }
  };

  // Soft delete a subscription card
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/subscription/${id}`);
      setMessage("Subscription plan deleted successfully!");
      fetchCards();
    } catch (error) {
      console.error("Error deleting subscription card:", error);
      setMessage("Error deleting subscription plan");
    }
  };

  // Set editing card and show the form for editing
  const handleEdit = (card) => {
    setEditingCard(card);
    setShowForm(true);
  };

  // Cancel add/edit form
  const handleCancelForm = () => {
    setEditingCard(null);
    setShowForm(false);
  };

  // Show message for 3 seconds then hide it
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="h-screen overflow-y-auto bg-gray-50 px-6 py-6 w-full pl-[300px]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Subscription Plans</h1>
        {!showForm && (
          <button
            onClick={() => {
              setShowForm(true);
              setEditingCard(null);
            }}
            className="bg-[#61090b] text-white py-2 px-4 rounded-lg hover:bg-[#8b0d11] transition duration-300 text-sm font-medium flex items-center"
          >
            <span className="mr-1">+</span> Add Plan
          </button>
        )}
      </div>
      
      {message && (
        <div className="mb-6 py-2 px-4 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
          {message}
        </div>
      )}
      
      {showForm && (
        <SubscriptionCardForm
          onSubmit={handleFormSubmit}
          initialData={editingCard}
          onCancel={handleCancelForm}
        />
      )}

      {cards.length === 0 ? (
        <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-500">No subscription plans available</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div 
              key={card._id} 
              className="bg-white flex flex-col justify-between p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                <div className="px-2.5 py-0.5 bg-[#61090b] text-white rounded-full text-sm font-medium">
                  {card.price}
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{card.description}</p>
              
              <div className="text-sm mb-2">
                <span className="text-gray-700 font-medium">Duration: </span>
                <span className="text-gray-600">{card.duration}</span>
              </div>
              
              <div className="mb-3">
                <h4 className="text-sm text-gray-700 font-medium mb-1">Features:</h4>
                <ul className="list-disc list-inside space-y-0.5 text-sm">
                  {card.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-2 mt-3 pt-2 border-t border-gray-100">
                <button
                  onClick={() => handleEdit(card)}
                  className="flex-1 bg-[#61090b] text-white py-1.5 px-3 rounded-md text-sm hover:bg-[#8b0d11] transition duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(card._id)}
                  className="flex-1 bg-[#61090b] text-white py-1.5 px-3 rounded-md text-sm hover:bg-[#8b0d11] transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubscriptionDashboard;
