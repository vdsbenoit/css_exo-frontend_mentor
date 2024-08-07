<template>
  <div class="relative">
    <span
      class="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500"
    >
      {{ currencySymbol }}
    </span>
    <input
      ref="inputRef"
      :value="displayValue"
      @input="handleInput"
      class="w-full rounded-md border border-gray-300 py-2 pl-8 pr-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      v-bind="$attrs"
      type="number"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";

const props = defineProps({
  modelValue: {
    type: [Number, String],
    default: "",
  },
  currency: {
    type: String,
    default: "USD",
  },
});

const emit = defineEmits(["update:modelValue"]);

const inputRef = ref(null);

const currencySymbol = computed(() => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: props.currency,
  })
    .format(0)
    .replace(/\d/g, "")
    .trim();
});

const formatCurrency = (value) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: props.currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
};

const displayValue = computed(() => {
  return props.modelValue ? formatCurrency(props.modelValue) : "";
});

const handleInput = (event) => {
  const value = event.target.value.replace(/[^\d.]/g, "");
  const numericValue = parseFloat(value);
  emit("update:modelValue", isNaN(numericValue) ? "" : numericValue);
};

watch(
  () => props.currency,
  () => {
    emit("update:modelValue", props.modelValue);
  },
);

onMounted(() => {
  if (inputRef.value) {
    inputRef.value.addEventListener("blur", () => {
      if (props.modelValue) {
        inputRef.value.value = formatCurrency(props.modelValue);
      }
    });
  }
});
</script>
