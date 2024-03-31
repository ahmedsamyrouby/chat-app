import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef } from "react";
import { v4 as uuidV4 } from "uuid";

interface Props {
  onIdSubmit: React.Dispatch<React.SetStateAction<string>>;
}

export default function Login({ onIdSubmit: onSetId }: Props) {
  const idRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSetId(idRef!.current!.value);
    console.log("Submitted");
  };

  const handleCreateNewId = (): void => {
    onSetId(uuidV4());
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full h-full">
      <h1 className="text-4xl font-bold">chat-app</h1>
      <form
        onSubmit={handleSubmit}
        className="grid w-full max-w-sm items-start gap-1.5"
      >
        <Input id="userId" placeholder="Enter ID" ref={idRef} />
        <Button type="submit">Login</Button>
        <Button onClick={handleCreateNewId} type="button" variant="secondary">
          Create New ID
        </Button>
      </form>
    </div>
  );
}
