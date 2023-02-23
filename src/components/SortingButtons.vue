<template>
    <div class="d-flex">
        <span class="me-2">sort by:</span>
        <button type="button" :class="['btn', sortBy === 'abc' ? 'btn-danger' : 'btn-secondary', 'py-0', 'me-2']"  @click="sortBy='abc'">abc</button>
        <button type="button" :class="['btn', sortBy === 'price' ? 'btn-danger' : 'btn-secondary', 'py-0', 'me-2']" @click="sortBy='price'">price</button>
        <button type="button" class="btn btn-secondary py-0 me-2" @click="sortBy='reset'">reset</button>
    </div>
</template>

<script>
export default {
    name: 'SortingButtons',
    data() {
        return {
            sortBy: "",
        }
    },
    watch: {
        sortBy(val) {
            this.$emit("sort", val);
        }
    }
};
</script>

<style scoped>
</style>