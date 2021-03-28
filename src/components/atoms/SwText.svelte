<script lang="ts">
  type FontSizeType = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl' | (string & {})
  type FontWeightType = '' | 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'
  type LetterSpacingType = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest' | (string & {})
  type LineHeightType = '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose' | (string & {})
  type TextAlignType = '' | 'left' | 'center' | 'right' | 'justify'
  type ColorType = 'current' |'primary-lightest' | 'primary-light' | 'primary' | 'primary-dark' | 'secondary-lightest' | 'secondary-light' | 'secondary' | 'secondary-dark' | 'success-lightest' | 'success-light' | 'success' | 'success-dark' | 'danger-lightest' | 'danger-light' | 'danger' | 'danger-dark' | 'info-lightest' | 'info-light' | 'info' | 'info-dark' | 'warning-lightest' | 'warning-light' | 'warning' | 'warning-dark' | 'blue-lightest' | 'blue-light' | 'blue' | 'blue-dark' | 'indigo-lightest' | 'indigo-light' | 'indigo' | 'indigo-dark' | 'green-lightest' | 'green-light' | 'green' | 'green-dark' | 'red-lightest' | 'red-light' | 'red' | 'red-dark' | 'purple-lightest' | 'purple-light' | 'purple' | 'purple-dark' | 'yellow-lightest' | 'yellow-light' | 'yellow' | 'yellow-dark' | 'orange-lightest' | 'orange-light' | 'orange' | 'orange-dark' | 'gray-lightest' | 'gray-light' | 'gray' | 'gray-dark' | (string & {})
  type OpacityType = '0' | '5' | '10' | '20' | '25' | '30' | '40' | '50' | '60' | '70' | '75' | '80' | '90' | '95' | '100' | (string & {})
  type TextDecorationType = '' | 'underline' | 'line-through' | 'no-underline'
  type TextTransformType = '' | 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case'
  type TextOverFlowType = '' | 'truncate' | 'overflow-ellipsis' | 'overflow-clip'
  type VerticalAlignType = '' | 'baseline' | 'top' | 'middle' | 'bottom' | 'text' | 'text-bottom'
  type WhitespaceType = '' | 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap'
  type WordBreakType = '' | 'normal' | 'words' | 'all'
  
  export let size: FontSizeType = ''
  export let italic: boolean | (string & {}) = ''
  export let weight: FontWeightType = ''
  export let spacing: LetterSpacingType = ''
  export let leading: LineHeightType = ''
  export let align: TextAlignType = ''
  export let color: ColorType = ''
  export let opacity: OpacityType = ''
  export let decoration: TextDecorationType = ''
  export let transform: TextTransformType = ''
  export let overflow: TextOverFlowType = ''
  export let wordBreak: WordBreakType = ''
  /**
   * @remark for setting vertical align of an element
   * @link for details, read more at https://tailwindcss.com/docs/vertical-align
   */
  export let verticalAlign: VerticalAlignType = ''
  export let whitespace: WhitespaceType = ''

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

  $: fontSize = size && (size.includes('px') ? `text-[${size}]` : `text-${size}` )
  $: style = italic && 'italic'
  $: fontWeight = weight && `font-${weight}`
  $: letterSpacing = spacing && ( spacing.includes('px') ?  `tracking-[${spacing}]` : `tracking-${spacing}`)
  $: lineHeight = leading && ( leading.includes('px') ?  `leading-[${leading}]` : `leading-${leading}`)
  $: textAlign = align && ( align.includes('px') ?  `text-[${align}]` : `text-${align}`)
  $: textColor = color && (color.includes('#') ? `text-[${color}]` : `text-${color}`)
  $: textOpacity = opacity && (opacity.includes('%') ? `text-opacity-[${opacity}]` : `text-opacity-${opacity}`)
  $: textDecoration = decoration && decoration
  $: textTransform = transform && transform
  $: textOverflow = overflow && overflow
  $: verticalAligns = verticalAlign && `align-${verticalAlign}`
  $: whiteSpace = whitespace && `whitespace-${whitespace}`
  $: wordbreak = wordBreak && `break-${wordBreak}`

  // Advanced style with class
  $: className = className && className
  $: smClassName = smClassName && `sm:(${smClassName})`
  $: mdClassName = mdClassName && `md:(${mdClassName})`
  $: lgClassName = lgClassName && `lg:(${lgClassName})`
  $: hoverClassName = hoverClassName && `hover:(${hoverClassName})`
  $: activeClassName = activeClassName && `active:(${activeClassName})`
  $: classes = `${smClassName} ${className} ${mdClassName} ${lgClassName} ${hoverClassName} ${activeClassName}`
  $: fontStyles = `${fontSize} ${style} ${fontWeight} ${letterSpacing} ${lineHeight} ${textAlign} ${textColor} ${textOpacity} ${textDecoration} ${textTransform} ${textOverflow} ${verticalAligns} ${whiteSpace} ${wordbreak} ${classes}`

</script>

<p class="{fontStyles}">
  <slot></slot>
</p>