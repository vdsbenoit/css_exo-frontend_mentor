<template>
  <label :class="$attrs.class">
    <span class="text-sm text-slate-500"> {{ title }} </span>
    <div
      class="group mt-2 flex w-full overflow-hidden rounded-md border border-slate-400 focus-within:border-lime"
      :class="{
        'flex-row-reverse': unitFirst,
        'has-[:required]:border-red-600': showRequired,
      }"
    >
      <!-- Input content -->
      <input
        :value="model"
        @focusout="hadFocus = true"
        @input="onInput"
        class="w-full border-none px-3 py-2 font-bold text-slate-800 hover:cursor-pointer focus:outline-none"
        v-bind="$attrs"
      />
      <!-- Unit -->
      <span
        class="content-center bg-slate-50 px-3 font-bold text-slate-700 group-focus-within:bg-lime group-focus-within:text-slate-800"
        :class="{
          'group-has-[:required]:bg-red-600 group-has-[:required]:text-white':
            showRequired,
        }"
      >
        {{ unit }}
      </span>
    </div>
    <p v-if="showRequired" class="mt-3 text-xs text-red-600">
      This field is required
    </p>
  </label>
</template>

<script lang="ts" setup>
// Component setup

defineOptions({
  inheritAttrs: false,
});
const props = defineProps({
  title: String,
  unit: String,
  unitFirst: { type: Boolean, default: false },
  submitted: { type: Boolean, default: false },
});
const model = defineModel();

// Reactive data

const hadFocus = ref(false);

// Computed data

const showRequired = computed(() => {
  return !model.value && (hadFocus.value || props.submitted);
});

// Methods

const onInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  model.value = input.value;
};
</script>

<style scoped></style>
