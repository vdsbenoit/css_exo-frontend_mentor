<template>
  <div class="min-h-screen flex-col items-center justify-center sm:flex">
    <main
      class="grid w-full bg-gray-50 sm:w-auto sm:max-w-4xl sm:grid-cols-2 sm:rounded-xl"
    >
      <section id="calc" class="p-5 pt-8 sm:p-8">
        <div class="items-center justify-between sm:flex">
          <h2 class="mb-1 text-slate-800">Mortage Calculator</h2>
          <span
            class="text-sm font-medium text-slate-400 underline hover:cursor-pointer sm:font-semibold"
            @click="clear"
          >
            Clear All
          </span>
        </div>
        <form
          class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2"
          @submit.prevent="handleSubmit"
          novalidate
        >
          <CalcInput
            title="Mortgage Amount"
            type="string"
            name="amount"
            unit="£"
            min="0"
            v-model="rAmount"
            :unit-first="true"
            class="sm:col-span-2"
            required
            :submitted="rSubmitted"
            @input="formatAmount"
          >
            <p v-if="rInvalidAmount" class="mt-3 text-xs text-red-600">
              The amount must be a numerical value
            </p>
          </CalcInput>
          <CalcInput
            title="Mortgage Term"
            type="number"
            name="term"
            unit="years"
            min="0"
            v-model="rTerm"
            required
            :submitted="rSubmitted"
          />
          <CalcInput
            title="Interest Rate"
            type="number"
            name="rate"
            unit="%"
            min="0"
            step="0.01"
            v-model="rRate"
            required
            :submitted="rSubmitted"
          />
          <fieldset class="sm:col-span-2">
            <legend class="text-sm text-slate-500">Mortgage Type</legend>
            <label
              class="mt-2 flex w-full items-center rounded py-2 font-bold text-slate-900 outline outline-1 outline-gray-500 hover:cursor-pointer hover:outline-lime has-[:checked]:bg-yellow-50 has-[:checked]:outline-lime"
            >
              <input
                class="form-radio me-3 ms-4 text-lime hover:cursor-pointer focus:outline-lime focus:ring-0"
                type="radio"
                name="type"
                v-model="rType"
                id="repayment"
                value="repayment"
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
                v-model="rType"
                id="interest"
                value="interest"
              />
              Interest Only
            </label>
            <p v-if="rSubmitted && !rType" class="mt-3 text-xs text-red-600">
              This field is required
            </p>
          </fieldset>
          <div class="flex justify-center sm:col-span-2 sm:justify-start">
            <button
              type="submit"
              class="mt-4 inline-flex w-full items-center justify-center rounded-full bg-lime px-4 py-3 font-bold text-slate-800 hover:bg-lime-light sm:w-auto sm:px-8"
            >
              <img
                class="me-3 size-5"
                src="@/assets/images/icon-calculator.svg"
                alt="calculator"
              />
              Calculate Repayments
            </button>
          </div>
        </form>
      </section>
      <section
        id="results"
        class="bg-slate-900 p-5 py-8 sm:rounded-r-xl sm:rounded-bl-[40px] sm:p-8"
      >
        <div v-if="rShowResults">
          <h2 class="mt-2 text-gray-200 sm:mt-0">Your results</h2>
          <p class="mt-4 text-sm text-slate-300 sm:mt-2">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>
          <div
            class="mt-5 grid grid-cols-1 divide-y divide-gray-700 rounded-lg border-t-4 border-lime bg-slate-950 px-4 sm:mt-8 sm:px-6"
          >
            <div class="py-4 sm:py-6">
              <h3>You monthly repayments</h3>
              <div
                class="text-3xl font-bold lining-nums tabular-nums text-lime sm:text-4xl"
              >
                £{{ rMonthlyRepayments }}
              </div>
            </div>
            <div class="py-4 sm:py-5">
              <h3>Total you'll repay over the term</h3>
              <div
                class="text-xl font-bold lining-nums tabular-nums text-gray-200"
              >
                £{{ rTotalRepay }}
              </div>
            </div>
          </div>
        </div>
        <div v-else class="flex h-full flex-col items-center justify-center">
          <img
            class="size-40"
            src="@/assets/images/illustration-empty.svg"
            alt="results-placeholder"
          />
          <div class="my-3 text-xl font-bold text-gray-100">
            Results shown here
          </div>
          <p class="text-center text-sm font-medium text-slate-300 sm:text-xs">
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

const rSubmitted = ref(false);
const rShowResults = ref(false);
const rInvalidAmount = ref(false);

const rAmount = ref(""); // Mortage amount
const rTerm = ref(); // Mortgage term in years
const rRate = ref(); // Annual interest rate
const rType = ref("");

const rMonthlyRepayments = ref("");
const rTotalRepay = ref("");

// Methods

const parseNumber = (value: string) => {
  return parseFloat(value.replace(/[.,]/g, ""));
};

const formatToGbp = (value: number) => {
  return value.toLocaleString("en-GB", { maximumFractionDigits: 2 });
};

const formatAmount = () => {
  if (!rAmount.value) {
    rInvalidAmount.value = false;
    return;
  }
  if (/[^\d.,]/.test(rAmount.value)) {
    rInvalidAmount.value = true;
    return;
  }
  rInvalidAmount.value = false;
  const value = parseNumber(rAmount.value);
  rAmount.value = formatToGbp(value);
};

const handleSubmit = () => {
  rSubmitted.value = true;
  if (!rAmount.value || !rTerm.value || !rRate.value || !rType.value) {
    rShowResults.value = false;
    return;
  }
  const amount = parseNumber(rAmount.value);

  // convert annual rate to monthly rate
  const r = rRate.value / 100 / 12;

  // Total number of payments (months)
  const n = rTerm.value * 12;

  // Calculate monthly repayment
  let repayments = 0;
  switch (rType.value) {
    case "repayment":
      repayments = (amount * (r * (1 + r) ** n)) / ((1 + r) ** n - 1);
      break;
    case "interest":
      repayments = amount * r;
      break;

    default:
      console.error(`Unknow Mortgage type : ${rType.value}`);
  }

  rMonthlyRepayments.value = formatToGbp(repayments);
  rTotalRepay.value = formatToGbp(repayments * n);
  rShowResults.value = true;
};

const clear = () => {
  rAmount.value = "";
  rTerm.value = 0;
  rRate.value = 0;
  rType.value = "";
  rSubmitted.value = false;
  rShowResults.value = false;
  rInvalidAmount.value = false;
};
</script>

<style scoped lang="postcss">
h2 {
  @apply text-xl font-bold tracking-wide sm:text-lg;
}
h3 {
  @apply mb-2 text-sm text-gray-400;
}
</style>
