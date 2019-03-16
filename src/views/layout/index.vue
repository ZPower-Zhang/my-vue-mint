<template>
  <div class='main-container'>
    <section class='app-main'>
      <transition name='component-fade'>
        <keep-alive :include='cachedViews'>
          <router-view :key='key'></router-view>
        </keep-alive>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  name: 'layout',
  components: {},
  computed: {
    cachedViews () {
      return this.$store.state.tagsView.cachedViews;
    },
    key() {
      return 0;
    }
  }
};
</script>
