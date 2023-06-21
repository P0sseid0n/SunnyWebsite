<script setup lang="ts">
const { data: questions } = useFetch('/api/questions')

import CustomSelect from '@/components/CustomSelect.vue'

const responses = reactive<{ [key: string]: string }>({})

const questionsDivided = computed(() => {
   if (!questions.value) return [[], []]

   return [
      questions.value.slice(0, questions.value.length / 2),
      questions.value.slice(questions.value.length / 2)
   ]
})


const checkoutCode = computed(() => {
   let result = ''

   if (!questions.value) return

   for (const [key, value] of Object.entries(responses)) {
      const question = questions.value.find(question => question.id === key)
      const optionIndex = question?.options?.findIndex(option => option.value === value)

      result += optionIndex
   }

   return result
})

const checkoutCodeView = ref('')
const warnText = ref('')

function generateCodeView() {
   // Fazer checagens

   if (!questions.value) return


   if (!checkoutCode.value || (checkoutCode.value.length < questions.value.length)) {
      warnText.value = 'Responda todas as perguntas'
      return
   }

   checkoutCodeView.value = checkoutCode.value || ''
   warnText.value = ''
}

function copyCode() {
   if (!checkoutCodeView.value) return

   navigator.clipboard.writeText(checkoutCodeView.value)

   warnText.value = 'Código copiado!'
}
</script>

<template>
   <div class="container">

      <h2>
         Faça seu orçamento
      </h2>

      <main>
         <div v-for="questions in questionsDivided">
            <div class="question" v-for="question in questions">
               <h4> {{ question.title }} </h4>
               <div class="options">
                  <CustomSelect v-if="question.options.length > 3" :options="question.options"
                     @input="(value) => responses[question.id] = value" />
                  <label v-else v-for="(option, index) in question.options" :for="question.id + index">
                     <input type="radio" v-model="responses[question.id]" :value="option.value"
                        :id="question.id + index" />

                     <span>{{ option.text }}</span>
                  </label>
               </div>
            </div>
         </div>

      </main>

      <div v-if="checkoutCodeView !== checkoutCode || checkoutCode === ''">
         <button class="CTA" @click="generateCodeView">Gerar código</button>
      </div>
      <div v-else>
         <input class="checkoutCode" type="text" readonly :value="checkoutCodeView" @click="copyCode">
      </div>

      <span v-if="warnText !== ''" class="warnText">{{ warnText }}</span>
   </div>
</template>

<style lang="scss" scoped>
.container {
   padding-top: 16px;
   padding-bottom: 32px;
}

main {
   display: flex;
   flex-direction: row;
   justify-content: space-around;
}

.question {
   margin-bottom: 16px;
}

h2 {
   margin-bottom: 32px;
}

.options {
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   gap: 16px;


   max-width: 512px;
   height: 48px;
}

h4 {
   margin-bottom: 8px;
}



input[type="radio"] {
   display: none;
}

label {
   cursor: pointer;

   background: rgb(246, 248, 250);
   border: 1px solid rgb(210, 215, 220);
   border-radius: 8px;

   margin: 16px 0;
   width: 100%;
   height: 100%;

   display: flex;
   justify-content: center;
   align-items: center;

   font-size: 14px;
}

label:has(input:checked) {
   background: #48a9af;
   color: white;
}

button {
   margin-top: 32px;
}

.CTA {
   display: inline-block;

   width: 100%;
   max-width: 320px;

   font-size: 16px;
}

.checkoutCode {
   display: inline-block;
   margin-top: 32px;

   width: 100%;
   max-width: 320px;
   height: 48px;

   text-align: center;
   font-size: 16px;

   background: rgb(246, 248, 250);
   border: 1px solid rgb(210, 215, 220);
   border-radius: 8px;

   cursor: pointer;

   outline: none;

}

.warnText {
   display: inline-block;
   margin-top: 16px;

   font-weight: 500;
   font-size: 16px;
}

@media (max-width: 768px) {
   main {
      flex-direction: column;
   }
}
</style>