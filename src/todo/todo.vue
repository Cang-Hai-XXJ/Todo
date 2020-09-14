<template>
  <div class="wrap">
    <div class="container">
      <header>所有任务</header>
      <input type="text" autofocus placeholder=" - ( ゜- ゜)つロ" @keyup.enter="addTodo" />
      <input type="text" v-show="filterTodos.length == 0" class="null" value="-- 暂无内容 --" readonly />
      <div class="item-container my-scrollbar">
        <Item :todo="todo" v-for="todo in filterTodos" :key="todo.id" @del="deleteTodo" />
      </div>
      <footer>
        <div class="left">你还有{{unCompletedTodosLength}}项task啦</div>
        <div class="center">
          <div
            class="btn"
            :class="{'active': filter === item.state}"
            @click="handleChangeState(item)"
            v-for="item in status"
            :key="item.state"
          >{{item.name}}</div>
        </div>
        <div class="right" @click="deleteAllCompletedTodos">清除所有完成项目</div>
      </footer>
    </div>
  </div>
</template>

<script>
import Item from './item.vue'
let id = 0
export default {
  components: {
    Item,
  },
  data() {
    return {
      todos: [],
      filter: 0,
      status: [
        {
          state: 0,
          name: '全部',
          isActive: false,
        },
        {
          state: 1,
          name: '待完成',
          isActive: false,
        },
        {
          state: 2,
          name: '已完成',
          isActive: false,
        },
      ],
    }
  },
  computed: {
    unCompletedTodosLength() {
      return this.todos.filter((todo) => !todo.completed).length
    },
    filterTodos() {
      if (this.filter == 0) {
        return this.todos
      }
      const isCompleted = this.filter == 2 ? true : false
      return this.todos.filter((todo) => todo.completed == isCompleted)
    },
  },
  methods: {
    deleteAllCompletedTodos() {
      this.todos = this.todos.filter((todo) => !todo.completed)
    },
    handleChangeState(item) {
      this.status.forEach((i) => {
        i.isActive = false
      })
      item.isActive = true
      // console.log('click' + val)
      this.filter = item.state
    },
    addTodo(e) {
      if (e.target.value.trim() === '') {
        return
      }
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false,
      })
      e.target.value = ''
      //如果在已完成页签添加todo，切换显示全部todo
      if (this.filter == 2) {
        this.filter = 0
      }
    },
    deleteTodo(id) {
      this.todos.splice(
        this.todos.findIndex((todo) => id === todo.id),
        1
      )
    },
  },
}
</script>

<style scoped>
.wrap {
  position: relative;
}
.item-container {
  max-height: 500px;
  overflow: auto;
}
header {
  padding: 10px 20px;
  font-size: 30px;
  color: #666;
  border-bottom: 1px solid rgb(204, 204, 204);
}
footer {
  padding: 10px 20px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
}
.center {
  display: flex;
  justify-content: space-between;
}
.btn {
  padding: 5px;
  margin: 0 10px;
  /*防止点击时父元素高度变化*/
  border: 2px solid whitesmoke;
}
.active {
  border: 2px solid #0084ff;
  border-radius: 11px;
}
.container {
  width: 55%;
  margin: auto;
  background-color: whitesmoke;
  box-shadow: black 5px 12px 17px;
  border-radius: 20px;
}
input {
  /*去除默认样式*/
  background: none;
  outline: none;
  border: none;
  /*单行文本溢出处理*/
  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
  color: #444;
  padding: 5px;
  margin-left: 20px;
  font-size: 22px;
  border-bottom: 1px solid rgb(204, 204, 204);
  width: 97%;
  height: 40px;
}
.null {
  text-align: center;
  color: #999;
}

.my-scrollbar::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.my-scrollbar::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background-color: skyblue;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
}
.my-scrollbar::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 10px;
}
</style>