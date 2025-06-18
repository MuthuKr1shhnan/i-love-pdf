import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
const ToolsCard = ({
  tools = [
    {
      title: "React Tools",
      description: "Collection of React development utilities",
      icon: <FaReact size={25} />,
      link: "/react-tools",
      new: true,
    },
  ],
  containerClasses = "flex flex-col md:flex-row",
  mainContainerClasses = "flex flex-col md:flex-row",
  itemClasses = "p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow",
  iconClasses = "text-3xl mb-2",
  titleClasses = "text-lg font-semibold mb-2",
  contentClasses = "text-sm text-gray-600",
  badgeClasses = "absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded",
}) => {
  return (
    <div className={` ${mainContainerClasses}`}>
      <div className={` ${containerClasses}`}>
        {tools.map((tool) => (
          <div
            className={`tools__item relative ${itemClasses}`}
            key={tool.title}
          >
            {tool.new && (
              <div className={`badge badge--new ${badgeClasses}`}>New!</div>
            )}
            <Link to={tool.link} title={tool.title} className='block'>
              <div className={`tools__item__icon ${iconClasses}`}>
                {tool.icon}
              </div>
              <h3 className={`${titleClasses}`}>{tool.title}</h3>
              <div className={`tools__item__content ${contentClasses}`}>
                <p>{tool.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsCard;
