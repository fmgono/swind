<script lang="ts">
  // import Icon, { CheckCircle } from 'svelte-hero-icons'
  import SwAlert from '@/components/molecules/SwAlert.svelte'
  // import SwBox from '@/components/atoms/SwBox.svelte'
  // import SwButton from './components/atoms/SwButton.svelte'
</script>

<main class="bg-gray-100 min-h-screen p-4">
  <div class="w-4/12">
    <SwAlert
      showIcon 
      type="success" 
      message="Success" 
      description="<SwAlert /> rendered successfully" />
    <SwAlert
      showIcon 
      type="danger" 
      variant="vertical"
      message="Danger" 
      description="<SwAlert /> in variant vertical is rendered" />
    <SwAlert
      showIcon 
      type="info" 
      message="Info" 
      description="<SwAlert /> still need some adjustment and fix bug" />
    <SwAlert
      showIcon 
      type="warning" 
      variant="vertical"
      message="Warning"
      description="Dont't forget to tweak <SwBox /> inside <SwAlert />" />
  </div>
</main>