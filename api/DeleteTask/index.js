module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    module.exports = async function (context, req) {
        try {

            // need to see how to get the delete ID
            const response = todoService.deleteTask(req.body.id)
            context.res.status(200).json(response);
          } catch (error) {
            context.res.status(500).send(error);
        }
    }
}