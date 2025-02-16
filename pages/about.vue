<template>
  <div class="min-h-screen px-4 py-8 md:px-6 lg:px-8">
    <nav class="mb-8">
      <div class="text-sm text-gray-600">
        <NuxtLink to="/">Головна</NuxtLink>
        <span class="mx-2">/</span>
        <NuxtLink to="/about" class="text-gray-400">Про нас</NuxtLink>
      </div>
    </nav>

      <div class="max-w-7xl mx-auto space-y-16 md:space-y-24">
        <section class="grid md:grid-cols-2 gap-8 items-center">
          <div class="space-y-4">
            <h1 class="text-3xl md:text-4xl font-bold">Наша історія</h1>
            <p class="text-gray-700 leading-relaxed">
              Ми почали свій шлях у сфері м'ясної продукції з бажання принести на стіл кожного українця справжній смак
              якісного м'яса. Заснована як сімейний бізнес, наша компанія протягом багатьох років вдосконалювала
              рецептури та технології виробництва, не забуваючи про традиції. Від самого початку ми керуємося ідеєю, що
              якісне м'ясо – це основа для здорового харчування, а любов до своєї справи – запорука успіху.
            </p>
          </div>
          <div class="h-64 md:h-80 bg-gray-200 rounded-lg">
            <img src="https://placehold.co/640x640" alt="Наша історія" class="w-full h-full object-cover rounded-lg" />
          </div>
        </section>

        <section class="grid md:grid-cols-2 gap-8 items-center">
          <div class="h-64 md:h-80 bg-gray-200 rounded-lg md:order-1 order-2"></div>
          <div class="space-y-4 order-1 md:order-2">
            <h2 class="text-3xl md:text-4xl font-bold">Наші цінності</h2>
            <p class="text-gray-700 leading-relaxed">
              Наше головне завдання – гарантувати високу якість продукції, використовуючи тільки натуральні інгредієнти
              та суворий контроль на всіх етапах виробництва. Ми підтримуємо місцевих фермерів і обираємо
              постачальників, які дотримуються етичних стандартів вирощування тварин. Наші пріоритети – екологічність,
              свіжість та відповідальне ставлення до довкілля. Ми прагнемо того, щоб кожен клієнт відчув різницю,
              обираючи наші продукти.
            </p>
          </div>
        </section>

        <section class="grid md:grid-cols-2 gap-8 items-center">
          <div class="space-y-4">
            <h2 class="text-3xl md:text-4xl font-bold">Чому обирають нас</h2>
            <p class="text-gray-700 leading-relaxed">
              Кожен шматок нашої продукції створений з думкою про вас. Ми пропонуємо широкий вибір м'ясних виробів, які
              відповідають найвищим стандартам якості та безпеки. Наші клієнти обирають нас за поєднання традиційних
              смаків і сучасного підходу до виробництва. Ми впевнені, що задоволений клієнт – це наш найбільший успіх,
              тому постійно вдосконалюємо наш сервіс та продукцію.
            </p>
          </div>
          <div class="h-64 md:h-80 bg-gray-200 rounded-lg"></div>
        </section>
      </div>
    </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Про нас | Бабусни Гостинець',
  meta: [
    {
      name: 'description',
      content: 'Магазин м\'ясних продуктів'
    }
  ]
})

</script>

<style>

</style>