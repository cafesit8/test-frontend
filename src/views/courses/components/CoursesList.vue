<template>
  <section class="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-4">
    <CourseCard v-if="courses.length" v-for="course in courses" :key="course.id" :course="course" />
    <span v-else>Cargando...</span>
  </section>
</template>

<script lang="ts" setup>
import CourseCard from './CourseCard.vue';
import { defineProps } from 'vue'
import type { Course } from '../../../types';

const { courses } = defineProps<{ courses: Course[] }>()
</script>