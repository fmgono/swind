<script lang="ts">
  export let type: string  = ''
  // export let title: string  = ''
  // export let caption: string  = ''
</script>

<button 
  class="w-full p-2 m-1 rounded-l-md rounded-r-lg shadow-lg"
  class:primary="{type === 'primary'}"
  class:secondary="{type === 'secondary'}"
  class:success="{type === 'success'}"
  class:danger="{type === 'danger'}"
  class:warning="{type === 'warning'}"
  class:info="{type === 'info'}"
  >
  <div class="font-semibold">Button</div>
</button>

<style>
  .primary {
    @apply bg-primary-200 text-primary-600 hover:bg-primary-100;
  }
  .secondary {
    @apply bg-secondary-200 text-secondary-600 hover:bg-secondary-100;
  }
  .success {
    @apply bg-success-200 text-success-600 hover:bg-success-100;
  }
  .danger {
    @apply bg-danger-200 text-danger-600 hover:bg-danger-100;
  }
  .info {
    @apply bg-info-200 text-info-600 hover:bg-info-100;
  }
  .warning {
    @apply bg-warning-200 text-warning-600 hover:bg-warning-100;
  }
</style>