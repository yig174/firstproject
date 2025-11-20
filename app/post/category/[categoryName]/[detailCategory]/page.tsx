import { use } from "react";

export default function DetailCategory({ params, }: { params: Promise<{ categoryName: string, detailCategory: string }> }) {
    const { categoryName, detailCategory } = use(params)

    return (
        <div className="bg-blue-500 w-full p-4 mb-2 rounded-md">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-gray-100 text-center">All {detailCategory} {categoryName} Posts</h1>
        </div>
    )
}