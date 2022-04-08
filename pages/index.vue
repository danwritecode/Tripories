<template>
  <div class="min-h-screen flex items-center justify-center">
    <div>
      <label for="passcode" class="block text-sm font-medium text-slate-700">Passcode</label>
      <div class="mt-1">
        <input type="password" name="passcode" id="passcode" class="shadow-sm focus:ring-slate-500 focus:border-slate-500 block w-full sm:text-sm border-slate-300 rounded-md transition-hover-300" placeholder="supersecretcode">
      </div>

      <button class="mt-3 inline-flex items-center justify-center font-medium bg-slate-200 text-slate-900 py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 hover:bg-slate-300 transition-hover-300">go</button>
    </div>
  </div>
</template>