<template>
  <div class="flex flex-col">
    <div class="flex flex-col mdui-shadow-4 rounded mx-6 mt-10 md:mx-12 md:mt-16 p-4" @requestFinished="requestFinished">
      <h4 class="self-start text-lg text-black">Renex 短链接</h4>
      <url-input :loading = "loading" @requestUrl="requestUrlListener"></url-input>
    </div>
    <result ref="result" @requestFinished="requestFinished"></result>
  </div>
</template>

<script>

import UrlInput from "./components/UrlInput.vue";
import Result from "./components/Result.vue";

export default {
  name: "App",
  data() {
    return {
      loading: false,
    }
  },
  components: {
    Result,
    UrlInput
  },
  methods: {
    requestFinished(args) {
      this.loading = false
    },
    requestUrlListener(url) {
      this.loading = true
      this.$refs.result.requestNewUrl(url)
    }
  }
}

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
