/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  NewspaperIcon,
  ShoppingBagIcon,
  SunIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  XIcon,
  ViewGridAddIcon,
  CogIcon
} from '@heroicons/react/outline'

import Shop from './Shop'
import logo from './images/farmshop.svg'
import farmer from './images/farmer.png'
import Selection from './Selection'
import Farm from './Farm'
import Apps from './Apps'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [farmOpen, setFarmOpen] = useState("Shop")

  let navigation = [
    { name: 'Supplier Shop', href: '#', icon: ShoppingBagIcon, current: true },
    { name: 'My Farm', href: '#', icon: HomeIcon, current: false },
    { name: 'Weather', href: '#', icon: SunIcon, current: false },
    { name: 'News', href: '#', icon: NewspaperIcon, current: false },
    { name: 'Documents', href: '#', icon: InboxIcon, current: false },
    { name: 'Apps', href: '#', icon: ViewGridAddIcon, current: false },
    { name: 'Settings', href: '#', icon: CogIcon, current: false },
  ]

  const [navi, setNavi] = useState(navigation)

  function setAsCurrent(item) {
    navigation.map((it) => {
      if (it.name === item.name) {
        it.current = true
      } else {
        it.current = false
      }
    })

    console.log(navigation)
    setNavi(navigation)

    if (item.name === 'My Farm') {
      setFarmOpen("farm")
    } else if (item.name === 'Apps') {
      setFarmOpen("apps")
    } else {
      setFarmOpen("shop")
    }

  }

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>

                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img
                      className="h-10 w-auto"
                      src={logo}
                      alt="FarmShop"
                    />
                  </div>

                  <div className='items-center px-2 pt-16 pb-5'>
                    <Selection />
                  </div>

                  <nav className="mt-5 px-2 space-y-1">
                    {navi.map((item) => (
                      <div>

                        { item.name === "Apps" 
                        ? <hr className="border-t border-gray-200 my-5" aria-hidden="true" /> 
                        : <span></span> }

                        <a
                          key={item.name}
                          onClick={() => setAsCurrent(item)}
                          className={classNames(
                            item.current
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                              'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </div>
                    ))}
                  </nav>
                </div>

                <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                  <a href="#" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-10 w-10"
                          src={farmer}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">Hans Muster</p>
                        <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-60 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-10 w-auto"
                  src={logo}
                  alt="FarmShop"
                />
              </div>
              
              <div className='items-center px-2 pt-16 pb-5'>
                <Selection />
              </div>

              <hr className="border-t border-gray-200 mx-2" aria-hidden="true" />
              
              <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                {navi.map((item) => (
                  <div>

                    { item.name === "Apps" 
                      ? <hr className="border-t border-gray-200 my-5" aria-hidden="true" /> 
                      : <span></span> 
                    }

                    <a
                      key={item.name}
                      onClick={() => setAsCurrent(item)}
                      className={classNames(
                        item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                          'mr-3 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </div>
                ))}
              </nav>
            </div>

            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9"
                      src={farmer}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Hans Muster</p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="md:pl-60 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <main className="">
            {farmOpen === "farm" ? <Farm /> : farmOpen === "apps" ? <Apps /> : <Shop />}
          </main>

        </div>
      </div>
    </>
  )
}

