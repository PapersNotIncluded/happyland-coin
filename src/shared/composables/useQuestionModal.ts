import { reactive, ref } from 'vue'

const isOpen = ref(false)

// Persist form state while modal is toggled
const formState = reactive({
  name: '',
  phone: '',
  question: '',
})

const openQuestionModal = () => {
  isOpen.value = true
}

const closeQuestionModal = () => {
  isOpen.value = false
}

export const useQuestionModal = () => ({
  isOpen,
  formState,
  openQuestionModal,
  closeQuestionModal,
})

export { openQuestionModal, closeQuestionModal, formState }
