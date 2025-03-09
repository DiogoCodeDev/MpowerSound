<script setup>
import SupportHeader from "../components/SupportHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import { reactive } from "vue";

const form = reactive({
    subject: "",
    name: "",
    phone: "",
    message: "",
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
        value = `(${value}`;
    }
    form.phone = value;
};

const submitForm = () => {
    alert("Formulário enviado com sucesso!");
    console.log("Dados enviados:", form);
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
                <h2 data-aos="fade-up" data-aos-delay="200" class="text-black text-base lg:text-sm pb-10 ml-4"> Bem-vindo
                    à Central de Atendimento da MpowerSound! <br class="block lg:hidden">
                    <br class="block lg:hidden"> Estamos aqui para ajudar você com qualquer dúvida, suporte técnico ou
                    informações sobre nossos serviços.
                </h2>
                <div loading="lazy" data-aos="fade-up" data-aos-delay="300" class="py-2 flex mb-4 md:mb-1 px-4">
                    <img src="../assets/img/icons/headset.webp" alt="Ícone atendimento telefone" class="h-7 lg:h-8 lg:-ml-0.5 mt-1"/>
                    <p class="text-[0.8rem] md:mt-2 text-black ml-4 lg:ml-3"> Resuma seu caso em até <bold class="font-bold">300
                            caracteres</bold> e responderemos o quanto antes. </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="400" class="py-2 flex mb-4 md:mb-1 px-4">
                    <img src="../assets/img/icons/x.webp" alt="Ícone não é permitido" class="h-6 mt-1" loading="lazy"/>
                    <p class="text-[0.8rem] md:mt-1 text-black ml-4"> Qualquer e-mail com assunto não relacionado aos
                        temas
                        disponíveis será <bold class="font-bold">desconsiderado.</bold>
                    </p>
                </div>
                <div loading="lazy" data-aos="fade-up" data-aos-delay="500"  class="py-2 flex mb-4 md:mb-1 px-4">
                    <img src="../assets/img/icons/help.webp" alt="Ícone shake hands" class="h-7 mt-1 -ml-1"/>
                    <p class="text-[0.8rem] md:mt-2 text-black ml-3 mt-1 lg:mt-1"> Previsão de resposta dentro de <bold
                            class="font-bold">24 horas!</bold>
                    </p>
                </div>
            </div>

            <div  data-aos="zoom-in" class="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mb-24 mt-12">
                <h2 class="text-xl text-black font-bold text-center mb-8 uppercase">Formulário de Contato</h2>

                <form @submit.prevent="submitForm" class="space-y-4">
                    <div>
                        <label for="subject" class="block mb-2 text-black font-medium">Assunto:</label>
                        <input id="subject" type="text" v-model="form.subject"
                            class="w-full text-black p-2 outline-none border-b border-black" placeholder="Seu assunto"
                            maxlength="15" required />
                    </div>

                    <div>
                        <label for="name" class="block mb-2 text-black font-medium">Nome:</label>
                        <input id="name" type="text" v-model="form.name"
                            class="w-full text-black p-2 outline-none border-b border-black" placeholder="Seu nome"
                            required />
                    </div>

                    <div>
                        <label for="phone" class="block mb-2 text-black font-medium">Celular:</label>
                        <input id="phone" type="text" v-model="form.phone"
                            class="w-full text-black p-2 outline-none border-b border-black"
                            placeholder="(99) 99999-9999" maxlength="15" @input="formatPhone" required />
                    </div>

                    <div>
                        <label for="message" class="block mb-2 text-black font-medium">Mensagem:</label>
                        <textarea id="message" v-model="form.message" maxlength="300" rows="4"
                            class="w-full text-black p-2 outline-none border-b border-black"
                            placeholder="Digite sua mensagem..."></textarea>
                        <small class="block text-gray-500 text-right">{{ form.message.length }}/300 caracteres</small>
                    </div>

                    <button type="submit"
                        class="w-full bg-neutral-900 font-bold text-white p-3 rounded-md hover:bg-black cursor-pointer transition">
                        Enviar
                    </button>
                </form>
            </div>
        </div>

        <AppFooter />
    </div>
</template>

<style scoped></style>
