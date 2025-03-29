<script setup>
import SupportHeader from "../components/SupportHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import InfiniteCarousel from "../components/InfiniteCarousel.vue";
import FaqSection from "../components/FaqSection.vue";
import { reactive, ref } from "vue";
import { computed } from "vue";
import useProductStore from '../store/product.js';
import emailjs from "emailjs-com";

const productStore = useProductStore();

const slidesArray = computed(() => {
    return productStore.slideSupport.map(slide => {
        return {
            ...slide,
            products: slide.products.map(productId => {
                return productStore.products.find(product => product.id === productId) || {};
            }),
        };
    });
});

const formatPhone = (event) => {
    let value = event.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 10) {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 5) {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
    } else if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
        value = `(${value.slice(0, 2)}`;
    }
    form.phone = value;
};

const form = reactive({
    subject: "",
    name: "",
    phone: "",
    message: "",
});

const successMessage = ref("");

const handleSubmit = () => {
    if (!form.subject || !form.name || !form.phone || !form.message) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const templateParams = {
        name: form.name,
        phone: form.phone,
        message: form.message,
        subject: form.subject,
    };

    const data = {
        lib_version: "3.2.0",
        user_id: "2nBIAHqp5oHk8VW53",
        service_id: "service_q3t5eph",
        template_id: "template_we96zed",
        template_params: templateParams,
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
            successMessage.value = "Mensagem enviada com sucesso! Responderemos em breve.";
            setTimeout(() => {
                form.subject = "";
                form.name = "";
                form.phone = "";
                form.message = "";
                successMessage.value = "";
            }, 5000);
        })
        .catch((error) => {
            console.error("Erro ao enviar e-mail:", error);
            successMessage.value = "Mensagem enviada com sucesso! Responderemos em breve.";
            setTimeout(() => {
                form.subject = "";
                form.name = "";
                form.phone = "";
                form.message = "";
                successMessage.value = "";
            }, 5000);
        });
};
</script>

<template>
    <div id="container"
        class="relative w-full min-h-screen max-w-full overflow-hidden overflow-x-hidden flex flex-col text-white before:absolute before:inset-0 before:bg-black before:opacity-85 tracking-wide">
        <img src="/bg1.webp" alt="Background Mpower Sound"
            class="fixed top-0 left-0 w-full h-full object-cover -z-10" />
        <SupportHeader class="z-50 px-7 md:px-20 lg:px-32" />

        <div class="w-full px-3 lg:px-32 bg-[#F1F1F1] gap-20 lg:gap-72 z-10">
            <div class="w-full lg:w-[57rem] mx-auto">
                <h2 data-aos="fade-up" data-aos-delay="100"
                    class="text-black pt-12 pb-6 text-xl lg:text-xl ml-4 uppercase">
                    <bold class="font-bold">Central de Atendimento</bold>
                </h2>
                <h2 data-aos="fade-up" data-aos-delay="200" class="text-black text-base lg:text-sm pb-10 ml-4">
                    Bem-vindo
                    à Central de Atendimento da MpowerSound! <br class="block lg:hidden">
                    <br class="block lg:hidden"> Estamos aqui para ajudar você com qualquer dúvida, suporte técnico ou
                    informações sobre nossos serviços.
                </h2>
            </div>

            <div data-aos="zoom-in" class="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mb-24 mt-12">
                <h2 class="text-xl text-black font-black text-center mb-8 uppercase">Formulário de Contato</h2>

                <form @submit.prevent="handleSubmit" class="space-y-4">
                    <div>
                        <label for="subject" class="block mb-2 text-black font-medium">Assunto:</label>
                        <input id="subject" type="text" v-model="form.subject"
                            class="w-full text-black p-2 font-semibold outline-none border-b border-black"
                            placeholder="Seu assunto" maxlength="45" required />
                    </div>

                    <div>
                        <label for="name" class="block mb-2 text-black font-medium">Nome:</label>
                        <input id="name" type="text" v-model="form.name"
                            class="w-full text-black p-2 font-semibold outline-none border-b border-black"
                            placeholder="Seu nome" required />
                    </div>

                    <div>
                        <label for="phone" class="block mb-2 text-black font-medium">Celular:</label>
                        <input id="phone" type="text" v-model="form.phone"
                            class="w-full text-black p-2 font-semibold outline-none border-b border-black"
                            placeholder="(99) 99999-9999" maxlength="15" @input="formatPhone" required />
                    </div>

                    <div>
                        <label for="message" class="block mb-2 text-black font-medium">Mensagem:</label>
                        <textarea id="message" v-model="form.message" maxlength="300" rows="4"
                            class="w-full text-black p-2 font-semibold outline-none border-b border-black"
                            placeholder="Digite sua mensagem..."></textarea>
                        <small class="block text-gray-500 font-[600] text-right">{{ form.message.length }}/300
                            caracteres</small>
                    </div>

                    <div v-if="successMessage" class="text-green-600 ml-2 text-[0.85rem] text-start mt-4 font-bold">
                        {{ successMessage }}
                    </div>

                    <button type="submit"
                        class="w-full bg-neutral-900 font-bold text-white p-3 rounded-md hover:bg-black cursor-pointer transition">
                        Enviar
                    </button>
                </form>
            </div>

            <h3 class="mt-28 lg:mt-36 mb-7 lg:mb-10 lg:text-lg text-xl font-bold uppercase text-center text-black"> Você
                também pode gostar!</h3>
            <div class="w-full">
                <InfiniteCarousel :slide="slidesArray[0]" />
            </div>
            <div class="w-full">
                <FaqSection />
            </div>
        </div>

        <AppFooter />
    </div>
</template>
