<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="max-w-[375px] bg-blue-500 lg:max-w-[1440px] grid md:grid-cols-2">
      <div id="calc" class="bg-gray-100 p-8">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-bold tracking-wide text-slate-700">
            Mortage Calculator
          </h2>
          <span class="text-xs font-semibold text-slate-400 underline">
            Clear All
          </span>
        </div>
        <form class="mt-4">
          <label class="block">
            <div class="text-sm font-medium text-slate-500">
              Mortgage Amount
            </div>
            <div
              class="mt-2 flex w-full overflow-hidden rounded-md border border-slate-400"
            >
              <span class="bg-slate-200 px-3 py-2 text-slate-700">$</span>
              <input
                type="number"
                value="300.000"
                class="w-full px-3 py-2 focus:outline-none"
              />
            </div>
          </label>
        </form>
      </div>
      <div id="results" class="bg-slate-800 p-8">
        <h2 class="text-lg font-bold tracking-wide text-gray-200">
            Your results
          </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>