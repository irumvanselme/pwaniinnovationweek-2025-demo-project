"use client"

import { useState } from "react";
import { toast } from "sonner"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { extractTasks } from "@/app/actions";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


type Task = {
  owner: string
  task: string
  due?: string
}

export default function Home() {
  const [input, setInput] = useState("")
  const [isExtracting, setIsExtracting] = useState(false)
  const [tasks, setTasks] = useState<Task[]>([])

  async function handleExtractTasksBtnClicked() {
    try {
      if (!input) {
        toast.error("Please enter a message to extract tasks from.", {
          position: "top-center"
        })
        return
      }
      setIsExtracting(true)
      const tasks = await extractTasks(input)
      setTasks(tasks)
      console.log("Tasks extracted successfully!")
      toast.success("Tasks extracted successfully!", {
        position: "top-center"
      })

    } catch (error) {
      console.error("Error extracting tasks:", error)
      toast.error("Failed to extract tasks. Please try again.", {
        position: "top-center"
      })
    } finally {
      setIsExtracting(false)
    }
  }

  return (
    <div className={"grid grid-cols-1 md:grid-cols-3"}>
      <div className="p-5 py-10 flex flex-col gap-10">
        <h1 className="text-3xl font-bold text-center">
          Welcome to the task extractor agent.
        </h1>
        <Textarea
          placeholder="Enter your manager's message here..."
          rows={10}
          onChange={e => setInput(e.target.value)}
        />
        <Button className="w-full" onClick={handleExtractTasksBtnClicked} disabled={isExtracting}>
          {isExtracting ? "Extracting Tasks..." : "Extract Tasks"}
        </Button>
      </div>
      <div className={"col-span-2 p-5 py-10 flex flex-col gap-10"}>
        <h1 className={"text-3xl font-bold"}>Tasks broken down</h1>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Owner (Assigned)</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Due</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.task}>
                <TableCell className="font-medium">{task.owner}</TableCell>
                <TableCell>{task.task}</TableCell>
                <TableCell>{task.due}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
