// // const { GoogleGenerativeAI } = require("@google/generative-ai");

// // // Access your API key as an environment variable (see "Set up your API key" above)
// // const genAI = new GoogleGenerativeAI("AIzaSyDxi65BYrGdBRULE2D-RvAsA0yrhqtGF98");

// // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
// // async function run() {
// //     const prompt = 'explain hash map in js'
  
// //     const result = await model.generateContent(prompt);
// //     const response = await result.response;
// //     const text = response.text();
// //     console.log(text);
// //   }
  
// //   run();
// import React, { useState } from "react";

// export default function AiCustomization() {
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [aiImageUrl, setAiImageUrl] = useState("");
//   const [prompt, setPrompt] = useState("");

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setUploadedImage(URL.createObjectURL(file));
//       setAiImageUrl(""); // Clear previous AI image if any
//     }
//   };

//   const handleGenerateAIImage = async () => {
//     if (!prompt) return alert("Please enter a prompt.");
    
//     // MOCKED: Replace this with actual OpenAI API integration
//     const mockImageUrl = "https://source.unsplash.com/400x400/?art,design," + prompt;
//     setAiImageUrl(mockImageUrl);
//     setUploadedImage(null); // Clear uploaded image if any
//   };

//   const previewImage = uploadedImage || aiImageUrl;

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold mb-6">Customize Your Own Style</h2>
//         <p className="mb-8 text-gray-600">
//           Upload your design or use AI to create something unique. Get it printed on shirts, hoodies, and more.
//         </p>

//         <div className="flex flex-col md:flex-row items-center justify-center gap-6">
//           {/* Upload Design */}
//           <div className="bg-white p-6 rounded-xl shadow-md w-full md:w-1/2">
//             <h3 className="font-semibold mb-4">Upload Your Design</h3>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="mb-4 w-full"
//             />
//             <button
//               className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 w-full"
//               onClick={() => {
//                 if (!uploadedImage) alert("Please upload an image to preview.");
//               }}
//             >
//               Preview on Shirt
//             </button>
//           </div>

//           {/* AI Generator */}
//           <div className="bg-white p-6 rounded-xl shadow-md w-full md:w-1/2">
//             <h3 className="font-semibold mb-4">Generate with AI</h3>
//             <input
//               type="text"
//               placeholder="e.g., lion in streetwear style"
//               value={prompt}
//               onChange={(e) => setPrompt(e.target.value)}
//               className="w-full border border-gray-300 px-4 py-2 mb-4 rounded"
//             />
//             <button
//               onClick={handleGenerateAIImage}
//               className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 w-full"
//             >
//               Generate Design
//             </button>
//           </div>
//         </div>

//         {/* Preview Section */}
//         <div className="mt-12">
//           <h4 className="text-xl font-semibold mb-4">Preview</h4>
//           <div className="flex justify-center">
//             {previewImage ? (
//               <img
//                 src={previewImage}
//                 alt="Preview"
//                 className="w-64 h-80 border rounded shadow object-cover"
//               />
//             ) : (
//               <div className="w-64 h-80 flex items-center justify-center border rounded text-gray-400">
//                 No image yet
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
