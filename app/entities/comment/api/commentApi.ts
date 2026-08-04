import { createCrudApi } from "~/shared/api";
import type { ICommant } from "../models/types";

export const commentApi = createCrudApi<ICommant>("comments");
