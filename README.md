# Swind UI

Swind UI is stands for Svelte Tailwind, which is inspired by various popular UI components like ([Ant Design](https://ant.design/), [Chakra UI](https://chakra-ui.com/), and [Bootstrap Vue](https://bootstrap-vue.org/) ).

## Why Swind UI ?
1. Made with the hope that it will make it easier to create applications with components that are flexible to use and easy to handle accessibility and style.
2. We are using tailwind css, but we can tweak it with [Twind.dev](https://twind.dev/), we will find the usage later to show you how we can easily set styling.
3. You tell me!

## Big Picture Usage Example
```svelte
<script>
import {SwBox, SwAlert, SwButton} from 'swind-ui'
</script>
<SwBox
  borderWidth="1"
  borderColor="gray-lightest" <!-- you can choose with defined default color in tailwind config  -->
  bgColor="#FAFAFA" <!-- or you can directly set the hex code of color  -->
  borderRadius="5px" <!-- you can choose with px or unit in tailwind  -->
  p="4"
  display="flex"
  justify="center"
  >
  <SwAlert 
    color="red-500" 
    variant="outline"
    title="Wait!"
    description="You already see this component usage" />
  <SwButton color="primary" hoverClass="shadow-lg text-semibold" focusClass="ring-2 ring-primary">
    Show me More!
  </SwButton>
</SwBox>
```
# Open Contribution
We really really need contribution from the community, feel free to add issues or build another component with Swind UI
