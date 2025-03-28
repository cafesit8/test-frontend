<template>
  <main class="flex flex-col gap-5">
    <h1 class="text-3xl font-bold">Gestión de Cursos</h1>
    <Button @click="openDialog = true" label="Crear Curso" class="self-start" />
    <CoursesList :courses="courses" />
    <Dialog v-model:visible="openDialog" modal header="Crear Curso" :style="{ width: '30rem' }">
      <Form @closeModal="closeDialog" />
    </Dialog>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getCourses } from '../../services/courses'
import CoursesList from './components/CoursesList.vue'
import Form from './components/Form.vue'

import type { Course } from '../../types'

export default defineComponent({
  name: 'CoursesPage',
  components: { CoursesList, Form },
  data () {
    return {
      courses: [] as Course[],
      initialValues: {
        username: '',
        email: ''
      },
      openDialog: false
    }
  },
  async created () {
    this.getCourses()
  },
  methods: {
    async getCourses () {
      try {
        const courses = await getCourses();
        this.courses = courses;
      } catch (error) {
        console.error('Failed to load courses:', error);
      }
    },
    closeDialog () {
      this.openDialog = false;
      this.getCourses();
    }
  }
})
</script>