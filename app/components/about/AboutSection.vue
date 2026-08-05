<template>
  <section class="bg-surface-header" aria-labelledby="about-section-title">
    <div class="mx-auto max-w-7xl px-4 py-12">
      <!-- Верхняя часть -->
      <div class="grid items-center gap-12 lg:grid-cols-[18rem_1fr]">
        <img
          src="/images/about/main.png"
          alt="Аниме-персонаж"
          class="mx-auto w-full max-w-72 object-contain"
        />

        <div class="space-y-5 text-sm leading-7 text-text-primary">
          <p>
            Вы можете смотреть аниме на русском языке абсолютно бесплатно на сайте Jut-su.net. Наш
            ресурс предоставляет доступ к огромному выбору аниме, переведённому на русский язык, и
            позволяет наслаждаться этими увлекательными мультфильмами без каких-либо затрат.
          </p>

          <p>
            В XX веке на Востоке, а именно в Японии, возникло новое искусство мультипликации —
            аниме. Простота и лёгкость этого жанра позволяют зрителю погрузиться в необычные истории
            и познакомиться с яркими персонажами.
          </p>

          <p>
            Японская анимация отличается выразительным стилем рисования, разнообразием сюжетов и
            особой атмосферой. Поклонники следят за приключениями любимых героев, обсуждают новые
            серии и находят произведения на любой вкус.
          </p>

          <p>
            Сегодня
            <NuxtLink
              to="/tv-series"
              class="font-semibold text-accent-start transition-opacity hover:opacity-80"
            >
              аниме-сериалы
            </NuxtLink>
            становятся всё популярнее. Смотреть их можно онлайн, выбирая подходящий жанр, сезон или
            формат.
          </p>
        </div>
      </div>

      <!-- Нижняя часть -->
      <div class="mt-12">
        <div class="flex items-center gap-3">
          <Icon name="lucide:scan-text" class="text-accent-start" aria-hidden="true" size="24" />

          <h2 id="about-section-title" class="text-2xl font-bold tracking-tight">
            Только у нас аниме онлайн
          </h2>
        </div>

        <p class="mt-5 text-sm leading-7 text-text-primary">
          Здесь вас ждут разнообразные жанры, в которых вы сможете переживать вместе с героями
          моменты радости и влюблённости, романтики и невероятных приключений фантастических
          сериалов. Девочки и мальчики встретят изумительных сёдзё и сёнэн. Почитатели своеобразных
          направлений смогут наблюдать за их героями. Вы сможете найти аниме любого жанра и
          направления, включая
          <NuxtLink
            to="/genres/demons"
            class="font-semibold text-accent-start transition-opacity hover:opacity-80"
          >
            демонов и школу </NuxtLink
          >,
          <NuxtLink
            to="/genres/harem"
            class="font-semibold text-accent-start transition-opacity hover:opacity-80"
          >
            гарем и этти </NuxtLink
          >,
          <NuxtLink
            to="/genres/psychological"
            class="font-semibold text-accent-start transition-opacity hover:opacity-80"
          >
            психологическое и сверхъестественное </NuxtLink
          >. OVA, специальные выпуски и бонусные серии также могут стать частью просмотра.
        </p>
      </div>
    </div>
  </section>
</template>
