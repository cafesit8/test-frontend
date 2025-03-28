<template>
  <form :initialValues="courseDetails" @submit.prevent="onFormSubmit" class="grid grid-cols-2 gap-4">
    <div>
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Nombre del Curso</label>
      <input v-model="courseDetails.nombre" type="text" id="first_name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Nombre del curso" />
    </div>
    <div>
      <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900">Cantidad de Alumnos</label>
      <input v-model="courseDetails.cantidadAlumnos" type="number" id="quantity"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="0" />
    </div>
    <div>
      <label for="category" class="block mb-2 text-sm font-medium text-gray-900">Categoria</label>
      <input v-model="courseDetails.categoria" type="text" id="category"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Nombre del curso" />
    </div>
    <div>
      <label for="initDate" class="block mb-2 text-sm font-medium text-gray-900">Fecha de incio</label>
      <input v-model="courseDetails.fechaInicio" type="date" id="initDate"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Nombre del curso" />
    </div>
    <div>
      <label for="endDate" class="block mb-2 text-sm font-medium text-gray-900">Fecha de Fin</label>
      <input v-model="courseDetails.fechaFin" type="date" id="endDate"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Nombre del curso" />
    </div>
    <div>
      <label for="price" class="block mb-2 text-sm font-medium text-gray-900">Precio</label>
      <input v-model="courseDetails.precio" type="number" id="price"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Nombre del curso" />
    </div>
    <div class="col-span-2">
      <label for="description" class="block mb-2 text-sm font-medium text-gray-900">Descripción</label>
      <textarea v-model="courseDetails.descripcion" id="description" rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Escribe una descripción"></textarea>
    </div>
    <button type="submit"
      class="col-span-2 focus:outline-none cursor-pointer text-white bg-[#1aad75] hover:bg-[#1aad75] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
      Guardar
    </button>
  </form>
</template>

<script lang="ts" setup>
import { computed, ref, defineEmits } from 'vue'
import { addCourse } from '../../../services/courses'
import { convertDateToTimestamp } from '../../../helpers'

const courseDetails = ref({
  nombre: '',
  cantidadAlumnos: 0,
  categoria: '',
  fechaInicio: '',
  fechaFin: '',
  precio: 0,
  descripcion: ''
})

const emit = defineEmits(['closeModal'])

async function onFormSubmit () {
  const dataToSend = {
    ...courseDetails.value,
    alumnos: [],
    fin: fechaInicio.value,
    inicio: fechaFin.value,
    fechaFin: fechaFin.value,
    fechaInicio: fechaInicio.value
  }

  const response = await addCourse(dataToSend)

  if (response) {
    emit('closeModal')
  }
}

const fechaInicio = computed(() => convertDateToTimestamp(courseDetails.value.fechaInicio))
const fechaFin = computed(() => convertDateToTimestamp(courseDetails.value.fechaFin))
</script>