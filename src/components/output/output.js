export default function Output({shortUrl, originalURL})
{
    return (
        <div className="relative">
            <a className="w-10 h-10 relative opacity-45 transition hover:opacity-90 font-bold font-poppins rounded-lg" rel="noreferrer" target="_blank" href={originalURL} id="outLink">{shortUrl}</a>
        </div>
    )
}