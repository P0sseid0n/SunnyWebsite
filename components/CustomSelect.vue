<script setup lang="ts">

const props = defineProps<{
   options: { text: string, value: string }[]
}>();

const emit = defineEmits<{
   (e: 'input', value: string): void
}>();

const optionsSelected = ref<{ text: string, value: string }>();

const listOpen = ref(false);

function selectOption(option: { text: string, value: string }) {
   optionsSelected.value = option;
   listOpen.value = false;
   emit('input', option.value)
}

</script>

<template>
   <div class="custom-select" tabindex="0" @blur="listOpen = false">
      <div class="selected" :class="{ listOpen }" @click="listOpen = !listOpen">
         {{ optionsSelected?.text || 'Selecione...' }}
      </div>
      <div v-if="listOpen" class="items">
         <div v-for="option of props.options" @click="selectOption(option)">
            {{ option.text }}
         </div>
      </div>
   </div>
</template>

<style>
.custom-select {
   position: relative;
   height: 100%;
   width: 100%;
   text-align: left;
   outline: none;
}

.custom-select .selected {
   height: 100%;

   border-radius: 8px;
   background: rgb(246, 248, 250);
   border: 1px solid rgb(210, 215, 220);


   padding-left: 1em;
   cursor: pointer;
   user-select: none;

   display: flex;
   align-items: center;
}

.custom-select .selected:after {
   position: absolute;
   content: "";
   top: 22px;
   right: 1em;
   width: 0;
   height: 0;
   border: 5px solid transparent;
   border-color: black transparent transparent transparent;
}

.custom-select .selected.listOpen:after {
   border-color: transparent transparent black transparent;
   top: 16px;
}


.custom-select .items {
   background: rgb(246, 248, 250);
   overflow: hidden;

   border: 1px solid rgb(210, 215, 220);


   line-height: 24px;

   position: relative;
   top: -8px;
   left: 0;
   z-index: 1;

   border-radius: 0 0 8px 8px;
}

.custom-select .items div {
   /* color: #fff; */
   padding: 4px 1em;
   cursor: pointer;
   user-select: none;
}

.custom-select .items div:hover {
   background: rgb(210, 215, 220);
}
</style>