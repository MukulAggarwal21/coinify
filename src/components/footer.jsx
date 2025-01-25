import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6">
      <div className="container mx-auto flex flex-row md:flex-row justify-end items-start space-y-8 md:space-y-0 space-x-20">
        <div className="w-full md:w-1/3 pr-10   mr-52 items-start">
          <p className="text-sm text-gray-600">
            Coinify provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalisation, Coinify tracks community growth, open-source code development, major events and on-chain metrics.
          </p>
        </div>
        
        <div className="flex flex-wrap md:flex-nowrap w-full   md:w-2/3 space-x-8 ">
          <div>
            <ul className="font-bold mb-4">Resources</ul>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-black">Crypto News</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Bitcoin Treasury</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Crypto Heatmap</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Crypto API</a></li>
            </ul>
          </div>

          <div>
            <ul className="font-bold mb-4">Donations</ul>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-black">Bitcoin</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Ethereum</a></li>
            </ul>
          </div>

          <div>
            <ul className="font-bold mb-4">Support</ul>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-black">Request Form</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Advertising</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Candy Rewards</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Help Center</a></li>
            </ul>
          </div>

          <div>
            <ul className="font-bold mb-4">About</ul>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-black">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Blog</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8 pt-4 border-t flex flex-wrap justify-between items-center">
        <div className="space-x-4 w-full flex flex-wrap justify-center">
          {['X/Twitter', 'Telegram', 'Instagram', 'Reddit', 'Discord', 'Facebook', 'YouTube', 'TikTok'].map(platform => (
            <a key={platform} href="#" className="text-gray-600 hover:text-black text-sm mx-2">{platform}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;


// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-white py-10 px-4">
//       <div className="container mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-start">
//           {/* Left Side - Company Description */}
//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h2 className="text-xl font-bold mb-3">Coinify</h2>
//             <p className="text-sm text-gray-600 pr-4">
//               Coinify provides a fundamental analysis of the crypto market. Tracking price, volume, market capitalisation, community growth, open-source code development, major events, and on-chain metrics.
//             </p>
//           </div>

//           {/* Right Side - Links Grid */}
//           <div className="w-full md:w-2/3 flex flex-wrap justify-end">
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
//               <div>
//                 <ul className="font-bold mb-3 text-sm">Resources</ul>
//                 <ul className="space-y-2">
//                   <li><a href="#" className="text-xs text-gray-600 hover:text-black">Crypto News</a></li>
//                   <li><a href="#" className="text-xs text-gray-600 hover:text-black">Bitcoin Treasury</a></li>
//                   <li><a href="#" className="text-xs text-gray-600 hover:text-black">Crypto Heatmap</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <ul className="font-bold mb-3 text-sm">Donations</ul>
//                 <ul className="space-y-2">
//                   <li><a href="#" className="text-xs text-gray-600 hover:text-black">Bitcoin</a></li>
//                   <li><a href="#" className="text-xs text-gray-600 hover:text-black">Ethereum</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <ul className="font-bold mb-3 text-sm">Support</ul>
//                 <ul className="space-y-2">
//                   <li><a href="#" className="text-xs text-gray-600 hover:text-black">Help Center</a></li>
//                   <li><a href="#" className="text-xs text-gray-600 hover:text-black">Bug Bounty</a></li>
//                   <li><a href="#" className="text-xs text-gray-600 hover:text-black">FAQ</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <ul className="font-bold mb-3 text-sm">About</ul>
//                 <ul className="space-y-2">
//                   <li><a href="#" className="text-xs text-gray-600 hover:text-black">About Us</a></li>
//                   <li><a href="#" className="text-xs text-gray-600 hover:text-black">Careers</a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Social Links */}
//         <div className="mt-8 pt-4 border-t flex flex-wrap justify-between items-center">
//           <div className="w-full flex flex-wrap justify-center md:justify-start space-x-4">
//             {['Twitter', 'Telegram', 'Instagram', 'Reddit', 'Discord', 'Facebook'].map(platform => (
//               <a key={platform} href="#" className="text-xs text-gray-600 hover:text-black">{platform}</a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;