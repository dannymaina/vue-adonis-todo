<template>
    <v-layout row wrap class="mt-4">
            <v-flex xs8>
                <v-text-field @keyup.enter="$emit('create')" :value="value" @input="$emit('onInput', $event)" :placeholder="placeholder"></v-text-field>
            </v-flex>
            <v-flex xs4 class="text-xs-right">
                <v-btn @click="$emit('create')" color="green" dark class="mt-2"><v-icon class="mr-1">add_circle</v-icon>Create</v-btn>
            </v-flex>
        </v-layout>
</template>

<script>
export default {
    props:['placeholder','value']

}
</script>

<style>

</style>
