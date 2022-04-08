<template>
  <div>
    <nav class="flex justify-between items-center">
      <div>
        <nav class="flex" aria-label="Breadcrumb">
          <ol role="list" class="flex items-center space-x-4">
            <li>
              <div>
                <a href="#" class="text-slate-400 hover:text-slate-500 transition-hover-300">
                  <svg class="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span class="sr-only">Home</span>
                </a>
              </div>
            </li>

            <li>
              <div class="flex items-center">
                <svg class="flex-shrink-0 h-5 w-5 text-slate-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <a href="#" class="ml-4 text-sm font-medium text-slate-500 hover:text-slate-700 transition-hover-300">Trips</a>
              </div>
            </li>

            <li>
              <div class="flex items-center">
                <svg class="flex-shrink-0 h-5 w-5 text-slate-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <a href="#" class="ml-4 text-sm font-medium text-slate-500 hover:text-slate-700 transition-hover-300" aria-current="page">Trip One</a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div>
        <a href="" class="text-slate-500 font-medium hover:text-slate-700 transition-hover-300">+ Add day</a>
      </div>
    </nav>

    <div class="mt-16 grid grid-cols-2 gap-6">
      <aside>
        <h1 class="text-gray-700 font-bold text-4xl">Trip One</h1>
        <span class="text-sm text-gray-500">01/01/2021</span>
      </aside>
    </div>

  </div>
</template>