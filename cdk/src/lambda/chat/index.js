export async function handler(event) {
    return {
      body: JSON.stringify([
        {taskId: 1, text: 'buy groceries 🛍️'},
        {taskId: 2, text: 'wash the dishes 🍽️'},
      ]),
      statusCode: 200,
    };
  }
  