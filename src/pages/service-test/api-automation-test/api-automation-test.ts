/* eslint-disable */
import {defineComponent, onMounted, onUnmounted} from 'vue';
import { Delete, Edit, Search, Plus, Upload } from '@element-plus/icons-vue'
export default defineComponent({
    name: 'ApiAutomationTest',
    setup(){
        const tableData = [
            {
                project: '项目A',
                task: '正式环境接口监控',
                status: '成功',
                time_rule: '5min执行',
                utime: '2022:10:20',
                creater: 'Rafa Chen',
            },
            {
                project: '项目A',
                task: '正式环境接口监控',
                status: '成功',
                time_rule: '5min执行',
                utime: '2022:10:20',
                creater: 'Rafa Chen',
            },
            {
                project: '项目A',
                task: '正式环境接口监控',
                status: '成功',
                time_rule: '5min执行',
                utime: '2022:10:20',
                creater: 'Rafa Chen',
            }

        ];

        return{
            tableData,
            Search,
            Plus
        }
    }
});
