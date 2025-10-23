import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold max-w-[400px] text-center">
          Welcome to the task extractor agent.
        </h1>
        <Textarea
          placeholder="Enter your manager's message here..."
          rows={10}
        />
        <Button className="w-full">Extract Tasks</Button>
      </div>
    </div>
  );
}
