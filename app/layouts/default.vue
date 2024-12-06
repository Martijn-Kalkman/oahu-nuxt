<template>
<!--  <div class="h-screen flex flex-col bg-slate-200 antialiased font-sans">-->
  <div>
    <Navbar />

    <main class="flex-grow mx-auto w-full md:w-4/6 p-4">
      <slot />
    </main>

    <Footer />
  </div>
</template>
