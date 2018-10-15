<template>
	<div class="operation">
		<div
				v-for="(item,index) in operation"
				:key="index"
        class="cart-add icon-add_circle"
        @click.stop.prevent="fn(item)"
        >
        <i class="bg"></i>
      </div>
	</div>
</template>

<script>
export default {
    props:{
      operation:{
        type:Array
      }
    },
		methods:{
			fn(item){
				console.log(item)
			}
    }
}
</script>

<style>

.operation{
	font-size: 0;
	width: 26px;
}

.operation .cart-add .bg{
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background: black;
	position: absolute;
	left: 3px;
	top: 3px;
	z-index: -1;
}

.operation .cart-add{
	display: inline-block;
	width: 26px;
	height: 26px;
	font-size: 26px;
	color: #ffd161;
	position: relative;
}
</style>
