import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const { title, user, completed } = todo;

  return (
    <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} key={user.id} />
    </article>
  );
};
