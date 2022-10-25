/* eslint-disable */
import Codemirror from "codemirror-editor-vue3";
// language
import "codemirror/mode/javascript/javascript.js";
import "codemirror/theme/dracula.css";
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
import { ref } from "vue";
export default {
    components: { Codemirror: Codemirror, VueJsonPretty: VueJsonPretty },
    setup: function () {
        var code = ref("{\n    \"data\":{\n        \"list\":[\n            {\n                \"cover\":\"https://res.vdapi.com/avatar/2003\",\n                \"creator_uid\":2003,\n                \"ctime\":1650524369,\n                \"id\":259,\n                \"name\":\"\u7535\u5F71222\",\n                \"owner_uid\":2003,\n                \"pid\":0,\n                \"show_members\":1,\n                \"size\":0,\n                \"tpid\":0,\n                \"type\":\"sdir\",\n                \"utime\":1650524369,\n                \"ver\":\"\"\n            }\n        ]\n    },\n    \"status\":1\n}");
        return {
            code: code,
            cmOptions: {
                mode: "text/javascript",
                theme: "dracula",
                lineNumbers: true,
                smartIndent: true,
                indentUnit: 4,
                foldGutter: true,
                styleActiveLine: true, // 显示选中行的样式
            },
            onChange: function (val, cm) { },
        };
    },
};
//# sourceMappingURL=api-manual-test.js.map