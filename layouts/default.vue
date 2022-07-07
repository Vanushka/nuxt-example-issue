<script lang="tsx">
  export default defineComponent({
    name: "defaultLayout",
    render () {
      return (
        <div class="default-layout scroll-smooth">
          <div class="main-container-content">
            { this.$slots.default() }
          </div>
        </div>
      )
    }
})
</script>

<style lang="sass">
  @import "../sass/vars"
</style>