<script lang="ts">
  // import { Check } from 'svelte-hero-icons'
  // import SwAlert from './components/atoms/SwAlert.svelte'
  import SwBox from './components/atoms/SwBox.svelte'
  // import SwButton from './components/atoms/SwButton.svelte'
</script>

<main class="bg-gray-100 min-h-screen">
  <div class="">Box Component</div>

  <div class="text-base font-semibold text-primary-light">Box Component</div>
  <SwBox
    display="flex"
    justify="center"
    >
      <SwBox borderRadius="lg" shadow="" p="4" bgColor="white" >

        <h3 class="font-semibold text-2xl">How We Build Swind UI</h3>
        First thing first
      </SwBox>
  </SwBox>
  <!-- <div class="w-56"> -->
    <!-- <SwAlert
      type="primary"
      title="Primary Alert"
      description="Primary Alert"
      showIcon
      icon={Check}
    /> -->
    <!-- <SwButton type="primary" block iconPrefix="{Check}" loading>
      Testing
    </SwButton> -->
    <!-- <SwButton type="primary" block iconSuffix="{Check}" disabled>
      Testing
    </SwButton> -->
  <!-- </div> -->
  <!-- <div class="flex justify-center">
    <SwAlert type="primary" title="Primary Alert" description="Primary Alert" showIcon />
    <SwAlert type="secondary" title="Secondary Alert" description="Secondary Alert" showIcon />
    <SwAlert type="success" title="Success Alert" description="Success Alert" showIcon />
    <SwAlert type="danger" title="Danger Alert" description="Danger Alert" showIcon />
    <SwAlert type="info" title="Info Alert" description="Info Alert" showIcon />
    <SwAlert type="warning" title="Warning Alert" description="Warning Alert" showIcon />
  </div> -->
  <!-- <div class="flex justify-center">
    <SwAlert type="primary-outlined" title="Primary Outlined" description="Primary Outlined" showIcon />
    <SwAlert type="secondary-outlined" title="Secondary Outlined" description="Secondary Outlined" showIcon />
    <SwAlert type="success-outlined" title="Success Outlined" description="Success Outlined" showIcon />
    <SwAlert type="danger-outlined" title="Danger Outlined" description="Danger Outlined" showIcon />
    <SwAlert type="info-outlined" title="Info Outlined" description="Info Outlined" showIcon />
    <SwAlert type="warning-outlined" title="Warning Outlined" description="Warning Outlined" showIcon />
  </div> -->
  
  <!-- <div class="text-lg font-semibold">Button Component</div> -->
  <!-- <div class="flex justify-center">
    <SwButton type="primary" iconPrefix={Check}>
      Primary
    </SwButton>
    <SwButton type="secondary">
      Secondary
    </SwButton>
    <SwButton type="success">
      Success
    </SwButton>
    <SwButton type="danger">
      Danger
    </SwButton>
    <SwButton type="info">
      Info
    </SwButton>
    <SwButton type="warning">
      Warning
    </SwButton>
  </div> -->
  <!-- <div class="flex justify-center">
    <SwButton type="primary-outlined" iconPrefix={Check}>
      Primary
    </SwButton>
    <SwButton type="secondary-outlined">
      Secondary
    </SwButton>
    <SwButton type="success-outlined">
      Success
    </SwButton>
    <SwButton type="danger-outlined">
      Danger
    </SwButton>
    <SwButton type="info-outlined">
      Info
    </SwButton>
    <SwButton type="warning-outlined">
      Warning
    </SwButton>
  </div> -->
  <!-- <div class="flex justify-center">
    <SwButton type="primary-text" iconPrefix={Check}>
      Primary Text
    </SwButton>
    <SwButton type="secondary-text">
      Secondary Text
    </SwButton>
    <SwButton type="success-text">
      Success Text
    </SwButton>
    <SwButton type="danger-text">
      Danger Text
    </SwButton>
    <SwButton type="info-text">
      Info Text
    </SwButton>
    <SwButton type="warning-text">
      Warning Text
    </SwButton>
  </div> -->
</main>