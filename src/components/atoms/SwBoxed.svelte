<script lang="ts">
  interface TailwindStandardSpacing {
      readonly '0': string;
      readonly '1': string;
      readonly '2': string;
      readonly '3': string;
      readonly '4': string;
      readonly '5': string;
      readonly '6': string;
      readonly '7': string;
      readonly '8': string;
      readonly '9': string;
      readonly '10': string;
      readonly '11': string;
      readonly '12': string;
      readonly '14': string;
      readonly '16': string;
      readonly '20': string;
      readonly '24': string;
      readonly '28': string;
      readonly '32': string;
      readonly '36': string;
      readonly '40': string;
      readonly '44': string;
      readonly '48': string;
      readonly '52': string;
      readonly '56': string;
      readonly '60': string;
      readonly '64': string;
      readonly '72': string;
      readonly '80': string;
      readonly '96': string;
      readonly px: string;
      readonly '0.5': string;
      readonly '1.5': string;
      readonly '2.5': string;
      readonly '3.5': string;
  }
  type SpacingType = '' | 'auto' | '0' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '52' | '56' | '60' | '64' | '72' | '80' | '96'
  type DisplayType = '' | 'block' | 'inline-block' | 'inline' | 'flex' | 'inline-flex' | 'table' | 'table-caption' | 'table-cell' | 'table-column' | 'table-column-group' | 'table-footer-group' | 'table-header-group' | 'table-row-group' | 'table-row' | 'flow-root' | 'grid' | 'inline-grid' | 'contents' | 'hidden'

  let margin,padding
  import { Spacing } from '../../constant'
  
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .m-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let m:SpacingType = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .mx-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let mx:SpacingType = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .my-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let my:SpacingType = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .mt-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let mt:SpacingType = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .mr-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let mr:SpacingType = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .mb-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let mb:SpacingType = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .ml-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let ml:SpacingType = ''
  
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .p-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let p:SpacingType = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .px-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let px:SpacingType = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .py-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let py:SpacingType = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .pt-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let pt:SpacingType = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .pr-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let pr:SpacingType = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .pb-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let pb:SpacingType = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .pl-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let pl:SpacingType = ''
  
  /**
   * @remark display type
   * @link for details, read more at https://tailwindcss.com/docs/display
   */
  export let display:DisplayType = 'block'
  
  /**
   * @remark display type
   * @link for details, read more at https://tailwindcss.com/docs/display
   */
  export let color:DisplayType = 'block'

  $: {
    m = m && Spacing.m[m]
    mx = mx && Spacing.mx[mx]
    my = my && Spacing.my[my]
    mt = mt && Spacing.mt[mt]
    mr = mr && Spacing.mr[mr]
    mb = mb && Spacing.mb[mb]
    ml = ml && Spacing.ml[ml]
    p = p && Spacing.p[p]
    px = px && Spacing.px[px]
    py = py && Spacing.py[py]
    pt = pt && Spacing.pt[pt]
    pr = pr && Spacing.pr[pr]
    pb = pb && Spacing.pb[pb]
    pl = pl && Spacing.pl[pl]
    margin = `${m} ${mx} ${my} ${mt} ${mr} ${mb} ${ml}`
    padding = `${p} ${px} ${py} ${pt} ${pr} ${pb} ${pl}`
  }
</script>

<div class="border-2 border-red-400 {margin} {padding} {display}">
  <slot></slot>
</div>