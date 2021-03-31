
const TableContent = ({ ranking, displayName, location, previousRanking, profileUrl, score }: any) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src={profileUrl} alt="" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {displayName}
            </div>
            <div className="text-sm text-gray-500">
              {location}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{score}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{ranking}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div className="text-sm text-gray-900">{previousRanking}</div>
      </td>
      {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
      </td> */}
    </tr>
  )
}

export default TableContent;
