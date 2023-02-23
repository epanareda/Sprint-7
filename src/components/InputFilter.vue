<template>
    <div class="d-flex align-items-center">
        <select class="form-select me-1 bg-secondary text-white" v-model="select">
            <option value="name">Pressupost</option>
            <option value="client">Client</option>
        </select>
        <input class="form-control" type="text" v-model="value">
    </div>
</template>

<script>
export default {
    name: 'InputFilter',
    data() {
        return {
            select: "name",
            value: "",
        }
    },
    watch: {
        select() {
            this.emitFilter();
        },
        value() {
            this.emitFilter();
        },
    },
    methods: {
        emitFilter() {
            this.$emit("filter", [this.select, this.value])
        }
    },
};
</script>

<style scoped>
    select {
        width: 8.5rem;
    }
</style>