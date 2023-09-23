import { gql, useQuery } from "@apollo/client";
import Loading from "./Loading";

const query = gql`
  query getTodosWithUser {
    getTodos {
      id
      title
      completed
      user {
        id
        name
        email
        username
      }
    }
  }
`;

const App = () => {
  const { data, loading } = useQuery(query);
  console.table(data);

  loading && <Loading />;

  return (
    <div>
      GraphQL Tutorial
      <table>
        <tbody>
          <tr>
            <th>Sr.No</th>
            <th>Todo</th>
            <th>User</th>
          </tr>
          {data?.getTodos?.map((todo) => (
            <tr key={todo.id}>
              <th>{todo.id}</th>
              <th>{todo.title}</th>
              <th>{todo?.user?.username}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
