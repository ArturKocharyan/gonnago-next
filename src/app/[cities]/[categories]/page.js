import Link from 'next/link';
import style from '../style.module.css'

export async function generateMetadata({ params },) {
    const title = params.categories
    const city = params.cities
    return {
        title: title,
        description: `This page about ${title} wich is in ${city} `,
        keywords: `Armenia,${city}, ${title}`,
    }
}

export default function Entertainment({ params }) {

    return (
        <div className={style.main_container}>
            <div className={style.chiled_container}>
                {params.categories}
            </div>
        </div>
    );
}