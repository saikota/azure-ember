const taskService = require('../services/tasks');

module.exports = async function (context, req) {
    try {
        const response = taskService.deleteTask(req.params.id)
        context.res.status(200).json(response);
      } catch (error) {
        context.res.status(500).send(error);
    }
}

