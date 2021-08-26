// 基于准备好的dom，初始化echarts实例
		        var myChart = echarts.init(document.getElementById('charts_left'));

option = {
	title: {
		text: '每笔交易的手续费用',
		// subtext: '纯属虚构',
		left: 'center'
	},
	tooltip: {
		trigger: 'item'
	},
	legend: {
		orient: 'vertical',
		left: 'left',
	},
	series: [
		{
			name: '交易比例分配',
			type: 'pie',
			radius: '50%',
			data: [
				{value: 3, name: '添加流动性'},
				{value: 12, name: '合约机制自动回购'},
				{value: 3, name: '营销钱包用来对接社区和热搜'},
				{value: 82, name: '交易的总币'}
			],
			emphasis: {
				itemStyle: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}
	]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
myChart.on('click',function(params){
	if(params.name=='Reflection to Holders'){
		alert(params.name);
	}
})
$(window).resize(function (){
	myChart.resize()
})
