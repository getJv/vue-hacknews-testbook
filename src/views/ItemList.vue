<template>
  <div>
    <ProgressBar/>
    <item v-for="item in itemList" :item="item" :key="item.url" />
  </div>
</template>

<script>
import Item from "@/components/Item";
import ProgressBar from "@/components/ProgressBar";
export default {
  components: {
    Item,
    ProgressBar
  },
  data() {
    return {
      itemList: [
        {
          url: "https://terra.com.br",
          author: "Jhonatan Morais",
          score: 10,
          title: "Site de notícias bobas"
        },
        {
          url: "https://www.cade.com.br",
          author: "Jhonatan Morais",
          score: 1000,
          title: "Saudoso site de Buscas"
        }
      ]
    };
  }
};
</script>