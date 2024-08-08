<template>
  <div class="flex min-h-screen flex-col items-center justify-center">
    <main
      class="grid max-w-[375px] bg-gray-50 md:max-w-4xl md:grid-cols-2 md:rounded-xl"
    >
      <section id="calc" class="p-5 md:p-8">
        <div class="items-center justify-between md:flex">
          <h2 class="mb-1 text-slate-800">Mortage Calculator</h2>
          <span
            class="text-sm font-medium text-slate-400 underline hover:cursor-pointer md:font-semibold"
            @click="clear"
          >
            Clear All
          </span>
        </div>
        <form
          class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2"
          @submit.prevent="handleSubmit"
          novalidate
        >
          <CalcInput
            title="Mortgage Amount"
            type="string"
            name="amount"
            unit="£"
            min="0"
            v-model="amount"
            :unit-first="true"
            class="md:col-span-2"
            required
            :submitted="submitted"
          />
          <CalcInput
            title="Mortgage Term"
            type="number"
            name="term"
            unit="years"
            min="0"
            v-model="term"
            required
            :submitted="submitted"
          />
          <CalcInput
            title="Interest Rate"
            type="number"
            name="rate"
            unit="%"
            min="0"
            step="0.01"
            v-model="rate"
            required
            :submitted="submitted"
          />
          <fieldset class="md:col-span-2">
            <legend class="text-sm text-slate-500">Mortgage Type</legend>
            <label
              class="mt-2 flex w-full items-center rounded py-2 font-bold text-slate-900 outline outline-1 outline-gray-500 hover:cursor-pointer hover:outline-lime has-[:checked]:bg-yellow-50 has-[:checked]:outline-lime"
            >
              <input
                class="form-radio me-3 ms-4 text-lime hover:cursor-pointer focus:outline-lime focus:ring-0"
                type="radio"
                name="type"
                v-model="type"
                id="repayement"
                value="repayement"
              />
              Repayment
            </label>
            <label
              class="mt-2 flex w-full items-center rounded py-2 font-bold text-slate-900 outline outline-1 outline-gray-500 hover:cursor-pointer hover:outline-lime has-[:checked]:bg-yellow-50 has-[:checked]:outline-lime"
            >
              <input
                class="form-radio me-3 ms-4 text-lime hover:cursor-pointer focus:outline-lime focus:ring-0"
                type="radio"
                name="type"
                v-model="type"
                id="interest"
                value="interest"
              />
              Interest Only
            </label>
            <p v-if="submitted && !type" class="mt-3 text-xs text-red-600">
              This field is required
            </p>
          </fieldset>
          <div class="flex justify-center md:col-span-2 md:justify-start">
            <button
              type="submit"
              class="mt-4 inline-flex w-full items-center justify-center rounded-full bg-lime px-2 py-3 font-bold text-slate-800 hover:bg-lime-light md:w-auto md:px-8"
            >
              <img
                class="me-3 size-5"
                src="assets/images/icon-calculator.svg"
                alt="calculator"
              />
              Calculate Repayments
            </button>
          </div>
        </form>
      </section>
      <section
        id="results"
        class="bg-slate-900 p-5 md:rounded-r-xl md:rounded-bl-[40px] md:p-8"
      >
        <div v-if="showResults">
          <h2 class="mt-2 text-gray-200 md:mt-0">Your results</h2>
          <p class="mt-4 text-sm text-slate-300 md:mt-2">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>
          <div
            class="mt-5 grid grid-cols-1 divide-y divide-gray-700 rounded-lg border-t-4 border-lime bg-slate-950 px-4 md:mt-8 md:px-6"
          >
            <div class="py-4 md:py-6">
              <h3>You monthly repayments</h3>
              <div
                class="text-3xl font-bold lining-nums tabular-nums text-lime md:text-4xl"
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
        </div>
        <div v-else class="flex h-full flex-col items-center justify-center">
          <img
            class="size-40"
            src="assets/images/illustration-empty.svg"
            alt="results-placeholder"
          />
          <div class="my-3 text-xl font-bold text-gray-100">
            Results shown here
          </div>
          <p class="text-center text-xs font-medium text-slate-300">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
// Reactive data

const submitted = ref(false);
const showResults = ref(false);

const amount = ref();
const term = ref();
const rate = ref();
const type = ref("");

const monthlyRepayments = 1797.74;
const totalRepay = 539322.94;

// Methods

const formatToGbp = (value: number) => {
  return value.toLocaleString("en-GB", { style: "currency", currency: "GBP" });
};

const getMonthlyRepayments = () => {
  return formatToGbp(monthlyRepayments);
};
const getTotalRepay = () => {
  return formatToGbp(totalRepay);
};

const handleSubmit = () => {
  submitted.value = true;
};

const clear = () => {
  amount.value = 0;
  term.value = 0;
  rate.value = 0;
  type.value = "";
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
