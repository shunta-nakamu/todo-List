(function () {
    var vm = new Vue({
        el: '#app',
        data: {
            newItem: '',
            todos: [{
                title: '仕事1',
                isDone: false
            },
            {
                title: '仕事2',
                isDone: false
            },
            {
                title: '仕事3',
                isDone: true
            },]
        },
        methods: {
            addItem: function (e) {
                e.preventDefault();
                if (this.newItem == '') {
                    alert("空の入力はできません");
                    return;
                }
                var item = {
                    title: this.newItem,
                    isDone: false
                };
                this.todos.push(item);
                this.newItem = '';
            },
            deleteItem: function (index) {
                if (confirm('削除しますか?')) {
                    this.todos.splice(index, 1);
                }
            },
            purge: function () {
                if (confirm("チェックのついた項目を削除しますか?")) {
                    this.todos = this.todos.filter(function (todo) {
                        return !todo.isDone;
                    });
                }
                else {
                    return;
                }
            }
        },
        computed: {
            remaining: function () {
                var items = this.todos.filter(function (todo) {
                    return !todo.isDone;
                });
                return items.length;
            }
        }

    });
})();