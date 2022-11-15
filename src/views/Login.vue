<script setup lang="ts">
import { ref } from "vue";

const account = ref("");
const password = ref("");
</script>

<template>
  <div class="grid flex h-screen justify-center items-center bg-gray-400">
    <div class="bg-white rounded w-96 h-60 text-center">
      <div class="p-10">
        <h3 class="text-2xl font-bold">請登入系統</h3>
        <hr class="my-3 opacity-75" />
        <div class="form-control mb-2">
          <label class="block">
            <span class="block text-sm font-medium text-slate-700 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 inline-block mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <input
                v-model="account"
                placeholder="輸入使用者帳號"
                type="text"
                class="border-2 rounded placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                style="padding: 0.2rem 1rem"
              />
            </span>
          </label>
        </div>
        <div class="form-control mb-5">
          <label class="block">
            <span class="block text-sm font-medium text-slate-700 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 inline-block mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <input
                v-model="password"
                placeholder="輸入密碼"
                type="password"
                class="border-2 rounded placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                style="padding: 0.2rem 1rem"
              />
            </span>
          </label>
        </div>
        <button
          class="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
        >
          登入
        </button>
      </div>
    </div>
  </div>
</template>
