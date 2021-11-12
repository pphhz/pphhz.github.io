<template>
  <div v-bind="fullScreenParentProps">
    <div style="line-height: 30px">
      <template>
        <span
          v-if="isShowButtons"
          style="margin-left: 8px; width: 150px; border-radius: 20px"
          >按F7 Json格式化</span
        > 
        <div class="sel01" v-if="languageChange">
          <select v-model="mode" @change="changeMode($event)">
            <option value="NONE">未选择</option>
            <option v-for="mode in modes" :key="mode.value" :value="mode.value">
              {{ mode.label }}
            </option>
          </select>
        </div>
        <button
          v-if="isShowCopy || isShowButtons"
          style="margin-left: 8px; width: 150px; border-radius: 20px"
          @click="copy"
          class="icon-copy"
          :data-clipboard-text="code"
        >
          复制</button
        >     
        <button
          v-if="isShowButtons"
          style="margin-left: 8px; width: 150px; border-radius: 20px"
          @click="downloadTxt"
        >
          下载txt文件</button
        >         
        <button
          v-if="isShowButtons"
          style="margin-left: 8px; width: 150px; border-radius: 20px"
          @click="downloadJson"
        >
          下载json文件</button
        >         
      </template>
    </div>
    <div class="code-editor-cust full-screen-child" :style="codeEditorStyle">
      <span
        @click="nullTipClick"
        class="null-tip"
        :class="{ 'null-tip-hidden': hasCode }"
        :style="nullTipStyle"
        >{{ placeholderShow }}
      </span>
      <textarea ref="textarea" :value="code"></textarea>
      <svg
        v-if="fullScreen || isShowButtons"
        @click="() => (fullCoder = !fullCoder)"
        t="1636102970793"
        style="
          z-index: 4;
          width: 20px;
          height: 20px;
          position: absolute;
          right: 10px;
          top: 10px;
        "
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2404"
        width="20"
        height="20"
      >
        <path
          d="M237.248 192H352a32 32 0 1 0 0-64H160a32 32 0 0 0-32 32v192a32 32 0 1 0 64 0v-114.752l137.36 137.36a32 32 0 1 0 45.232-45.264L237.248 192zM832 237.248V352a32 32 0 1 0 64 0V160a32 32 0 0 0-32-32H672a32 32 0 1 0 0 64h114.752l-137.36 137.36a32 32 0 1 0 45.264 45.232L832 237.248zM237.248 832H352a32 32 0 1 1 0 64H160a32 32 0 0 1-32-32V672a32 32 0 1 1 64 0v114.752l137.36-137.36a32 32 0 1 1 45.232 45.264L237.248 832zM832 786.752V672a32 32 0 1 1 64 0v192a32 32 0 0 1-32 32H672a32 32 0 1 1 0-64h114.752l-137.36-137.36a32 32 0 1 1 45.264-45.232L832 786.752z"
          p-id="2405"
          fill="#ffffff"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// 引入全局实例
import _CodeMirror from "codemirror";

// 核心样式
import "codemirror/lib/codemirror.css";
// 引入主题后还需要在 options 中指定主题才会生效 darcula  gruvbox-dark hopscotch  monokai
import "codemirror/theme/panda-syntax.css";
//格式化
import "@/utils/formatting.js";
// 提示css
import "codemirror/addon/hint/show-hint.css";
// 引入js，绑定Vim
import "codemirror/keymap/vim.js";
// 需要引入具体的语法高亮库才会有对应的语法高亮效果
// codemirror 官方其实支持通过 /addon/mode/loadmode.js 和 /mode/meta.js 来实现动态加载对应语法高亮库
// 但 vue 貌似没有无法在实例初始化后再动态加载对应 JS ，所以此处才把对应的 JS 提前引入
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/css/css.js";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/clike/clike.js";
import "codemirror/mode/markdown/markdown.js";
import "codemirror/mode/python/python.js";
import "codemirror/mode/r/r.js";
import "codemirror/mode/shell/shell.js";
import "codemirror/mode/sql/sql.js";
import "codemirror/mode/swift/swift.js";
import "codemirror/mode/vue/vue.js";
import { myAlert } from "@/utils/utils";
import Clipboard from "clipboard";
// 尝试获取全局实例
const CodeMirror = window.CodeMirror || _CodeMirror;

