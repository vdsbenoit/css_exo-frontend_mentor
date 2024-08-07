<template>
  <div class="flex min-h-screen flex-col items-center justify-center">
    <main
      class="grid max-w-[375px] bg-gray-50 md:max-w-4xl md:grid-cols-2 md:rounded-xl"
    >
      <section id="calc" class="p-5 md:p-8">
        <div class="items-center justify-between md:flex">
          <h2 class="mb-1 text-slate-800">Mortage Calculator</h2>
          <span
            class="text-sm font-medium text-slate-400 underline md:font-semibold"
          >
            Clear All
          </span>
        </div>
        <form class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <label class="md:col-span-2">
            <span class="text-sm text-slate-500 md:font-semibold">
              Mortgage Amount
            </span>
            <div
              class="mt-2 flex w-full overflow-hidden rounded-md border border-slate-400"
            >
              <span
                class="content-center bg-slate-50 px-3 font-bold text-slate-700"
              >
                £
              </span>
              <input
                type="string"
                value="300,000"
                name="amount"
                class="w-full px-3 py-2 font-bold text-slate-800 focus:outline-none"
              />
            </div>
          </label>
          <label>
            <span class="text-sm text-slate-500 md:font-semibold">
              Mortgage Term
            </span>
            <div
              class="mt-2 flex w-full overflow-hidden rounded-md border border-slate-400"
            >
              <input
                type="number"
                :value="25"
                name="term"
                class="w-full border-none px-3 py-2 font-bold text-slate-800 focus:outline-none"
              />
              <span
                class="content-center bg-slate-50 px-3 font-bold text-slate-700"
              >
                years
              </span>
            </div>
          </label>
          <label>
            <span class="text-sm text-slate-500 md:font-semibold">
              Interest Rate
            </span>
            <div
              class="mt-2 flex w-full overflow-hidden rounded-md border border-slate-400"
            >
              <input
                type="number"
                :value="2.25"
                name="rate"
                class="w-full border-none px-3 py-2 font-bold text-slate-800 focus:outline-none"
              />
              <span
                class="content-center bg-slate-50 px-3 font-bold text-slate-700"
              >
                %
              </span>
            </div>
          </label>
          <fieldset class="md:col-span-2">
            <legend class="text-sm text-slate-500 md:font-semibold">
              Mortgage type
            </legend>
            <label
              class="mt-2 flex w-full items-center rounded py-2 font-bold text-slate-700 outline outline-1 outline-gray-500 has-[:checked]:bg-yellow-50 has-[:checked]:outline-lime"
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
              class="mt-2 flex w-full items-center rounded py-2 font-bold text-slate-700 outline outline-1 outline-gray-500 has-[:checked]:bg-yellow-50 has-[:checked]:outline-lime"
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
          <div class="flex justify-center md:col-span-2 md:justify-start">
            <button
              type="submit"
              class="mt-4 inline-flex w-full items-center justify-center rounded-full bg-lime px-2 py-3 font-bold text-slate-800 md:w-auto md:px-8"
            >
              <UIcon class="me-3 size-5" name="i-heroicons-calculator-solid" />
              Calculate Repayments
            </button>
          </div>
        </form>
      </section>
      <section
        id="results"
        class="bg-slate-900 p-5 md:rounded-r-xl md:rounded-bl-[40px] md:p-8"
      >
        <h2 class="mt-2 text-gray-200 md:mt-0">Your results</h2>
        <p class="mt-4 text-sm text-slate-300 md:mt-2">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </p>
        <div
          class="mt-5 grid grid-cols-1 divide-y divide-gray-700 rounded-lg border-t-4 border-lime bg-slate-950 px-4 md:mt-8 md:px-6"
        >
          <div class="py-4 md:py-6">
            <h3>You monthly repayments</h3>
            <div
              class="text-3xl font-bold lining-nums tabular-nums text-lime md:text-5xl"
            >
              {{ getMonthlyRepayments() }}
            </div>
          </div>
          <div class="py-4 md:py-5">
            <h3>Total you'll repay over the term</h3>
            <div
              class="text-xl font-bold lining-nums tabular-nums text-gray-200"
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
  @apply text-xl font-bold tracking-wide md:text-lg;
}
h3 {
  @apply mb-2 text-sm text-gray-400;
}
</style>
