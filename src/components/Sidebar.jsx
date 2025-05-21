// export default function Sidebar() {
//   const menuItems = [
//     "Create Article",
//     "Generated Articles",
//     "AI Keyword to Article",
//     "Steal Competitor Keyword",
//     "Import Keyword from GSC",
//     "Manual Keyword to Article",
//     "Bulk Keyword to Article",
//     "Longtail Keyword to Article",
//     "Article Settings",
//     "Auto Blog",
//     "Internal Links",
//     "Free Backlinks",
//     "Integrations",
//     "Subscription",
//     "Affiliate Program",
//     "Help Center",
//     "Updates",
//     "Live Chat Support",
//     "Profile",
//   ];

//   return (
//     <aside className="w-64 h-screen bg-white border-r shadow-lg p-6 overflow-y-auto">
//       <div className="text-2xl font-extrabold text-indigo-600 mb-8">abun</div>
//       <div className="mb-4">
//         <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
//           <option value="amazon">amazon.com</option>
//           <option value="ebay">ebay.com</option>
//         </select>
//       </div>
//       <nav>
//         <ul className="space-y-2 text-sm">
//           {menuItems.map((item, index) => (
//             <li key={index}>
//               <a
//                 href="#"
//                 className={`block py-2 px-3 rounded-lg hover:bg-indigo-100 text-gray-700 font-medium ${
//                   item === "Generated Articles"
//                     ? "text-indigo-600 font-bold"
//                     : ""
//                 }`}
//               >
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </aside>
//   );
// }

import {
  FileText,
  Bot,
  Link,
  Network,
  Plug,
  CreditCard,
  BadgePercent,
  HelpCircle,
  Bell,
  MessageSquare,
  User,
} from "lucide-react";

export default function Sidebar() {
  const activeItem = "Generated Articles";

  return (
    <aside className="w-64 h-screen bg-white border-r shadow-lg p-4 overflow-y-auto">
      {/* Logo Text */}
      <div className="text-3xl font-extrabold text-black mb-6">abun</div>

      {/* Gradient Logo + Dropdown */}
      <div className="mb-6 flex items-center space-x-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500" />
        <select className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700">
          <option value="amazon">amazon.com</option>
          <option value="ebay">ebay.com</option>
        </select>
      </div>

      {/* Articles Section */}
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2 text-blue-700 text-xs font-semibold uppercase">
          <FileText className="w-4 h-4 text-blue-700" />
          <span>Articles</span>
        </div>
        <ul className="space-y-1 text-sm font-medium ml-5 border-l pl-2">
          {[
            "Create Article",
            "Generated Articles",
            "AI Keyword to Article",
            "Steal Competitor Keyword",
            "Import Keyword from GSC",
            "Manual Keyword to Article",
            "Bulk Keyword to Article",
            "Longtail Keyword to Article",
            "Article Settings",
          ].map((item) => (
            <li key={item}>
              <a
                href="#"
                className={`block py-1.5 px-2 rounded hover:bg-indigo-100 ${
                  item === activeItem
                    ? "text-indigo-600 font-bold"
                    : "text-gray-700"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Other Items */}
      <ul className="space-y-3 text-sm font-medium text-gray-700">
        <li className="flex items-center space-x-2">
          <Bot className="w-4 h-4 text-blue-700" />
          <a href="#">Auto Blog</a>
        </li>
        <li className="flex items-center space-x-2">
          <Link className="w-4 h-4 text-blue-700" />
          <a href="#">Internal Links</a>
        </li>
        <li className="flex items-center space-x-2">
          <Network className="w-4 h-4 text-blue-700" />
          <a href="#">Free Backlinks</a>
        </li>
        <li className="flex items-center space-x-2">
          <Plug className="w-4 h-4 text-blue-700" />
          <a href="#">Integrations</a>
        </li>
        <li className="flex items-center space-x-2">
          <CreditCard className="w-4 h-4 text-blue-700" />
          <a href="#">Subscription</a>
        </li>
        <li className="flex items-center space-x-2">
          <BadgePercent className="w-4 h-4 text-blue-700" />
          <a href="#">Affiliate Program</a>
        </li>
        <li className="flex items-center space-x-2">
          <HelpCircle className="w-4 h-4 text-blue-700" />
          <a href="#">Help Center</a>
        </li>
        <li className="flex items-center space-x-2">
          <Bell className="w-4 h-4 text-blue-700" />
          <a href="#">Updates</a>
        </li>
        <li className="flex items-center space-x-2">
          <MessageSquare className="w-4 h-4 text-blue-700" />
          <a href="#">Live Chat Support</a>
        </li>
        <li className="flex items-center space-x-2">
          <User className="w-4 h-4 text-blue-700" />
          <a href="#">Profile</a>
        </li>
      </ul>
    </aside>
  );
}
