import './style.sass'
import { ref, defineComponent } from 'vue'
import ru from 'yup-locale-ru';
import { object, string, setLocale } from "yup";
import { Form } from 'vee-validate';
import VTextInput from '@/components/VTextInput/index.vue';

export default defineComponent({
  async setup() {

    setLocale(ru);

    let formData = ref({
      topic: 'Сообщение с формы на странице О нас',
      name: '',
      phoneNumber: '',
      email: '',
      message: '',
      personalData: false,
      source: 'Сообщение с формы на странице О нас'
    })

    let formSend = ref(false)
    let formMessage = ref('')

    const sendForm = (values, actions) => {
      return console.log('sendForm', values);
      formData.value.name = values.inputName;
      formData.value.phoneNumber = values.inputPhone;
      formData.value.email = values.inputEmail;
      formData.value.message = values.inputMessage;
      formData.value.personalData = true;

      try {
        let response = []
        // let response = axios.post(`/feedback/universal`, formData.value)
        if (response) {
          formSend.value = true
          formMessage.value = 'Ваше сообщение отправлено. Спасибо!';
          actions.resetForm();
        }
      } catch(error: any) {
        formMessage.value = 'Произошла ошибка, попробуйте позже'
      }
    }

    const schema = object().shape({
      inputName: string()
          .trim()
          .required(),
      inputPhone: string()
          .required()
          .length(18),
      inputEmail: string()
          .trim()
          .required()
          .email(),
      inputMessage: string()
          .trim()
          .required(),
      checkPersonal: string()
          .oneOf([true], "Вы не дали согласие")
          .test("only-yes", "Please select YES only", value => value !== "no")
    });

    const initialValues = {
      inputName: "",
      inputPhone: "",
      inputEmail: "",
      inputMessage: "",
      checkPersonal: false
    };

    return () => {
      return (
          <div class="feedback-form-about-container">
            <div class="feedback-form-about">
              <h3>Обратная связь</h3>
              { formSend.value ? (
                  <div class="feedback-form-message">
                    <span>{formMessage.value}</span>
                  </div>
              ): (
                  <div>
                    <Form
                        validation-schema={schema}
                        initial-values={initialValues}
                        onSubmit={(values, actions) => sendForm(values, actions)}
                    >
                      <div class="feedback-form-about-top">
                        <div class="feedback-form-about-input">
                          <VTextInput
                              type="text"
                              name="inputName"
                              label="Имя"
                              rules={'required'}
                              placeholder="Имя"
                          />
                        </div>

                        <div class="feedback-form-about-input">
                          <VTextInput
                              type="text"
                              name="inputPhone"
                              label="Телефон"
                              rules={'required|length:18'}
                              mask={'+7 (###) ###-##-##'}
                              placeholder="+7(___) ___-__-__"
                          />
                        </div>
                      </div>

                      <div class="feedback-form-about-input feedback-form-about-input-email">
                        <VTextInput
                            type="email"
                            name="inputEmail"
                            label="Email"
                            rules={'required|email'}
                            placeholder="cable@mail.ru"
                        />
                      </div>

                      <div class="feedback-form-about-input">
                        <VTextInput
                            textarea={true}
                            type="text"
                            name="inputMessage"
                            label="Ваше сообщение"
                            rules={'required'}
                            placeholder="Ваше сообщение"
                        />
                      </div>

                      <div class="feedback-form-about-personal">

                        <VTextInput
                            checkbox={true}
                            type="checkbox"
                            name="checkPersonal"
                            label="Согласен на обработку"
                            rules={'required'}
                            checkboxLink={`<a href="#" target="_blank">персональных данных</a>`}
                        >
                          <a href="#" target="_blank">персональных данных</a>
                        </VTextInput>
                      </div>

                      <button>Отправить</button>
                    </Form>
                  </div>
              )}
            </div>
          </div>
      )
    }
  }
})