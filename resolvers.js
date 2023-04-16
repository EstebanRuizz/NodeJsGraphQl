const task = require("./models/task");
const Task = require("./models/task");

const resolvers = {
  Query: {
    hello: () => "Hello world",

    async getAllTask() {
      return await Task.find();
    },

    async getTask(_, arguments) {
      return await Task.findById(arguments.id);
    },
  },

  Mutation: {
    createTask: async (_, arguments) => {
      const { title, description } = arguments.task;
      const newTask = new Task({ title, description });
      await newTask.save();
      console.log(newTask);
      return newTask;
    },

    async deleteTask(_, { id }) {
      await Task.findByIdAndDelete(id);
      return "Task Deleted";
    },

    async updateTask(_, { task, id }) {
      return await Task.findByIdAndUpdate(id, {
        $set: task
      }, {new: true});
    },
  },
};

// createTask: async (parent, arguments, context, info) => {
module.exports = { resolvers };
