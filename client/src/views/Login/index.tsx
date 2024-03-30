import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef } from "react";

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
  return (
    <div className="flex items-center justify-center w-full h-full">
      <form
        onSubmit={handleSubmit}
        className="grid w-full max-w-sm items-start gap-1.5"
      >
        <Label htmlFor="userId" className="text-start">
          Enter you ID
        </Label>
        <Input id="userId" placeholder="Enter ID" ref={idRef} />
        <Button type="submit">Login</Button>
        <Button type="button" variant="outline">
          Create New ID
        </Button>
      </form>
    </div>
  );
}
