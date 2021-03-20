<script lang="ts">
  type Type = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
  export let type: Type = 'primary'
  export let outlined: boolean  = false
  export let title: string  = ''
  export let description: string  = ''

  $: primary = type === 'primary' && !outlined
  $: primaryOutlined = type === 'primary' && outlined
  $: secondary = type === 'secondary' && !outlined
  $: secondaryOutlined = type === 'secondary' && outlined
  $: success = type === 'success' && !outlined
  $: successOutlined = type === 'success' && outlined
  $: danger = type === 'danger' && !outlined
  $: dangerOutlined = type === 'danger' && outlined
  $: warning = type === 'warning' && !outlined
  $: warningOutlined = type === 'warning' && outlined
  $: info = type === 'info' && !outlined
  $: infoOutlined = type === 'info' && outlined
</script>

<div 
  class="w-full p-3 m-1 rounded-l-md rounded-r-lg shadow-lg flex"
  class:primary="{primary}"
  class:primary-outlined="{primaryOutlined}"
  class:secondary="{secondary}"
  class:secondary-outlined="{secondaryOutlined}"
  class:success="{success}"
  class:success-outlined="{successOutlined}"
  class:danger="{danger}"
  class:danger-outlined="{dangerOutlined}"
  class:warning="{warning}"
  class:warning-outlined="{warningOutlined}"
  class:info="{info}"
  class:info-outlined="{infoOutlined}"
  >
  <!-- Shape -->
  <div 
    class="h-auto w-1 rounded-lg"
    class:bg-primary-600="{primary || primaryOutlined}"
    class:bg-secondary-600="{secondary || secondaryOutlined}"
    class:bg-success-600="{success || successOutlined}"
    class:bg-danger-600="{danger || dangerOutlined}"
    class:bg-warning-600="{warning || warningOutlined}"
    class:bg-info-600="{info || infoOutlined}">
  </div>
  <div 
    class="pl-3"
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