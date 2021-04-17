const todoService = require('../functions/services/tasks');

module.exports = async function (context, req) {
    try {
      const tasks = todoService.getTasks();
      context.res.status(200).json(tasks);
    } catch (error) {
      context.res.status(500).send(error);
    }
};
