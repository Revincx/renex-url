<template>
  <div class="flex flex-col transition-all mdui-shadow-4 rounded mx-12 mt-8 p-4" v-if="finished">
    <div class="result flex flex-col">
      <h4 class=" text-lg text-black">生成结果</h4>
      <div class="my-4 p-2 bg-gray-100 rounded">
        <p id="url-result" class="font-sans">{{ urlResult }}</p>
      </div>
      <input type="button" data-clipboard-target="#url-result"
             class="copy-button mdui-btn mdui-btn-raised bg-blue-400 mdui-color-theme-accent mdui-ripple self-end"
             value="复制">
    </div>
  </div>
</template>

<script>
import ClipboardJS from 'clipboard'
import mdui from "mdui"
import axios from "axios";

export default {
  name: "Result",
  data() {
    return {
      finished: false,
      urlResult: "https://renex.me/test"
    }
  },
  mounted() {
    const btnCopy = new ClipboardJS('.copy-button');

    btnCopy.on('success', function (e) {
      mdui.snackbar("已复制到剪切板", {
        position: "right-bottom",
        timeout: 1500
      })

      e.clearSelection();
    });
  },
  methods: {
    requestNewUrl: function (url) {
      axios.post("https://api.revincx.icu/renexUrl", {
            action: "new",
            url: url
          },
          {
            timeout: 10000
          })
          .then(response => {
            this.urlResult = `https://renex.me/${response.data.urlPath}`
            this.finishRequest()
            this.finished = true
          })
          .catch(err => {
            mdui.snackbar("请求失败，请查看控制台日志", {
              position: 'right-bottom',
              timeout: 1500
            })
            this.finishRequest()
          })
    },
    finishRequest() {
      this.$emit("requestFinished", "test")
    }
  }
}
</script>