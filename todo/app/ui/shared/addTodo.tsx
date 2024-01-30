import Form from "@/app/ui/form"
import Input from "@/app/ui/input"
import Button from "@/app/ui/button"

export default function AddTodo() {
    return (
        <form className="w-1/2 m-auto"> 
            <div className="flex">
                <Input name="input"
                type="text"
                placeholder="Add todo"/>
                <Button type="submit" text="add"/>
            </div>
        </form>
    );
}