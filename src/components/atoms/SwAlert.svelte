<script lang="ts">
  import type { SvelteComponentTyped } from "svelte"
  import Icon, { InformationCircle, ExclamationCircle, CheckCircle, XCircle } from 'svelte-hero-icons'

  type FilledType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
  type OutlinedType = 'primary-outlined' | 'secondary-outlined' | 'success-outlined' | 'danger-outlined' | 'warning-outlined' | 'info-outlined'
  /**
   * Type of Alert style
   */
  export let type: (FilledType | OutlinedType) = 'primary'
  /**
   * Title for alert
   */
  export let title: string  = ''
  /**
   * Additional text
   */
  export let description: string  = ''
  /**
   * Showing icon or not
   */
  export let showIcon: boolean  = false
  /**
   * Showing icon or not
   */
  export let icon: SvelteComponentTyped = undefined

  let defaultIcon: any

  $: if (type.includes('success')) {
    defaultIcon = CheckCircle
  } else if (type.includes('danger')) {
    defaultIcon = XCircle
  } else if (type.includes('warning')) {
    defaultIcon = ExclamationCircle
  } else if (type.includes('info')) {
    defaultIcon = InformationCircle
  } else {
    defaultIcon = InformationCircle
  }

  $: primary = type === 'primary'
  $: primaryOutlined = type === 'primary-outlined'
  $: secondary = type === 'secondary'
  $: secondaryOutlined = type === 'secondary-outlined'
  $: success = type === 'success'
  $: successOutlined = type === 'success-outlined'
  $: danger = type === 'danger'
  $: dangerOutlined = type === 'danger-outlined'
  $: warning = type === 'warning'
  $: warningOutlined = type === 'warning-outlined'
  $: info = type === 'info'
  $: infoOutlined = type === 'info-outlined'
</script>

<div
  role="alert"
  class="w-full p-3 m-1 rounded-md shadow-lg flex {type}">
  <!-- Shape -->
  <div 
    class="min-h-full w-1 rounded-lg mr-2"
    class:bg-primary-600="{primary || primaryOutlined}"
    class:bg-secondary-600="{secondary || secondaryOutlined}"
    class:bg-success-600="{success || successOutlined}"
    class:bg-danger-600="{danger || dangerOutlined}"
    class:bg-warning-600="{warning || warningOutlined}"
    class:bg-info-600="{info || infoOutlined}">
  </div>
  <div class="flex items-center">
    {#if (showIcon)}
    <Icon src="{icon ? icon : defaultIcon}" size="24" />
    {/if}
    <div
      class="ml-2"
      class:text-primary-600="{primary || primaryOutlined}"
      class:text-secondary-600="{secondary || secondaryOutlined}"
      class:text-success-600="{success || successOutlined}"
      class:text-danger-600="{danger || dangerOutlined}"
      class:text-warning-600="{warning || warningOutlined}"
      class:text-info-600="{info || infoOutlined }"
      >
      <div class="font-semibold">
        { title }
      </div>
      <span class="text-sm">
        { description }
      </span>
    </div>

  </div>
</div>

<style>
  .primary {
    @apply bg-primary-200 text-primary-600;
  }
  .primary-outlined {
    @apply ring-inset ring-2 ring-primary-200 text-primary-600;
  }
  .secondary {
    @apply bg-secondary-200 text-secondary-600;
  }
  .secondary-outlined {
    @apply ring-inset ring-2 ring-secondary-200 text-secondary-600;
  }
  .success {
    @apply bg-success-200 text-success-600;
  }
  .success-outlined {
    @apply ring-inset ring-2 ring-success-200 text-success-600;
  }
  .danger {
    @apply bg-danger-200 text-danger-600;
  }
  .danger-outlined {
    @apply ring-inset ring-2 ring-danger-200 text-danger-600;
  }
  .info {
    @apply bg-info-200 text-info-600;
  }
  .info-outlined {
    @apply ring-inset ring-2 ring-info-200 text-info-600;
  }
  .warning {
    @apply bg-warning-200 text-warning-600;
  }
  .warning-outlined {
    @apply ring-inset ring-2 ring-warning-200 text-warning-600;
  }
</style>