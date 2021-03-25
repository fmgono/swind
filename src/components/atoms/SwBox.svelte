<script lang="ts">
  type SpacingType = 'auto' | '0' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '52' | '56' | '60' | '64' | '72' | '80' | '96' | (string & {})
  type DisplayType = 'block' | 'inline-block' | 'inline' | 'flex' | 'inline-flex' | 'table' | 'table-caption' | 'table-cell' | 'table-column' | 'table-column-group' | 'table-footer-group' | 'table-header-group' | 'table-row-group' | 'table-row' | 'flow-root' | 'grid' | 'inline-grid' | 'contents' | 'hidden' | (string & {})
  type ColorType = 'primary-lightest' | 'primary-light' | 'primary' | 'primary-dark' | 'secondary-lightest' | 'secondary-light' | 'secondary' | 'secondary-dark' | 'success-lightest' | 'success-light' | 'success' | 'success-dark' | 'danger-lightest' | 'danger-light' | 'danger' | 'danger-dark' | 'info-lightest' | 'info-light' | 'info' | 'info-dark' | 'warning-lightest' | 'warning-light' | 'warning' | 'warning-dark' | 'blue-lightest' | 'blue-light' | 'blue' | 'blue-dark' | 'indigo-lightest' | 'indigo-light' | 'indigo' | 'indigo-dark' | 'green-lightest' | 'green-light' | 'green' | 'green-dark' | 'red-lightest' | 'red-light' | 'red' | 'red-dark' | 'purple-lightest' | 'purple-light' | 'purple' | 'purple-dark' | 'yellow-lightest' | 'yellow-light' | 'yellow' | 'yellow-dark' | 'orange-lightest' | 'orange-light' | 'orange' | 'orange-dark' | 'gray-lightest' | 'gray-light' | 'gray' | 'gray-dark' | (string & {})
  type OpacityType = '0' | '5' | '10' | '20' | '25' | '30' | '40' | '50' | '60' | '70' | '75' | '80' | '90' | '95' | '100' | (string & {})
  type WidthHeightType = '0' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '52' | '56' | '60' | '64' | '72' | '80' | '96' | 'auto' | 'px' | '1/2' | '1/3' | '2/3' | '1/4' | '2/4' | '3/4' | '1/5' | '2/5' | '3/5' | '4/5' | '1/6' | '2/6' | '3/6' | '4/6' | '5/6' | '1/12' | '2/12' | '3/12' | '4/12' | '5/12' | '6/12' | '7/12' | '8/12' | '9/12' | '10/12' | '11/12' | 'full' | 'screen' | 'min' | 'max' | (string & {})
  type minWidthType = '0' | 'full' | 'min' | 'max' | (string & {})
  type maxWidthType = '0' | 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full' | 'min' | 'max' | 'prose' | 'screen-sm' | 'screen-md' | 'screen-lg' | 'screen-xl' | 'screen-2xl' | (string & {})
  type minHeightType = '0' | 'full' | 'screen' | (string & {})
  type maxHeightType = '0' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '52' | '56' | '60' | '64' | '72' | '80' | '96' | 'px' | 'full' | 'screen' | (string & {})
  type borderWidthType = '0' | '2' | '4' | '8' | (string & {})
  type borderRadiusType = 'none' |'sm' |'md' |'lg' |'xl' |'2xl' |'3xl' |'full' | (string & {})
  
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
   * @remark Text color, you can use tailwinds color or color you defined in theme
   * @link for details, read more at https://tailwindcss.com/docs/customizing-colors
   */
  export let color:ColorType = ''
  /**
   * @remark opacity type, you can use unit utilites in tailwind or define within px
   * @link for details, read more at https://tailwindcss.com/docs/opacity
   */
  export let opacity:OpacityType = ''
  
  /**
   * @remark Background color, you can use tailwinds color or color you defined in theme
   * @link for details, read more at https://tailwindcss.com/docs/background-color
   */
  export let bgColor:ColorType = ''
  
  /**
   * @remark for setting the width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/width
   */
  export let w:WidthHeightType = ''
  /**
   * @remark for setting min width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/width
   */
  export let minW: minWidthType = ''
  /**
   * @remark for setting max width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/width
   */
  export let maxW: maxWidthType = ''
  
  /**
   * @remark for setting the height of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/height
   */
  export let h:WidthHeightType = ''
  /**
   * @remark for setting min height of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/height
   */
  export let minH: minHeightType = ''
  /**
   * @remark for setting max height of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/height
   */
  export let maxH: maxHeightType = ''
  
  /**
   * @remark for border color of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-color
   */
  export let borderColor: ColorType = ''
  
  /**
   * @remark for border width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-width
   */
  export let borderWidth: borderWidthType = ''
  
  /**
   * @remark for border width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-width
   */
  export let borderTopWidth: borderWidthType = ''
  
  /**
   * @remark for border width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-width
   */
  export let borderRightWidth: borderWidthType = ''
  
  /**
   * @remark for border width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-width
   */
  export let borderBottomWidth: borderWidthType = ''
  
  /**
   * @remark for border width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-width
   */
  export let borderLeftWidth: borderWidthType = ''
  
  /**
   * @remark for border width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-width
   */
  export let borderRadius: borderRadiusType = ''
  
  /**
   * @remark for border width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-width
   */
  export let borderTopRadius: borderRadiusType = ''
  
  /**
   * @remark for border width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-width
   */
  export let borderRightRadius: borderRadiusType = ''
  
  /**
   * @remark for border width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-width
   */
  export let borderBottomRadius: borderRadiusType = ''
  
  /**
   * @remark for border width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-width
   */
  export let borderLeftRadius: borderRadiusType = ''
  
  /**
   * @remark display type
   * @link for details, read more at https://tailwindcss.com/docs/display
   */
   export let display:DisplayType = 'block'

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
  $: minWidth = minW && ( minW.includes('px') ? `min-w-[${minW}]` : `min-w-${minW}`)
  $: maxWidth = maxW && ( maxW.includes('px') ? `max-w-[${maxW}]` : `max-w-${maxW}`)
  $: height = h && ( h.includes('px') ? `h-[${h}]` : `h-${h}`)
  $: minHeight = minH && ( minH.includes('px') ? `min-h-[${minHeight}]` : `min-h-${minH}`)
  $: maxHeight = maxH && ( maxH.includes('px') ? `max-h-[${maxHeight}]` : `max-h-${maxH}`)
  $: sizing = `${width} ${minWidth} ${maxWidth} ${height} ${minHeight} ${maxHeight}`

  // Border
  $: borderColor = borderColor && ( borderColor.includes('#') ? `border-[${borderColor}]` : `border-${borderColor}`)
  $: borderWidth = borderWidth && ( borderWidth.includes('px') ? `border-[${borderWidth}]` : `border-${borderWidth}`)
  $: borderTopWidth = borderTopWidth && ( borderTopWidth.includes('px') ? `border-t-[${borderTopWidth}]` : `border-t-${borderTopWidth}`)
  $: borderRightWidth = borderRightWidth && ( borderRightWidth.includes('px') ? `border-r-[${borderRightWidth}]` : `border-r-${borderRightWidth}`)
  $: borderBottomWidth = borderBottomWidth && ( borderBottomWidth.includes('px') ? `border-b-[${borderBottomWidth}]` : `border-b-${borderBottomWidth}`)
  $: borderLeftWidth = borderLeftWidth && ( borderLeftWidth.includes('px') ? `border-l-[${borderLeftWidth}]` : `border-l-${borderLeftWidth}`)
  $: borderRadius = borderRadius && ( borderRadius.includes('px') ? `rounded-[${borderRadius}]` : `rounded-${borderRadius}`)
  $: borderTopRadius = borderTopRadius && ( borderTopRadius.includes('px') ? `rounded-t-[${borderTopRadius}]` : `rounded-t-${borderTopRadius}`)
  $: borderRightRadius = borderRightRadius && ( borderRightRadius.includes('px') ? `rounded-r-[${borderRightRadius}]` : `rounded-r-${borderRightRadius}`)
  $: borderBottomRadius = borderBottomRadius && ( borderBottomRadius.includes('px') ? `rounded-b-[${borderBottomRadius}]` : `rounded-b-${borderBottomRadius}`)
  $: borderLeftRadius = borderLeftRadius && ( borderLeftRadius.includes('px') ? `rounded-l-[${borderLeftRadius}]` : `rounded-l-${borderLeftRadius}`)
  $: borders = `${borderWidth} ${borderTopWidth} ${borderRightWidth} ${borderBottomWidth} ${borderLeftWidth} ${borderRadius} ${borderTopRadius} ${borderRightRadius} ${borderBottomRadius} ${borderLeftRadius} ${borderColor}`
</script>

<div class="{spacing} {textColor} {backgroundColor} {opacities} {sizing} {borders} {display}">
  <slot></slot>
</div>