<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="bg-grey-800 w-96 rounded-xl px-8 py-9">
      <img
        class="mx-auto block h-24 rounded-full"
        src="/assets/images/avatar-jessica.jpeg"
      />
      <div class="text-center">
        <h4 class="mt-6 text-2xl tracking-wider">Jessica Randall</h4>
        <h5 class="text-green mt-2 text-sm font-semibold">
          London, United Kingdom
        </h5>
        <p class="mt-6 text-sm text-neutral-300">
          "Front-end developer and avid reader."
        </p>
        <div class="mt-5 space-y-4">
          <a
            v-for="link in links"
            :key="link.name"
            class="bg-grey-700 block rounded-md p-3 text-sm font-semibold"
            :href="link.target"
            target="_blank"
            >{{ link.name }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const links = [
  { name: "GitHub", target: "https://GitHub.com" },
  { name: "Frontend Mentor", target: "https://Frontend-Mentor.com" },
  { name: "LinkedIn", target: "https://LinkedIn.com" },
  { name: "Twitter", target: "https://Twitter.com" },
  { name: "Instagram", target: "https://Instagram.com" },
];
</script>
