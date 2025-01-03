import { EditorPane } from "@/components/editor/editor-pane";
import Navbar from "@/components/editor/navbar";
import { StatusBar } from "@/components/editor/status-bar";

function EditorPage() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <EditorPane />
      <StatusBar />
    </div>
  );
}

export default EditorPage;
