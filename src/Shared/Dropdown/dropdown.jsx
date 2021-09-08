/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import FeatherIcon from "feather-icons-react";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Menu as="div" className="z-20 relative inline-block text-left">
      <div>
        <Menu.Button className="">
        <img
            className="h-8 w-8 rounded-full md:m-0 my-2"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="font-medium origin-top-right absolute right-0 mt-2 w-52 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'flex flex-row gap-x-4 px-4 py-2 text-sm'
                  )}
                >
            <FeatherIcon icon="eye" size="18" className="text-accent"/>
                  Your profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                href="/"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'flex flex-row gap-x-4 px-4 py-2 text-sm'
                )}
              >
          <FeatherIcon icon="heart" size="18" className="text-accent"/>
                Saved
              </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                href="/"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'flex flex-row gap-x-4 px-4 py-2 font-normal text-sm'
                )}
              >
          <FeatherIcon icon="log-out" size="18" className=""/>
                Log out
              </a>
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
