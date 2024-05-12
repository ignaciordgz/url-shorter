export default function Output({shortUrl})
{
    return (
        <div class="relative">
            <output class="relative font-bold rounded-lg" id="outLink">{shortUrl}</output>
        </div>
    )
}