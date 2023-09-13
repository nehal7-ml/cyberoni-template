interface Props {
    postsPerPage: number;
    totalPosts: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
}

export const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }: Props) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="flex justify-center mt-10">
            <ul className="flex">
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className={`${number === currentPage ? "bg-blue-500 text-white" : "bg-white text-blue-500"
                            } border px-4 py-2 cursor-pointer`}
                        onClick={() => paginate(number)}
                    >
                        {number}
                    </li>
                ))}
            </ul>
        </nav>
    );
};