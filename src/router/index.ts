import CoursesView from '../views/courses/CoursesPage.vue';
import Students from '../views/students/StudentsPage.vue';

export const routes = [{
  path: '/',
  redirect: '/cursos'
},{
  path: '/cursos',
  component: CoursesView
}, {
  path: '/estudiantes',
  component: Students
}]