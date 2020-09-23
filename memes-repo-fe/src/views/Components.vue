<template>
    <div>
        <hero></hero>
        <javascript-components></javascript-components>
    </div>
</template>
<script>
import Hero from './components/Hero'
import JavascriptComponents from './components/JavascriptComponents'

export default {
	name: 'components',
	components: {
		Hero,
		JavascriptComponents,
	}
}
</script>
