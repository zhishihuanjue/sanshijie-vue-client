<template>
	<div class="operation">
		<div
				v-for="(item,index) in operation"
				:key="index"
        class="item"
        @click.stop.prevent="fn(item)"
				:class="{'_3d':item==1,firstView:item==2,collect:item==3}"
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
	width: 1.3rem /* 26/20 */;
}

.operation .item .bg{
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background: #f0f0f0;
  background-repeat:no-repeat; 
  background-size:80% 80%;
  -moz-background-size:80% 80%;
	background-position:center center;
	position: absolute;
	left: 3px;
	top: 3px;
	z-index: -1;
}

.operation ._3d .bg{
		background-image:url(3d.png);
}

.operation .firstView .bg{
	background-image:url(firstView.png);
}

.operation .collect .bg{
	background-image:url(collect.png);
}

.operation .item{
	display: inline-block;
	width: 1.3rem /* 26/20 */;
	height: 1.3rem /* 26/20 */;
	font-size: 1.3rem /* 26/20 */;
	color: #ffd161;
	position: relative;
}
</style>
