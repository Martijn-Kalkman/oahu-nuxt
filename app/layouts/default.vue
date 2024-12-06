<template>
  <div class="h-screen flex flex-col bg-slate-200 antialiased font-sans">
    <Navbar />

    <main class="flex-grow mx-auto w-full p-4">
      <slot />
    </main>

    <Footer />
  </div>
</template>
