<template>
  <q-page class="q-pa-sm">
    <q-list padding v-if="todosDates.length > 0">
      <div v-for="todoDate in todosDates" :key="todoDate">
        <q-item-label header>{{ transformDate(todoDate) }}</q-item-label>
        <TodoItem
          v-for="todo in todosByDate(todoDate)"
          :key="todo.id"
          :todo="todo"
          @complete="updateCompleted(todo.id)"
          @delete="deleteTodoById(todo.id)"
          @edit="showEditTodoById(todo.id)"
        />

        <q-separator inset spaced />
      </div>
    </q-list>
    <q-list padding v-else>
      <q-item-label class="text-h4 text-center">
        {{ $t('noTodos') }}
      </q-item-label>
    </q-list>
    <div class="fixed-bottom q-mb-md q-mr-md text-right">
      <q-btn
        class="q-mt-md"
        color="primary"
        icon="add"
        round
        size="1.3em"
        @click="showAddTodo()"
      />
    </div>
    <q-dialog v-model="showAddTodoDialog" persistent>
      <q-card style="max-width: 350px; min-width: 300px">
        <q-card-section>
          <div class="text-h5 text-center">{{ $t('newTodo') }}</div>
        </q-card-section>
        <q-form @submit="addTodo()">
          <q-card-section>
            <q-input
              v-model="newTodo.title"
              type="text"
              :label="$t('todoName')"
              :rules="[(val) => val.length > 0 || $t('fieldRequired')]"
            >
              <template v-slot:prepend>
                <q-icon name="edit" />
              </template>
            </q-input>
            <!-- date picker -->
            <q-input
              v-model="newTodo.date"
              type="date"
              mask="####-##-##"
              lazy-rules
              :label="$t('date')"
              :rules="[(val) => val.length === 10 || $t('invalidDate')]"
            >
              <template v-slot:prepend>
                <q-icon name="event" />
              </template>
            </q-input>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              :label="$t('cancel')"
              color="negative"
              flat
              @click="showAddTodoDialog = false"
            />
            <q-btn :label="$t('add')" color="primary" flat type="submit" />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
    <q-dialog v-model="showEditTodoDialog" persistent>
      <q-card style="max-width: 350px; min-width: 300px">
        <q-card-section>
          <div class="text-h5 text-center">{{ $t('modify') }}</div>
        </q-card-section>
        <q-form @submit="modifyTodo()">
          <q-card-section>
            <q-input
              v-model="todoToModify.title"
              type="text"
              :label="$t('todoName')"
              :rules="[(val) => val.length > 0 || $t('fieldRequired')]"
            >
              <template v-slot:prepend>
                <q-icon name="edit" />
              </template>
            </q-input>
            <!-- date picker -->
            <q-input
              v-model="todoToModify.date"
              type="date"
              mask="####-##-##"
              lazy-rules
              :label="$t('date')"
              :rules="[(val) => val.length === 10 || $t('invalidDate')]"
            >
              <template v-slot:prepend>
                <q-icon name="event" />
              </template>
            </q-input>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              :label="$t('cancel')"
              color="negative"
              flat
              @click="showEditTodoDialog = false"
            />
            <q-btn :label="$t('modify')" color="primary" flat type="submit" />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
    <LoadingComponent :loading="loading" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoItem from 'src/components/TodoItem.vue';
import LoadingComponent from 'src/components/LoadingComponent.vue';
import { api } from 'src/boot/axios';

interface Todo {
  id: number;
  title: string;
  date: string;
  created_at: string;
  user_id: number;
  completed: number;
}

export default defineComponent({
  name: 'TodoPage',
  components: {
    TodoItem,
    LoadingComponent,
  },
  data() {
    return {
      showAddTodoDialog: false,
      showEditTodoDialog: false,
      newTodo: {
        title: '',
        date: '',
      },
      todoToModify: {} as Todo,
      todos: [] as Todo[],
      loading: false,
    };
  },
  mounted() {
    this.getTodos();
  },
  methods: {
    addTodo() {
      if (this.newTodo.title.length === 0) return;
      if (this.newTodo.date.length !== 10) return;
      api
        .post('/todo', {
          title: this.newTodo.title,
          date: this.newTodo.date,
        })
        .then((res) => {
          this.todos.push(res.data.todo as Todo);
          this.showAddTodoDialog = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showAddTodo() {
      this.newTodo.title = '';
      this.newTodo.date = '';
      this.showAddTodoDialog = true;
    },
    getTodos() {
      this.loading = true;
      api
        .get('/todos')
        .then((res) => {
          this.todos = res.data.todos as Todo[];
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    todosByDate(date: string) {
      return this.todos.filter((todo) => todo.date === date);
    },
    updateCompleted(id: number) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (!todo) return;
      todo.completed = todo.completed === 0 ? 1 : 0;
      api
        .put(`/todo/${id}`, {
          ...todo,
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteTodoById(id: number) {
      api
        .delete(`/todo/${id}`)
        .then(() => {
          this.todos = this.todos.filter((todo) => todo.id !== id);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showEditTodoById(id: number) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (!todo) return;
      this.todoToModify = { ...todo };
      this.showEditTodoDialog = true;
    },
    modifyTodo() {
      if (this.todoToModify.title.length === 0) return;
      if (this.todoToModify.date.length !== 10) return;
      api
        .put(`/todo/${this.todoToModify.id}`, {
          ...this.todoToModify,
        })
        .then(() => {
          this.todos = this.todos.map((todo) => {
            if (todo.id === this.todoToModify.id) {
              return this.todoToModify;
            }
            return todo;
          });
          this.todoToModify = {} as Todo;
          this.showEditTodoDialog = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    todosDates() {
      const dates = this.todos.map((todo) => todo.date);
      // remove duplicates and order by date
      return dates
        .filter((date, index) => dates.indexOf(date) === index)
        .sort((a, b) => {
          if (a > b) return 1;
          if (a < b) return -1;
          return 0;
        });
    },
    transformDate() {
      return (date: string) => {
        const [year, month, day] = date.split('-');
        return `${day}-${month}-${year}`;
      };
    },
  },
});
</script>
