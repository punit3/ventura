import { useState } from "react";

export const AboutCompany = () => {
    const [showMore, setShowMore] = useState(false);
    return (
        <>
            <h2 className="text-md mb-4">About the company</h2>
            <div className="md:block hidden">

                <p className="text-gray-400 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    Mauris quis lacinia libero. Fusce vel nibh eu risus faucibus malesuada. Praesent a elit justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

                    Curabitur nec libero eget neque dictum scelerisque. Suspendisse sit amet eros malesuada, dictum nulla ac, volutpat ex. Nam euismod, odio at pretium accumsan, ex lectus cursus nunc, id dignissim mi odio id libero. Sed gravida risus ut ipsum egestas, at dignissim nisl feugiat. Phasellus lacinia justo nec risus pretium, eu ultricies arcu feugiat. Integer eu orci nisl.

                    Etiam a dapibus nunc. Aenean vel dolor vel leo accumsan luctus. Nulla facilisi. Nulla facilisi. Aenean convallis nisi ac nunc fermentum, nec suscipit sapien gravida. Sed vestibulum diam vel mi sagittis fermentum. Aenean dapibus velit sed leo feugiat, sit amet varius nisi consequat. Vivamus feugiat, lacus nec sodales dapibus, felis massa viverra purus, at volutpat quam eros eget nisl.

                    Quisque finibus lacinia neque, in cursus libero. Donec ut risus ut urna sollicitudin malesuada. Phasellus id convallis mi. Cras sollicitudin nulla sed felis dapibus tincidunt ut id orci. Nunc vel posuere nunc, nec porttitor purus. In hac habitasse platea dictumst. Nam scelerisque orci eu ligula convallis, ac tempus justo aliquet.

                    Vestibulum ut vestibulum arcu. Fusce dignissim nec magna ac vulputate. Cras dapibus consequat sem, nec varius est sodales vel. Sed vitae lorem a ligula accumsan facilisis. Mauris a varius nisl. Sed volutpat sapien id nunc aliquet, in pharetra nunc dictum. Aenean dictum, neque a venenatis egestas, odio felis convallis dolor, ac aliquet felis ligula vel purus.

                    Ut non mauris sit amet libero suscipit pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris egestas dapibus sem, sit amet hendrerit justo pellentesque a. Suspendisse potenti. Donec hendrerit fermentum ligula, sed efficitur nulla consectetur nec. Nam vehicula ex eu leo blandit, at accumsan nisl tincidunt.
                </p>
            </div>
            <div className="md:hidden">

                <p className="text-gray-400 text-sm">
                    {showMore
                        ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Mauris quis lacinia libero. Fusce vel nibh eu risus faucibus malesuada."
                        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                </p>

                <button
                    className="text-orange-600 mt-2"
                    onClick={() => setShowMore(!showMore)}
                >
                    {showMore ? "Read Less" : "Read More"}
                </button>
            </div>
        </>)
}