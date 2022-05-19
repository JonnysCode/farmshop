/* This example requires Tailwind CSS v2.0+ */
import { CalendarIcon, ChevronRightIcon } from '@heroicons/react/solid'

const positions = [
  {
    id: 1,
    title: 'Field 1',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'July 12, 2022',
  },
  {
    id: 2,
    title: 'Field 2',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'July 14, 2022',
  },
  {
    id: 3,
    title: 'Field 3',
    department: 'Design',
    closeDate: '2020-01-14',
    closeDateFull: 'May 30, 2022',
  },
  {
    id: 4,
    title: 'Field 4',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'June 8, 2022',
  },
  {
    id: 5,
    title: 'Field 5',
    department: 'Design',
    closeDate: '2020-01-14',
    closeDateFull: 'June 8, 2022',
  },
]

export default function Fields() {
  return (
    <div className="bg-white m-2 shadow overflow-hidden sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {positions.map((position) => (
          <li key={position.id}>
            <a href="#" className="block hover:bg-gray-50">
              <div className="px-4 py-4 flex items-center sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div className="truncate">
                    <div className="flex text-sm">
                      <p className="font-medium text-green-600 truncate">{position.title}</p>
                    </div>
                    <div className="mt-2 flex">
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <p>
                          Harvest: <time dateTime={position.closeDate}>{position.closeDateFull}</time>
                        </p>
                      </div>
                    </div>
                  </div>
                
                </div>
                <div className="ml-5 flex-shrink-0">
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
