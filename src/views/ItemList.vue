<template>
  <div>
    <item v-for="item in itemList" :item="item" :key="item.url" />
  </div>
</template>
<script>
import Item from "@/components/Item";
export default {
  components: {
    Item
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
    }
  }
}
</script>
