<template>
    <div id="app" style="background: #f1f3f5">
        <router-view name="header"></router-view>
        <main>
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view/>
            </fade-transition>
        </main>
        <router-view name="footer"></router-view>
    </div>
</template>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&family=Scheherazade:wght@400;700&family=Tajawal:wght@300;400;500;700;800;900&display=swap');
    * {
        font-family: -apple-system, system-ui, BlinkMacSystemFont;
    }
</style>
<script>
import { FadeTransition } from 'vue2-transitions'

export default {
	components: {
		FadeTransition
	}
}
</script>
