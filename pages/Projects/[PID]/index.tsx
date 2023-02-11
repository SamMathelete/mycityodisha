import { useRouter } from "next/router";
import Layout from "../../../components/UI/Layout";
import WallText from "../../../components/UI/WallText";

const ProjectDetails = () => {
  const router = useRouter();
  const { PID } = router.query;

  return (
    <Layout>
      <WallText image="https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2314&q=80">
        {PID == "1" ? "Project 1" : "Project 2"}
      </WallText>
      <h1>Project Details</h1>
      <p>Project ID: {PID}</p>
    </Layout>
  );
};

export default ProjectDetails;
