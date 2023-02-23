<template>
    <div>
        <div class="mb-3" v-for="(input, index) in inputs" :key="index">
            <label>Nom del {{input[0]}}</label>
            <input class="form-control" type="text" v-model="input[1]">
             <!-- @change="$emit(input[0], $event.target.value)"> -->
        </div>
        <!-- <div class="mb-3">
            <label>Nom del pressupost:</label>
            <input class="form-control" type="text" v-model="pressupostName">
        </div>
        <div class="mb-3">
            <label>Nom del client:</label>
            <input class="form-control" type="text" v-model="clientName">
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'NameInputs',
    props: ["reset"],
    data() {
        return {
            inputs: [
                ["pressupost", ""],
                ["client", ""]
            ],
        }
    },
    computed: {
        pressupostName() {
            return this.inputs[0][1];
        },
        clientName() {
            return this.inputs[1][1];
        }
    },
    watch: {
        reset(val) {
            if(val) {
                this.inputs.forEach(i => i[1] = "");
                this.$emit("resetDone");
            }
        },
        pressupostName(val) {
            this.$emit("pressupost", val);
        },
        clientName(val) {
            this.$emit("client", val);
        }
    }
};
</script>

<style scoped>
</style>