<template>
    <v-layout row wrap>
        <v-flex xs9 class="text-xs-left">
            <slot></slot>
            <span v-if="!isEditMode" @click="$emit('onClick')">
            {{title}}
            </span>
            <v-text-field autofocus @keyup.enter="$emit('onSave')" @input="$emit('onInput', $event)" v-if="isEditMode" :value="title"></v-text-field>
        </v-flex>
        <v-flex xs3 class="text-xs-right">
            <v-icon @click="$emit('onEdit')" v-if="!isEditMode" class="icon">edit</v-icon>
            <v-icon @click="$emit('onSave')" v-if="isEditMode" class="icon">check</v-icon>
            <v-icon @click="$emit('onDelete')" class="icon">delete</v-icon>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    props:['isEditMode', 'title', 'record']
}
</script>

<style>

</style>
