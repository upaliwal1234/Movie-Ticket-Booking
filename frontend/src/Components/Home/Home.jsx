import React from 'react'

function Home() {
  return (
    <div class="w-full">
      <div class="relative w-full bg-white">
        <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div class="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <div class="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
              <div class="rounded-full bg-white p-1 px-2">
                <p class="text-sm font-medium">We&#x27; hiring</p>
              </div>
              <p class="text-sm font-medium">Join our team →</p>
            </div>
            <h1 class="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              People who care about your growth
            </h1>
            <p class="mt-8 text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              modi blanditiis dolores quasi eaque explicabo!
            </p>
            <form action="" class="mt-8 flex items-start space-x-2">
              <div>
                <input
                  class="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                />
                <p class="mt-2 text-sm text-gray-500">We care about your privacy</p>
              </div>
              <div>
                <button
                  type="button"
                  class="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div class="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              class="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
              src="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="mx-auto my-32 max-w-7xl px-2 lg:px-8">
        <div class="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <svg
                class="h-9 w-9 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                ></path>
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
            <p class="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
              <svg
                class="h-9 w-9 text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">
              Fast &amp; Easy to Load
            </h3>
            <p class="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <svg
                class="h-9 w-9 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">
              Light &amp; Dark Version
            </h3>
            <p class="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
              <svg
                class="h-9 w-9 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                ></path>
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">Filter Blocks</h3>
            <p class="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
      </div>
      <section class="mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0">
        <div>
          <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p class="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
              assumenda
            </p>
          </div>
          <div class="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
            <div class="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
              <button
                type="button"
                class="flex w-full items-center justify-between px-4 py-5 sm:p-6"
              >
                <span class="flex text-lg font-semibold text-black">
                  How do I get started?
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-5 w-5 text-gray-500"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </button>
              <div class="px-4 pb-5 sm:px-6 sm:pb-6">
                <p class="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                  aliquam adipisci iusto aperiam? Sint asperiores sequi nobis
                  inventore ratione deleniti?
                </p>
              </div>
            </div>
            <div class="cursor-pointer rounded-md border border-gray-400 transition-all duration-200">
              <button
                type="button"
                class="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
              >
                <span class="flex text-start text-lg font-semibold text-black">
                  What is the difference between a free and paid account?
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="hidden h-5 w-5 text-gray-500 md:block"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            <div class="cursor-pointer rounded-md border border-gray-400 transition-all duration-200">
              <button
                type="button"
                class="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
              >
                <span class="flex text-start text-lg font-semibold text-black">
                  What is the difference between a free and paid account?
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="hidden h-5 w-5 text-gray-500 md:block"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
          </div>
          <p class="textbase mt-6 text-center text-gray-600">
            Can&#x27;t find what you&#x27;re looking for?{" "}
            <a href="#" title="" class="font-semibold text-black hover:underline">
              Contact our support
            </a>
          </p>
        </div>
      </section>
      <div class="mx-auto my-12 max-w-7xl md:my-24 lg:my-32">
        <div class="lg:grid lg:grid-cols-12 lg:gap-x-6">
          <div class="px-4 py-10 lg:col-span-5 lg:px-0">
            <span class="mb-8 inline-block rounded-full border p-1 px-3 text-xs font-semibold">
              Pricing that fits your budget
            </span>
            <h1 class="text-3xl font-bold md:text-5xl">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p class="mt-8 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
              magni, rem sed sint neque doloribus saepe veniam minima quaerat minus.
            </p>
            <div class="mt-8 flex w-full max-w-sm items-center space-x-2">
              <input
                class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
              />
              <button
                type="button"
                class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center md:flex-row lg:col-span-7">
            <div class="w-full p-5 md:w-1/2">
              <div class="rounded-md border bg-white bg-opacity-90">
                <div class=" border-b">
                  <div class="px-9 py-7">
                    <h3 class="mb-3 text-xl font-bold leading-snug text-gray-900">
                      Standard
                    </h3>
                    <p class="font-medium leading-relaxed text-gray-500">
                      Lorem ipsum dolor sit amet, consect etur adipiscing maror.
                    </p>
                  </div>
                </div>
                <div class="px-9 pb-9 pt-8">
                  <p class="mb-6 font-medium leading-relaxed text-gray-600">
                    Features included:
                  </p>
                  <ul class="mb-11">
                    <li class="mb-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <p class="font-semibold leading-normal">3 Team Members</p>
                    </li>
                    <li class="mb-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <p class="font-semibold leading-normal">1200+ UI Blocks</p>
                    </li>
                    <li class="mb-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <p class="font-semibold leading-normal">
                        10 GB Cloud Storage
                      </p>
                    </li>
                    <li class="mb-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <p class="font-semibold leading-normal">
                        Individual Email Account
                      </p>
                    </li>
                    <li class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <p class="font-semibold leading-normal">Premium Support</p>
                    </li>
                  </ul>
                  <p class="mb-6 text-lg font-semibold leading-normal text-gray-600">
                    <span>Starting from</span>
                    <span class="ml-2 text-gray-900">$49/mo</span>
                  </p>
                  <div class="md:inline-block">
                    <button
                      type="button"
                      class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Start your free trial
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full p-5 md:w-1/2">
              <div class="rounded-md border bg-white bg-opacity-90">
                <div class=" border-b">
                  <div class="px-9 py-7">
                    <h3 class="mb-3 text-xl font-bold leading-snug text-gray-900">
                      Standard
                    </h3>
                    <p class="font-medium leading-relaxed text-gray-500">
                      Lorem ipsum dolor sit amet, consect etur adipiscing maror.
                    </p>
                  </div>
                </div>
                <div class="px-9 pb-9 pt-8">
                  <p class="mb-6 font-medium leading-relaxed text-gray-600">
                    Features included:
                  </p>
                  <ul class="mb-11">
                    <li class="mb-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <p class="font-semibold leading-normal">3 Team Members</p>
                    </li>
                    <li class="mb-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <p class="font-semibold leading-normal">1200+ UI Blocks</p>
                    </li>
                    <li class="mb-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <p class="font-semibold leading-normal">
                        10 GB Cloud Storage
                      </p>
                    </li>
                    <li class="mb-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <p class="font-semibold leading-normal">
                        Individual Email Account
                      </p>
                    </li>
                    <li class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <p class="font-semibold leading-normal">Premium Support</p>
                    </li>
                  </ul>
                  <p class="mb-6 text-lg font-semibold leading-normal text-gray-600">
                    <span>Starting from</span>
                    <span class="ml-2 text-gray-900">$49/mo</span>
                  </p>
                  <div class="md:inline-block">
                    <button
                      type="button"
                      class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Start your free trial
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto max-w-7xl bg-gray-50 px-2 py-10 lg:px-2">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div class="w-full md:w-2/3 lg:w-1/2">
            <h2 class="text-3xl font-bold text-black">
              Sign up for our weekly newsletter
            </h2>
            <p class="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
              ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
            <div class="mt-4">
              <p class="font-semibold text-gray-800">
                Trusted by over 100,000+ businesses and individuals
              </p>
              <div class="mt-2 flex items-center">
                <div class="flex space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-5 w-5 text-yellow-400"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-5 w-5 text-yellow-400"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-5 w-5 text-yellow-400"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-5 w-5 text-yellow-400"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-5 w-5 text-yellow-400"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <span class="ml-2 inline-block">
                  <span class="text-sm font-semibold text-gray-800">
                    4.8/5 . 3420 Reviews
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div class="mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2">
            <form class="flex lg:justify-center">
              <div class="flex w-full max-w-md flex-col space-y-4">
                <input
                  class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                />
                <button
                  type="button"
                  class="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p class="mt-2 lg:text-center">
              <span class="text-sm text-gray-600">
                By signing up, you agree to our terms of service and privacy policy.
              </span>
            </p>
          </div>
        </div>
      </div>
      
    </div>

  )
}

export default Home