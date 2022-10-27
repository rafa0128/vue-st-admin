/* eslint-disable */
import { defineComponent } from 'vue';
import { Search, Plus } from '@element-plus/icons-vue';
export default defineComponent({
    name: 'ApiAutomationTest',
    setup: function () {
        var tableData = [
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
        return {
            tableData: tableData,
            Search: Search,
            Plus: Plus
        };
    }
});
//# sourceMappingURL=api-automation-test.js.map