import { QueryClient } from '@tanstack/query-core';
import { cache} from "react"
const getQueryClient =cache(() => new
QueryClient()) as () => QueryClient;


export default getQueryClient;