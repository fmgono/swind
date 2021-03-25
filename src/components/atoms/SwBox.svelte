<script lang="ts">
  // import { tw, style  } from 'twind/style'

  // type SpacingType = '' | 'auto' | '0' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '52' | '56' | '60' | '64' | '72' | '80' | '96'
  // type DisplayType = '' | 'block' | 'inline-block' | 'inline' | 'flex' | 'inline-flex' | 'table' | 'table-caption' | 'table-cell' | 'table-column' | 'table-column-group' | 'table-footer-group' | 'table-header-group' | 'table-row-group' | 'table-row' | 'flow-root' | 'grid' | 'inline-grid' | 'contents' | 'hidden'
  // type ColorType = '' | 'primary-lightest' | 'primary-light' | 'primary' | 'primary-dark' | 'secondary-lightest' | 'secondary-light' | 'secondary' | 'secondary-dark' | 'success-lightest' | 'success-light' | 'success' | 'success-dark' | 'danger-lightest' | 'danger-light' | 'danger' | 'danger-dark' | 'info-lightest' | 'info-light' | 'info' | 'info-dark' | 'warning-lightest' | 'warning-light' | 'warning' | 'warning-dark' | 'blue-lightest' | 'blue-light' | 'blue' | 'blue-dark' | 'indigo-lightest' | 'indigo-light' | 'indigo' | 'indigo-dark' | 'green-lightest' | 'green-light' | 'green' | 'green-dark' | 'red-lightest' | 'red-light' | 'red' | 'red-dark' | 'purple-lightest' | 'purple-light' | 'purple' | 'purple-dark' | 'yellow-lightest' | 'yellow-light' | 'yellow' | 'yellow-dark' | 'orange-lightest' | 'orange-light' | 'orange' | 'orange-dark' | 'gray-lightest' | 'gray-light' | 'gray' | 'gray-dark'
  // type OpacityType = '' | '0' | '5' | '10' | '20' | '25' | '30' | '40' | '50' | '60' | '70' | '75' | '80' | '90' | '95' | '100'
  // type WidthHeightType = '' | '0' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '52' | '56' | '60' | '64' | '72' | '80' | '96' | 'auto' | 'px' | '1/2' | '1/3' | '2/3' | '1/4' | '2/4' | '3/4' | '1/5' | '2/5' | '3/5' | '4/5' | '1/6' | '2/6' | '3/6' | '4/6' | '5/6' | '1/12' | '2/12' | '3/12' | '4/12' | '5/12' | '6/12' | '7/12' | '8/12' | '9/12' | '10/12' | '11/12' | 'full' | 'screen' | 'min' | 'max'
  // type MaxWidthHeightType = '' | '0' | 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full' | 'min' | 'max' | 'prose' | 'screen-sm' | 'screen-md' | 'screen-lg' | 'screen-xl' | 'screen-2xl'
  
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .m-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let m:string = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .mx-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let mx:string = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .my-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let my:string = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .mt-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let mt:string = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .mr-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let mr:string = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .mb-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let mb:string = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .ml-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let ml:string = ''
  
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .p-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let p:string = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .px-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let px:string = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .py-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let py:string = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .pt-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let pt:string = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .pr-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let pr:string = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .pb-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let pb:string = ''
  /**
   * @remark if you select the value is 1, then it will generated string class tailwind .pl-1
   * @link for further sizing, read more at https://tailwindcss.com/docs/customizing-spacing
   */
  export let pl:string = ''
  
  /**
   * @remark Text color, you can use tailwinds color or color you defined in theme
   * @link for details, read more at https://tailwindcss.com/docs/customizing-colors
   */
  export let color:string = ''
  /**
   * @remark opacity type, you can use unit utilites in tailwind or define within px
   * @link for details, read more at https://tailwindcss.com/docs/opacity
   */
  export let opacity:string = '100'
  
  /**
   * @remark Background color, you can use tailwinds color or color you defined in theme
   * @link for details, read more at https://tailwindcss.com/docs/background-color
   */
  export let bgColor:string = ''
  
  /**
   * @remark for setting the width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/width
   */
  export let w:string = ''
  /**
   * @remark for setting the width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/width
   */
  export let minW: string = ''
  /**
   * @remark for setting the width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/width
   */
  export let maxW: string = ''
  
  /**
   * @remark for setting the height of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/height
   */
  export let h:string = ''
  /**
   * @remark for setting the height of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/height
   */
  export let minH: string = ''
  /**
   * @remark for setting the height of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/height
   */
  export let maxH: string = ''
  
  /**
   * @remark for border width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-width
   */
  export let borderWidth: string = ''
  
  /**
   * @remark for border width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-width
   */
  export let borderTopWidth: string = ''
  
  /**
   * @remark for border width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-width
   */
  export let borderRightWidth: string = ''
  
  /**
   * @remark for border width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-width
   */
  export let borderBottomWidth: string = ''
  
  /**
   * @remark for border width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-width
   */
  export let borderLeftWidth: string = ''
  
  /**
   * @remark display type
   * @link for details, read more at https://tailwindcss.com/docs/display
   */
   export let display:string = 'block'

  // Spacing
  $: padding = p && (p.includes('px') ? `p-[${p}]` : `p-${p}`)
  $: paddingX = px && (px.includes('px') ? `px-[${px}]` : `px-${px}`)
  $: paddingY = py && (py.includes('px') ? `py-[${py}]` : `py-${py}`)
  $: paddingT = pt && (pt.includes('px') ? `pt-[${pt}]` : `pt-${pt}`)
  $: paddingR = pr && (pr.includes('px') ? `pr-[${pr}]` : `pr-${pr}`)
  $: paddingB = pb && (pb.includes('px') ? `pb-[${pb}]` : `pb-${pb}`)
  $: paddingL = pl && (pl.includes('px') ? `pl-[${pl}]` : `pl-${pl}`)
  $: margin = m && (m.includes('px') ? `m-[${m}]` : `m-${m}`)
  $: marginX = mx && (mx.includes('px') ? `mx-[${mx}]` : `mx-${mx}`)
  $: marginY = my && (my.includes('px') ? `my-[${my}]` : `my-${my}`)
  $: marginT = mt && (mt.includes('px') ? `mt-[${mt}]` : `mt-${mt}`)
  $: marginR = mr && (mr.includes('px') ? `mr-[${mr}]` : `mr-${mr}`)
  $: marginB = mb && (mb.includes('px') ? `mb-[${mb}]` : `mb-${mb}`)
  $: marginL = ml && (ml.includes('px') ? `ml-[${ml}]` : `ml-${ml}`)
  $: margins = `${margin} ${marginX} ${marginY} ${marginT} ${marginR} ${marginB} ${marginL}`
  $: paddings = `${padding} ${paddingX} ${paddingY} ${paddingT} ${paddingR} ${paddingB} ${paddingL}`
  $: spacing = `${margins} ${paddings}`

  // Color & Opacities
  $: textColor = color && (color.includes('#') ? `text-[${color}]` : `text-${color}`)
  $: opacities = opacity && (opacity.includes('%') ? `opacity-[${opacity}]` : `opacity-${opacity}`)
  $: backgroundColor = bgColor && (bgColor.includes('#') ? `bg-[${bgColor}]` : `bg-${bgColor}`)

  // Sizing
  $: width = w && ( w.includes('px') ? `w-[${w}]` : `w-${w}`)
  $: minWidth = minWidth && ( minWidth.includes('px') ? `min-w-[${minWidth}]` : `min-w-${minWidth}`)
  $: maxWidth = maxWidth && ( maxWidth.includes('px') ? `max-w-[${maxWidth}]` : `max-w-${maxWidth}`)
  $: height = w && ( w.includes('px') ? `h-[${h}]` : `h-${h}`)
  $: minHeight = minHeight && ( minHeight.includes('px') ? `min-h-[${minHeight}]` : `min-h-${minHeight}`)
  $: maxHeight = maxHeight && ( maxHeight.includes('px') ? `max-h-[${maxHeight}]` : `max-h-${maxHeight}`)
  $: sizing = `${width} ${minWidth} ${maxWidth} ${height} ${minHeight} ${maxHeight}`

  // Border
  $: borderWidth = borderWidth && ( borderWidth.includes('px') ? `border-[${borderWidth}]` : `border-${borderWidth}`)
  $: borderTopWidth = borderTopWidth && ( borderTopWidth.includes('px') ? `border-t-[${borderTopWidth}]` : `border-t-${borderTopWidth}`)
  $: borderRightWidth = borderRightWidth && ( borderRightWidth.includes('px') ? `border-r-[${borderRightWidth}]` : `border-r-${borderRightWidth}`)
  $: borderBottomWidth = borderBottomWidth && ( borderBottomWidth.includes('px') ? `border-b-[${borderBottomWidth}]` : `border-b-${borderBottomWidth}`)
  $: borderLeftWidth = borderLeftWidth && ( borderLeftWidth.includes('px') ? `border-l-[${borderLeftWidth}]` : `border-l-${borderLeftWidth}`)
  $: borders = `${borderWidth} ${borderTopWidth} ${borderRightWidth} ${borderBottomWidth} ${borderLeftWidth}`
</script>

<div class="{spacing} {textColor} {backgroundColor} {opacities} {sizing} {borders} {display}">
  <slot></slot>
</div>