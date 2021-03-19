<script lang="ts">
  export let type: string  = ''
  export let title: string  = ''
  export let description: string  = ''
</script>

<div 
  class="w-full p-3 m-1 rounded-l-md rounded-r-lg shadow-lg"
  class:primary="{type === 'primary'}"
  class:secondary="{type === 'secondary'}"
  class:success="{type === 'success'}"
  class:danger="{type === 'danger'}"
  class:warning="{type === 'warning'}"
  class:info="{type === 'info'}"
  
  >
  <div 
    class="border-l-2 pl-3"
    class:text-primary-600="{type === 'primary'}"
    class:text-secondary-600="{type === 'secondary'}"
    class:text-success-600="{type === 'success'}"
    class:text-danger-600="{type === 'danger'}"
    class:text-warning-600="{type === 'warning'}"
    class:text-info-600="{type === 'info'}"
    class:border-primary-600="{type === 'primary'}"
    class:border-secondary-600="{type === 'secondary'}"
    class:border-success-600="{type === 'success'}"
    class:border-danger-600="{type === 'danger'}"
    class:border-warning-600="{type === 'warning'}"
    class:border-info-600="{type === 'info'}">
    <div class="font-semibold">
      { title }
    </div>
    <span class="text-sm">
      { description }
    </span>
  </div>
</div>

<style>
  .primary {
    @apply bg-primary-200 text-primary-600;
  }
  .secondary {
    @apply bg-secondary-200 text-secondary-600;
  }
  .success {
    @apply bg-success-200 text-success-600;
  }
  .danger {
    @apply bg-danger-200 text-danger-600;
  }
  .info {
    @apply bg-info-200 text-info-600;
  }
  .warning {
    @apply bg-warning-200 text-warning-600;
  }
</style>