import {useRouter} from "next/router";
import Layout from "../../../components/UI/Layout";

const ProjectDetails = () => {
    const router = useRouter();
    const {PID} = router.query;

    return (
        <Layout>
            <h1>Project Details</h1>
            <p>Project ID: {PID}</p>
        </Layout>
    );

}

export default ProjectDetails;