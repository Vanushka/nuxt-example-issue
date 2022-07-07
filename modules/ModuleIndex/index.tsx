import { defineComponent } from 'vue'
import FeedbackForm from '@/components/feedback-form'

export default defineComponent({
  name: "ModuleIndex",
  render() {
    return (
      <div>
        <FeedbackForm />
      </div>
    )
  }
})