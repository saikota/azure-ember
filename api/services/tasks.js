const data = {
    tasks:[
        {
          "id": 1,
          "name": "API mapping",
          "author": "skota",
          "isComplete": true
        },
        {
          "id": 2,
          "name": "Mirage API Data",
          "author": "skota",
          "isComplete": true
        },
        {
          "id": 3,
          "name": "Ember Fire",
          "author": "skota",
          "isComplete": false
        },
        {
          "id": 4,
          "name": "Ember Data",
          "author": "skota",
          "isComplete": false
        },
        {
          "id": 5,
          "name": "PWA",
          "author": "skota",
          "isComplete": false
        },
        {
          "id": 6,
          "name": "Integrate with Azure Functions",
          "author": "skota",
          "isComplete": true
        },
        {
          "id": 7,
          "name": "Rearrange and persist list",
          "author": "skota",
          "isComplete": false
        },
        {
          "id": 8,
          "name": "Create Task",
          "author": "skota",
          "isComplete": true
        },
        {
          "id": 9,
          "name": "Have Multiple Users",
          "author": "skota",
          "isComplete": false
        },
        {
          "id": 10,
          "name": "Have Authorization Support",
          "author": "skota",
          "isComplete": false
        },
        {
          "name": "Add Footer",
          "author": "skota",
          "id": 11
        },
        {
          "name": "Update a Task",
          "author": "skota",
          "id": 12
        },
        {
          "name": "Refresh the list once user submits data",
          "author": "skota",
          "id": 13
        },
        {
          "name": "Update Readme with json-server details",
          "author": "skota",
          "id": 14
        },
        {
          "name": "Publish using Azure functions ",
          "author": "skota",
          "id": 15
        },
        {
          "name": "Persist to Database using Azure",
          "author": "skota",
          "id": 16
        },
        {
          "name": "Add Authentication Layer usign Azure ADO",
          "author": "skota",
          "id": 17
        },
        {
          "name": "Add CORS security so that only a particular web domain can hit the api",
          "author": "skota",
          "id": 18
        }
      ]
};


module.exports = {
    getTasks: function() {
        return data.tasks;
    },
    addTask: function(task) {
        task.id = data.tasks.length + 1;
        data.tasks.push(task);
        return {
            message: "task added",
            tasks: data.tasks.length
        }
    },
    deleteTask: function(id) {
        data.tasks = data.tasks.filter(task => task.id != id)
        return {
            message: "task deleted",
            tasks: data.tasks.length
        }
    },
    editTask: function(taskObj) {
        data.tasks = data.tasks.map(task => {
            if (task.id === taskObj.id) {
              task = taskObj;
            }
            return task;
        });
        return {
            message: "task edited",
            tasks: data.tasks.length
        }
    }
}
