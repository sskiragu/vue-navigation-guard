<template>
     <v-card
     class="mx-auto mt-10"
      width="344"
      elevation="0">
            <v-form
                class="mt-10"
                @submit.prevent="signUp">
                <v-text-field type="text" label="Username" variant="outlined" color="primary" v-model="formData.username"/>
                <v-text-field type="password" label="Paasword" variant="outlined" color="primary" v-model="formData.password"/>
                <v-btn type="submit" variant="outlined" color="primary">Sign In</v-btn>
            </v-form>
        </v-card>
</template>

<script setup>
    import { ref } from 'vue'
    import axios from 'axios'
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';

    const router = useRouter()
    const store = useStore()

    const formData = ref({
        username: '',
        password: ''
    })

    const signUp = async () => {
        try {
            const response  = await axios.post('http://127.0.0.1:8000/api/login', formData.value)
            const token = response.data.token;
            localStorage.setItem('auth-token', token)
            store.commit('setIsLoggedIn')
            router.push('/dashboard')
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
</script>