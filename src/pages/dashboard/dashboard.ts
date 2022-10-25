/* eslint-disable */
import {onMounted, onUnmounted} from 'vue';
import * as echarts from 'echarts';

export default ({
    name: 'Dashboad',
    setup() {
        const echart = echarts;

        onMounted(() => {
            initChart();
        });

        onUnmounted(() => {
            echart.dispose;
        });

        function initChart() {
            const command_edom = document.getElementById("myEcharts");
            command_edom.removeAttribute("_echarts_instance_");
            const chart = echart.init(document.getElementById('myEcharts'), 'vintage');
            chart.setOption({
                xAxis: {
                    type: 'category',
                    data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
                },
                tooltip: {
                    trigger: 'axis'
                },
                yAxis: {
                    type: 'value'
                },
                grid: {
                    left: '5%',
                    right: '1%',
                    bottom: '15%',
                    top:'5%'
                },
                series: [{
                    data: [820,932,901,934,1290,1330,1320,801,102,230,4321,4129],
                    type: 'bar',
                    stack: 'Total',
                    smooth: false
                }]
            });
            window.onresize = function() {
                chart.resize();
            };
        }
        return{
            echart,
            initChart
        };
    }
});
