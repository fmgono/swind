<script lang="ts">
  import Icon, { InformationCircle, ExclamationCircle, CheckCircle, XCircle } from 'svelte-hero-icons'
  import SwBox from './SwBox.svelte'
  import SwText from './SwText.svelte'

  type Type = 'success' | 'danger' | 'warning' | 'info'
  type VariantType = 'vertical' | 'horizontal'
  
  /**
   * Type of Alert style
   */
  export let type: Type = 'info'
  /**
   * Variant of Alert style
   */
  export let variant: VariantType = 'horizontal'
  /**
   * Message for alert
   */
  export let message: string  = ''
  /**
   * Additional text
   */
  export let description: string  = ''
  /**
   * Showing icon or not
   */
  export let showIcon: boolean  = false

  let icon: any

  $: if (type.includes('success')) {
    icon = CheckCircle
  } else if (type.includes('danger')) {
    icon = XCircle
  } else if (type.includes('warning')) {
    icon = ExclamationCircle
  } else {
    icon = InformationCircle
  }

  $: direction = variant === 'horizontal' ? 'row' : 'col'
  $: align = variant === 'horizontal' ? 'center' : 'start'
  $: console.log(direction, align)

</script>

<SwBox role="alert" w="full" p="3" m="1" rounded="md" border="2" borderColor="{`${type}-light`}" bgColor="{`${type}-50`}" shadow="lg">
  {#if variant === 'vertical'}
  <SwBox w="1" rounded="lg" mr="3" bgColor="{`${type}-light`}" />
  {/if}
  
  <SwBox display="flex" align="center" color="{`${type}-light`}">
    {#if (showIcon)}
    <Icon src="{icon}" solid size="24" />
    {/if}
    <SwBox ml="3" color="current" display="flex" flexDir={direction} align={align}>
      <!-- <div class="font-semibold">
        { message }
      </div> -->
      <SwText weight="semibold" > { message} </SwText>
      <SwText size="sm" class="{variant === 'horizontal' && 'ml-3'}"> { description} </SwText>
    </SwBox>
  </SwBox>
</SwBox>