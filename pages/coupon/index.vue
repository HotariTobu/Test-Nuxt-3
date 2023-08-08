<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)

const handleClick = () => {
    show.value = true
}

definePageMeta({
    layout: 'custom',
})
</script>

<template>
    <div>
        <HTML lang="ja">
        <Head>
            <Title>クーぺん</Title>
            <Meta name="description" content="クーペンがもらえるぺぃじ" />
        </Head>
        </HTML>

        <h1>Coupon Main</h1>

        <button @click="handleClick">Coupon Get</button>
        <!-- <Coupon v-if="show" /> -->

        <!-- Lazy loading -->
        <LazyCoupon v-if="show" />
    </div>
</template>