export default {
  name: "SimpleCodeEditor",
  props: {
    // 外部传入的内容，用于实现双向绑定
    value: {
      type: String,
      default: "",
      required: false,
    },
    // 外部传入的语法类型
    language: {
      type: String,
      default: null,
      required: false,
    },
    languageChange: {
      type: Boolean,
      default: false,
      required: false,
    },
    placeholder: {
      type: String,
      default: undefined,
      required: false,
    },
    // 显示行号
    lineNumbers: {
      type: Boolean,
      default: false,
      required: false,
    },
    // 是否显示全屏按钮
    fullScreen: {
      type: Boolean,
      default: false,
      required: false,
    },
    // 是否显示所有按钮
    isShowButtons: {
      type: Boolean,
      default: false,
      required: false,
    },
    // 是否显示Copy按钮
    isShowCopy: {
      type: Boolean,
      default: false,
      required: false,
    },
    codeEditorStyle: {
      type: Object,
      default: () => {},
    },
    // 全屏以后的z-index
    zIndex: {
      type: [Number, String],
      default: 999,
    },
  },
  data() {
    return {
      // 内部真实的内容
      code: "",
      hasCode: false,
      // 默认的语法类型
      mode: "javascript",
      // 编辑器实例
      coder: null,
      // 默认配置
      options: {
        // 缩进格式
        tabSize: 2,
        // 主题，对应主题库 JS 需要提前引入
        theme: "panda-syntax",
        line: true,
        // extraKeys: {'Ctrl': 'autocomplete'},//自定义快捷键
        hintOptions: {
          tables: {
            users: ["name", "score", "birthDate"],
            countries: ["name", "population", "size"],
          },
        },
      },
      // 支持切换的语法高亮类型，对应 JS 已经提前引入
      // 使用的是 MIME-TYPE ，不过作为前缀的 text/ 在后面指定时写死了
      modes: [
        {
          value: "css",
          label: "CSS",
        },
        {
          value: "javascript",
          label: "Javascript",
        },
        {
          value: "html",
          label: "XML/HTML",
        },
        {
          value: "x-java",
          label: "Java",
        },
        {
          value: "x-objectivec",
          label: "Objective-C",
        },
        {
          value: "x-python",
          label: "Python",
        },
        {
          value: "x-rsrc",
          label: "R",
        },
        {
          value: "x-sh",
          label: "Shell",
        },
        {
          value: "x-sql",
          label: "SQL",
        },
        {
          value: "x-swift",
          label: "Swift",
        },
        {
          value: "x-vue",
          label: "Vue",
        },
        {
          value: "markdown",
          label: "Markdown",
        },
      ],
      // code 编辑器 是否全屏
      fullCoder: false,
    };
  },
  watch: {
    value: {
      immediate: false,
      handler(value) {
        this._getCoder().then(() => {
          this.coder.setValue(value);
        });
      },
    },
    language: {
      immediate: true,
      handler(language) {
        this._getCoder().then(() => {
          // 尝试从父容器获取语法类型
          if (language) {
            // 获取具体的语法类型对象
            const modeObj = this._getLanguage(language);

            // 判断父容器传入的语法是否被支持
            if (modeObj) {
              this.mode = modeObj.label;
              this.coder.setOption("mode", `text/${modeObj.value}`);
            }
          }
        });
      },
    },
  },
  computed: {
    placeholderShow() {
      if (this.placeholder == null) {
        return ``;
        // return `请在此输入${this.language}代码`
      } else {
        return this.placeholder;
      }
    },
    nullTipStyle() {
      if (this.lineNumbers) {
        return { left: "36px" };
      } else {
        return { left: "12px" };
      }
    },
    // coder 配置
    coderOptions() {
      return {
        tabSize: this.options.tabSize,
        theme: this.options.theme,
        lineNumbers: this.lineNumbers,
        //  mode :  'application/json',
        line: true,
        //快捷键
        // extraKeys: {
        //   F7: function autoFormat(editor) {
        //     var totalLines = editor.lineCount();
        //     editor.autoFormatRange({ line: 0, ch: 0 }, { line: totalLines });
        //   }, //代码格式化
        // },
        hintOptions: this.options.hintOptions,
      };
    },
    fullScreenParentProps() {
      const props = {
        class: ["full-screen-parent", this.fullCoder ? "full-screen" : ""],
        style: {},
      };
      if (this.fullCoder) {
        props.style["z-index"] = this.zIndex;
      }
      return props;
    },
  },
  mounted() {
    // 初始化
    this._initialize();
  },
  // 2.2新增 在组件内定义 指定父组件调用时候的传值属性和事件类型 这个牛逼
  model: {
    prop: "value",
    event: "change",
  },
  methods: {
    copy() {
      var clipboard = new Clipboard(".icon-copy");
      clipboard.on("success", (e) => {
        myAlert("复制成功");
        clipboard.destroy(); // 释放内存
      });
      clipboard.on("error", (e) => {
        myAlert("不支持复制,该浏览器不支持自动复制");
        clipboard.destroy(); // 释放内存
      });
    },
    // 刷新渲染
    refresh() {
      this.coder.refresh();
    },
    _initialize() {
      // 初始化编辑器实例，传入需要被实例化的文本域对象和默认配置
      this.coder = CodeMirror.fromTextArea(
        this.$refs.textarea,
        this.coderOptions
      );

      // 编辑器赋值
      this.coder.setValue(this.value || this.code);
      if (this.value || this.code) {
        this.hasCode = true;
      } else {
        this.hasCode = false;
      }
      this.code = this.coder.getValue();
      // 支持双向绑定
      this.coder.on("change", (coder) => {
        this.code = coder.getValue();
        if (this.code) {
          this.hasCode = true;
        } else {
          this.hasCode = false;
        }
        if (this.$emit) {
          this.$emit("input", this.code);
        }
      });
      this.coder.on("focus", () => {
        this.hasCode = true;
      });
      this.coder.on("blur", () => {
        if (this.code) {
          this.hasCode = true;
        } else {
          this.hasCode = false;
        }
      });
      /* this.coder.on('cursorActivity',()=>{
            this.coder.showHint()
          }) */
    },
    downloadTxt() {
      // 也可以使用FileSaver依赖
      // let str = new Blob([this.code], {type: 'text/plain;charset=utf-8'});
      // // 注意这里要手动写上文件的后缀名
      // saveAs(str, `myCode.txt`);
      const element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(this.code)
      );
      element.setAttribute("download", "myCode");
      element.style.display = "none";
      element.click();
    },
    downloadJson() {
      const element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:application/json;charset=utf-8," + encodeURIComponent(this.code)
      );
      element.setAttribute("download", "myCode");
      element.style.display = "none";
      element.click();
    },
    getCodeContent() {
      return this.code;
    },
    setCodeContent(val) {
      this.coder.setValue(val);
    },
    // 获取当前语法类型
    _getLanguage(language) {
      // 在支持的语法类型列表中寻找传入的语法类型
      return this.modes.find((mode) => {
        // 所有的值都忽略大小写，方便比较
        const currentLanguage = language.toLowerCase();
        const currentLabel = mode.label.toLowerCase();
        const currentValue = mode.value.toLowerCase();

        // 由于真实值可能不规范，例如 java 的真实值是 x-java ，所以讲 value 和 label 同时和传入语法进行比较
        return (
          currentLabel === currentLanguage || currentValue === currentLanguage
        );
      });
    },
    _getCoder() {
      const _this = this;
      return new Promise((resolve) => {
        (function get() {
          if (_this.coder) {
            resolve(_this.coder);
          } else {
            setTimeout(get, 10);
          }
        })();
      });
    },
    // 更改模式
    changeMode(val) {
      // 修改编辑器的语法配置
      this.coder.setOption("mode", `text/${val}`);

      // 获取修改后的语法
      const label = this._getLanguage(val).label.toLowerCase();

      // 允许父容器通过以下函数监听当前的语法值
      this.$emit("language-change", label);
    },
    nullTipClick() {
      this.coder.focus();
    },
  },
};
</script>

