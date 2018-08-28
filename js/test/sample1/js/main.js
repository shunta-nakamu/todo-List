(function () {
    'use strict'

    var vm = new Vue({
        el: '#app',
        data: {
            newItem: '',
            newMemo: '',
            time : 10,
            todos: []
            
        },
        watch: {
            todos: {
                handler: function () {
                    localStorage.setItem('todos', JSON.stringify(this.todos));
                },
                deep: true
            }
        },

        mounted: function () {
            this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        }
        ,
        methods: {
            addItem: function () {
                if (this.newItem === '') {
                    alert('空の入力はできません');
                    return;
                }
                if(this.newMemo == ''){
                    if(confirm('メモの入力がありません。そのまま送信しますか？')){

                        var hiduke = new Date();
                        var item = {
                            type: this.newItem,
                            isDone: false,
                            Hour : hiduke.getHours(),
                            Minute : hiduke.getMinutes(),
                            workingTime: this.time,
                            memo: this.newMemo
                        };
        
                        this.todos.push(item);
                        this.newItem = '';
                        this.newMemo = '';
                    }
                }
                else{
                    var hiduke = new Date();
                    var item = {
                        type: this.newItem,
                        isDone: false,
                        Hour : hiduke.getHours(),
                        Minute : hiduke.getMinutes(),
                        workingTime: this.time,
                        memo: this.newMemo
                    };
    
                    this.todos.push(item);
                    this.newItem = '';
                    this.newMemo = '';
                }
            },
            deleteItem: function (index) {
                if (confirm("削除しますか?")) {
                    this.todos.splice(index, 1);
                }
                else {
                    return;
                }
            },
            purge: function () {
                if (confirm("チェックのついた項目をすべて削除しますか?")) {
                    this.todos = this.todos.filter(function (todo) {
                        return !todo.isDone;
                    });
                }
            }
        },

        computed : {
            remaining : function(){
                var items = this.todos.filter(function(todo){
                    return !todo.isDone;
                });
                return items.length;
            }
        }
    });
})();