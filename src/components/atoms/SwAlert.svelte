<script lang="ts">
  type FilledType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
  type OutlinedType = 'primary-outlined' | 'secondary-outlined' | 'success-outlined' | 'danger-outlined' | 'warning-outlined' | 'info-outlined'
  export let type: (FilledType | OutlinedType) = 'primary'
  export let title: string  = ''
  export let description: string  = ''
</script>

<div 
  class="w-full p-3 m-1 rounded-l-md rounded-r-lg shadow-lg flex"
  class:primary="{type === 'primary'}"
  class:primary-outlined="{type === 'primary-outlined'}"
  class:secondary="{type === 'secondary'}"
  class:secondary-outlined="{type === 'secondary-outlined'}"
  class:success="{type === 'success'}"
  class:success-outlined="{type === 'success-outlined'}"
  class:danger="{type === 'danger'}"
  class:danger-outlined="{type === 'danger-outlined'}"
  class:warning="{type === 'warning'}"
  class:warning-outlined="{type === 'warning-outlined'}"
  class:info="{type === 'info'}"
  class:info-outlined="{type === 'info-outlined'}"
  
  >
  <!-- Shape -->
  <div 
    class="h-auto w-1 rounded-lg"
    class:bg-primary-600="{type === 'primary' || type === 'primary-outlined' }"
    class:bg-secondary-600="{type === 'secondary' || type === 'secondary-outlined' }"
    class:bg-success-600="{type === 'success' || type === 'success-outlined' }"
    class:bg-danger-600="{type === 'danger' || type === 'danger-outlined' }"
    class:bg-warning-600="{type === 'warning' || type === 'warning-outlined' }"
    class:bg-info-600="{type === 'info' || type === 'info-outlined' }">
  </div>
  <div 
    class="pl-3"
    class:text-primary-600="{type === 'primary' || type === 'primary-outlined' }"
    class:text-secondary-600="{type === 'secondary' || type === 'secondary-outlined' }"
    class:text-success-600="{type === 'success' || type === 'success-outlined' }"
    class:text-danger-600="{type === 'danger' || type === 'danger-outlined' }"
    class:text-warning-600="{type === 'warning' || type === 'warning-outlined' }"
    class:text-info-600="{type === 'info' || type === 'info-outlined' }"
    >
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
  .primary-outlined {
    @apply ring-2 ring-primary-200 text-primary-600;
  }
  .secondary {
    @apply bg-secondary-200 text-secondary-600;
  }
  .secondary-outlined {
    @apply ring-2 ring-secondary-200 text-secondary-600;
  }
  .success {
    @apply bg-success-200 text-success-600;
  }
  .success-outlined {
    @apply ring-2 ring-success-200 text-success-600;
  }
  .danger {
    @apply bg-danger-200 text-danger-600;
  }
  .danger-outlined {
    @apply ring-2 ring-danger-200 text-danger-600;
  }
  .info {
    @apply bg-info-200 text-info-600;
  }
  .info-outlined {
    @apply ring-2 ring-info-200 text-info-600;
  }
  .warning {
    @apply bg-warning-200 text-warning-600;
  }
  .warning-outlined {
    @apply ring-2 ring-warning-200 text-warning-600;
  }
</style>