<template>
  <div>
    <div class="mb-8 flex justify-start max-w-3xl">
      <h1 class="font-bold text-3xl">
        <inertia-link
          class="text-indigo-500 hover:text-indigo-600"
          :href="$api.users.list.path()"
        >
          Users
        </inertia-link>
        <span class="text-indigo-400 font-medium">/</span>
        {{ form.user.first_name }} {{ form.user.last_name }}
      </h1>
      <img
        v-if="user.photo"
        class="block w-8 h-8 rounded-full ml-4"
        :src="user.photo"
        alt="Photo"
      >
    </div>
    <trashed-message
      v-if="user.deleted_at"
      class="mb-6"
      @restore="restore"
    >
      This user has been deleted.
    </trashed-message>
    <div class="bg-white rounded shadow overflow-hidden max-w-3xl">
      <user-form
        v-model="form"
        @submit="submit(form)"
      >
        <div
          v-if="can.edit_user"
          class="px-8 py-4 bg-gray-100 border-t border-gray-200 flex items-center"
        >
          <button
            v-if="!user.deleted_at"
            class="text-red-800 hover:underline"
            tabindex="-1"
            type="button"
            @click="destroy"
          >
            Delete User
          </button>
          <loading-button
            :loading="form.processing"
            class="btn-indigo ml-auto"
            type="submit"
          >
            Update User
          </loading-button>
        </div>
      </user-form>
    </div>
  </div>
</template>

<script>
import Layout from '@/Layouts/Main.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'
import TrashedMessage from '@/Shared/TrashedMessage.vue'
import { users } from '@/api'
import UserForm from './Form.vue'

export default {
  metaInfo () {
    return {
      title: `${this.form.user.first_name} ${this.form.user.last_name}`,
    }
  },
  components: {
    LoadingButton,
    UserForm,
    TrashedMessage,
  },
  layout: Layout,
  props: {
    user: {
      type: Object,
      required: true,
    },
    can: {
      type: Object,
      required: true,
    },
  },
  remember: 'form',
  data () {
    return {
      form: this.$inertia.form({
        user: {
          ...this.user,
          photo: null,
        },
      }),
    }
  },
  methods: {
    submit (form) {
      users.update({
        params: this.user,
        form,
        onSuccess: () => form.reset('password', 'photo'),
      })
    },
    destroy () {
      if (confirm('Are you sure you want to delete this user?'))
        users.destroy(this.user)
    },
    restore () {
      if (confirm('Are you sure you want to restore this user?'))
        users.restore(this.user)
    },
  },
}
</script>
