// import { ITodo } from "@/domain/todo.interface";

// type typeTodoReducer = "[Card] - updateState";

// interface IAction {
//   type: typeTodoReducer;
//   payload: ITodo;
// }

// export const todoReducer: React.Reducer<ITodo[], IAction> = (state, action) => {
//   switch (action.type) {
//     case "[Card] - updateState":
//       return state.map((item) => {
//         if (item.id === action.payload.id) {
//           return {
//             ...item,
//             completed: !item.completed,
//           };
//         }
//         return item;
//       });
//     default:
//       return state;
//   }
// };
