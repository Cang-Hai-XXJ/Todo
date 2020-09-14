<template>
  <div class="todoItem">
    <div class="title" @click="handleClickHint">
      <div :class="{'tick': todo.completed === true}"></div>
    </div>
    <div class="content" :class="{'hint': todo.completed === true}">{{todo.content}}</div>
    <div class="footer" @click="handleClickDelete">
      <div class="cross"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    handleClickDelete() {
      this.$emit('del', this.todo.id)
    },
    handleClickHint() {
      this.todo.completed = !this.todo.completed
    },
  },
}
</script>

<style scoped>
.todoItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-left: 20px;
  font-size: 22px;
  border-bottom: 1px solid rgb(204, 204, 204);
}
.title {
  width: 24px;
  height: 24px;
  border: 1px solid #666;
  border-radius: 20px;
  margin-right: 20px;
}
.content {
  /*单行文本溢出处理*/
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #000;
}
.footer {
  width: 30px;
  text-align: center;
  /* background-color: red; */
  margin-right: 10px;
}
.tick {
  display: inline-block;
  width: 10px;
  height: 1px;
  background: #666;
  line-height: 0;
  font-size: 0;
  vertical-align: middle;
  -webkit-transform: rotate(45deg);
}
.tick:after {
  content: '/';
  display: block;
  width: 20px;
  height: 1px;
  background: #666;
  -webkit-transform: rotate(-90deg) translateY(-50%) translateX(50%);
}
.cross {
  display: inline-block;
  width: 20px;
  height: 1px;
  background: #666;
  line-height: 0;
  font-size: 0;
  vertical-align: middle;
  -webkit-transform: rotate(45deg);
}
.cross:after {
  content: '/';
  display: block;
  width: 20px;
  height: 1px;
  background: #666;
  -webkit-transform: rotate(-90deg);
}
.hint {
  color: #999;
  text-decoration: line-through;
}
</style>