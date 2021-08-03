# Slot

Customize Add Tag

```html
<n-dynamic-tags v-model:value="tags">
  <template #add="{ add }">
    <n-button size="small" @click="add()" type="primary" dashed>
      <template #icon>
        <n-icon>
          <Add />
        </n-icon>
      </template>
      New Tag
    </n-button>
  </template>
</n-dynamic-tags>
```

```js
import { defineComponent, ref } from 'vue'

import { Add } from '@vicons/ionicons5'

export default defineComponent({
  components: {
    Add
  },
  setup () {
    return {
      tags: ref(['teacher', 'programmer'])
    }
  }
})
```