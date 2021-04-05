import { useUser } from '@auth0/nextjs-auth0';

const Header = () => {
  const { user } = useUser();

  return (
    <div>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="/">
                <span className="sr-only">Workflow</span>
                <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            <a href="/About" className="font-medium text-gray-500 hover:text-gray-900">About</a>

            <a href="/application" className="font-medium text-gray-500 hover:text-gray-900">Application</a>

            {!user && <a href="/api/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500">Login</a>}

            {user && <a href="/api/auth/logout" className="font-medium text-indigo-600 hover:text-indigo-500">Logout</a>}

            {user && <a href="/profile" className="font-medium text-indigo-600 hover:text-indigo-500">Profile</a>}
          </div>
        </nav>
      </div>
      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
            </div>
            <div className="-mr-2">
              <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Close main menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/About" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</a>

            <a href="/application" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Application</a>

          </div>
          {!user && <a href="/api/auth/login" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
            Login
          </a>}

          {user && <a href="/api/auth/logout" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
            Logout
          </a>}

          {user && <a href="/profile" className="font-medium text-indigo-600 hover:text-indigo-500">Profile</a>}

        </div>
      </div>
    </div>
  )
}

export default Header;