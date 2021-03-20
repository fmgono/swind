<script lang="ts">
  type FilledType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
  type OutlinedType = 'primary-outlined' | 'secondary-outlined' | 'success-outlined' | 'danger-outlined' | 'warning-outlined' | 'info-outlined'
  type TextOnlyType = 'primary-text' | 'secondary-text' | 'success-text' | 'danger-text' | 'warning-text' | 'info-text'
  export let type: (FilledType | OutlinedType | TextOnlyType) = 'primary'
  export let block: boolean  = false
  export let disabled: boolean  = false
</script>

<button 
  class="p-2 px-8 py-2 m-1 rounded-md shadow-lg {type}"
  class:w-full="{block}"
  class:disabled="{disabled}"
  >
  <div class="font-semibold">
    <slot></slot>
  </div>
</button>

<style>
  .text {
    @apply shadow-none bg-transparent ring-0;
  }
  .disabled {
    @apply ring-0 bg-gray-300 text-white cursor-not-allowed !important;
  }
  .primary {
    @apply bg-primary-600 text-primary-50 hover:bg-primary-200 hover:text-primary-600;
  }
  .primary-outlined {
    @apply ring-inset ring-2 ring-primary-600 text-primary-600 hover:ring-0 hover:bg-primary-200;
  }
  .primary-text {
    @apply shadow-none bg-transparent ring-0 text-primary-600 hover:bg-primary-200;
  }
  .secondary {
    @apply bg-secondary-600 text-secondary-50 hover:bg-secondary-200 hover:text-secondary-600;
  }
  .secondary-outlined {
    @apply ring-inset ring-2 ring-secondary-600 text-secondary-600 hover:ring-0 hover:bg-secondary-200;
  }
  .secondary-text {
    @apply shadow-none bg-transparent ring-0 text-secondary-600 hover:bg-secondary-200;
  }
  .success {
    @apply bg-success-600 text-success-50 hover:bg-success-200 hover:text-success-600;
  }
  .success-outlined {
    @apply ring-inset ring-2 ring-success-600 text-success-600 hover:ring-0 hover:bg-success-200;
  }
  .success-text {
    @apply shadow-none bg-transparent ring-0 text-success-600 hover:bg-success-200;
  }
  .danger {
    @apply bg-danger-600 text-danger-50 hover:bg-danger-200 hover:text-danger-600;
  }
  .danger-outlined {
    @apply ring-inset ring-2 ring-danger-600 text-danger-600 hover:ring-0 hover:bg-danger-200;
  }
  .danger-text {
    @apply shadow-none bg-transparent ring-0 text-danger-600 hover:bg-danger-200;
  }
  .info {
    @apply bg-info-600 text-info-50 hover:bg-info-200 hover:text-info-600;
  }
  .info-outlined {
    @apply ring-inset ring-2 ring-info-600 text-info-600 hover:ring-0 hover:bg-info-200;
  }
  .info-text {
    @apply shadow-none bg-transparent ring-0 text-info-600 hover:bg-info-200;
  }
  .warning {
    @apply bg-warning-600 text-warning-50 hover:bg-warning-200 hover:text-warning-600;
  }
  .warning-outlined {
    @apply ring-inset ring-2 ring-warning-600 text-warning-600 hover:ring-0 hover:bg-warning-200;
  }
  .warning-text {
    @apply shadow-none bg-transparent ring-0 text-warning-600 hover:bg-warning-200;
  }
</style>