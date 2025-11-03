import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePortalStore = defineStore('projectStore', () => {
    const isOpen = ref(false)
    const projectData = ref(null)

    function open(projData) {
        isOpen.value = true

        projectData.value = projData
        console.log(projData)
    }

    function close() {
        isOpen.value = false

        projectData.value = null
    }

    return { isOpen, projectData, open, close }
})
