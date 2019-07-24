<template>
  <div>
    Componente do item
    <ul>
        <li>{{item.title}}</li>
        <li>{{item.url}}</li>
        <li>{{item.score}}</li>
        <li>{{item.author}}</li> 
    </ul>
  </div>
</template>
<script>
export default {
    props:{
        item:{
            required: true,
            type: Object
        }
    }
}
</script>


