<template>
    <button @click="hello">{{ msg }}</button>
</template>

<script>
export default {    
  methods: {
    hello() {
      window.alert(this.msg);
    }
  },
  props: [
      "msg"
  ]
};
</script>

