<script setup>
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue'
import gsap from 'gsap'
import Draggable from 'gsap/Draggable'
import InertiaPlugin from 'gsap/InertiaPlugin'
import TheContainer from '@/components/layout/TheContainer.vue'
import TheDialog from '@/components/layout/TheDialog.vue'
// SVG Imports
import TheButton from '@/components/layout/TheButton.vue'
import MorphSVGPlugin from 'gsap/MorphSVGPlugin'

gsap.registerPlugin(Draggable, InertiaPlugin, MorphSVGPlugin)

const box = useTemplateRef('box')

let stop
function morph() {
  gsap.to('#circ', { duration: 1, morphSVG: '#planet' })
}

onMounted(() => {
  Draggable.create(box.value, {
    type: 'x,y',
    inertia: true,
    bounds: document.getElementById('boundary'),
  })
})
onBeforeUnmount(() => {
  stop?.()
})
</script>

<template>
  <div class="container mx-auto my-46 p-12">
    dragable
    <TheButton variant="primary" @click="morph()">morph</TheButton>
    <svg id="circ" width="400" height="400" viewBox="0 0 600 600">
      <!-- Oval path, no fill -->
      <ellipse
        id="path"
        cx="300"
        cy="300"
        rx="200"
        ry="200"
        fill="none"
        stroke="red"
        stroke-width="2"
      />
    </svg>
    <svg
      id="planet"
      width="91"
      height="90"
      viewBox="0 0 91 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M67.7838 67.4514C80.1791 55.0561 80.1791 34.9595 67.7838 22.5643C55.3886 10.169 35.2919 10.169 22.8967 22.5643C10.5014 34.9595 10.5015 55.0561 22.8967 67.4514C35.2919 79.8466 55.3886 79.8466 67.7838 67.4514Z"
        fill="#AFD84B"
        style="
          fill: #afd84b;
          fill: color(display-p3 0.6863 0.8471 0.2941);
          fill-opacity: 1;
        "
      />
      <path
        d="M45.272 77.2574C38.521 77.2574 31.962 75.1394 26.395 71.0964C19.427 66.0354 14.847 58.5644 13.499 50.0594C12.15 41.5544 14.194 33.0334 19.255 26.0644C24.315 19.0964 31.786 14.5164 40.291 13.1674C48.796 11.8174 57.317 13.8624 64.286 18.9224C71.254 23.9824 75.834 31.4544 77.182 39.9594C78.531 48.4644 76.487 56.9854 71.426 63.9544C66.365 70.9224 58.895 75.5024 50.39 76.8514C48.68 77.1224 46.97 77.2564 45.272 77.2564V77.2574ZM45.381 13.7824C35.71 13.7824 26.168 18.2474 20.063 26.6544C15.16 33.4054 13.179 41.6634 14.486 49.9044C15.793 58.1454 20.231 65.3844 26.983 70.2884C33.734 75.1914 41.993 77.1724 50.233 75.8664C58.475 74.5594 65.715 70.1214 70.618 63.3694C75.521 56.6184 77.502 48.3604 76.195 40.1184C74.888 31.8774 70.45 24.6384 63.698 19.7344C58.167 15.7174 51.745 13.7824 45.381 13.7824Z"
        fill="#1E1E1E"
        style="
          fill: #1e1e1e;
          fill: color(display-p3 0.1176 0.1176 0.1176);
          fill-opacity: 1;
        "
      />
      <path
        d="M37.2979 58.7422C39.6656 58.7353 42.6122 59.7466 46.0693 62.5146C47.8085 63.9071 49.0039 65.1112 49.7598 66.1387C50.5193 67.1712 50.8035 67.9824 50.7998 68.6016C50.7962 69.1929 50.5297 69.684 49.9971 70.1016C49.449 70.5311 48.6291 70.8708 47.5811 71.1064C45.4891 71.5768 42.645 71.597 39.7119 71.2529C36.7836 70.9094 33.8106 70.2083 31.4707 69.2646C30.3293 68.8046 29.7356 67.5968 29.7842 66.0127C29.8326 64.4369 30.529 62.6136 31.8145 61.1855C33.0914 59.7669 34.9383 58.7491 37.2979 58.7422Z"
        fill="#D0FB66"
        stroke="#4D6514"
        style="
          fill: #d0fb66;
          fill: color(display-p3 0.8149 0.9852 0.3994);
          fill-opacity: 1;
          stroke: #4d6514;
          stroke: color(display-p3 0.3019 0.3941 0.077);
          stroke-opacity: 1;
        "
      />
      <path
        d="M23.8877 38.9961C25.4327 37.4685 27.0694 36.853 28.6416 37.5068C32.0597 38.9283 33.5391 40.7302 33.9102 42.543C34.2865 44.3824 33.5605 46.4056 32.1816 48.335C30.8098 50.2546 28.8422 52.0073 26.8926 53.2695C25.9194 53.8996 24.96 54.4008 24.0928 54.7393C23.218 55.0806 22.4693 55.2439 21.9072 55.2285C21.0547 55.2052 20.4471 54.8984 20.0117 54.4062C19.564 53.9001 19.2641 53.1575 19.126 52.2148C18.8491 50.3245 19.246 47.7954 20.1279 45.3242C21.0085 42.8569 22.3477 40.5188 23.8877 38.9961Z"
        fill="#D0FB66"
        stroke="#4D6514"
        style="
          fill: #d0fb66;
          fill: color(display-p3 0.8149 0.9852 0.3994);
          fill-opacity: 1;
          stroke: #4d6514;
          stroke: color(display-p3 0.3019 0.3941 0.077);
          stroke-opacity: 1;
        "
      />
      <path
        d="M53.1006 27.833C56.1567 27.5193 59.9946 28.6043 64.7334 32.0459C69.4382 35.4629 71.6503 39.3321 72.2793 43.1436C72.9103 46.9676 71.9579 50.7947 70.2188 54.126C68.479 57.4586 65.9694 60.2605 63.5459 62.0215C62.3336 62.9024 61.1608 63.5097 60.1338 63.8008C59.1 64.0938 58.2759 64.051 57.6943 63.7305C55.737 62.6519 52.0309 60.1352 48.665 57.085C46.9835 55.5611 45.3976 53.9131 44.1602 52.2559C42.9961 50.6969 42.1624 49.1578 41.8262 47.7256L41.7656 47.4404C41.4766 45.9158 41.595 43.3181 42.2568 40.4727C42.9167 37.6358 44.1021 34.6161 45.8945 32.2354C47.683 29.86 50.0539 28.1459 53.1006 27.833Z"
        fill="#D0FB66"
        stroke="#4D6514"
        style="
          fill: #d0fb66;
          fill: color(display-p3 0.8149 0.9852 0.3994);
          fill-opacity: 1;
          stroke: #4d6514;
          stroke: color(display-p3 0.3019 0.3941 0.077);
          stroke-opacity: 1;
        "
      />
      <path
        d="M43.0391 20.0518C43.8809 20.0654 44.4482 20.2776 44.8232 20.584C45.1956 20.8883 45.4315 21.3282 45.5312 21.9004C45.7356 23.0739 45.3482 24.7068 44.5234 26.3857C43.7062 28.0495 42.4991 29.6768 41.1758 30.8232C39.8356 31.9842 38.47 32.5748 37.3105 32.3789C37.284 32.3744 37.1516 32.3249 36.9932 31.9785C36.8446 31.6536 36.7252 31.1724 36.6611 30.5635C36.5337 29.3514 36.6341 27.7452 37.0273 26.1465C37.4211 24.5458 38.0985 22.9945 39.0928 21.8604C40.0762 20.7388 41.3662 20.0251 43.0391 20.0518Z"
        fill="#D0FB66"
        stroke="#4D6514"
        style="
          fill: #d0fb66;
          fill: color(display-p3 0.8149 0.9852 0.3994);
          fill-opacity: 1;
          stroke: #4d6514;
          stroke: color(display-p3 0.3019 0.3941 0.077);
          stroke-opacity: 1;
        "
      />
      <path
        d="M26.7197 25.8428C27.3344 25.5909 27.8521 25.6007 28.2793 25.7754C28.7143 25.9534 29.1155 26.3273 29.4395 26.9092C30.093 28.0835 30.3697 30.0048 29.9854 32.3115C29.9053 32.7917 29.7103 33.0341 29.4971 33.1602C29.2673 33.2959 28.9283 33.3482 28.4795 33.2715C27.575 33.1168 26.4408 32.4702 25.5439 31.5547C24.6432 30.6351 24.0792 29.5466 24.1367 28.5645C24.1911 27.6393 24.814 26.6236 26.7197 25.8428Z"
        fill="#D0FB66"
        stroke="#4D6514"
        style="
          fill: #d0fb66;
          fill: color(display-p3 0.8149 0.9852 0.3994);
          fill-opacity: 1;
          stroke: #4d6514;
          stroke: color(display-p3 0.3019 0.3941 0.077);
          stroke-opacity: 1;
        "
      />
    </svg>
  </div>

  <div class="mt-20">
    <section class="diagonal p-20">
      <div class="wrapper container mx-auto p-2">
        <h2 class="section-title py-6 text-2xl font-bold">Diagonal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores vero
          consequatur itaque, quia incidunt nulla ut aperiam distinctio modi
          enim repellat tempore, placeat tenetur porro provident corporis? Illo,
          qui aperiam?
        </p>
      </div>
    </section>
    <section class="py-20">
      <div class="wrapper">
        <h2 class="section-title py-6 text-2xl font-bold">Some Content</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores vero
          consequatur itaque, quia incidunt nulla ut aperiam distinctio modi
          enim repellat tempore, placeat tenetur porro provident corporis? Illo,
          qui aperiam?
        </p>
      </div>
    </section>

    <section class="bubble py-20">
      <div class="wrapper container mx-auto">
        <h2 class="section-title py-6 text-2xl font-bold">Diagonal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores vero
          consequatur itaque, quia incidunt nulla ut aperiam distinctio modi
          enim repellat tempore, placeat tenetur porro provident corporis? Illo,
          qui aperiam?
        </p>
      </div>
    </section>

    <section class="py-20">
      <div class="wrapper">
        <h2 class="section-title"></h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores vero
          consequatur itaque, quia incidunt nulla ut aperiam distinctio modi
          enim repellat tempore, placeat tenetur porro provident corporis? Illo,
          qui aperiam?
        </p>
      </div>
    </section>

    <section class="py-20">
      <div class="wrapper">
        <h2 class="section-title"></h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores vero
          consequatur itaque, quia incidunt nulla ut aperiam distinctio modi
          enim repellat tempore, placeat tenetur porro provident corporis? Illo,
          qui aperiam?
        </p>
      </div>
    </section>

    <section class="py-20">
      <div class="wrapper">
        <h2 class="section-title"></h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores vero
          consequatur itaque, quia incidunt nulla ut aperiam distinctio modi
          enim repellat tempore, placeat tenetur porro provident corporis? Illo,
          qui aperiam?
        </p>
      </div>
    </section>
  </div>

  <div
    class="border-brdr container flex place-content-center place-self-center border"
  >
    <div class="flex-flex-col">
      <div class="flex gap-2">
        <div
          class="border-brdr text-fg-prim bg-bg-prim flex size-22 items-center justify-center border-4 text-center text-2xl"
        >
          Hello
        </div>
        <div
          class="border-brdr text-fg-sec bg-bg-sec flex size-22 items-center justify-center border-4 text-center text-2xl"
        >
          Hello
        </div>
        <div
          class="border-brdr text-fg-ter bg-bg-ter flex size-22 items-center justify-center border-4 text-center text-2xl"
        >
          Hello
        </div>
      </div>
      <div class="mt-2 flex gap-2">
        <div
          class="text-fg-prim bg-acc-prim flex size-22 items-center justify-center text-center text-2xl"
        ></div>
        <div
          class="text-fg-sec bg-acc-sec flex size-22 items-center justify-center text-center text-2xl"
        ></div>
        <div
          class="text-fg-ter bg-acc-ter flex size-22 items-center justify-center text-center text-2xl"
        ></div>
      </div>
      <div
        class="border-brdr from-acc-prim via-acc-sec to-acc-ter mt-2 flex h-22 w-70 gap-2 border bg-gradient-to-r"
      ></div>
      <div
        class="border-brdr grad-tr-prim-sec mt-2 flex h-22 w-70 gap-2 border text-black"
      >
        prim to sec
      </div>
      <div
        class="border-brdr grad-tr-sec-ter mt-2 flex h-22 w-70 gap-2 border text-black"
      >
        sec to ter
      </div>
      <div
        class="border-brdr grad-tr-prim-ter mt-2 flex h-22 w-70 gap-2 border text-black"
      >
        prim to ter
      </div>
    </div>
    <div class="border-brdr container space-x-2 border p-12">
      <TheButton variant="primary">Button</TheButton>
      <TheButton variant="secondary">Button</TheButton>
      <TheButton variant="tertiary">Button</TheButton>
    </div>
  </div>

  <TheContainer>
    <div class="flex h-full w-full gap-6 p-8">
      <TheDialog
        open-dialog-button-title="quick view"
        openButtonVariant="tertiary"
        open-button-classes="hover:text-acc-prim border rounded"
        close-button-variant="tertiary"
        close-button-classes="-ml-2 self-start"
      >
        <template #diagTitle>
          <h1>Skills Description</h1>
        </template>
        <template #diagDesc>
          <p>Here are my skills and my evaluation of them.</p>
        </template>
        <template #diagContent>
          <ol class="list list-inside list-disc">
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
          </ol>
        </template>
      </TheDialog>
    </div>
  </TheContainer>

  <div></div>
</template>
<style scoped>
.diagonal {
  --skew-angle: -5deg;
  --bg-grad: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);
  position: relative;
  isolation: isolate;
}

.diagonal::after {
  content: '';
  background-image: var(--bg-grad);
  position: absolute;
  z-index: -1;
  inset: 0;
  transform: skewY(var(--skew-angle));
}

.bubble {
  position: relative;
  color: black;
  background: linear-gradient(to right, #fdc830, #f37335);
}

.bubble::before,
.bubble::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 50px;
  background: var(--color-bg-prim);

  mask-image: url('../assets/svgs/halfCircle.svg');
  -webkit-mask-image: url('../assets/svgs/halfCircle.svg');
  /* -webkit-mask-size: 10px 20px; */
}

.bubble::before {
  top: 0;
  transform: rotate(0.5turn);
  /* same as 180deg */
}

.bubble::after {
  bottom: 0;
}
</style>
