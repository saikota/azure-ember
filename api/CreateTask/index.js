const todoService = require('../functions/services/tasks');

module.exports = async function (context, req) {
    try {
        const response = todoService.addToDo(context.req.body.task);
        context.res.status(200).json(response);
      } catch (error) {
        context.res.status(500).send(error);
    }
}