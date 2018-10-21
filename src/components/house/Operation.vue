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
		},
		house:{
			type:Object
		}
	},
	methods:{
		fn(item){
			let type = ""
			if(item===1){
				type = "threeView"
			} else if(item===2){
				type = "firstView"
			} else if(item===3){
				type = "collectView"
			}
			this.$emit('operationClick', {house:this.house,type:type});
		}
	}
}
</script>

<style scoped>

.operation{
	font-size: 0;
}
.operation .item .bg{
	width: 1.2rem /* 24/20 */;
	height: 1.2rem /* 24/20 */;
	border-radius: 50%;
	background: #737373;
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
	background-image:url(./img/3d.png);
}

.operation .firstView .bg{
	background-image:url(./img/firstView.png);
}

.operation .collect .bg{
	background-image:url(./img/collect.png);
}

.operation .item{
	display: inline-block;
	width: 1.5rem /* 30/20 */;
	height: 1.5rem /* 30/20 */;
	color: #ffd161;
	position: relative;
	padding: .05rem /* 1/20 */;
}
</style>
