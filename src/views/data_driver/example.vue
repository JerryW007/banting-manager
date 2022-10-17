<template>
  <div>
    <question />
    <question />
  </div>
</template>
<script>
import question from "./components/question";
export default {
  components: {
    question,
  },
  data() {
    return {
      validation: {},
    };
  },
  created() {},
};
</script>
<style scoped>
</style>
