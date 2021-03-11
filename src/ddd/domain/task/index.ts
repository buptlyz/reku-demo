import { useMutation } from "@ks/reku";
import { createTask } from "../../../apis";

function useCreateTask() {
    return useMutation(createTask);
}

export {
    useCreateTask,
}