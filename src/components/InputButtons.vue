<template>
    <div class="d-flex">
        <button type="button" class="btn btn-warning text-white px-2 me-1" @click="val++">➕</button>
        <input v-model="val">
        <button type="button" class="btn btn-warning text-white px-2 ms-1" @click="val--">➖</button>
    </div>



</template>

<script>
export default {
    name: 'InptuButtons',
    props: ["value"],
    data() {
        return {
            val: this.value,
        }
    },
    watch: {
        val: function(val) {
            // Making sure that any letter, 0 or negative number is set in the input.
            if(val <= 1 || isNaN(+val)) this.val = 1;
            this.$emit("value", this.val);
        }
    }
};
</script>

<style scoped>
    input {
        width: 3rem;
        border: 0;
        border-radius: 5px;
        text-align: center;
    }
</style>