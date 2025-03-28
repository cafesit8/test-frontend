<template>
  <article class="bg-[#1aad75] rounded-md p-3 flex flex-col">
      <div class="flex justify-between text-white">
        <h2 class="font-semibold text-xl">{{ course.nombre }}</h2>
        <span>S/.{{ course.precio }}</span>
      </div>
      <p class="text-sm text-white">{{ course.descripcion }}</p>
      <div class="flex-1 grid grid-cols-2 gap-5 mt-3">
        <p class="bg-[#d3f8e3] p-1 grid place-content-center text-sm rounded-md">ALumnos: {{ course.cantidadAlumnos }}</p>
        <p class="bg-[#d3f8e3] p-1 grid place-content-center text-sm rounded-md">Fecha. Inicio: {{ initDate }}</p>
        <p class="bg-[#d3f8e3] p-1 grid place-content-center text-sm rounded-md">Fecha. Fin: {{ endDate }}</p>
        <p class="bg-[#d3f8e3] p-1 grid place-content-center text-sm rounded-md">
          Categorias:
          <span v-if="Array.isArray(course.categoria)" v-for="categoria in course.categoria" :key="categoria">{{
            categoria }}, </span>
          <span v-else>{{ course.categoria }}</span>
        </p>
      </div>
    </article>
</template> 

<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import type { Course } from '../../../types';

const { course } = defineProps<{ course: Course }>()
const initDate = computed(() => course.fechaInicio ? course.fechaInicio : 'No definido')
const endDate = computed(() => course.fechaFin ? course.fechaFin : 'No definido')
</script>
