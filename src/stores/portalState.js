import { reactive } from 'vue'

export const portalState = reactive({
    isOpen: false,
    projectName: '',
    open(name) {
        this.projectName = name
        this.isOpen = true
    },
    close() {
        this.isOpen = false
        this.projectName = ''
    },
})