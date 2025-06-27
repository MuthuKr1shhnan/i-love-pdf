import { Link } from "react-router-dom";

import { tools } from "../utils/cardData";
const ToolsCard = ({
  containerClasses = "flex flex-col md:flex-row",
  mainContainerClasses = "flex flex-col md:flex-row",
  itemClasses = "p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow",
  iconClasses = "w-[32px] h-[32px]",
  titleClasses = "text-lg font-semibold mb-2",
  contentClasses = "text-sm text-gray-600",
  badgeClasses = "absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded",
}) => {
  return (
    <div className={` ${mainContainerClasses}`}>
      <div className={` ${containerClasses}`}>
        {tools.map((tool) => (
          <div className={` ${itemClasses}`} key={tool.title}>
            {tool.new && <div className={`${badgeClasses}`}>New!</div>}
            <Link to={tool.link} title={tool.title} className='block'>
             <div className={`mt-12 ${tool.icon ? "hidden" : "block"}`}/>
              <img
                src={tool.icon }
                alt={tool.title}
                className={`${iconClasses} ${tool.icon ? "block" : "hidden"}`}
              />
              <h3 className={`${titleClasses}`}>{tool.title}</h3>
              <div className={` ${contentClasses}`}>
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
