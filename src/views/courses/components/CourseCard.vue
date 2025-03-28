<template>
  <article className="flex items-center justify-center">
    <div className="overflow-hidden border-0 shadow-lg h-full w-full flex flex-col">
      <div className="bg-emerald-500 text-white p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold mb-2">{{ course.nombre }}</h2>
            <p className="text-sm opacity-90 leading-relaxed">
              {{ course.descripcion }}
            </p>
          </div>
          <div className="bg-emerald-400 px-3 py-1 rounded-full text-white font-bold">S/.{{ course.precio }}</div>
        </div>
      </div>
      <div className="bg-white p-6 grid grid-cols-2 gap-4 flex-1">
        <div className="bg-emerald-50 p-3 rounded-lg">
          <p className="text-xs text-emerald-700 font-medium mb-1">Alumnos</p>
          <p className="text-emerald-900 font-semibold">{{ course.cantidadAlumnos }}</p>
        </div>
        <div className="bg-emerald-50 p-3 rounded-lg">
          <p className="text-xs text-emerald-700 font-medium mb-1">Fecha Inicio</p>
          <p className="text-emerald-900 font-semibold">{{ initDate }}</p>
        </div>
        <div className="bg-emerald-50 p-3 rounded-lg">
          <p className="text-xs text-emerald-700 font-medium mb-1">Fecha Fin</p>
          <p className="text-emerald-900 font-semibold">{{ endDate }}</p>
        </div>
        <div className="bg-emerald-50 p-3 rounded-lg flex flex-col gap-2">
          <p className="text-xs text-emerald-700 font-medium mb-1">Categorías</p>
          <span v-if="categoryIsArray" v-for="categoria in course.categoria" :key="categoria"
            class="bg-green-200 self-baseline text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm">{{ categoria }}</span>
          <span v-else class="bg-green-200 text-green-800 self-baseline text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm">
            {{ !course.categoria.length ? 'No definido' : course.categoria }}
          </span>
        </div>
      </div>
      <div className="bg-white p-4 flex justify-end border-t">
        <button variant="destructive" className="flex items-center gap-2">
          Eliminar
        </button>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import type { Course } from '../../../types';

const { course } = defineProps<{ course: Course }>()
const initDate = computed(() => course.fechaInicio ? course.fechaInicio : 'No definido')
const endDate = computed(() => course.fechaFin ? course.fechaFin : 'No definido')
const categoryIsArray = computed(() => Array.isArray(course.categoria) && course.categoria.length > 0)
</script>
