export const sourcecode1 = `<vm-tag>标签一</vm-tag>
<vm-tag type="gray">标签二</vm-tag>
<vm-tag type="primary">标签三</vm-tag>
<vm-tag type="success">标签四</vm-tag>
<vm-tag type="warning">标签五</vm-tag>
<vm-tag type="danger">标签六</vm-tag>`

export const sourcecode2 = `<vm-tag
  v-for="tag in tags"
  :key="tag.name"
  :closable="true"
  :type="tag.type"
>
{{tag.name}}
</vm-tag>
<script>
  export default {
    data() {
      return {
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'gray' },
          { name: '标签三', type: 'primary' },
          { name: '标签四', type: 'success' },
          { name: '标签五', type: 'warning' },
          { name: '标签六', type: 'danger' }
        ]
      };
    }
  }
</script>`
export const sourcecode3 = `<vm-tag
  :key="tag"
  v-for="tag in dynamicTags"
  :closable="true"
  :close-transition="false"
  @close="handleClose(tag)"
>
{{tag}}
</vm-tag>
<vm-input
  v-model="inputValue"
  ref="saveTagInput"
  inputclass="newTagInput"
  placeholder="+NewTag"
  @enter="handleInputConfirm"
  @blur="handleInputConfirm"
>
</vm-input>

<script>
  export default {
    data() {
      return {
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

 
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputValue = '';
      }
    }
  }
</script>`
