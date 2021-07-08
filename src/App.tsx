import ConfirmationDialog from "./myComponent/ConfirmationDialog";

function App() {
  return (
    <>
      <ConfirmationDialog
        text="Click to Open Confirm Modal"
        title="Are you sure?"
        description="Do you really want to delete these records? This process cannot be undone."
      ></ConfirmationDialog>
    </>
  );
}

export default App;
