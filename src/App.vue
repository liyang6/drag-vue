<template>
  <div class="app">
    <h1>这是</h1>
    <visual-editor />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { VisualEditor } from "@/packages/visual-editor";
export default defineComponent({
  name: "app",
  components: {
    VisualEditor
  }
});
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
</style>