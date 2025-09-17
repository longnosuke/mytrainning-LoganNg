<script setup lang="ts">
  import DefaultLayout from "@/layouts/DefaultLayout.vue";
  import emailjs from 'emailjs-com'
  import { reactive } from 'vue'

  const form = reactive({
    name: '',
    email: '',
    message: ''
  })

  const sendEmail = () => {
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        alert('Sent successfully!')
      })
      .catch(() => {
        alert('Send failed.')
      })
  }
</script>

<template>
  <DefaultLayout>
    <div class="container px-5 py-5">
      <form class="row g-3" @submit.prevent="sendEmail">
        <div class="col-md-12">
          <label for="inputName" class="form-label">Your Name</label>
          <input v-model="form.name" type="text" class="form-control" id="inputName" placeholder="Your Name" required>
        </div>
        <div class="col-md-12">
          <label for="inputEmail" class="form-label">Your Email</label>
          <input v-model="form.email" type="email" class="form-control" id="inputEmail" placeholder="Your Email" required>
        </div>
        <div class="col-12">
          <label for="inputMessage" class="form-label">Your Message</label>
          <textarea v-model="form.message" class="form-control" id="inputMessage" rows="5" placeholder="Your Message" required></textarea>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  </DefaultLayout>
</template>