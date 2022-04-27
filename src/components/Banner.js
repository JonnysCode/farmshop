import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']



const Banner = () => {

  const [open, setOpen] = useState(false)

  return (
    <><Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
              <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
              >
                  <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                      {/* Currency selector */}
                      <form>
                          <div className="inline-block">
                              <label htmlFor="mobile-currency" className="sr-only">
                                  Currency
                              </label>
                              <div className="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                                  <select
                                      id="mobile-currency"
                                      name="currency"
                                      className="bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent"
                                  >
                                      {currencies.map((currency) => (
                                          <option key={currency}>{currency}</option>
                                      ))}
                                  </select>
                                  <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                                      <svg
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 20 20"
                                          className="w-5 h-5 text-gray-500"
                                      >
                                          <path
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="1.5"
                                              d="M6 8l4 4 4-4" />
                                      </svg>
                                  </div>
                              </div>
                          </div>
                      </form>
                  </div>
              </Transition.Child>
          </Dialog>
      </Transition.Root><div className="bg-gray-900">
              <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
                  {/* Currency selector */}
                  <form className="hidden lg:block lg:flex-1">
                      <div className="flex">
                          <label htmlFor="desktop-currency" className="sr-only">
                              Currency
                          </label>
                          <div className="-ml-2 group relative bg-gray-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                              <select
                                  id="desktop-currency"
                                  name="currency"
                                  className="bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent"
                              >
                                  {currencies.map((currency) => (
                                      <option key={currency}>{currency}</option>
                                  ))}
                              </select>
                              <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                                  <svg
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 20 20"
                                      className="w-5 h-5 text-gray-300"
                                  >
                                      <path
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="1.5"
                                          d="M6 8l4 4 4-4" />
                                  </svg>
                              </div>
                          </div>
                      </div>
                  </form>

                  <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
                      Get free delivery on orders over $100
                  </p>

                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                      <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                          Create an account
                      </a>
                      <span className="h-6 w-px bg-gray-600" aria-hidden="true" />
                      <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                          Sign in
                      </a>
                  </div>
              </div>
          </div></>
  )
}

export default Banner