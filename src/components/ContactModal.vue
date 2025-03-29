<template>
    <div class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div data-aos="fade-down" class="bg-white p-6 rounded-2xl w-96 relative">
            <button @click="$emit('close')" class="absolute cursor-pointer top-3 right-4 text-black text-2xl">×</button>
            <h3 class="text-lg font-bold mb-4">Entrar em Contato</h3>
            <h2 class="text-md font-bold mb-1">{{props.produto}}</h2>
            <h2 class="text-md font-bold mb-4">R$ {{props.price}}</h2>

            <div v-if="status === 'success'" class="text-green-700 font-medium mb-4">
                ✔ Email enviado com sucesso!
            </div>

            <form @submit.prevent="handleSubmit" v-if="status !== 'success'">
                <div class="mb-3 font-medium">
                    <label class="block text-sm mb-1">Nome</label>
                    <input v-model="form.name" type="text" class="w-full border p-2 rounded" required />
                </div>

                <div class="mb-3 font-medium">
                    <label class="block text-sm mb-1">E-mail</label>
                    <input v-model="form.email" type="email" class="w-full border p-2 rounded" required />
                </div>

                <div class="mb-3 font-medium">
                    <label class="block text-sm mb-1">Mensagem</label>
                    <textarea v-model="form.description" class="w-full border p-2 rounded" rows="3" required></textarea>
                </div>

                <button type="submit"
                    class="w-full cursor-pointer bg-[#010101] text-white py-2 rounded hover:bg-[#0f0f0f] transition font-medium">
                    Enviar
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import emailjs from "emailjs-com";

const emit = defineEmits(["close"]);

const props = defineProps({
    produto: { type: String, required: true },
    price: { type: String, required: true },
});

const form = ref({
    name: "",
    email: "",
    description: "",
});

const status = ref("");

onMounted(() => {
    document.body.style.overflow = 'hidden';
});

onBeforeUnmount(() => {
    document.body.style.overflow = 'auto';
});

const handleSubmit = () => {
    const templateParams = {
        from_name: form.value.name,
        from_email: form.value.email,
        message: form.value.description,
        product_name: props.produto,
        preco_product: props.price,
    };

    const data = {
        lib_version: "3.2.0",
        user_id: "2nBIAHqp5oHk8VW53",
        service_id: "service_q3t5eph",
        template_id: "template_ulad9lp",
        template_params: templateParams
    };

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((result) => {
            console.log("Email enviado com sucesso:", result);
            status.value = 'success';
            setTimeout(() => {
                emit("close");
            }, 3000);
        })
        .catch((error) => {
            console.error("Erro ao enviar e-mail:", error);
            status.value = 'success';
            setTimeout(() => {
                emit("close");
            }, 3000);
        });
};
</script>
