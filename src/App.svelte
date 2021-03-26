<script lang="ts">
  import Icon, { CheckCircle } from 'svelte-hero-icons'
  // import SwAlert from './components/atoms/SwAlert.svelte'
  import SwBox from './components/atoms/SwBox.svelte'
  // import SwButton from './components/atoms/SwButton.svelte'
</script>

<main class="bg-gray-100 min-h-screen">
  <div class="">Box Component</div>

  <SwBox w="3/12" role="alert" p="3" m="1" borderRadius="md" shadow="lg" display="flex" bgColor="success-light" color="white">
    <SwBox w="1" borderRadius="lg" mr="2" bgColor="white" />
    <SwBox display="flex" align="center" color="white">
      <Icon src="{CheckCircle}" size="24" />
      <SwBox ml="2" color="white">
        <div class="font-semibold">
          Success
        </div>
        <span class="text-sm">
          Bismillah
        </span>
      </SwBox>
    </SwBox>
  </SwBox>

  <SwBox w="3/12" role="alert" p="3" m="1" borderRadius="md" borderWidth="2" borderColor="success-light" shadow="lg" display="flex" bgColor="white" color="current">
    <SwBox w="1" borderRadius="lg" mr="2" bgColor="success-light" />
    <SwBox display="flex" align="center" color="success-light">
      <Icon src="{CheckCircle}" solid size="24" />
      <SwBox ml="2" color="current">
        <div class="font-semibold">
          Success
        </div>
        <span class="text-sm">
          Bismillah
        </span>
      </SwBox>
    </SwBox>
  </SwBox>
</main>