<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="title">Title</label>
      <input
        v-model="form.title"
        type="text"
      >
    </div>
    <div class="form-group">
      <label for="body">Body</label>
      <textarea v-model="form.body" />
    </div>
  </form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CreatePostPayload } from '../contracts/postContracts'

const Props = Vue.extend({
  props: {
    value: {
      type: Object as () => CreatePostPayload,
      required: true
    }
  }
})

@Component
export default class PostForm extends Props {
  public get form(): CreatePostPayload {
    return this.value
  }

  public set form(val) {
    this.$emit('input', {
      ...this.form,
      ...val
    })
  }

  public handleSubmit() {
    this.$emit('submit')
  }
}
</script>
