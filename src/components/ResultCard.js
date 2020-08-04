import Link from 'next/link';

const ResultCard = result => {
    const { data } = result;
    const { name, summary, _id } = data;
    return (
        <>
            <Link href='/rental/[id]' as={`/rental/${_id}`}>
                <a>{name}</a>
            </Link>
            <p>{summary}</p>
        </>
    );
}

export default ResultCard;