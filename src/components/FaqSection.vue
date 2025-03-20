<script setup>
import { ref, nextTick } from 'vue';

const faqList = ref([
    {
        category: 'Amplificadores',
        questions: [
            {
                question: 'Qual a potência dos amplificadores?',
                answer: 'A potência dos amplificadores varia de acordo com o modelo, indo de 50W a 500W RMS. Consulte as especificações do produto para mais detalhes.'
            },
            {
                question: 'Os amplificadores têm garantia?',
                answer: 'Sim, todos os nossos amplificadores possuem garantia de 12 meses contra defeitos de fabricação.'
            },
            {
                question: 'Os amplificadores são compatíveis com qualquer sistema de som?',
                answer: 'Nossos amplificadores são compatíveis com a maioria dos sistemas de som padrão. Consulte as especificações técnicas para detalhes de compatibilidade.'
            },
            {
                question: 'Os amplificadores possuem proteção contra superaquecimento?',
                answer: 'Sim, todos os nossos amplificadores possuem proteção térmica para evitar danos causados por superaquecimento.'
            }
        ]
    },
    {
        category: 'Compras',
        questions: [
            {
                question: 'Quais formas de pagamento são aceitas?',
                answer: 'Aceitamos cartões de crédito, débito, Pix e boleto bancário.'
            },
            {
                question: 'Posso parcelar minha compra?',
                answer: 'Sim, oferecemos parcelamento em até 12 vezes sem juros em compras acima de R$ 200,00.'
            },
            {
                question: 'Vocês oferecem desconto para pagamento à vista?',
                answer: 'Sim, oferecemos 10% de desconto para pagamentos via Pix ou boleto bancário.'
            }
        ]
    },
    {
        category: 'Reembolsos',
        questions: [
            {
                question: 'Como solicito um reembolso?',
                answer: 'Para solicitar um reembolso, entre em contato com nosso suporte pelo e-mail suporte@mpowersound.com com o número do pedido e o motivo da solicitação.'
            },
            {
                question: 'Qual o prazo para reembolsos?',
                answer: 'O prazo para processar reembolsos é de até 10 dias úteis após a aprovação da solicitação.'
            },
            {
                question: 'Quais produtos são elegíveis para reembolso?',
                answer: 'Produtos em perfeito estado, com embalagem original e dentro do prazo de 7 dias após o recebimento são elegíveis para reembolso.'
            },
            {
                question: 'Receberei o valor total em caso de reembolso?',
                answer: 'Sim, o valor total pago será reembolsado, exceto em casos de danos causados pelo cliente.'
            }
        ]
    }
]);

const activeIndex = ref(null);

const toggleAnswer = async (index) => {
    activeIndex.value = activeIndex.value === index ? null : index;
    await nextTick();
};

function beforeEnter(el) {
    el.style.height = '0';
    el.style.opacity = '0';
}

function enter(el) {
    el.offsetHeight;
    el.style.transition = 'height 0.3s ease, opacity 0.3s ease';
    el.style.height = el.scrollHeight + 'px';
    el.style.opacity = '1';
}

function leave(el) {
    el.style.transition = 'height 0.3s ease, opacity 0.3s ease';
    el.style.height = '0';
    el.style.opacity = '0';
}
</script>

<template>
    <div class="w-full pt-10 pb-16">
        <div v-for="(faq, index) in faqList" :key="index" class="lg:mb-6 mb-10 w-11/12 lg:w-10/12 mx-auto">
            <h5 data-aos="fade-up" class="text-xl lg:text-lg font-semibold text-black mb-6">• {{ faq.category }}</h5>
            <div data-aos="fade-up" v-for="(item, qIndex) in faq.questions" :key="qIndex"
                class="mb-3 shadow w-full mx-auto rounded-lg bg-white text-black">
                <button @click="toggleAnswer(`${index}-${qIndex}`)"
                    class="w-full text-left font-semibold cursor-pointer flex justify-between items-center p-5">
                    <span class="text-[0.85rem] lg:text-base font-semibold mr-4">{{ item.question }}</span>
                    <span
                        :class="['transition-transform duration-300', activeIndex === `${index}-${qIndex}` ? 'rotate-180' : 'rotate-0']">
                        ▼
                    </span>
                </button>
                <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
                    <div v-if="activeIndex === `${index}-${qIndex}`" class="overflow-hidden">
                        <h5 class="p-5 text-black font-[400] text-[0.85rem] lg:text-sm">{{ item.answer }}</h5>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<style scoped>
button {
    transition: all 0.3s ease;
}

.fade-enter-active,
.fade-leave-active {
    transition: height 0.3s ease, opacity 0.3s ease;
}
</style>
