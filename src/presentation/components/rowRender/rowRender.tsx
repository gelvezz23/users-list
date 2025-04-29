import { IRowRendered } from "../../../entities/RowRendered";

const RowRenderer = ({ index, key, style, users }: IRowRendered) => {
  const user = users?.[index];
  if (!user) {
    return null;
  }

  return (
    <div
      key={key}
      style={style}
      className="px-6 py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-4"
    >
      <div className="flex-shrink-0">
        <img
          loading="lazy"
          src={user.avatar}
          alt={user.username}
          className="rounded-full w-10 h-10 object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "";
          }}
        />
      </div>
      <div className="flex-grow">
        <p className="text-lg font-medium text-gray-700">{user.username}</p>
        <p className="text-gray-500 text-sm">{user.email}</p>
      </div>
      <div className="text-gray-400 text-sm">
        {new Date(user.registeredAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default RowRenderer;
