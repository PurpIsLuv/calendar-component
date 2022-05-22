<template>
  <div class="v-button cursor-pointer" @click="$emit('click')">
    <slot />
  </div>
</template>

<script>
export default {
  name: "VButton"
}
</script>