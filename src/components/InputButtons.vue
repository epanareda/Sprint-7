<template>
    <div class="d-flex">
        <button type="button" class="btn btn-warning text-white px-2 me-1" @click="value++">➕</button>
        <input v-model="value">
        <button type="button" class="btn btn-warning text-white px-2 ms-1" @click="value--">➖</button>
    </div>



</template>

<script>
export default {
    name: 'InptuButtons',
    data() {
        return {
            value: 1,
        }
    },
    watch: {
        value: function(val) {
            // Making sure that any letter, 0 or negative number is set in the input.
            if(val <= 1 || isNaN(+val)) this.value = 1;
            this.$emit("value", this.value);
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