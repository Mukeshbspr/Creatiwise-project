import { FaWordpressSimple } from "react-icons/fa";

const dummyData = [
  {
    id: 1,
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends [2240000]",
    words: 4575,
    created: "20 hours ago",
  },
  {
    id: 2,
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends [2240000]",
    words: 3480,
    created: "21 hours ago",
  },
  {
    id: 3,
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends [2240000]",
    words: 2676,
    created: "a day ago",
  },
  {
    id: 4,
    title: "Top Virtual Executive Assistant Services (2024)",
    keyword: "virtual executive assistant [2900]",
    words: 2408,
    created: "1 Oct, 24",
  },
  {
    id: 5,
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services [390]",
    words: 1793,
    created: "---",
  },
  {
    id: 6,
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword: "amazon payment methods [3600]",
    words: 2647,
    created: "---",
  },
  {
    id: 7,
    title:
      "Backlinks 101: What are backlinks and why they’re important [Free template]",
    keyword: "backlinks [8100]",
    words: 2261,
    created: "---",
  },
  {
    id: 8,
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
    keyword: "ai seo software [880]",
    words: 1543,
    created: "---",
  },
  {
    id: 9,
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services [390]",
    words: 1974,
    created: "---",
  },
];

export default function DashboardTable() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button className="px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-medium">
            Generated Articles
          </button>
          <button className="px-4 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
            Published Articles
          </button>
          <button className="px-4 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
            Scheduled Articles
          </button>
          <button className="px-4 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
            Archived Articles
          </button>
        </div>
        <input
          type="text"
          placeholder="Search for Title & Keywords..."
          className="border border-gray-300 px-3 py-1 rounded-lg text-sm w-64"
        />
      </div>
      <table className="min-w-full table-auto border border-gray-200 rounded-md overflow-hidden">
        <thead>
          <tr className="bg-indigo-100 text-sm">
            <th className="px-4 py-2 text-left">
              <input type="checkbox" />
            </th>
            <th className="px-4 py-2 text-left">Article Title</th>
            <th className="px-4 py-2 text-left">Keyword [Traffic]</th>
            <th className="px-4 py-2 text-left">Words</th>
            <th className="px-4 py-2 text-left">Created On</th>
            <th className="px-4 py-2 text-left">Action</th>
            <th className="px-4 py-2 text-left">Publish</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((article) => (
            <tr key={article.id} className="border-t text-sm hover:bg-gray-50">
              <td className="px-4 py-2">
                <input type="checkbox" />
              </td>
              <td className="px-4 py-2 text-blue-600 font-medium cursor-pointer">
                {article.title}
              </td>
              <td className="px-4 py-2">{article.keyword}</td>
              <td className="px-4 py-2">{article.words}</td>
              <td className="px-4 py-2">{article.created}</td>
              <td className="px-4 py-2">
                <button className="border border-green-600 text-green-700 px-7 py-1 rounded text-xs font-medium bg-transparent hover:bg-green-50">
                  View
                </button>
              </td>
              <td className="px-4 py-2 text-center">
                <div className="flex justify-center items-center">
                  <FaWordpressSimple className="text-blue-700 text-base" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-sm text-gray-600">
        Total {dummyData.length} Article Titles | Show
        <select className="ml-2 border border-gray-300 px-2 py-1 rounded">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>
        entries per page
      </div>
    </div>
  );
}
