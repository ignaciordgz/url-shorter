export default function Output({shortUrl})
{
    return (
        <div className="relative">
            <output className="w-10 h-10 relative font-bold font-poppins rounded-lg" id="outLink">{shortUrl}</output>
        </div>
    )
}