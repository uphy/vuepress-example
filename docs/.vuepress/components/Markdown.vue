<template>
    <span v-html="markdown(text)"></span>
</template>
<script>
const markdownIt = require("markdown-it");
const mi = new markdownIt();

export default {
  props: ["text"],
  methods: {
    markdown(s) {
      return mi.render(s);
    }
  }
};
</script>
