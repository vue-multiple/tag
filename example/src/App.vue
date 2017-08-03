<template>
  <div id="app">
    <demonstration
            tag="h2"
            title="Tag 标签"
            description="用于标记和选择。"
            :show-content="false">
    </demonstration>
    <demonstration
            title="基础用法"
            anchor="demo-code-title"
            :highlight="sourcecode1">
      <template slot="description">
      </template>
      <template slot="source">
        <div class="source">
          <vm-tag>标签一</vm-tag>
          <vm-tag type="gray">标签二</vm-tag>
          <vm-tag type="primary">标签三</vm-tag>
          <vm-tag type="success">标签四</vm-tag>
          <vm-tag type="warning">标签五</vm-tag>
          <vm-tag type="danger">标签六</vm-tag>
        </div>
      </template>
      <template slot="explanation">
        对你的代码进行描述
      </template>
    </demonstration>
    <demonstration
            title="可移除标签"
            anchor="demo-code-title"
            :highlight="sourcecode2">
      <template slot="description">

      </template>
      <template slot="source">
        <div class="source">
          <vm-tag
                  v-for="tag in tags"
                  :key="tag.name"
                  :closable="true"
                  :type="tag.type"
                  tagclass="tagclass"
          >
            {{tag.name}}
          </vm-tag>
        </div>
      </template>
      <template slot="explanation">
        设置closable属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置close-transition属性，它接受一个Boolean，true 为关闭。
      </template>
    </demonstration>
    <demonstration
            title="动态编辑标签"
            anchor="demo-code-title"
            :highlight="sourcecode3">
      <template slot="description">
        动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现
      </template>
      <template slot="source">
        <div class="source">
          <vm-tag
                  :key="tag"
                  v-for="tag in dynamicTags"
                  :closable="true"
                  :close-transition="false"
                  tagclass="tagclass"
                  @close="handleClose(tag)"
          >
            {{tag}}
          </vm-tag>
          <vm-input
                  v-model="inputValue"
                  ref="saveTagInput"
                  inputclass="newTagInput"
                  placeholder="+NewTag"
                  @enter="handleInputConfirm"
                  @blur="handleInputConfirm"
          >
          </vm-input>
        </div>
      </template>
      <template slot="explanation">
        实现添加删除
      </template>
    </demonstration>
    <div class="input-demo__item">
      <h3 id="attributes">
        <a href="./#attributes" aria-hidden="true" class="header-anchor">¶</a>
        Attributes
      </h3>
      <table class="table">
        <thead>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
        </thead>
        <tbody>
        <tr>
          <td>type</i></td>
          <td>主题</td>
          <td>string</td>
          <td>primary/gray/success/warning/danger</td>
          <td>—</td>
        </tr>
        <tr>
          <td>closable</i></td>
          <td>是否可关闭</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>close-transition</i></td>
          <td>是否禁用渐变动画</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>hit</i></td>
          <td>是否有边框描边</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>color</i></td>
          <td>背景色</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>tagclass</i></td>
          <td>标签类名</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="input-demo__item">
      <h3 id="event">
        <a href="./#event" aria-hidden="true" class="header-anchor">¶</a>
        Events
      </h3>
      <table class="table">
        <thead>
        <th>事件名称</th>
        <th>说明</th>
        <th>回调参数</th>
        </thead>
        <tbody>
        <tr>
          <td>close</td>
          <td>关闭tag时触发的事件</td>
          <td>—</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script type="es6">
    import {sourcecode1, sourcecode2, sourcecode3, sourcecode4} from './template'
  export default {
      data() {
          return {
              tags: [
                  { name: '标签一', type: '' },
                  { name: '标签二', type: 'gray' },
                  { name: '标签三', type: 'primary' },
                  { name: '标签四', type: 'success' },
                  { name: '标签五', type: 'warning' },
                  { name: '标签六', type: 'danger' }
              ],
              dynamicTags: ['标签一', '标签二', '标签三'],
              inputValue: '',
              sourcecode1,
              sourcecode2,
              sourcecode3,
          };
      },
      methods: {
          handleClose(tag) {
              this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
          },

          handleInputConfirm() {
              let inputValue = this.inputValue;
              if (inputValue) {
                  this.dynamicTags.push(inputValue);
              }
              this.inputValue = '';
          }
      }
  }
</script>

<style lang="less" type="text/less" rel="stylesheet/less">
  #app {
    margin: 60px auto;
  }

  .newTagInput{
    width: 72px;
    height: 24px;
    font-size: 12px;
  }
  .newTagInput::placeholder{
    color: #666;
  }
  .tagclass +{
    margin-right: 10px;
  }
  .input-demo__item {
    width: 1000px;
    margin: 0 auto;
    h2, h3 {
      font-weight: 400;
      color: #1f2f3d;
    }

    h2 {
      font-size: 28px;
      margin: 0
    }

    h3 {
      font-size: 22px;
      margin: 45px 0 15px;
    }

    h3, h2 {

      &
      :hover {

        a {
          opacity: .4;
        }

      }
      a {
        float: left;
        margin-left: -20px;
        opacity: 0;
        cursor: pointer;
        color: #4078c0;
        text-decoration: none;

        &
        :hover {
          opacity: .4;
        }

      }
    }
    p {
      font-size: 14px;
      color: #5e6d82;
      line-height: 1.5em;

      a {
        color: #2d8cf0;
        background: 0 0;
        text-decoration: none;
        outline: 0;
        cursor: pointer;
        transition: color .2s ease;

        &
        :hover {
          color: #57a3f3;
        }

      }
    }
    .new {
      font-style: normal;
      color: #FF4949;

      code {
        background-color: #FF4949 !important;
        color: #fff !important;
      }

    }
    .table {
      border-collapse: collapse;
      width: 100%;
      background-color: #fff;
      color: #5e6d82;
      font-size: 14px;
      margin-bottom: 45px;
      line-height: 1.5em;

      th {
        text-align: left;
        border-top: 1px solid #eaeefb;
        background-color: #eff2f7;
        white-space: nowrap;
      }

      th, td {
        border-bottom: 1px solid #eaeefb;
        padding: 10px;
        max-width: 250px;
      }

    }
  }
</style>