<script lang="ts">
  import SwAlert from './components/atoms/SwAlert.svelte'
  import SwButton from './components/atoms/SwButton.svelte'
</script>

<main>
  <div class="text-lg font-semibold">Alert Component</div>
  <div class="flex justify-center">
    <SwAlert type="primary" title="Primary Alert" description="Primary Alert" />
    <SwAlert type="secondary" title="Secondary Alert" description="Secondary Alert" />
    <SwAlert type="success" title="Success Alert" description="Success Alert" />
    <SwAlert type="danger" title="Danger Alert" description="Danger Alert" />
    <SwAlert type="info" title="Info Alert" description="Info Alert" />
    <SwAlert type="warning" title="Warning Alert" description="Warning Alert" />
  </div>
  
  <div class="text-lg font-semibold">Button Component</div>
  <div class="flex justify-center">
    <SwButton type="primary" />
    <SwButton type="secondary" />
    <SwButton type="success" />
    <SwButton type="danger" />
    <SwButton type="info" />
    <SwButton type="warning" />
  </div>
</main>