<template></template>

<script>
export default {
  name: 'Logout',
  created () {
    delete localStorage.token
    this.$store.dispatch('logout')
    this.$store.dispatch('unloadAutoescuela') //Al desloguearnos quitamos la autoescuela por defecto
    
    // Oculto el panel lateral al hacer login/registro
    this.toggleBodyClass('addClass', 'sidebar-collapse');
    //this.toggleBodyClass('removeClass', 'sidebar-mini');
    
    this.$router.push('/')
  },
  methods: {
    toggleBodyClass(addRemoveClass, className) {
      const el = document.body;

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  }
}
</script>