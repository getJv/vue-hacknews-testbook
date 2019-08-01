<template>
  <div :class="{hidden:hidden}" :style="{'width': `${percent}%`}"></div>
</template>
<script>
export default {
  methods: {
    start() {
      this.hidden = false;
      this.percent = 0;
      this.timer = setInterval(() => {
        this.percent++;
        /* if (this.percent > 100) {
          this.finish();
        } */
      }, 100);
    },
    finish() {
      this.hidden = true;
      this.percent = 100;
      clearInterval(this.timer);
    }
  },
  data() {
    return {
      hidden: true,
      percent: 0
    };
  }
};
</script>
<style>
.hidden{
  display:none;
}
.barra{
  border: 2px solid red;
}
</style>


