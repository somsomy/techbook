import {useRouter} from "next/router";
import Link from "next/link";

const Dynamic = () => {

    const router = useRouter()
    const {slug, from, optional} = router.query

    return (<ul>
            <li>
                <Link href="/next/dynamic/slug-name">
                    <a>Go to [slug-name]</a>
                </Link>
            </li>
            <li>
                <Link href="/next/dynamic/slug-name?from=bar">
                    <a>Also goes to pages/post/[pid].js</a>
                </Link>
            </li>
            <p>Post: {slug}</p>
            <p>from: {from}</p>
        </ul>
    );
};

export default Dynamic;
