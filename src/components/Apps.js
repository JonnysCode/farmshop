/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

import app1 from './images/cropwise_2.png'
import app2 from './images/cropwise_1.png'
import app3 from './images/cropwise_3.png'
import app4 from './images/landi.png'
import app5 from './images/sensor_1.png'
import app6 from './images/drop.png'


const people = [
  {
    name: 'Cropwise Protector',
    title: 'An app to protect your crops from all types of factors',
    imageUrl: app1
  },
  {
    name: 'Cropwise Spray Assist',
    title: 'The best possible guidance to water your plants',
    imageUrl: app2
  },
  {
    name: 'Cropwise Seed Selector',
    title: 'Need help in selecting the best seeds for your soil? We got you covered with this smart app',
    imageUrl: app3
  },
  {
    name: 'Irrigation Planer',
    title: 'We create smart plans to water your crops',
    imageUrl: app6
  },
  {
    name: 'Landi Weather',
    title: 'Your most trusted weather data',
    imageUrl: app4
  },
  {
    name: 'Sensofarm',
    title: 'The monitor application for your best Sensofarm IoT sensors',
    imageUrl: app5
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Apps() {
  return (
    <>
    <div className='h-screen bg-gray-50'>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
            'bg-white shadow-sm lg:static lg:overflow-y-visible h-auto'
          )
        }
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                  <div className="flex-shrink-0 flex items-center">
                    <a href="#" className='text-green-600 text-2xl font-bold'>
                      Apps
                    </a>
                  </div>
                </div>
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                  <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                    <div className="w-full">
                      <label htmlFor="search" className="sr-only">
                        Search Apps
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                          placeholder="Search Apps"
                          type="search"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                  <a
                    href="#"
                    className="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </a>

                </div>
              </div>
            </div>

            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>

      
      {/* Apps */}
      <div className="p-8">
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {people.map((person) => (
            <li
              key={person.email}
              className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
            >
              <div className="flex-1 flex flex-col p-8">

                <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={person.imageUrl} alt="" />

                <h3 className="mt-6 text-gray-900 text-sm font-medium">{person.name}</h3>
                <dl className="mt-1 flex-grow flex flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-gray-500 text-sm">{person.title}</dd>
                </dl>

                <div className="mt-5">
                  <button
                    type="button"
                    className="inline-flex items-center px-10 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Open
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
    </>
  )
}
