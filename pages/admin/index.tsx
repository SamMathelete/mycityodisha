import { onSnapshot, collection, deleteDoc, doc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firestoreConfig";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const FormResponses = () => {
  const [responses, setResponses] = useState<any>([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "responses"), (snapshot) => {
      const responses = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setResponses(responses);
    });
  }, []);

  const columns = [
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "email", headerName: "Email", width: 180 },
    { field: "phone", headerName: "Phone", width: 180 },
    { field: "message", headerName: "Message", width: 300 },
    {
      field: "delete",
      headerName: "Delete",
      width: 120,
      renderCell: (params: any) => (
        <Button
          variant="contained"
          color="error"
          size="medium"
          onClick={() => {
            console.log(`${params.row.id}`);
            deleteDoc(doc(db, "responses", `${params.row.id}`));
          }}
        >
          Delete
        </Button>
      ),
    },
  ];

  console.log(responses);

  const rows = responses;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f5f5f5",
        padding: "1rem",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Get in Touch Form Responses
      </h1>
      <div style={{ height: "80vh", width: "100%" }}>
        <DataGrid rows={rows} columns={columns} pageSizeOptions={[5]} />
      </div>
    </div>
  );
};

export default FormResponses;
