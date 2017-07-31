<template>
    <div>
        <span>{{ getRandomBlackCard.text }}</span>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapState([
            'blackCards'
        ]),
        ...mapGetters([
            'getRandomBlackCard',
        ])
    },
}
</script>

<style>
.message {
  color: blue;
}
</style>