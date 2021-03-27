<script lang="ts">
  type SpacingType = 'auto' | '0' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '52' | '56' | '60' | '64' | '72' | '80' | '96' | (string & {})
  type ColorType = 'primary-lightest' | 'primary-light' | 'primary' | 'primary-dark' | 'secondary-lightest' | 'secondary-light' | 'secondary' | 'secondary-dark' | 'success-lightest' | 'success-light' | 'success' | 'success-dark' | 'danger-lightest' | 'danger-light' | 'danger' | 'danger-dark' | 'info-lightest' | 'info-light' | 'info' | 'info-dark' | 'warning-lightest' | 'warning-light' | 'warning' | 'warning-dark' | 'blue-lightest' | 'blue-light' | 'blue' | 'blue-dark' | 'indigo-lightest' | 'indigo-light' | 'indigo' | 'indigo-dark' | 'green-lightest' | 'green-light' | 'green' | 'green-dark' | 'red-lightest' | 'red-light' | 'red' | 'red-dark' | 'purple-lightest' | 'purple-light' | 'purple' | 'purple-dark' | 'yellow-lightest' | 'yellow-light' | 'yellow' | 'yellow-dark' | 'orange-lightest' | 'orange-light' | 'orange' | 'orange-dark' | 'gray-lightest' | 'gray-light' | 'gray' | 'gray-dark' | (string & {})
  type OpacityType = '0' | '5' | '10' | '20' | '25' | '30' | '40' | '50' | '60' | '70' | '75' | '80' | '90' | '95' | '100' | (string & {})
  type WidthHeightType = '0' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '52' | '56' | '60' | '64' | '72' | '80' | '96' | 'auto' | 'px' | '1/2' | '1/3' | '2/3' | '1/4' | '2/4' | '3/4' | '1/5' | '2/5' | '3/5' | '4/5' | '1/6' | '2/6' | '3/6' | '4/6' | '5/6' | '1/12' | '2/12' | '3/12' | '4/12' | '5/12' | '6/12' | '7/12' | '8/12' | '9/12' | '10/12' | '11/12' | 'full' | 'screen' | 'min' | 'max' | (string & {})
  type minWidthType = '0' | 'full' | 'min' | 'max' | (string & {})
  type maxWidthType = '0' | 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full' | 'min' | 'max' | 'prose' | 'screen-sm' | 'screen-md' | 'screen-lg' | 'screen-xl' | 'screen-2xl' | (string & {})
  type minHeightType = '0' | 'full' | 'screen' | (string & {})
  type maxHeightType = '0' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '52' | '56' | '60' | '64' | '72' | '80' | '96' | 'px' | 'full' | 'screen' | (string & {})
  type verticalAlignType = 'baseline' | 'top' | 'middle' | 'bottom' | 'text' | 'text-bottom' | (string & {})
  type OverflowType = 'auto' | 'hidden' | 'visible' | 'scroll' | (string & {})
  type borderWidthType = '0' | '2' | '4' | '8' | (string & {})
  type borderRadiusType = 'none' |'sm' |'md' |'lg' |'xl' |'2xl' |'3xl' |'full' | (string & {})
  type shadowType = '' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none'
  type DisplayType = 'block' | 'inline-block' | 'inline' | 'flex' | 'inline-flex' | 'table' | 'table-caption' | 'table-cell' | 'table-column' | 'table-column-group' | 'table-footer-group' | 'table-header-group' | 'table-row-group' | 'table-row' | 'flow-root' | 'grid' | 'inline-grid' | 'contents' | 'hidden' | (string & {})
  type FlexDirectionType = 'row' | 'row-reverse' | 'col' | 'col-reverse' | (string & {}) | (string & {})
  type justifyType = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | (string & {})
  type JustifyItemsType = 'auto' | 'start' | 'end' | 'center' | 'stretch' | (string & {})
  type AlignContentType = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | (string & {})
  type alignType = 'start' | 'end' | 'center' | 'baseline' | 'stretch' | (string & {})
  type FlexWrapType = 'wrap' | 'wrap-reverse' | 'nowrap' | (string & {})
  type FlexType = '1' | 'auto' | 'initial' | 'none' | (string & {})
  // type FlexGrowType = '0' | '' | (string & {})
  // type FlexShrinkType = '0' | '' | (string & {})
  type FlexOrderType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'first' | 'last' | 'none' | (string & {})
  
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
   * @link for details, read more at https://tailwindcss.com/docs/min-width
   */
  export let minW: minWidthType = ''
  /**
   * @remark for setting max width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/max-width
   */
  export let maxW: maxWidthType = ''
  
  /**
   * @remark for setting the height of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/height
   */
  export let h:WidthHeightType = ''
  /**
   * @remark for setting min height of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/min-height
   */
  export let minH: minHeightType = ''
  /**
   * @remark for setting max height of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/max-height
   */
  export let maxH: maxHeightType = ''
  
  /**
   * @remark for setting vertical align of an element
   * @link for details, read more at https://tailwindcss.com/docs/vertical-align
   */
  export let verticalAlign: verticalAlignType = ''
  
  /**
   * @remark for setting overflow of an element
   * @link for details, read more at https://tailwindcss.com/docs/vertical-align
   */
  export let overflow: OverflowType = ''
  
  /**
   * @remark for setting overflow Y of an element
   * @link for details, read more at https://tailwindcss.com/docs/vertical-align
   */
  export let overflowY: OverflowType = ''
  
  /**
   * @remark for setting overflow X of an element
   * @link for details, read more at https://tailwindcss.com/docs/vertical-align
   */
  export let overflowX: OverflowType = ''
  
  /**
   * @remark for border color of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-color
   */
  export let borderColor: ColorType = ''
  
  /**
   * @remark for border color of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-opacity
   */
  export let borderOpacity: OpacityType = ''
  
  /**
   * @remark for border width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-width
   */
  export let border: borderWidthType = ''
  
  /**
   * @remark for border width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-width
   */
  export let borderTop: borderWidthType = ''
  
  /**
   * @remark for border width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-width
   */
  export let borderRight: borderWidthType = ''
  
  /**
   * @remark for border width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-width
   */
  export let borderBottom: borderWidthType = ''
  
  /**
   * @remark for border width of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-width
   */
  export let borderLeft: borderWidthType = ''
  
  /**
   * @remark for border radius of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-radius
   */
  export let rounded: borderRadiusType = ''
  
  /**
   * @remark for top border radius of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-radius
   */
  export let roundedTop: borderRadiusType = ''
  
  /**
   * @remark for right border radius of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-radius
   */
  export let roundedRight: borderRadiusType = ''
  
  /**
   * @remark for bottom border radius of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-radius
   */
  export let roundedBottom: borderRadiusType = ''
  
  /**
   * @remark for left border radius of an element, you can px if you want
   * @link for details, read more at https://tailwindcss.com/docs/border-radius
   */
  export let roundedLeft: borderRadiusType = ''
  
  /**
   * @remark for box shadow of an element
   * @link for details, read more at https://tailwindcss.com/docs/box-shadow
   */
  export let shadow: shadowType = ''
  
  /**
   * @remark display type
   * @link for details, read more at https://tailwindcss.com/docs/display
   */
   export let display:DisplayType = 'block'
  
   /**
   * @remark Flex direction, will work if display is flex
   * @link for details, read more at https://tailwindcss.com/docs/flex-direction
   */
   export let flexDir:FlexDirectionType = ''
  
   /**
   * @remark Flex Wrap, will work if display is flex
   * @link for details, read more at https://tailwindcss.com/docs/flex-direction
   */
   export let flexWrap:FlexWrapType = ''
  
   /**
   * @remark Flex shortcut for flex Grow and flex Shrink, will work if display is flex
   * @link for details, read more at https://tailwindcss.com/docs/flex-direction
   */
   export let flex:FlexType = ''
  
   /**
   * @remark Flex order, will work if display is flex
   * @link for details, read more at https://tailwindcss.com/docs/flex-order
   */
   export let flexOrder:FlexOrderType = ''
  
   /**
   * @remark Flex Justify content, will work if display is flex
   * @link for details, read more at https://tailwindcss.com/docs/justify-content
   */
   export let justify:justifyType = ''
  
   /**
   * @remark Flex Justify items, will work if display is flex
   * @link for details, read more at https://tailwindcss.com/docs/justify-items
   */
   export let justifyItems:JustifyItemsType = 'auto'
  
   /**
   * @remark Flex align items, will work if display is flex
   * @link for details, read more at https://tailwindcss.com/docs/align-items
   */
   export let align:alignType = ''
  
   /**
   * @remark Flex align item, will work if display is flex
   * @link for details, read more at https://tailwindcss.com/docs/align-content
   */
   export let alignContent:AlignContentType = 'start'
  
   let className = ''
   let smClassName = ''
   let mdClassName = ''
   let lgClassName = ''
   let hoverClassName = ''
   let activeClassName = ''
   /**
   * @remark additional class if style props are not enough for you :)
   * @link for details, read more at https://tailwindcss.com/docs
   */
   export { className as class }
   /**
   * @remark additional class for small (mobile) breakpoint
   * @link for details, read more at https://tailwindcss.com/docs
   */
   export { smClassName as smClass }
   /**
   * @remark additional class for medium (tablet) breakpoint
   * @link for details, read more at https://tailwindcss.com/docs
   */
   export { mdClassName as mdClass }
   /**
   * @remark additional class for large (desktop) breakpoint
   * @link for details, read more at https://tailwindcss.com/docs
   */
   export { lgClassName as lgClass }
   /**
   * @remark additional class for hover state
   * @link for details, read more at https://tailwindcss.com/docs
   */
   export { hoverClassName as hoverClass }
   /**
   * @remark additional class for active state
   * @link for details, read more at https://tailwindcss.com/docs
   */
   export { activeClassName as activeClass }

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
  $: verticalAligns = `align-${verticalAlign}`
  $: flows = overflow && `overflow-${overflow}`
  $: flowX = overflowX && `overflow-x-${overflowX}`
  $: flowY = overflowY && `overflow-y-${overflowY}`
  $: sizing = `${width} ${minWidth} ${maxWidth} ${height} ${minHeight} ${maxHeight} ${verticalAligns} ${flows} ${flowX} ${flowY}`

  // Border
  $: border = border && ( border.includes('px') ? `border-[${border}]` : `border-${border}`)
  $: borderColor = border && borderColor && ( borderColor.includes('#') ? `border-[${borderColor}]` : `border-${borderColor}`)
  $: borderOpacity = border && borderOpacity && ( borderOpacity.includes('#') ? `border-opacity-[${borderOpacity}]` : `border-opacity-${borderOpacity}`)
  $: borderTop = border && borderTop && ( borderTop.includes('px') ? `border-t-[${borderTop}]` : `border-t-${borderTop}`)
  $: borderRight = border && borderRight && ( borderRight.includes('px') ? `border-r-[${borderRight}]` : `border-r-${borderRight}`)
  $: borderBottom = border && borderBottom && ( borderBottom.includes('px') ? `border-b-[${borderBottom}]` : `border-b-${borderBottom}`)
  $: borderLeft = border && borderLeft && ( borderLeft.includes('px') ? `border-l-[${borderLeft}]` : `border-l-${borderLeft}`)
  $: rounded = rounded && ( rounded.includes('px') ? `rounded-[${rounded}]` : `rounded-${rounded}`)
  $: roundedTop = roundedTop && ( roundedTop.includes('px') ? `rounded-t-[${roundedTop}]` : `rounded-t-${roundedTop}`)
  $: roundedRight = roundedRight && ( roundedRight.includes('px') ? `rounded-r-[${roundedRight}]` : `rounded-r-${roundedRight}`)
  $: roundedBottom = roundedBottom && ( roundedBottom.includes('px') ? `rounded-b-[${roundedBottom}]` : `rounded-b-${roundedBottom}`)
  $: roundedLeft = roundedLeft && ( roundedLeft.includes('px') ? `rounded-l-[${roundedLeft}]` : `rounded-l-${roundedLeft}`)
  $: borderStyle = `${border} ${borderTop} ${borderRight} ${borderBottom} ${borderLeft} ${rounded} ${roundedTop} ${roundedRight} ${roundedBottom} ${roundedLeft} ${borderColor} ${borderOpacity}`

  // Shadow
  $: boxShadow = shadow && `shadow-${shadow}`

  // Flex
  $: direction = (display === 'flex' || display === 'inline-flex') && flexDir && `flex-${flexDir}`
  $: wrap = (display === 'flex' || display === 'inline-flex') && flexWrap && `flex-${flexWrap}`
  $: growShrink = (display === 'flex' || display === 'inline-flex') && flex && `flex-${flex}`
  $: order = (display === 'flex' || display === 'inline-flex') && flexOrder && `order-${flexOrder}`
  $: justify = (display === 'flex' || display === 'inline-flex') && justify && `justify-${justify}`
  $: justifyItems = (display === 'flex' || display === 'inline-flex') && justify && `justify-items-${justify}`
  $: align = (display === 'flex' || display === 'inline-flex') && align && `items-${align}`
  $: alignContent = (display === 'flex' || display === 'inline-flex') && alignContent && `content-${alignContent}`
  $: flexs = `${direction} ${wrap} ${growShrink} ${order} ${justify} ${justifyItems} ${align} ${alignContent}`

  // Advanced style with class
  $: className = className && className
  $: smClassName = smClassName && `sm:(${smClassName})`
  $: mdClassName = mdClassName && `md:(${mdClassName})`
  $: lgClassName = lgClassName && `lg:(${lgClassName})`
  $: hoverClassName = hoverClassName && `hover:(${hoverClassName})`
  $: activeClassName = activeClassName && `active:(${activeClassName})`
  $: classes = `${smClassName} ${className} ${mdClassName} ${lgClassName} ${hoverClassName} ${activeClassName}`
</script>

<div {...$$restProps} class="{spacing} {textColor} {backgroundColor} {opacities} {sizing} {borderStyle} {boxShadow} {display} {flexs} {classes}">
  <slot></slot>
</div>