<template>
  <div>
    <div
      class="group relative mx-auto my-2 flex size-12 cursor-pointer items-center justify-center rounded-3xl bg-gray-800 p-3 transition-all duration-300 ease-linear hover:rounded-xl hover:bg-green-600"
    >
      <UIcon
        :name="icon"
        class="h-full w-full text-green-500 group-hover:text-white"
      />
      <span
        class="absolute left-14 m-2 w-auto min-w-max origin-left scale-0 rounded-md bg-gray-900 p-2 text-sm font-bold text-white shadow-md transition-all duration-100 group-hover:scale-100"
      >
        {{ text }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  icon: string;
  text: string;
}>();
</script>

<style scoped></style>
