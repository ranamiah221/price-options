

const Links = ({route}) => {
    return (
        <li className="mr-10 hover:bg-white rounded-lg p-1">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Links;