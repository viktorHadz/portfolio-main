<script setup>
import { ref } from 'vue'
import TheButton from './TheButton.vue'
import { Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue'

const isOpen = ref(false)

const emit = defineEmits(['close', 'confirm'])

defineProps({
  openButtonClasses: String,
  openButtonVariant: String,
  closeButtonClasses: String,
  closeButtonVariant: String,
  openDialogButtonTitle: String,
})

const setIsOpen = (value) => {
  isOpen.value = value
  if (!value) {
    emit('close')
  }
}
</script>

<template>
  <TheButton @click="isOpen = true" :class="openButtonClasses" :variant="openButtonVariant">
    {{ openDialogButtonTitle }}
  </TheButton>
  <Teleport to="body">
    <Dialog :open="isOpen" @close="setIsOpen">
      <div class="dark:bg-bg-prim/25 bg-fg-sec/25 fixed inset-0" />
      <div class="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel
          class="bg-bg-sec border-brdr mx-auto flex max-w-sm flex-col gap-2 rounded-lg border px-6 py-4"
        >
          <DialogTitle class="text-xl font-bold">
            <slot name="diagTitle"></slot>
            <hr class="from-acc-sec to-acc-prim mt-2 h-px border-0 bg-gradient-to-r" />
          </DialogTitle>
          <DialogDescription class="text-fg-sec">
            <slot name="diagDesc"></slot>
          </DialogDescription>
          <slot name="diagContent"></slot>

          <TheButton
            @click="setIsOpen(false)"
            :variant="closeButtonVariant"
            :class="[closeButtonClasses]"
          >
            Close
          </TheButton>
        </DialogPanel>
      </div>
    </Dialog>
  </Teleport>
</template>
