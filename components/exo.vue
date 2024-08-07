<template>
  <div class="flex min-h-screen flex-col items-center justify-center">
    <main
      class="grid max-w-[375px] bg-gray-50 md:max-w-4xl md:grid-cols-2 md:rounded-xl"
    >
      <section id="calc" class="p-8">
        <div class="flex items-center justify-between">
          <h2 class="font-bold text-slate-800">Mortage Calculator</h2>
          <span class="text-xs font-semibold text-slate-400 underline">
            Clear All
          </span>
        </div>
        <form class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <label class="md:col-span-2">
            <span class="text-sm font-semibold text-slate-500">
              Mortgage Amount
            </span>
            <div
              class="mt-2 flex w-full overflow-hidden rounded-md border border-slate-400"
            >
              <span class="bg-slate-50 px-3 py-2 font-bold text-slate-700"
                >£</span
              >
              <input
                type="string"
                value="300,000"
                name="amount"
                class="w-full px-3 py-2 font-bold text-slate-800 focus:outline-none"
              />
            </div>
          </label>
          <label>
            <span class="text-sm font-semibold text-slate-500">
              Mortgage Term
            </span>
            <div
              class="mt-2 flex w-full overflow-hidden rounded-md border border-slate-400"
            >
              <input
                type="number"
                :value="25"
                name="term"
                class="w-full px-3 py-2 font-bold text-slate-800 focus:outline-none"
              />
              <span class="bg-slate-50 px-3 py-2 font-bold text-slate-700"
                >years</span
              >
            </div>
          </label>
          <label>
            <span class="text-sm font-semibold text-slate-500">
              Interest Rate
            </span>
            <div
              class="mt-2 flex w-full overflow-hidden rounded-md border border-slate-400"
            >
              <input
                type="number"
                :value="2.25"
                name="rate"
                class="w-full px-3 py-2 font-bold text-slate-800 focus:outline-none"
              />
              <span class="bg-slate-50 px-3 py-2 font-bold text-slate-700"
                >%</span
              >
            </div>
          </label>
          <fieldset class="col-span-2">
            <legend class="text-sm font-semibold text-slate-500">
              Mortgage type
            </legend>
            <label
              class="mt-2 block w-full rounded py-2 text-sm font-bold text-slate-700 outline outline-1 outline-gray-500 has-[:checked]:bg-yellow-50 has-[:checked]:outline-lime"
            >
              <input
                class="form-radio me-3 ms-4 text-lime focus:outline-lime focus:ring-0"
                type="radio"
                name="type"
                id="repayement"
                value="repayement"
                checked
              />
              Repayment
            </label>
            <label
              class="mt-2 block w-full rounded py-2 text-sm font-bold text-slate-700 outline outline-1 outline-gray-500 has-[:checked]:bg-yellow-50 has-[:checked]:outline-lime"
            >
              <input
                class="form-radio me-3 ms-4 text-lime focus:outline-lime focus:ring-0"
                type="radio"
                name="type"
                id="interest"
                value="interest"
              />
              Interest Only
            </label>
          </fieldset>
          <div class="col-span-2 flex">
            <button
              type="submit"
              class="mt-4 inline-flex items-center justify-center rounded-full bg-lime px-8 py-3 font-bold text-slate-800"
            >
              <UIcon class="me-3 size-5" name="i-heroicons-calculator-solid" />
              Calculate Repayments
            </button>
          </div>
        </form>
      </section>
      <section
        id="results"
        class="rounded-r-xl rounded-bl-[40px] bg-slate-800 p-9"
      >
        <h2 class="text-gray-200">Your results</h2>
        <p class="mt-2 text-sm text-gray-200">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </p>
        <div
          class="mt-8 grid grid-cols-1 divide-y divide-gray-700 rounded-lg border-t-4 border-lime bg-slate-900 px-6"
        >
          <div class="py-6">
            <h3>You monthly repayments</h3>
            <div class="text-5xl font-bold lining-nums tabular-nums text-lime">
              {{ getMonthlyRepayments() }}
            </div>
          </div>
          <div class="py-5">
            <h3>Total you'll repay over the term</h3>
            <div
              class="text-xl font-bold lining-nums tabular-nums text-gray-300"
            >
              {{ getTotalRepay() }}
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
import type { _300 } from "#tailwind-config/theme/transitionDelay";
import CurrencyInput from "./CurrencyInput.vue";

const monthlyRepayments = 1797.74;
const totalRepay = 539322.94;

const formatToGbp = (value: number) => {
  return value.toLocaleString("en-GB", { style: "currency", currency: "GBP" });
};

const getMonthlyRepayments = () => {
  return formatToGbp(monthlyRepayments);
};
const getTotalRepay = () => {
  return formatToGbp(totalRepay);
};
</script>

<style scoped lang="postcss">
h2 {
  @apply text-lg font-bold tracking-wide;
}
h3 {
  @apply mb-2 text-sm text-gray-500;
}
</style>
