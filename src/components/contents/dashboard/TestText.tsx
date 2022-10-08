import {useRouter} from "next/router";

const TestText = () => {

    const router = useRouter()
    const {pid} = router.query

    return (
        <div>query : {pid}</div>
    );
};

export default TestText;
