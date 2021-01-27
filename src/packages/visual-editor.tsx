import { defineComponent } from 'vue'
export const VisualEditor = defineComponent({
  props: {},
  created() { 
    console.log(1);
    
  },
  setup(props) { 
    return () => { 
      <div class="visual-editor">可视化编辑器</div>
    }
  }
})