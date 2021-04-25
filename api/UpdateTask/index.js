const taskService = require('../services/tasks');

module.exports = async function (context, req) {
  try {
    const response = taskService.editTask(context.req.body);
    context.res.status(200).json(response);
  } catch (error) {
    context.res.status(500).send(error);
  }
}
