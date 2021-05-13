<template>
<!--  <div>-->
    <div class="mdui-progress top-progress" v-if="loading">
      <div class="mdui-progress-indeterminate"></div>
    </div>
    <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label flex">请输入要缩短的链接...</label>
      <input v-model="url" class="mdui-textfield-input" type="text"/>
    </div>
    <input @click="requestUrl" type="button" class="mdui-btn mdui-btn-raised bg-blue-400 mdui-color-theme-accent mdui-ripple self-end" value="提交">
<!--  </div>-->
</template>

<script>

import mdui from "mdui";

export default {
  name: "UrlInput",
  props: {
    loading: false
  },
  mounted() {
    // this.$emit("requestFinished","finished")
  },
  data() {
    return {
      url: ""
    }
  },
  methods: {
    requestUrl: function () {
      if(this.url.match(/^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i))
      {
        this.$emit("requestUrl",this.url)
      }
      else {
        mdui.snackbar("请输入正确的网址",{
          position: "right-bottom",
          timeout: "1500"
        })
      }
    }
  }
}
</script>

<style scoped>

.top-progress {
  position: absolute!important;
  top: 0;
  width: 100%;
  transform: translateX(-65px);
  height: 2px!important;
}

</style>