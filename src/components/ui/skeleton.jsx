import { cn } from "@/lib/utils";
function Skeleton({ className, ...props }) {
    return (<div className={cn("rounded-md animate-pulse bg-muted", className)} {...props}/>);
}
export { Skeleton };
