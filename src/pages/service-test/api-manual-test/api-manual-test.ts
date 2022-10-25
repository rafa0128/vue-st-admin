/* eslint-disable */
import Codemirror from "codemirror-editor-vue3";
// language
import "codemirror/mode/javascript/javascript.js";
import "codemirror/theme/dracula.css";
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
import { ref } from "vue";

export default {
  components: { Codemirror,VueJsonPretty },
  setup() {
    const code = ref(`{
    "data":{
        "list":[
            {
                "cover":"https://res.vdapi.com/avatar/2003",
                "creator_uid":2003,
                "ctime":1650524369,
                "id":259,
                "name":"电影222",
                "owner_uid":2003,
                "pid":0,
                "show_members":1,
                "size":0,
                "tpid":0,
                "type":"sdir",
                "utime":1650524369,
                "ver":""
            }
        ]
    },
    "status":1
}`);

    return {
      code,
      cmOptions: {
        mode: "text/javascript", // 语言模式
        theme: "dracula", // 主题
        lineNumbers: true, // 显示行号
        smartIndent: true, // 智能缩进
        indentUnit: 4, // 智能缩进单位为4个空格长度
        foldGutter: true, // 启用行槽中的代码折叠
        styleActiveLine: true, // 显示选中行的样式
      },
      onChange(val:any, cm:any) {},
    };
  },
};
