import { Form, Field, ErrorMessage } from 'vee-validate'
import Maska from 'maska';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Maska);
    nuxtApp.vueApp.component("VForm", Form);
    nuxtApp.vueApp.component("Field", Field);
    nuxtApp.vueApp.component("ErrorMessage", ErrorMessage);
})