<style lang="less">
.code-editor-cust{
    flex-grow:1;
    display:flex;
    position:relative;
    height:100%;
    .CodeMirror{
      flex-grow:1;
      z-index:1;
      .CodeMirror-code{
        line-height:19px;
      }

    }
    .code-mode-select{
      position:absolute;
      z-index:2;
      right:10px;
      top:10px;
      max-width:130px;
    }
    .CodeMirror{
      height: auto;
      min-height:100%;
    }
    .null-tip{
      position: absolute;
      top: 4px;
      left: 36px;
      z-index: 10;
      color: #ffffffc9;
      line-height: initial;
    }
    .null-tip-hidden{
      display: none;
    }
  }

  /* 全屏样式 */
  .full-screen-parent {
    position: relative;

    .full-screen-icon {
      opacity: 0;
      color: black;
      width: 20px;
      height: 20px;
      line-height: 24px;
      background-color: white;
      position: absolute;
      top: 2px;
      right: 2px;
      z-index: 9;
      cursor: pointer;
      transition: opacity 0.3s;
    }

    &:hover {
      .full-screen-icon {
        opacity: 1;

        &:hover {
          background-color: rgba(255, 255, 255, 0.88);
        }
      }
    }

    &.full-screen {
      position: fixed;
      top: 10px;
      left: 10px;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      padding: 10px;
      background-color: #f5f5f5;

      .full-screen-icon {
        top: 12px;
        right: 12px;
      }
      .full-screen-child {
        height: 100%;
        max-height: 100%;
        min-height: 100%;
      }
    }
    .CodeMirror-gutter-wrapper {
      left: -30px !important;
    }
    .full-screen-child {
      height: 300px;
      min-height: 120px;
      max-height: 520px;
    }
    .cm-s-panda-syntax {
      border: 1px solid #ccc;
    }

  }


.sel01 {
  display: inline-block;
  position: relative;
  z-index: 2;
  font-size: 15px;
  width: 150px;
  height: 20px;
  line-height: 20px;
  background: #fff;
  box-sizing: border-box;
  border-radius: 20px;
  margin-left: 4px;
}
.sel01:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 0.5rem solid transparent;
  border-top-color: #e92f26;
  top: 40%;
  right: 1rem;
  cursor: pointer;
  z-index: -2;
  margin-top: -1.25px;
}
.sel01 select {
  width: 150px;
  height: 20px;
  border-radius: 20px;
  border: 1px solid #ffcc33;
  background: transparent;
  background-image: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  vertical-align: top;
  padding-left: 1rem;
}
.sel01 select:focus {
  outline: none;
}

&::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

&::-webkit-scrollbar-thumb {
  background-color: #ccc;
  background-clip: padding-box;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  min-height: 28px;
}

&::-webkit-scrollbar-thumb:hover {
  background-color: #ccc;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
</style>
